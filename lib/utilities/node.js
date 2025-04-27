"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    topmostNodeFromOuterNodes: function() {
        return topmostNodeFromOuterNodes;
    }
});
var _node = /*#__PURE__*/ _interop_require_default(require("../node"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function topmostNodeFromOuterNodes(ClassFromOuterNode, outerNodes) {
    if (outerNodes === undefined) {
        outerNodes = ClassFromOuterNode; ///
        ClassFromOuterNode = function(outerNode) {
            return _node.default;
        }; ///
    }
    var nodes = outerNodes; ///
    orderNodes(nodes);
    var outerNode = null, Class = ClassFromOuterNode(outerNode), topmostNode = Class.fromNothing(), outerNodeToNodeMap = new WeakMap();
    outerNodes.forEach(function(outerNode) {
        var parentNode = topmostNode; ///
        outerNode.someAncestorNode(function(ancestorNode) {
            var _$outerNode = ancestorNode, node = outerNodeToNodeMap.get(_$outerNode) || null;
            if (node !== null) {
                parentNode = node; ///
                return true;
            }
        });
        var Class = ClassFromOuterNode(outerNode), node = Class.fromOuterNode(outerNode), appendedChildNode = node; ///
        parentNode.appendChildNode(appendedChildNode);
        outerNodeToNodeMap.set(outerNode, node);
    });
    return topmostNode;
}
var _default = {
    topmostNodeFromOuterNodes: topmostNodeFromOuterNodes
};
function orderNodes(nodes) {
    nodes.sort(function(nodeA, nodeB) {
        var nodeALessThanNodeB = isLessThan(nodeA, nodeB), result = nodeALessThanNodeB ? -1 : +1;
        return result;
    });
}
function isLessThan(nodeA, nodeB) {
    var lessThan = null;
    var nodeAAncestorNodes = nodeA.getAncestorNodes(), nodeBAncestorNodes = nodeB.getAncestorNodes(), nodeAAncestorNodesLength = nodeAAncestorNodes.length, nodeBAncestorNodesLength = nodeBAncestorNodes.length, minimumAncestorNodesLength = Math.min(nodeAAncestorNodesLength, nodeBAncestorNodesLength);
    for(var index = 0; index < minimumAncestorNodesLength; index++){
        var nodeAAncestorNode = nodeAAncestorNodes[index], nodeBAncestorNode = nodeBAncestorNodes[index];
        if (nodeAAncestorNode !== nodeBAncestorNode) {
            var parentIndex = index - 1, nodeAAncestorNodeParentNode = nodeAAncestorNodes[parentIndex], parentNode = nodeAAncestorNodeParentNode, childNodeA = nodeAAncestorNode, childNodeB = nodeBAncestorNode, indexA = parentNode.indexOfChildNode(childNodeA), indexB = parentNode.indexOfChildNode(childNodeB);
            lessThan = indexA < indexB;
            break;
        }
    }
    if (lessThan === null) {
        lessThan = nodeAAncestorNodesLength < nodeBAncestorNodesLength;
    }
    return lessThan;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vZGUgZnJvbSBcIi4uL25vZGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3ROb2RlRnJvbU91dGVyTm9kZXMoQ2xhc3NGcm9tT3V0ZXJOb2RlLCBvdXRlck5vZGVzKSB7XG4gIGlmIChvdXRlck5vZGVzID09PSB1bmRlZmluZWQpIHtcbiAgICBvdXRlck5vZGVzID0gQ2xhc3NGcm9tT3V0ZXJOb2RlOyAvLy9cblxuICAgIENsYXNzRnJvbU91dGVyTm9kZSA9IChvdXRlck5vZGUpID0+IE5vZGU7ICAvLy9cbiAgfVxuXG4gIGNvbnN0IG5vZGVzID0gb3V0ZXJOb2RlczsgLy8vXG5cbiAgb3JkZXJOb2Rlcyhub2Rlcyk7XG5cbiAgY29uc3Qgb3V0ZXJOb2RlID0gbnVsbCxcbiAgICAgICAgQ2xhc3MgPSBDbGFzc0Zyb21PdXRlck5vZGUob3V0ZXJOb2RlKSxcbiAgICAgICAgdG9wbW9zdE5vZGUgPSBDbGFzcy5mcm9tTm90aGluZygpLFxuICAgICAgICBvdXRlck5vZGVUb05vZGVNYXAgPSBuZXcgV2Vha01hcCgpO1xuXG4gIG91dGVyTm9kZXMuZm9yRWFjaCgob3V0ZXJOb2RlKSA9PiB7XG4gICAgbGV0IHBhcmVudE5vZGUgPSB0b3Btb3N0Tm9kZTsgLy8vXG5cbiAgICBvdXRlck5vZGUuc29tZUFuY2VzdG9yTm9kZSgoYW5jZXN0b3JOb2RlKSA9PiB7XG4gICAgICBjb25zdCBvdXRlck5vZGUgPSBhbmNlc3Rvck5vZGUsIC8vL1xuICAgICAgICAgICAgbm9kZSA9IG91dGVyTm9kZVRvTm9kZU1hcC5nZXQob3V0ZXJOb2RlKSB8fCBudWxsO1xuXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBwYXJlbnROb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgQ2xhc3MgPSBDbGFzc0Zyb21PdXRlck5vZGUob3V0ZXJOb2RlKSxcbiAgICAgICAgICBub2RlID0gQ2xhc3MuZnJvbU91dGVyTm9kZShvdXRlck5vZGUpLFxuICAgICAgICAgIGFwcGVuZGVkQ2hpbGROb2RlID0gbm9kZTsgLy8vXG5cbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkTm9kZShhcHBlbmRlZENoaWxkTm9kZSk7XG5cbiAgICBvdXRlck5vZGVUb05vZGVNYXAuc2V0KG91dGVyTm9kZSwgbm9kZSk7XG4gIH0pO1xuXG4gIHJldHVybiB0b3Btb3N0Tm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICB0b3Btb3N0Tm9kZUZyb21PdXRlck5vZGVzXG59O1xuXG5mdW5jdGlvbiBvcmRlck5vZGVzKG5vZGVzKSB7XG4gIG5vZGVzLnNvcnQoKG5vZGVBLCBub2RlQikgPT4ge1xuICAgIGNvbnN0IG5vZGVBTGVzc1RoYW5Ob2RlQiA9IGlzTGVzc1RoYW4obm9kZUEsIG5vZGVCKSxcbiAgICAgICAgICByZXN1bHQgPSBub2RlQUxlc3NUaGFuTm9kZUIgP1xuICAgICAgICAgICAgICAgICAgICAgLTEgOlxuICAgICAgICAgICAgICAgICAgICAgICArMTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpc0xlc3NUaGFuKG5vZGVBLCBub2RlQikge1xuICBsZXQgbGVzc1RoYW4gPSBudWxsO1xuXG4gIGNvbnN0IG5vZGVBQW5jZXN0b3JOb2RlcyA9IG5vZGVBLmdldEFuY2VzdG9yTm9kZXMoKSxcbiAgICAgICAgbm9kZUJBbmNlc3Rvck5vZGVzID0gbm9kZUIuZ2V0QW5jZXN0b3JOb2RlcygpLFxuICAgICAgICBub2RlQUFuY2VzdG9yTm9kZXNMZW5ndGggPSBub2RlQUFuY2VzdG9yTm9kZXMubGVuZ3RoLFxuICAgICAgICBub2RlQkFuY2VzdG9yTm9kZXNMZW5ndGggPSBub2RlQkFuY2VzdG9yTm9kZXMubGVuZ3RoLFxuICAgICAgICBtaW5pbXVtQW5jZXN0b3JOb2Rlc0xlbmd0aCA9IE1hdGgubWluKG5vZGVBQW5jZXN0b3JOb2Rlc0xlbmd0aCwgbm9kZUJBbmNlc3Rvck5vZGVzTGVuZ3RoKTtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbWluaW11bUFuY2VzdG9yTm9kZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBub2RlQUFuY2VzdG9yTm9kZSA9IG5vZGVBQW5jZXN0b3JOb2Rlc1tpbmRleF0sXG4gICAgICAgICAgbm9kZUJBbmNlc3Rvck5vZGUgPSBub2RlQkFuY2VzdG9yTm9kZXNbaW5kZXhdO1xuXG4gICAgaWYgKG5vZGVBQW5jZXN0b3JOb2RlICE9PSBub2RlQkFuY2VzdG9yTm9kZSkge1xuICAgICAgY29uc3QgcGFyZW50SW5kZXggPSBpbmRleCAtIDEsXG4gICAgICAgICAgICBub2RlQUFuY2VzdG9yTm9kZVBhcmVudE5vZGUgPSBub2RlQUFuY2VzdG9yTm9kZXNbcGFyZW50SW5kZXhdLFxuICAgICAgICAgICAgcGFyZW50Tm9kZSA9IG5vZGVBQW5jZXN0b3JOb2RlUGFyZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVBID0gbm9kZUFBbmNlc3Rvck5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlQiA9IG5vZGVCQW5jZXN0b3JOb2RlLCAvLy9cbiAgICAgICAgICAgIGluZGV4QSA9IHBhcmVudE5vZGUuaW5kZXhPZkNoaWxkTm9kZShjaGlsZE5vZGVBKSxcbiAgICAgICAgICAgIGluZGV4QiA9IHBhcmVudE5vZGUuaW5kZXhPZkNoaWxkTm9kZShjaGlsZE5vZGVCKTtcblxuICAgICAgbGVzc1RoYW4gPSAoaW5kZXhBIDwgaW5kZXhCKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGxlc3NUaGFuID09PSBudWxsKSB7XG4gICAgbGVzc1RoYW4gPSAobm9kZUFBbmNlc3Rvck5vZGVzTGVuZ3RoIDwgbm9kZUJBbmNlc3Rvck5vZGVzTGVuZ3RoKTtcbiAgfVxuXG4gIHJldHVybiBsZXNzVGhhbjtcbn1cbiJdLCJuYW1lcyI6WyJ0b3Btb3N0Tm9kZUZyb21PdXRlck5vZGVzIiwiQ2xhc3NGcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlcyIsInVuZGVmaW5lZCIsIm91dGVyTm9kZSIsIk5vZGUiLCJub2RlcyIsIm9yZGVyTm9kZXMiLCJDbGFzcyIsInRvcG1vc3ROb2RlIiwiZnJvbU5vdGhpbmciLCJvdXRlck5vZGVUb05vZGVNYXAiLCJXZWFrTWFwIiwiZm9yRWFjaCIsInBhcmVudE5vZGUiLCJzb21lQW5jZXN0b3JOb2RlIiwiYW5jZXN0b3JOb2RlIiwibm9kZSIsImdldCIsImZyb21PdXRlck5vZGUiLCJhcHBlbmRlZENoaWxkTm9kZSIsImFwcGVuZENoaWxkTm9kZSIsInNldCIsInNvcnQiLCJub2RlQSIsIm5vZGVCIiwibm9kZUFMZXNzVGhhbk5vZGVCIiwiaXNMZXNzVGhhbiIsInJlc3VsdCIsImxlc3NUaGFuIiwibm9kZUFBbmNlc3Rvck5vZGVzIiwiZ2V0QW5jZXN0b3JOb2RlcyIsIm5vZGVCQW5jZXN0b3JOb2RlcyIsIm5vZGVBQW5jZXN0b3JOb2Rlc0xlbmd0aCIsImxlbmd0aCIsIm5vZGVCQW5jZXN0b3JOb2Rlc0xlbmd0aCIsIm1pbmltdW1BbmNlc3Rvck5vZGVzTGVuZ3RoIiwiTWF0aCIsIm1pbiIsImluZGV4Iiwibm9kZUFBbmNlc3Rvck5vZGUiLCJub2RlQkFuY2VzdG9yTm9kZSIsInBhcmVudEluZGV4Iiwibm9kZUFBbmNlc3Rvck5vZGVQYXJlbnROb2RlIiwiY2hpbGROb2RlQSIsImNoaWxkTm9kZUIiLCJpbmRleEEiLCJpbmRleE9mQ2hpbGROb2RlIiwiaW5kZXhCIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUE4Q0EsT0FFRTtlQUZGOztJQTFDZ0JBLHlCQUF5QjtlQUF6QkE7OzsyREFGQzs7Ozs7O0FBRVYsU0FBU0EsMEJBQTBCQyxrQkFBa0IsRUFBRUMsVUFBVTtJQUN0RSxJQUFJQSxlQUFlQyxXQUFXO1FBQzVCRCxhQUFhRCxvQkFBb0IsR0FBRztRQUVwQ0EscUJBQXFCLFNBQUNHO21CQUFjQyxhQUFJO1dBQUcsR0FBRztJQUNoRDtJQUVBLElBQU1DLFFBQVFKLFlBQVksR0FBRztJQUU3QkssV0FBV0Q7SUFFWCxJQUFNRixZQUFZLE1BQ1pJLFFBQVFQLG1CQUFtQkcsWUFDM0JLLGNBQWNELE1BQU1FLFdBQVcsSUFDL0JDLHFCQUFxQixJQUFJQztJQUUvQlYsV0FBV1csT0FBTyxDQUFDLFNBQUNUO1FBQ2xCLElBQUlVLGFBQWFMLGFBQWEsR0FBRztRQUVqQ0wsVUFBVVcsZ0JBQWdCLENBQUMsU0FBQ0M7WUFDMUIsSUFBTVosY0FBWVksY0FDWkMsT0FBT04sbUJBQW1CTyxHQUFHLENBQUNkLGdCQUFjO1lBRWxELElBQUlhLFNBQVMsTUFBTTtnQkFDakJILGFBQWFHLE1BQU8sR0FBRztnQkFFdkIsT0FBTztZQUNUO1FBQ0Y7UUFFQSxJQUFNVCxRQUFRUCxtQkFBbUJHLFlBQzNCYSxPQUFPVCxNQUFNVyxhQUFhLENBQUNmLFlBQzNCZ0Isb0JBQW9CSCxNQUFNLEdBQUc7UUFFbkNILFdBQVdPLGVBQWUsQ0FBQ0Q7UUFFM0JULG1CQUFtQlcsR0FBRyxDQUFDbEIsV0FBV2E7SUFDcEM7SUFFQSxPQUFPUjtBQUNUO0lBRUEsV0FBZTtJQUNiVCwyQkFBQUE7QUFDRjtBQUVBLFNBQVNPLFdBQVdELEtBQUs7SUFDdkJBLE1BQU1pQixJQUFJLENBQUMsU0FBQ0MsT0FBT0M7UUFDakIsSUFBTUMscUJBQXFCQyxXQUFXSCxPQUFPQyxRQUN2Q0csU0FBU0YscUJBQ0UsQ0FBQyxJQUNDLENBQUM7UUFFcEIsT0FBT0U7SUFDVDtBQUNGO0FBRUEsU0FBU0QsV0FBV0gsS0FBSyxFQUFFQyxLQUFLO0lBQzlCLElBQUlJLFdBQVc7SUFFZixJQUFNQyxxQkFBcUJOLE1BQU1PLGdCQUFnQixJQUMzQ0MscUJBQXFCUCxNQUFNTSxnQkFBZ0IsSUFDM0NFLDJCQUEyQkgsbUJBQW1CSSxNQUFNLEVBQ3BEQywyQkFBMkJILG1CQUFtQkUsTUFBTSxFQUNwREUsNkJBQTZCQyxLQUFLQyxHQUFHLENBQUNMLDBCQUEwQkU7SUFFdEUsSUFBSyxJQUFJSSxRQUFRLEdBQUdBLFFBQVFILDRCQUE0QkcsUUFBUztRQUMvRCxJQUFNQyxvQkFBb0JWLGtCQUFrQixDQUFDUyxNQUFNLEVBQzdDRSxvQkFBb0JULGtCQUFrQixDQUFDTyxNQUFNO1FBRW5ELElBQUlDLHNCQUFzQkMsbUJBQW1CO1lBQzNDLElBQU1DLGNBQWNILFFBQVEsR0FDdEJJLDhCQUE4QmIsa0JBQWtCLENBQUNZLFlBQVksRUFDN0Q1QixhQUFhNkIsNkJBQ2JDLGFBQWFKLG1CQUNiSyxhQUFhSixtQkFDYkssU0FBU2hDLFdBQVdpQyxnQkFBZ0IsQ0FBQ0gsYUFDckNJLFNBQVNsQyxXQUFXaUMsZ0JBQWdCLENBQUNGO1lBRTNDaEIsV0FBWWlCLFNBQVNFO1lBRXJCO1FBQ0Y7SUFDRjtJQUVBLElBQUluQixhQUFhLE1BQU07UUFDckJBLFdBQVlJLDJCQUEyQkU7SUFDekM7SUFFQSxPQUFPTjtBQUNUIn0=