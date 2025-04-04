"use strict";

import Textarea from "../textarea";

import { EMPTY_STRING } from "../../constants";
import { tokenIndexFromTerminalNodeAndTokens, tokenIndexesFromNonTerminalNodeAndTokens } from "../../utilities/token"

export default class OuterNodesTextarea extends Textarea {
  setOuterNodes(outerNodes, tokens) {
    const nodes = outerNodes, ///
          value = nodes.reduce((value, node) => {
            const nodeTerminalNode = node.isTerminalNode();

            if (nodeTerminalNode) {
              const terminalNode = node,  ///
                    significantToken = terminalNode.getSignificantToken(),
                    significantTokenType = significantToken.getType(),
                    tokenIndex = tokenIndexFromTerminalNodeAndTokens(terminalNode, tokens);

              value = `${value}[${significantTokenType}]${tokenIndex}\n`;
            } else {
              const nonTerminalNode = node, ///
                    ruleName = nonTerminalNode.getRuleName(),
                    tokenIndexes = tokenIndexesFromNonTerminalNodeAndTokens(nonTerminalNode, tokens);

              value = `${value}${ruleName}${tokenIndexes}\n`;
            }

            return value;
          }, EMPTY_STRING);

    this.setValue(value);
  }

  parentContext() {
    const setOuterNodes = this.setOuterNodes.bind(this);

    return ({
      setOuterNodes
    });
  }

  static defaultProperties = {
    className: "outer-nodes",
    spellCheck: "false",
    readOnly: true
  };
}
