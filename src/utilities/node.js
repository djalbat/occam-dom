"use strict";

import Node from "../node";

export function topmostNodeFromOuterNodes(Class, outerNodes) {
  if (outerNodes === undefined) {
    outerNodes = Class; ///

    Class = Node;  ///
  }

  const nodes = outerNodes; ///

  orderNodes(nodes);

  const topmostNode = Node.fromNothing(),
        outerNodeToNodeMap = new WeakMap();

  outerNodes.forEach((outerNode) => {
    const ancestorNodes = outerNode.getAncestorNodes();

    let parentNode = topmostNode; ///

    ancestorNodes.some((ancestorNode) => {
      const outerNode = ancestorNode, ///
            node = outerNodeToNodeMap.get(outerNode) || null;

      if (node !== null) {
        parentNode = node;  ///

        return true;
      }
    });

    const node = Class.fromOuterNode(outerNode),
          childNode = node;  ///

    parentNode.addChildNode(childNode);

    outerNodeToNodeMap.set(outerNode, node);
  });

  return topmostNode;
}

export default {
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

function isLessThan(nodeA, nodeB) {
  let lessThan = null;

  const ancestorNodesA = ancestorNodesFromNode(nodeA),
        ancestorNodesB = ancestorNodesFromNode(nodeB),
        ancestorNodesALength = ancestorNodesA.length,
        ancestorNodesBLength = ancestorNodesB.length,
        minimumAncestorNodesLength = Math.min(ancestorNodesALength, ancestorNodesBLength);

  for (let index = 0; index < minimumAncestorNodesLength; index++) {
    const ancestorNodeA = ancestorNodesA[index],
          ancestorNodeB = ancestorNodesB[index];

    if (ancestorNodeA !== ancestorNodeB) {
      const parentIndex = index - 1,
            ancestorNodeAParentNode = ancestorNodesA[parentIndex],
            parentNode = ancestorNodeAParentNode, ///
            childNodeA = ancestorNodeA, ///
            childNodeB = ancestorNodeB, ///
            indexA = parentNode.indexOfChildNode(childNodeA),
            indexB = parentNode.indexOfChildNode(childNodeB);

      lessThan = (indexA < indexB);

      break;
    }
  }

  if (lessThan === null) {
    lessThan = (ancestorNodesALength < ancestorNodesBLength);
  }

  return lessThan;
}

function ancestorNodesFromNode(node) {
  const ancestorNodes = node.getAncestorNodes();

  ancestorNodes.unshift(node);

  ancestorNodes.reverse();

  return ancestorNodes;
}