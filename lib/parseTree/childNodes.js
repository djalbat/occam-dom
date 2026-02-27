"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ChildNodesParseTree;
    }
});
const _necessary = require("necessary");
const _verticalBranch = /*#__PURE__*/ _interop_require_default(require("./verticalBranch"));
const _horizontalBranch = /*#__PURE__*/ _interop_require_default(require("./horizontalBranch"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { first } = _necessary.arrayUtilities;
class ChildNodesParseTree extends _verticalBranch.default {
    static fromChildNodes(childNodes) {
        let childNodesParseTree = null;
        const childNodesLength = childNodes.length;
        if (childNodesLength > 0) {
            const childNodeParseTrees = childNodes.reduce((childNodeParseTrees, childNode)=>{
                const childNodeParseTree = childNode.asParseTree();
                childNodeParseTrees.push(childNodeParseTree);
                return childNodeParseTrees;
            }, []), childNodeParseTreesLength = childNodeParseTrees.length;
            if (childNodeParseTreesLength === 1) {
                const firstChildNodeParseTree = first(childNodeParseTrees);
                childNodesParseTree = firstChildNodeParseTree; ///
            } else {
                let firstVerticalBranchPosition, lastVerticalBranchPosition = 0, childNodeParseTreesWidth = 0, childNodeParseTreesDepth = 0;
                childNodeParseTrees.forEach((childNodeParseTree, index)=>{
                    const childNodeParseTreeWidth = childNodeParseTree.getWidth(), childNodeParseTreeDepth = childNodeParseTree.getDepth();
                    if (index === 0) {
                        const firstChildNodeParseTree = childNodeParseTree, firstChildNodeParseTreeVerticalBranchPosition = firstChildNodeParseTree.getVerticalBranchPosition();
                        firstVerticalBranchPosition = firstChildNodeParseTreeVerticalBranchPosition;
                    }
                    if (index === childNodeParseTreesLength - 1) {
                        const lastChildNodeParseTree = childNodeParseTree, lastChildNodeParseTreeVerticalBranchPosition = lastChildNodeParseTree.getVerticalBranchPosition();
                        lastVerticalBranchPosition += lastChildNodeParseTreeVerticalBranchPosition;
                    }
                    if (index < childNodeParseTreesLength - 1) {
                        lastVerticalBranchPosition += childNodeParseTreeWidth;
                        lastVerticalBranchPosition += 1;
                        childNodeParseTreesWidth += 1;
                    }
                    childNodeParseTreesWidth += childNodeParseTreeWidth;
                    childNodeParseTreesDepth = Math.max(childNodeParseTreesDepth, childNodeParseTreeDepth);
                });
                const width = lastVerticalBranchPosition - firstVerticalBranchPosition + 1, verticalBranchParseTree = _verticalBranch.default.fromWidth(width), horizontalBranchParseTree = _horizontalBranch.default.fromWidth(width), leftMarginWidth = firstVerticalBranchPosition, rightMarginWidth = childNodeParseTreesWidth - width - leftMarginWidth;
                verticalBranchParseTree.addLeftMargin(leftMarginWidth);
                verticalBranchParseTree.addRightMargin(rightMarginWidth);
                horizontalBranchParseTree.addLeftMargin(leftMarginWidth);
                horizontalBranchParseTree.addRightMargin(rightMarginWidth);
                const verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), depth = childNodeParseTreesDepth; ///
                childNodesParseTree = _verticalBranch.default.fromDepthAndVerticalBranchPosition(ChildNodesParseTree, depth, verticalBranchPosition);
                childNodeParseTrees.forEach((childNodeParseTree, index)=>{
                    const childNodeParseTreeDepth = childNodeParseTree.getDepth(), clonedChildNodeParseTree = childNodeParseTree.clone();
                    if (index < childNodeParseTreesLength - 1) {
                        const rightMarginWidth = 1;
                        clonedChildNodeParseTree.addRightMargin(rightMarginWidth);
                    }
                    if (childNodeParseTreeDepth < childNodeParseTreesDepth) {
                        const bottomMarginDepth = childNodeParseTreesDepth - childNodeParseTreeDepth;
                        clonedChildNodeParseTree.addBottomMargin(bottomMarginDepth);
                    }
                    childNodesParseTree.appendToRight(clonedChildNodeParseTree);
                });
                childNodesParseTree.appendToTop(horizontalBranchParseTree);
                childNodesParseTree.appendToTop(verticalBranchParseTree);
            }
        }
        return childNodesParseTree;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvY2hpbGROb2Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSBmcm9tIFwiLi92ZXJ0aWNhbEJyYW5jaFwiO1xuaW1wb3J0IEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUgZnJvbSBcIi4vaG9yaXpvbnRhbEJyYW5jaFwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hpbGROb2Rlc1BhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgICBsZXQgY2hpbGROb2Rlc1BhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZXMgPSBjaGlsZE5vZGVzLnJlZHVjZSgoY2hpbGROb2RlUGFyc2VUcmVlcywgY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZS5hc1BhcnNlVHJlZSgpO1xuXG4gICAgICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXMucHVzaChjaGlsZE5vZGVQYXJzZVRyZWUpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGVQYXJzZVRyZWVzO1xuICAgICAgICAgICAgfSwgW10pLFxuICAgICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZSA9IGZpcnN0KGNoaWxkTm9kZVBhcnNlVHJlZXMpO1xuXG4gICAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUgPSBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZTsgIC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbixcbiAgICAgICAgICAgIGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gMCxcbiAgICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNXaWR0aCA9IDAsXG4gICAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGggPSAwO1xuXG4gICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXMuZm9yRWFjaCgoY2hpbGROb2RlUGFyc2VUcmVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZVdpZHRoID0gY2hpbGROb2RlUGFyc2VUcmVlLmdldFdpZHRoKCksXG4gICAgICAgICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlRGVwdGggPSBjaGlsZE5vZGVQYXJzZVRyZWUuZ2V0RGVwdGgoKTtcblxuICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWUgPSBjaGlsZE5vZGVQYXJzZVRyZWUsXG4gICAgICAgICAgICAgICAgICBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCk7XG5cbiAgICAgICAgICAgIGZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW5kZXggPT09IGNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBjb25zdCBsYXN0Q2hpbGROb2RlUGFyc2VUcmVlID0gY2hpbGROb2RlUGFyc2VUcmVlLFxuICAgICAgICAgICAgICAgICAgbGFzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBsYXN0Q2hpbGROb2RlUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKTtcblxuICAgICAgICAgICAgbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKz0gbGFzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb247XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGluZGV4IDwgY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uICs9IGNoaWxkTm9kZVBhcnNlVHJlZVdpZHRoO1xuICAgICAgICAgICAgbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKz0gMTtcblxuICAgICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoICs9IDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoICs9IGNoaWxkTm9kZVBhcnNlVHJlZVdpZHRoO1xuICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCA9IE1hdGgubWF4KGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCwgY2hpbGROb2RlUGFyc2VUcmVlRGVwdGgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB3aWR0aCA9IGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIC0gZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uICsgMSxcbiAgICAgICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgod2lkdGgpLFxuICAgICAgICAgICAgICBob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlID0gSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgod2lkdGgpLFxuICAgICAgICAgICAgICBsZWZ0TWFyZ2luV2lkdGggPSBmaXJzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24sXG4gICAgICAgICAgICAgIHJpZ2h0TWFyZ2luV2lkdGggPSBjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGggLSB3aWR0aCAtIGxlZnRNYXJnaW5XaWR0aDtcblxuICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG4gICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuICAgICAgICBob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcbiAgICAgICAgaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcblxuICAgICAgICBjb25zdCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLFxuICAgICAgICAgICAgICBkZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aDsgLy8vXG5cbiAgICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21EZXB0aEFuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oQ2hpbGROb2Rlc1BhcnNlVHJlZSwgZGVwdGgsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuXG4gICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXMuZm9yRWFjaCgoY2hpbGROb2RlUGFyc2VUcmVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoID0gY2hpbGROb2RlUGFyc2VUcmVlLmdldERlcHRoKCksXG4gICAgICAgICAgICAgICAgY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlID0gY2hpbGROb2RlUGFyc2VUcmVlLmNsb25lKCk7XG5cbiAgICAgICAgICBpZiAoaW5kZXggPCBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgY29uc3QgcmlnaHRNYXJnaW5XaWR0aCA9IDE7XG5cbiAgICAgICAgICAgIGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY2hpbGROb2RlUGFyc2VUcmVlRGVwdGggPCBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbU1hcmdpbkRlcHRoID0gY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoIC0gY2hpbGROb2RlUGFyc2VUcmVlRGVwdGg7XG5cbiAgICAgICAgICAgIGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZS5hZGRCb3R0b21NYXJnaW4oYm90dG9tTWFyZ2luRGVwdGgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUuYXBwZW5kVG9SaWdodChjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlLmFwcGVuZFRvVG9wKGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjaGlsZE5vZGVzUGFyc2VUcmVlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ2hpbGROb2Rlc1BhcnNlVHJlZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21DaGlsZE5vZGVzIiwiY2hpbGROb2RlcyIsImNoaWxkTm9kZXNQYXJzZVRyZWUiLCJjaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiY2hpbGROb2RlUGFyc2VUcmVlcyIsInJlZHVjZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZVBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwicHVzaCIsImNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGgiLCJmaXJzdENoaWxkTm9kZVBhcnNlVHJlZSIsImZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoIiwiY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoIiwiZm9yRWFjaCIsImluZGV4IiwiY2hpbGROb2RlUGFyc2VUcmVlV2lkdGgiLCJnZXRXaWR0aCIsImNoaWxkTm9kZVBhcnNlVHJlZURlcHRoIiwiZ2V0RGVwdGgiLCJmaXJzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwibGFzdENoaWxkTm9kZVBhcnNlVHJlZSIsImxhc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiTWF0aCIsIm1heCIsIndpZHRoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJmcm9tV2lkdGgiLCJob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlIiwiSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSIsImxlZnRNYXJnaW5XaWR0aCIsInJpZ2h0TWFyZ2luV2lkdGgiLCJhZGRMZWZ0TWFyZ2luIiwiYWRkUmlnaHRNYXJnaW4iLCJ2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiZGVwdGgiLCJmcm9tRGVwdGhBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlIiwiY2xvbmUiLCJib3R0b21NYXJnaW5EZXB0aCIsImFkZEJvdHRvbU1hcmdpbiIsImFwcGVuZFRvUmlnaHQiLCJhcHBlbmRUb1RvcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFxQkE7OzsyQkFQVTt1RUFFSzt5RUFDRTs7Ozs7O0FBRXRDLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdDLHlCQUFjO0FBRWpCLE1BQU1GLDRCQUE0QkcsdUJBQXVCO0lBQ3RFLE9BQU9DLGVBQWVDLFVBQVUsRUFBRTtRQUNoQyxJQUFJQyxzQkFBc0I7UUFFMUIsTUFBTUMsbUJBQW1CRixXQUFXRyxNQUFNO1FBRTFDLElBQUlELG1CQUFtQixHQUFHO1lBQ3hCLE1BQU1FLHNCQUFzQkosV0FBV0ssTUFBTSxDQUFDLENBQUNELHFCQUFxQkU7Z0JBQzVELE1BQU1DLHFCQUFxQkQsVUFBVUUsV0FBVztnQkFFaERKLG9CQUFvQkssSUFBSSxDQUFDRjtnQkFFekIsT0FBT0g7WUFDVCxHQUFHLEVBQUUsR0FDTE0sNEJBQTRCTixvQkFBb0JELE1BQU07WUFFNUQsSUFBSU8sOEJBQThCLEdBQUc7Z0JBQ25DLE1BQU1DLDBCQUEwQmYsTUFBTVE7Z0JBRXRDSCxzQkFBc0JVLHlCQUEwQixHQUFHO1lBQ3JELE9BQU87Z0JBQ0wsSUFBSUMsNkJBQ0FDLDZCQUE2QixHQUM3QkMsMkJBQTJCLEdBQzNCQywyQkFBMkI7Z0JBRS9CWCxvQkFBb0JZLE9BQU8sQ0FBQyxDQUFDVCxvQkFBb0JVO29CQUMvQyxNQUFNQywwQkFBMEJYLG1CQUFtQlksUUFBUSxJQUNyREMsMEJBQTBCYixtQkFBbUJjLFFBQVE7b0JBRTNELElBQUlKLFVBQVUsR0FBRzt3QkFDZixNQUFNTiwwQkFBMEJKLG9CQUMxQmUsZ0RBQWdEWCx3QkFBd0JZLHlCQUF5Qjt3QkFFdkdYLDhCQUE4QlU7b0JBQ2hDO29CQUVBLElBQUlMLFVBQVVQLDRCQUE0QixHQUFHO3dCQUMzQyxNQUFNYyx5QkFBeUJqQixvQkFDekJrQiwrQ0FBK0NELHVCQUF1QkQseUJBQXlCO3dCQUVyR1YsOEJBQThCWTtvQkFDaEM7b0JBRUEsSUFBSVIsUUFBUVAsNEJBQTRCLEdBQUc7d0JBQ3pDRyw4QkFBOEJLO3dCQUM5QkwsOEJBQThCO3dCQUU5QkMsNEJBQTRCO29CQUM5QjtvQkFFQUEsNEJBQTRCSTtvQkFDNUJILDJCQUEyQlcsS0FBS0MsR0FBRyxDQUFDWiwwQkFBMEJLO2dCQUNoRTtnQkFFQSxNQUFNUSxRQUFRZiw2QkFBNkJELDhCQUE4QixHQUNuRWlCLDBCQUEwQi9CLHVCQUF1QixDQUFDZ0MsU0FBUyxDQUFDRixRQUM1REcsNEJBQTRCQyx5QkFBeUIsQ0FBQ0YsU0FBUyxDQUFDRixRQUNoRUssa0JBQWtCckIsNkJBQ2xCc0IsbUJBQW1CcEIsMkJBQTJCYyxRQUFRSztnQkFFNURKLHdCQUF3Qk0sYUFBYSxDQUFDRjtnQkFDdENKLHdCQUF3Qk8sY0FBYyxDQUFDRjtnQkFDdkNILDBCQUEwQkksYUFBYSxDQUFDRjtnQkFDeENGLDBCQUEwQkssY0FBYyxDQUFDRjtnQkFFekMsTUFBTUcseUJBQXlCUix3QkFBd0JOLHlCQUF5QixJQUMxRWUsUUFBUXZCLDBCQUEwQixHQUFHO2dCQUUzQ2Qsc0JBQXNCSCx1QkFBdUIsQ0FBQ3lDLGtDQUFrQyxDQUFDNUMscUJBQXFCMkMsT0FBT0Q7Z0JBRTdHakMsb0JBQW9CWSxPQUFPLENBQUMsQ0FBQ1Qsb0JBQW9CVTtvQkFDL0MsTUFBTUcsMEJBQTBCYixtQkFBbUJjLFFBQVEsSUFDckRtQiwyQkFBMkJqQyxtQkFBbUJrQyxLQUFLO29CQUV6RCxJQUFJeEIsUUFBUVAsNEJBQTRCLEdBQUc7d0JBQ3pDLE1BQU13QixtQkFBbUI7d0JBRXpCTSx5QkFBeUJKLGNBQWMsQ0FBQ0Y7b0JBQzFDO29CQUVBLElBQUlkLDBCQUEwQkwsMEJBQTBCO3dCQUN0RCxNQUFNMkIsb0JBQW9CM0IsMkJBQTJCSzt3QkFFckRvQix5QkFBeUJHLGVBQWUsQ0FBQ0Q7b0JBQzNDO29CQUVBekMsb0JBQW9CMkMsYUFBYSxDQUFDSjtnQkFDcEM7Z0JBRUF2QyxvQkFBb0I0QyxXQUFXLENBQUNkO2dCQUVoQzlCLG9CQUFvQjRDLFdBQVcsQ0FBQ2hCO1lBQ2xDO1FBQ0Y7UUFFQSxPQUFPNUI7SUFDVDtBQUNGIn0=