"use strict";

import { arrayUtilities } from "necessary";

import { appendNode,
         removeNode,
         prependNode,
         replaceNode,
         addNodeAfter,
         appendTokens,
         removeTokens,
         replaceTokens,
         prependTokens,
         addTokensAfter,
         overwriteClonedNodeTokens,
         clonedTokensFromNodeAndTokens, } from "./utilities/transform";

const { push } = arrayUtilities;

export default class Transform {
  constructor(node, tokens) {
    this.node = node;
    this.tokens = tokens;
  }

  getNode() {
    return this.node;
  }

  getTokens(tokens = []) {
    push(tokens, this.tokens);

    return this.tokens;
  }

  appendTo(parentNode, context) {
    const { tokens } = context,
          appendedNode = this.node,  ///
          appendedTokens = this.tokens;  ///

    appendNode(appendedNode, parentNode);

    appendTokens(appendedTokens, tokens);
  }

  prependTo(parentNode, context) {
    const { tokens } = context,
          prependedNode = this.node,  ///
          prependedTokens = this.tokens;  ///

    prependNode(prependedNode, parentNode);

    prependTokens(prependedTokens, tokens);
  }

  addAfter(existingNode, context) {
    const { tokens } = context,
          addedNode = this.node, ///
          parentNode = existingNode.getParentNode(),
          addedTokens = this.tokens;  ///

    addNodeAfter(existingNode, addedNode, parentNode);

    addTokensAfter(existingNode, addedTokens, tokens);
  }

  replace(replacedNode, context) {
    const { tokens } = context,
          parentNode = replacedNode.getParentNode(),
          replacementNode = this.node, ///
          replacementTokens = this.tokens; ///

    replaceNode(replacementNode, replacedNode, parentNode);

    replaceTokens(replacementTokens, replacedNode, tokens);
  }

  remove(context) {
    const { tokens } = context,
          parentNode = this.node.getParentNode(),
          removedNode = this.node;  ///

    removeNode(removedNode, parentNode);

    removeTokens(removedNode, tokens);
  }

  clone(...remainingArguments) {
    const clonedNode = this.node.clone(),
          clonedTokens = clonedTokensFromNodeAndTokens(this.node, this.tokens);

    overwriteClonedNodeTokens(clonedNode, clonedTokens, this.tokens);

    const Class = this.constructor, ///
          node = clonedNode,  ///
          tokens = clonedTokens, ///
          transform = new Class(node, tokens, ...remainingArguments);

    return transform
  }

  static fromNode(Class, node, ...remainingArguments) {
    let context = remainingArguments.pop();

    if (context === undefined) {
      context = node; ///

      node = Class; ///

      Class = Transform;  ///
    }

    let { tokens } = context;

    const firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens),
          clonedNode = node.clone();

    let clonedTokens;

    if (firstSignificantTokenIndex === null) {
      clonedTokens = [];
    } else {
      const offset = firstSignificantTokenIndex;  ///

      clonedTokens = clonedTokensFromNodeAndTokens(node, tokens);

      overwriteClonedNodeTokens(clonedNode, clonedTokens, tokens, offset);
    }

    node = clonedNode;  ///

    tokens = clonedTokens; ///

    const transform = new Class(node, tokens, ...remainingArguments);

    return transform;
  }

  static fromNodeAndTokens(Class, node, tokens, ...remainingArguments) {
    if (tokens === undefined) {
      tokens = node;  ///

      node = Class; ///

      Class = Transform;  ///
    }

    const transform = new Class(node, tokens, ...remainingArguments);

    return transform;
  }
}
