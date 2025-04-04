"use strict";

export default class Node {
  constructor(outerNode, parentNode, childNodes) {
    this.outerNode = outerNode;
    this.parentNode = parentNode;
    this.childNodes = childNodes;
  }

  getOuterNode() {
    return this.outerNode;
  }

  getParentNode() {
    return this.parentNode;
  }

  getChildNodes() {
    return this.childNodes;
  }

  setOuterNode(outerNode) {
    this.outerNode = outerNode;
  }

  setParentNode(parentNode) {
    this.parentNode = parentNode;
  }

  setChildNodes(childNodes) {
    this.childNodes = childNodes;
  }

  mapChildNode(callback) { return this.childNodes.map(callback); }

  someChildNode(callback) { return this.childNodes.some(callback); }

  findChildNode(callback) { return this.childNodes.find(callback); }

  everyChildNode(callback) { return this.childNodes.every(callback); }

  filterChildNode(callback) { return this.childNodes.filter(callback); }

  reduceChildNode(callback, initialValue) { return this.childNodes.reduce(callback, initialValue); }

  forEachChildNode(callback) { this.childNodes.forEach(callback); }

  setChildNodesParentNode(childNodes) {
    if (childNodes === undefined) {
      childNodes = [
        ...this.childNodes
      ];
    }

    const parentNode = this;

    childNodes.forEach((childNode) => {
      childNode.setParentNode(parentNode);
    });
  }

  resetChildNodesParentNode(childNodes) {
    if (childNodes === undefined) {
      childNodes = [
        ...this.childNodes
      ];
    }

    const parentNode = null;

    childNodes.forEach((childNode) => {
      childNode.setParentNode(parentNode);
    });
  }

  addChildNode(addedChildNode, startIndex) {
    const addedChildNodes = [
      addedChildNode
    ];

    this.addChildNodes(addedChildNodes, startIndex);
  }

  addChildNodes(addedChildNodes, startIndex) {
    const deleteCount = 0;

    this.spliceChildNodes(startIndex, deleteCount, addedChildNodes);
  }

  removeChildNode(removedChildNode) {
    let removedChildNodes;

    removedChildNodes = [
      removedChildNode
    ];

    removedChildNodes = this.removeChildNodes(removedChildNodes);

    return removedChildNodes;
  }

  removeChildNodes(removedChildNodes) {
    if (removedChildNodes === undefined) {
      removedChildNodes = [
        ...this.childNodes
      ];
    }

    const removedChildNodesLength = removedChildNodes.length;

    if (removedChildNodesLength === 0) {
      return;
    }

    const firstReplacedChildNode = first(removedChildNodes),
          firstIndex = this.childNodes.indexOf(firstReplacedChildNode),
          startIndex = firstIndex, ///
          deleteCount = removedChildNodesLength, ///
          addedChildNodes = [];

    removedChildNodes = this.spliceChildNodes(startIndex, deleteCount, addedChildNodes);

    return removedChildNodes;
  }

  replaceChildNode(replacedChildNode, replacementChildNodes) {
    const replacedChildNodes = [
      replacedChildNode
    ];

    this.replaceChildNodes(replacedChildNodes, replacementChildNodes);
  }

  replaceChildNodes(replacedChildNodes, replacementChildNodes) {
    const replacedChildNodesLength = replacedChildNodes.length,
          firstReplacedChildNode = first(replacedChildNodes),
          firstIndex = this.childNodes.indexOf(firstReplacedChildNode),
          startIndex = firstIndex, ///
          deleteCount = replacedChildNodesLength; ///

    this.spliceChildNodes(startIndex, deleteCount, replacementChildNodes);
  }

  spliceChildNodes(startIndex, deleteCount, addedChildNodes = []) {
    const removedChildNodes = this.childNodes.splice(startIndex, deleteCount, ...addedChildNodes);

    this.resetChildNodesParentNode(removedChildNodes);

    this.setChildNodesParentNode(addedChildNodes);

    return removedChildNodes;
  }

  sliceChildNodes(startIndex, endIndex = Infinity) {
    const childNodes = this.childNodes.slice(startIndex, endIndex);

    return childNodes;
  }

  static fromNothing(Class) {
    if (Class === undefined) {
      Class = Node; ///
    }

    const outerNode = null,
          parentNode = null,
          childNodes = [],
          node = new Class(outerNode, parentNode, childNodes);

    return node;
  }

  static fromOuterNode(Class, outerNode) {
    if (outerNode === undefined) {
      outerNode = Class;  ///

      Class = Node; ///
    }

    const parentNode = null,
          childNodes = [],
          node = new Class(outerNode, parentNode, childNodes);

    return node;
  }
}
