"use strict";

import VerticalBranchParseTree from "./verticalBranch";

export default class StringParseTree extends VerticalBranchParseTree {
  static fromNode(node) {
    const string = node.asString(),
          stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength, ///
          verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          ruleNameParseTree = VerticalBranchParseTree.fromStringAndVerticalBranchPosition(StringParseTree, string, verticalBranchPosition);

    ruleNameParseTree.appendToTop(verticalBranchParseTree);

    return ruleNameParseTree;
  }
}
