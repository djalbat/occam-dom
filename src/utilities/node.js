"use strict";

export function isLessThan(nodeA, nodeB) {
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

export default {
  isLessThan
};

function ancestorNodesFromNode(node) {
  const ancestorNodes = node.getAncestorNodes();

  ancestorNodes.unshift(node);

  ancestorNodes.reverse();

  return ancestorNodes;
}