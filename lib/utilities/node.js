"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get isAncestorOf () {
        return isAncestorOf;
    },
    get isDescendantOf () {
        return isDescendantOf;
    },
    get isLessThan () {
        return isLessThan;
    },
    get topmostNodeFromOuterNodes () {
        return topmostNodeFromOuterNodes;
    }
});
var _node = /*#__PURE__*/ _interop_require_default(require("../node"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isLessThan(nodeA, nodeB) {
    var lessThan = null;
    var nodeAAncestorNodes = ancestorNodesFromNode(nodeA), nodeBAncestorNodes = ancestorNodesFromNode(nodeB), nodeAAncestorNodesLength = nodeAAncestorNodes.length, nodeBAncestorNodesLength = nodeBAncestorNodes.length, minimumAncestorNodesLength = Math.min(nodeAAncestorNodesLength, nodeBAncestorNodesLength);
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
function isAncestorOf(nodeA, nodeB) {
    var ancestorOf = nodeB.someAncestorNode(function(ancestorNodeB) {
        if (nodeA === ancestorNodeB) {
            return true;
        }
    });
    return ancestorOf;
}
function isDescendantOf(nodeA, nodeB) {
    var nodeBAncestorOfNodeA = isAncestorOf(nodeB, nodeA), nodeADescendantOfNodeB = nodeBAncestorOfNodeA, descendantOf = nodeADescendantOfNodeB; ///
    return descendantOf;
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
    isLessThan: isLessThan,
    isAncestorOf: isAncestorOf,
    isDescendantOf: isDescendantOf,
    topmostNodeFromOuterNodes: topmostNodeFromOuterNodes
};
function orderNodes(nodes) {
    nodes.sort(function(nodeA, nodeB) {
        var nodeALessThanNodeB = isLessThan(nodeA, nodeB), result = nodeALessThanNodeB ? -1 : +1;
        return result;
    });
}
function ancestorNodesFromNode(node) {
    var ancestorNodes = node.getAncestorNodes();
    ancestorNodes.unshift(node);
    ancestorNodes.reverse();
    return ancestorNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vZGUgZnJvbSBcIi4uL25vZGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzTGVzc1RoYW4obm9kZUEsIG5vZGVCKSB7XG4gIGxldCBsZXNzVGhhbiA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZUFBbmNlc3Rvck5vZGVzID0gYW5jZXN0b3JOb2Rlc0Zyb21Ob2RlKG5vZGVBKSxcbiAgICAgICAgbm9kZUJBbmNlc3Rvck5vZGVzID0gYW5jZXN0b3JOb2Rlc0Zyb21Ob2RlKG5vZGVCKSxcbiAgICAgICAgbm9kZUFBbmNlc3Rvck5vZGVzTGVuZ3RoID0gbm9kZUFBbmNlc3Rvck5vZGVzLmxlbmd0aCxcbiAgICAgICAgbm9kZUJBbmNlc3Rvck5vZGVzTGVuZ3RoID0gbm9kZUJBbmNlc3Rvck5vZGVzLmxlbmd0aCxcbiAgICAgICAgbWluaW11bUFuY2VzdG9yTm9kZXNMZW5ndGggPSBNYXRoLm1pbihub2RlQUFuY2VzdG9yTm9kZXNMZW5ndGgsIG5vZGVCQW5jZXN0b3JOb2Rlc0xlbmd0aCk7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1pbmltdW1BbmNlc3Rvck5vZGVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3Qgbm9kZUFBbmNlc3Rvck5vZGUgPSBub2RlQUFuY2VzdG9yTm9kZXNbaW5kZXhdLFxuICAgICAgICAgIG5vZGVCQW5jZXN0b3JOb2RlID0gbm9kZUJBbmNlc3Rvck5vZGVzW2luZGV4XTtcblxuICAgIGlmIChub2RlQUFuY2VzdG9yTm9kZSAhPT0gbm9kZUJBbmNlc3Rvck5vZGUpIHtcbiAgICAgIGNvbnN0IHBhcmVudEluZGV4ID0gaW5kZXggLSAxLFxuICAgICAgICAgICAgbm9kZUFBbmNlc3Rvck5vZGVQYXJlbnROb2RlID0gbm9kZUFBbmNlc3Rvck5vZGVzW3BhcmVudEluZGV4XSxcbiAgICAgICAgICAgIHBhcmVudE5vZGUgPSBub2RlQUFuY2VzdG9yTm9kZVBhcmVudE5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlQSA9IG5vZGVBQW5jZXN0b3JOb2RlLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZUIgPSBub2RlQkFuY2VzdG9yTm9kZSwgLy8vXG4gICAgICAgICAgICBpbmRleEEgPSBwYXJlbnROb2RlLmluZGV4T2ZDaGlsZE5vZGUoY2hpbGROb2RlQSksXG4gICAgICAgICAgICBpbmRleEIgPSBwYXJlbnROb2RlLmluZGV4T2ZDaGlsZE5vZGUoY2hpbGROb2RlQik7XG5cbiAgICAgIGxlc3NUaGFuID0gKGluZGV4QSA8IGluZGV4Qik7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChsZXNzVGhhbiA9PT0gbnVsbCkge1xuICAgIGxlc3NUaGFuID0gKG5vZGVBQW5jZXN0b3JOb2Rlc0xlbmd0aCA8IG5vZGVCQW5jZXN0b3JOb2Rlc0xlbmd0aCk7XG4gIH1cblxuICByZXR1cm4gbGVzc1RoYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FuY2VzdG9yT2Yobm9kZUEsIG5vZGVCKSB7XG4gIGNvbnN0IGFuY2VzdG9yT2YgPSBub2RlQi5zb21lQW5jZXN0b3JOb2RlKChhbmNlc3Rvck5vZGVCKSA9PiB7XG4gICAgaWYgKG5vZGVBID09PSBhbmNlc3Rvck5vZGVCKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBhbmNlc3Rvck9mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEZXNjZW5kYW50T2Yobm9kZUEsIG5vZGVCKSB7XG4gIGNvbnN0IG5vZGVCQW5jZXN0b3JPZk5vZGVBID0gaXNBbmNlc3Rvck9mKG5vZGVCLCBub2RlQSksXG4gICAgICAgIG5vZGVBRGVzY2VuZGFudE9mTm9kZUIgPSBub2RlQkFuY2VzdG9yT2ZOb2RlQSwgIC8vL1xuICAgICAgICBkZXNjZW5kYW50T2YgPSBub2RlQURlc2NlbmRhbnRPZk5vZGVCOyAgLy8vXG5cbiAgcmV0dXJuIGRlc2NlbmRhbnRPZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3ROb2RlRnJvbU91dGVyTm9kZXMoQ2xhc3NGcm9tT3V0ZXJOb2RlLCBvdXRlck5vZGVzKSB7XG4gIGlmIChvdXRlck5vZGVzID09PSB1bmRlZmluZWQpIHtcbiAgICBvdXRlck5vZGVzID0gQ2xhc3NGcm9tT3V0ZXJOb2RlOyAvLy9cblxuICAgIENsYXNzRnJvbU91dGVyTm9kZSA9IChvdXRlck5vZGUpID0+IE5vZGU7ICAvLy9cbiAgfVxuXG4gIGNvbnN0IG5vZGVzID0gb3V0ZXJOb2RlczsgLy8vXG5cbiAgb3JkZXJOb2Rlcyhub2Rlcyk7XG5cbiAgY29uc3Qgb3V0ZXJOb2RlID0gbnVsbCxcbiAgICAgICAgQ2xhc3MgPSBDbGFzc0Zyb21PdXRlck5vZGUob3V0ZXJOb2RlKSxcbiAgICAgICAgdG9wbW9zdE5vZGUgPSBDbGFzcy5mcm9tTm90aGluZygpLFxuICAgICAgICBvdXRlck5vZGVUb05vZGVNYXAgPSBuZXcgV2Vha01hcCgpO1xuXG4gIG91dGVyTm9kZXMuZm9yRWFjaCgob3V0ZXJOb2RlKSA9PiB7XG4gICAgbGV0IHBhcmVudE5vZGUgPSB0b3Btb3N0Tm9kZTsgLy8vXG5cbiAgICBvdXRlck5vZGUuc29tZUFuY2VzdG9yTm9kZSgoYW5jZXN0b3JOb2RlKSA9PiB7XG4gICAgICBjb25zdCBvdXRlck5vZGUgPSBhbmNlc3Rvck5vZGUsIC8vL1xuICAgICAgICAgICAgbm9kZSA9IG91dGVyTm9kZVRvTm9kZU1hcC5nZXQob3V0ZXJOb2RlKSB8fCBudWxsO1xuXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBwYXJlbnROb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgQ2xhc3MgPSBDbGFzc0Zyb21PdXRlck5vZGUob3V0ZXJOb2RlKSxcbiAgICAgICAgICBub2RlID0gQ2xhc3MuZnJvbU91dGVyTm9kZShvdXRlck5vZGUpLFxuICAgICAgICAgIGFwcGVuZGVkQ2hpbGROb2RlID0gbm9kZTsgLy8vXG5cbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkTm9kZShhcHBlbmRlZENoaWxkTm9kZSk7XG5cbiAgICBvdXRlck5vZGVUb05vZGVNYXAuc2V0KG91dGVyTm9kZSwgbm9kZSk7XG4gIH0pO1xuXG4gIHJldHVybiB0b3Btb3N0Tm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpc0xlc3NUaGFuLFxuICBpc0FuY2VzdG9yT2YsXG4gIGlzRGVzY2VuZGFudE9mLFxuICB0b3Btb3N0Tm9kZUZyb21PdXRlck5vZGVzXG59O1xuXG5mdW5jdGlvbiBvcmRlck5vZGVzKG5vZGVzKSB7XG4gIG5vZGVzLnNvcnQoKG5vZGVBLCBub2RlQikgPT4ge1xuICAgIGNvbnN0IG5vZGVBTGVzc1RoYW5Ob2RlQiA9IGlzTGVzc1RoYW4obm9kZUEsIG5vZGVCKSxcbiAgICAgICAgICByZXN1bHQgPSBub2RlQUxlc3NUaGFuTm9kZUIgP1xuICAgICAgICAgICAgICAgICAgICAgLTEgOlxuICAgICAgICAgICAgICAgICAgICAgICArMTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhbmNlc3Rvck5vZGVzRnJvbU5vZGUobm9kZSkge1xuICBjb25zdCBhbmNlc3Rvck5vZGVzID0gbm9kZS5nZXRBbmNlc3Rvck5vZGVzKCk7XG5cbiAgYW5jZXN0b3JOb2Rlcy51bnNoaWZ0KG5vZGUpO1xuXG4gIGFuY2VzdG9yTm9kZXMucmV2ZXJzZSgpO1xuXG4gIHJldHVybiBhbmNlc3Rvck5vZGVzO1xufVxuIl0sIm5hbWVzIjpbImlzQW5jZXN0b3JPZiIsImlzRGVzY2VuZGFudE9mIiwiaXNMZXNzVGhhbiIsInRvcG1vc3ROb2RlRnJvbU91dGVyTm9kZXMiLCJub2RlQSIsIm5vZGVCIiwibGVzc1RoYW4iLCJub2RlQUFuY2VzdG9yTm9kZXMiLCJhbmNlc3Rvck5vZGVzRnJvbU5vZGUiLCJub2RlQkFuY2VzdG9yTm9kZXMiLCJub2RlQUFuY2VzdG9yTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJub2RlQkFuY2VzdG9yTm9kZXNMZW5ndGgiLCJtaW5pbXVtQW5jZXN0b3JOb2Rlc0xlbmd0aCIsIk1hdGgiLCJtaW4iLCJpbmRleCIsIm5vZGVBQW5jZXN0b3JOb2RlIiwibm9kZUJBbmNlc3Rvck5vZGUiLCJwYXJlbnRJbmRleCIsIm5vZGVBQW5jZXN0b3JOb2RlUGFyZW50Tm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVBIiwiY2hpbGROb2RlQiIsImluZGV4QSIsImluZGV4T2ZDaGlsZE5vZGUiLCJpbmRleEIiLCJhbmNlc3Rvck9mIiwic29tZUFuY2VzdG9yTm9kZSIsImFuY2VzdG9yTm9kZUIiLCJub2RlQkFuY2VzdG9yT2ZOb2RlQSIsIm5vZGVBRGVzY2VuZGFudE9mTm9kZUIiLCJkZXNjZW5kYW50T2YiLCJDbGFzc0Zyb21PdXRlck5vZGUiLCJvdXRlck5vZGVzIiwidW5kZWZpbmVkIiwib3V0ZXJOb2RlIiwiTm9kZSIsIm5vZGVzIiwib3JkZXJOb2RlcyIsIkNsYXNzIiwidG9wbW9zdE5vZGUiLCJmcm9tTm90aGluZyIsIm91dGVyTm9kZVRvTm9kZU1hcCIsIldlYWtNYXAiLCJmb3JFYWNoIiwiYW5jZXN0b3JOb2RlIiwibm9kZSIsImdldCIsImZyb21PdXRlck5vZGUiLCJhcHBlbmRlZENoaWxkTm9kZSIsImFwcGVuZENoaWxkTm9kZSIsInNldCIsInNvcnQiLCJub2RlQUxlc3NUaGFuTm9kZUIiLCJyZXN1bHQiLCJhbmNlc3Rvck5vZGVzIiwiZ2V0QW5jZXN0b3JOb2RlcyIsInVuc2hpZnQiLCJyZXZlcnNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFtR0E7ZUFBQTs7UUE1RGdCQTtlQUFBQTs7UUFVQUM7ZUFBQUE7O1FBN0NBQztlQUFBQTs7UUFxREFDO2VBQUFBOzs7MkRBdkRDOzs7Ozs7QUFFVixTQUFTRCxXQUFXRSxLQUFLLEVBQUVDLEtBQUs7SUFD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