"use strict";

import StringParseTree from "./string";
import ChildNodesParseTree from "./childNodes";
import VerticalBranchParseTree from "./verticalBranch";

export default class NodeParseTree extends VerticalBranchParseTree {
  static fromNode(node) {
    let nodeParseTree;

    const childNodes = node.getChildNodes(),
          ruleNameParseTree = StringParseTree.fromNode(node),
          childNodesParseTree = ChildNodesParseTree.fromChildNodes(childNodes);

    if (childNodesParseTree === null) {
      const ruleNameParseTreeDepth = ruleNameParseTree.getDepth(),
            ruleNameParseTreeVerticalBranchPosition = ruleNameParseTree.getVerticalBranchPosition(),
            verticalBranchPosition = ruleNameParseTreeVerticalBranchPosition, ///
            depth = ruleNameParseTreeDepth; ///

      nodeParseTree = VerticalBranchParseTree.fromDepthAndVerticalBranchPosition(NodeParseTree, depth, verticalBranchPosition);

      nodeParseTree.appendToRight(ruleNameParseTree);
    } else {
      let ruleNameParseTreeVerticalBranchPosition = ruleNameParseTree.getVerticalBranchPosition();

      const childNodesParseTreeVerticalBranchPosition = childNodesParseTree.getVerticalBranchPosition(),
            verticalBranchPositionsDifference = ruleNameParseTreeVerticalBranchPosition - childNodesParseTreeVerticalBranchPosition;

      let leftMarginWidth;

      if (false) {
        ///
      } else if (verticalBranchPositionsDifference < 0) {
        leftMarginWidth = -verticalBranchPositionsDifference;

        ruleNameParseTree.addLeftMargin(leftMarginWidth);
      } else if (verticalBranchPositionsDifference > 0) {
        leftMarginWidth = +verticalBranchPositionsDifference;

        childNodesParseTree.addLeftMargin(leftMarginWidth);
      }

      const ruleNameParseTreeWidth = ruleNameParseTree.getWidth(),
            childNodesParseTreeWidth = childNodesParseTree.getWidth(),
            widthsDifference = ruleNameParseTreeWidth - childNodesParseTreeWidth;

      let rightMarginWidth;

      if (false) {
        ///
      } else if (widthsDifference < 0) {
        rightMarginWidth = -widthsDifference;

        ruleNameParseTree.addRightMargin(rightMarginWidth);
      } else if (widthsDifference > 0) {
        rightMarginWidth = +widthsDifference;

        childNodesParseTree.addRightMargin(rightMarginWidth);
      }

      ruleNameParseTreeVerticalBranchPosition = ruleNameParseTree.getVerticalBranchPosition();

      const ruleNameParseTreeDepth = ruleNameParseTree.getDepth(),
            verticalBranchPosition = ruleNameParseTreeVerticalBranchPosition, ///
            depth = ruleNameParseTreeDepth; ///

      nodeParseTree = VerticalBranchParseTree.fromDepthAndVerticalBranchPosition(NodeParseTree, depth, verticalBranchPosition);

      nodeParseTree.appendToRight(ruleNameParseTree);

      nodeParseTree.appendToBottom(childNodesParseTree);
    }

    return nodeParseTree;
  }
}
