"use strict";

import { retrieveParentNode, findSiblingNodeIndex, addedNodesFromAddedOuterNodes, removedNodesFromRemovedOuterNodes } from "../utilities/incremental";

export default class InnerDiff {
  constructor(parentNode, addedNodes, removedNodes, siblingNodeIndex) {
    this.parentNode = parentNode;
    this.addedNodes = addedNodes;
    this.removedNodes = removedNodes;
    this.siblingNodeIndex = siblingNodeIndex;
  }

  getParentNode() {
    return this.parentNode;
  }

  getAddedNodes() {
    return this.addedNodes;
  }

  getRemovedNodes() {
    return this.removedNodes;
  }

  getSiblingNodeIndex() {
    return this.siblingNodeIndex;
  }

  static fromTopmostNodeAndOuterDiff(topmostNode, outerDiff, context) {
    let innerDiff = null;

    let startIndex,
        parentNode,
        addedNodes,
        removedNodes;

    startIndex = outerDiff.getStartIndex();
    parentNode = outerDiff.getParentNode();
    addedNodes = outerDiff.getAddedNodes();
    removedNodes = outerDiff.getRemovedNodes();

    const startOuterIndex = startIndex, ///
          parentOuterNode = parentNode, ///
          addedOuterNodes = addedNodes, ///
          removedOuterNodes = removedNodes; ///

    const { queries, callback, ClassFromOuterNode, outerNodeFromChildOuterNodes } = context;

    parentNode = retrieveParentNode(parentOuterNode, topmostNode);

    addedNodes = addedNodesFromAddedOuterNodes(addedOuterNodes, queries, ClassFromOuterNode, outerNodeFromChildOuterNodes);

    removedNodes = removedNodesFromRemovedOuterNodes(removedOuterNodes, queries, ClassFromOuterNode, outerNodeFromChildOuterNodes);

    const terminate = callback(addedNodes, removedNodes, context);

    if (!terminate) {
      let removedChildNodes;

      removedChildNodes = removedNodes; ///

      removedChildNodes = parentNode.removeChildNodes(removedChildNodes);

      const siblingNodeIndex = findSiblingNodeIndex(startOuterIndex, parentOuterNode, parentNode),
            addedChildNodes = addedNodes, ///
            startIndex = siblingNodeIndex + 1; ///

      parentNode.addChildNodes(addedChildNodes, startIndex);

      removedNodes = removedChildNodes; ///

      innerDiff = new InnerDiff(parentNode, addedNodes, removedNodes, siblingNodeIndex);
    }

    return innerDiff;
  }
}
