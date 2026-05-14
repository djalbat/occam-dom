"use strict";

import { queryUtilities } from "occam-query";

import Node from "../node";

import { orderNodes } from "../utilities/node";

const { nodesFromNodeAndQueries } = queryUtilities;

export function topmostNodeFromOuterNodes(outerNodes, ClassFromOuterNode = DefaultClassFromOuterNode) {
  const nodes = outerNodes; ///

  orderNodes(nodes);

  const outerNode = null,
        Class = ClassFromOuterNode(outerNode),
        topmostNode = Class.fromNothing(),
        outerNodeToNodeMap = new WeakMap();

  outerNodes.forEach((outerNode) => {
    let parentNode = topmostNode; ///

    outerNode.someAncestorNode((ancestorNode) => {
      const outerNode = ancestorNode, ///
            node = outerNodeToNodeMap.get(outerNode) || null;

      if (node !== null) {
        parentNode = node;  ///

        return true;
      }
    });

    const Class = ClassFromOuterNode(outerNode),
          node = Class.fromOuterNode(outerNode),
          appendedChildNode = node; ///

    parentNode.appendChildNode(appendedChildNode);

    outerNodeToNodeMap.set(outerNode, node);
  });

  return topmostNode;
}

export function topmostNodeFromOuterNodeAndQueries(outerNode, queries, ClassFromOuterNode = DefaultClassFromOuterNode) {
  let topmostNode = null;

  if (outerNode !== null) {
    const node = outerNode, ///
          nodes = nodesFromNodeAndQueries(node, queries),
          outerNodes = nodes; ///

    topmostNode = topmostNodeFromOuterNodes(outerNodes, ClassFromOuterNode);
  }

  return topmostNode;
}

export default {
  topmostNodeFromOuterNodes,
  topmostNodeFromOuterNodeAndQueries
};

function DefaultClassFromOuterNode(outerNode) {
  const Class = Node; ///

  return Class;
}