"use strict";

import StringParseTree from "./string";
import ChildNodesParseTree from "./childNodes";
import VerticalBranchParseTree from "./verticalBranch";

export default class NodeParseTree extends VerticalBranchParseTree {
  static fromNode(node) {
    let nodeParseTree;

    const childNodes = node.getChildNodes(),
          stringParseTree = StringParseTree.fromNode(node),
          childNodesParseTree = ChildNodesParseTree.fromChildNodes(childNodes);

    if (childNodesParseTree === null) {
      const ruleNameParseTreeDepth = stringParseTree.getDepth(),
            ruleNameParseTreeVerticalBranchPosition = stringParseTree.getVerticalBranchPosition(),
            verticalBranchPosition = ruleNameParseTreeVerticalBranchPosition, ///
            depth = ruleNameParseTreeDepth; ///

      nodeParseTree = VerticalBranchParseTree.fromDepthAndVerticalBranchPosition(NodeParseTree, depth, verticalBranchPosition);

      nodeParseTree.appendToRight(stringParseTree);
    } else {
      let ruleNameParseTreeVerticalBranchPosition = stringParseTree.getVerticalBranchPosition();

      const childNodesParseTreeVerticalBranchPosition = childNodesParseTree.getVerticalBranchPosition(),
            verticalBranchPositionsDifference = ruleNameParseTreeVerticalBranchPosition - childNodesParseTreeVerticalBranchPosition;

      let leftMarginWidth;

      if (false) {
        ///
      } else if (verticalBranchPositionsDifference < 0) {
        leftMarginWidth = -verticalBranchPositionsDifference;

        stringParseTree.addLeftMargin(leftMarginWidth);
      } else if (verticalBranchPositionsDifference > 0) {
        leftMarginWidth = +verticalBranchPositionsDifference;

        childNodesParseTree.addLeftMargin(leftMarginWidth);
      }

      const ruleNameParseTreeWidth = stringParseTree.getWidth(),
            childNodesParseTreeWidth = childNodesParseTree.getWidth(),
            widthsDifference = ruleNameParseTreeWidth - childNodesParseTreeWidth;

      let rightMarginWidth;

      if (false) {
        ///
      } else if (widthsDifference < 0) {
        rightMarginWidth = -widthsDifference;

        stringParseTree.addRightMargin(rightMarginWidth);
      } else if (widthsDifference > 0) {
        rightMarginWidth = +widthsDifference;

        childNodesParseTree.addRightMargin(rightMarginWidth);
      }

      ruleNameParseTreeVerticalBranchPosition = stringParseTree.getVerticalBranchPosition();

      const ruleNameParseTreeDepth = stringParseTree.getDepth(),
            verticalBranchPosition = ruleNameParseTreeVerticalBranchPosition, ///
            depth = ruleNameParseTreeDepth; ///

      nodeParseTree = VerticalBranchParseTree.fromDepthAndVerticalBranchPosition(NodeParseTree, depth, verticalBranchPosition);

      nodeParseTree.appendToRight(stringParseTree);

      nodeParseTree.appendToBottom(childNodesParseTree);
    }

    return nodeParseTree;
  }
}
