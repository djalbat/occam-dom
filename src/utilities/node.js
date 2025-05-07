"use strict";

import Node from "../node";

export function isLessThan(nodeA, nodeB) {
  let lessThan = null;

  const nodeAAncestorNodes = ancestorNodesFromNode(nodeA),
    nodeBAncestorNodes = ancestorNodesFromNode(nodeB),
    nodeAAncestorNodesLength = nodeAAncestorNodes.length,
    nodeBAncestorNodesLength = nodeBAncestorNodes.length,
    minimumAncestorNodesLength = Math.min(nodeAAncestorNodesLength, nodeBAncestorNodesLength);

  for (let index = 0; index < minimumAncestorNodesLength; index++) {
    const nodeAAncestorNode = nodeAAncestorNodes[index],
      nodeBAncestorNode = nodeBAncestorNodes[index];

    if (nodeAAncestorNode !== nodeBAncestorNode) {
      const parentIndex = index - 1,
        nodeAAncestorNodeParentNode = nodeAAncestorNodes[parentIndex],
        parentNode = nodeAAncestorNodeParentNode, ///
        childNodeA = nodeAAncestorNode, ///
        childNodeB = nodeBAncestorNode, ///
        indexA = parentNode.indexOfChildNode(childNodeA),
        indexB = parentNode.indexOfChildNode(childNodeB);

      lessThan = (indexA < indexB);

      break;
    }
  }

  if (lessThan === null) {
    lessThan = (nodeAAncestorNodesLength < nodeBAncestorNodesLength);
  }

  return lessThan;
}

export function topmostNodeFromOuterNodes(ClassFromOuterNode, outerNodes) {
  if (outerNodes === undefined) {
    outerNodes = ClassFromOuterNode; ///

    ClassFromOuterNode = (outerNode) => Node;  ///
  }

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

export default {
  isLessThan,
  topmostNodeFromOuterNodes
};

function orderNodes(nodes) {
  nodes.sort((nodeA, nodeB) => {
    const nodeALessThanNodeB = isLessThan(nodeA, nodeB),
          result = nodeALessThanNodeB ?
                     -1 :
                       +1;

    return result;
  });
}

function ancestorNodesFromNode(node) {
  const ancestorNodes = node.getAncestorNodes();

  ancestorNodes.unshift(node);

  ancestorNodes.reverse();

  return ancestorNodes;
}
