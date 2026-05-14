"use strict";

import { arrayUtilities } from "necessary";

import { isLessThan } from "../utilities/node";
import { topmostNodeFromOuterNodeAndQueries } from "../utilities/dom";

const { first, backwardsFindIndex } = arrayUtilities;

export function retrieveNode(outerNode, topmostNode) {
  let node;

  if (outerNode === null) {
    node = topmostNode; ///
  } else {
    const ancestorNodes = outerNode.getAncestorNodes(),
          outerNodes = [
            outerNode,
            ...ancestorNodes
          ];

    node = topmostNode.retrieveNode((node) => {
      const outerNode = node.getOuterNode(),
            outerNodesIncludesOuterNode = outerNodes.includes(outerNode);

      if (outerNodesIncludesOuterNode) {
        return true;
      }
    });
  }

  return node;
}

export function getDescendantNodes(nodes) {
  const descendantNodes = nodes;  ///

  descendantNodes.forEach((descendantNode) => {
    descendantNode.getDescendantNodes(descendantNodes);
  });
}

export function retrieveParentNode(parentOuterNode, topmostNode) {
  const outerNode = parentOuterNode,  ///
        node = retrieveNode(outerNode, topmostNode),
        parentNode = (node !== null) ?
                       node :  ///
                         topmostNode; ///

  return parentNode;
}

export function findSiblingNodeIndex(startOuterIndex, parentOuterNode, parentNode) {
  let siblingNodeIndex = -1;

  if (parentOuterNode !== null) {
    const childNodes = parentNode.getChildNodes(),
          outerChildNodes = parentOuterNode.getChildNodes(),  ///
          outerChildNodesLength = outerChildNodes.length;

    if (outerChildNodesLength === startOuterIndex) {
      const childNodesLength = childNodes.length;

      siblingNodeIndex = childNodesLength - 1;
    } else {
      const startOuterChildNode = outerChildNodes[startOuterIndex];

      siblingNodeIndex = backwardsFindIndex(childNodes, (childNode) => {
        const outerNode = childNode.getOuterNode(),
              outerNodeLessThanStartOuterChildNode = isLessThan(outerNode, startOuterChildNode);

        if (outerNodeLessThanStartOuterChildNode) {
          return true;
        }
      });
    }
  }

  return siblingNodeIndex;
}

export function addedNodesFromAddedOuterNodes(addedOuterNodes, queries, ClassFromOuterNode, outerNodeFromChildOuterNodes) {
  let addedNodes;

  const childOuterNodes = addedOuterNodes,  ///
        parentOuterNode = parentOuterNodeFromChildOuterNodes(childOuterNodes),
        outerNode = outerNodeFromChildOuterNodes(childOuterNodes),
        topmostNode = topmostNodeFromOuterNodeAndQueries(outerNode, queries, ClassFromOuterNode),
        removedChildNodes = topmostNode.removeChildNodes();

  addedNodes = removedChildNodes;  ///

  setChildOuterNodesParentOuterNode(childOuterNodes, parentOuterNode);

  return addedNodes;
}

export function removedNodesFromRemovedOuterNodes(removedOuterNodes, queries, ClassFromOuterNode, outerNodeFromChildOuterNodes) {
  let removedNodes;

  const childOuterNodes = removedOuterNodes,  ///
        outerNode = outerNodeFromChildOuterNodes(childOuterNodes),
        topmostNode = topmostNodeFromOuterNodeAndQueries(outerNode, queries, ClassFromOuterNode),
        removedChildNodes = topmostNode.removeChildNodes();

  removedNodes = removedChildNodes; ///

  resetChildOuterNodesParentOuterNode(childOuterNodes);

  return removedNodes;
}

export default {
  retrieveNode,
  getDescendantNodes,
  retrieveParentNode,
  findSiblingNodeIndex,
  addedNodesFromAddedOuterNodes,
  removedNodesFromRemovedOuterNodes
};

function resetChildOuterNodesParentOuterNode(childOuterNodes) {
  const parentNode = null;

  childOuterNodes.forEach((childOuterNode) => {
    childOuterNode.setParentNode(parentNode);
  });
}

function setChildOuterNodesParentOuterNode(childOuterNodes, parentOuterNode) {
  const parentNode = parentOuterNode;  ///

  childOuterNodes.forEach((childOuterNode) => {
    childOuterNode.setParentNode(parentNode);
  });
}

function parentOuterNodeFromChildOuterNodes(childOuterNodes) {
  let parentOuterNode = null;  ///

  const childOuterNodesLength = childOuterNodes.length;

  if (childOuterNodesLength > 0) {
    const firstChildOuterNode = first(childOuterNodes);

    parentOuterNode = firstChildOuterNode.getParentNode();
  }

  return parentOuterNode;
}
