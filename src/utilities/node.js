"use strict";

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

export function isGreaterThan(nodeA, nodeB) {
  const lessThan = isLessThan(nodeA, nodeB),
        greaterThan = !lessThan;

  return greaterThan;
}

export function isLessThanOrEqualTo(nodeA, nodeB) {
  let lessThanOrEqualTo;

  if (nodeA === nodeB) {
    lessThanOrEqualTo = true;
  } else {
    const lessThan = isLessThan(nodeA, nodeB);

    lessThanOrEqualTo = lessThan; ///
  }

  return lessThanOrEqualTo;
}

export function isGreaterThanOrEqualTo(nodeA, nodeB) {
  let greaterThanOrEqualTo = false;

  if (nodeA === nodeB) {
    greaterThanOrEqualTo = true;
  } else {
    const greaterThan = isGreaterThan(nodeA, nodeB);

    greaterThanOrEqualTo = greaterThan; ///
  }

  return greaterThanOrEqualTo;
}

export function orderNodes(nodes) {
  nodes.sort((nodeA, nodeB) => {
    const nodeALessThanNodeB = isLessThan(nodeA, nodeB),
          result = nodeALessThanNodeB ?
                    -1 :
                      +1;

    return result;
  });
}

export function isAncestorOf(nodeA, nodeB) {
  const ancestorOf = nodeB.someAncestorNode((ancestorNodeB) => {
    if (nodeA === ancestorNodeB) {
      return true;
    }
  });

  return ancestorOf;
}

export function isDescendantOf(nodeA, nodeB) {
  const nodeBAncestorOfNodeA = isAncestorOf(nodeB, nodeA),
        nodeADescendantOfNodeB = nodeBAncestorOfNodeA,  ///
        descendantOf = nodeADescendantOfNodeB;  ///

  return descendantOf;
}

export function topmostNodeFromOuterNodes(ClassFromOuterNode, outerNodes) {
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
  isGreaterThan,
  isLessThanOrEqualTo,
  isGreaterThanOrEqualTo,
  orderNodes,
  isAncestorOf,
  isDescendantOf,
  topmostNodeFromOuterNodes,
};

function ancestorNodesFromNode(node) {
  const ancestorNodes = node.getAncestorNodes();

  ancestorNodes.unshift(node);

  ancestorNodes.reverse();

  return ancestorNodes;
}
