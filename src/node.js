"use strict";

import { nodeMixins } from "occam-parsers";

import NodeParseTree from "./parseTree/node";

import { EMPTY_STRING } from "./constants";

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
    const startIndex = 0,
          deleteCount = Infinity,
          addedChildNodes = childNodes;  ///

    this.spliceChildNodes(startIndex, deleteCount, addedChildNodes);
  }

  destroy() {
    this.outerNode = null;

    super.destroy();
  }

  asString() {
    let string = EMPTY_STRING;

    if (this.outerNode !== null) {
      const nodeTerminalNode = this.outerNode.isTerminalNode();

      if (nodeTerminalNode) {
        const terminalNode = this.outerNode,
              type = terminalNode.getType(),
              content = terminalNode.getContent();

        string = `"${content}" [${type}]`;
      } else {
        const nonTerminalNode = this.outerNode,
              ruleName = nonTerminalNode.getRuleName();

        string = ruleName;  ///
      }
    }

    return string;
  }

  asParseTree() {
    const node = this,  ///
          nodeParseTree = NodeParseTree.fromNode(node),
          parseTree = nodeParseTree;  ///

    return parseTree;
  }

  static fromNothing(Class, ...remainingArguments) {
    if (Class === undefined) {
      Class = Node; ///
    }

    const outerNode = null,
          parentNode = null,
          childNodes = [],
          node = new Class(outerNode, parentNode, childNodes, ...remainingArguments);

    return node;
  }

  static fromOuterNode(Class, outerNode, ...remainingArguments) {
    if (outerNode === undefined) {
      outerNode = Class;  ///

      Class = Node; ///
    }

    const parentNode = null,
          childNodes = [],
          node = new Class(outerNode, parentNode, childNodes, ...remainingArguments);

    return node;
  }
}

Object.assign(Node.prototype, nodeMixins);
