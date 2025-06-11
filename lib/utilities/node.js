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
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
    var _Class;
    var nodes = outerNodes; ///
    orderNodes(nodes);
    var outerNode = null, Class = ClassFromOuterNode(outerNode), topmostNode = (_Class = Class).fromNothing.apply(_Class, _to_consumable_array(remainingArguments)), outerNodeToNodeMap = new WeakMap();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzTGVzc1RoYW4obm9kZUEsIG5vZGVCKSB7XG4gIGxldCBsZXNzVGhhbiA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZUFBbmNlc3Rvck5vZGVzID0gYW5jZXN0b3JOb2Rlc0Zyb21Ob2RlKG5vZGVBKSxcbiAgICAgICAgbm9kZUJBbmNlc3Rvck5vZGVzID0gYW5jZXN0b3JOb2Rlc0Zyb21Ob2RlKG5vZGVCKSxcbiAgICAgICAgbm9kZUFBbmNlc3Rvck5vZGVzTGVuZ3RoID0gbm9kZUFBbmNlc3Rvck5vZGVzLmxlbmd0aCxcbiAgICAgICAgbm9kZUJBbmNlc3Rvck5vZGVzTGVuZ3RoID0gbm9kZUJBbmNlc3Rvck5vZGVzLmxlbmd0aCxcbiAgICAgICAgbWluaW11bUFuY2VzdG9yTm9kZXNMZW5ndGggPSBNYXRoLm1pbihub2RlQUFuY2VzdG9yTm9kZXNMZW5ndGgsIG5vZGVCQW5jZXN0b3JOb2Rlc0xlbmd0aCk7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1pbmltdW1BbmNlc3Rvck5vZGVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3Qgbm9kZUFBbmNlc3Rvck5vZGUgPSBub2RlQUFuY2VzdG9yTm9kZXNbaW5kZXhdLFxuICAgICAgICAgIG5vZGVCQW5jZXN0b3JOb2RlID0gbm9kZUJBbmNlc3Rvck5vZGVzW2luZGV4XTtcblxuICAgIGlmIChub2RlQUFuY2VzdG9yTm9kZSAhPT0gbm9kZUJBbmNlc3Rvck5vZGUpIHtcbiAgICAgIGNvbnN0IHBhcmVudEluZGV4ID0gaW5kZXggLSAxLFxuICAgICAgICAgICAgbm9kZUFBbmNlc3Rvck5vZGVQYXJlbnROb2RlID0gbm9kZUFBbmNlc3Rvck5vZGVzW3BhcmVudEluZGV4XSxcbiAgICAgICAgICAgIHBhcmVudE5vZGUgPSBub2RlQUFuY2VzdG9yTm9kZVBhcmVudE5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlQSA9IG5vZGVBQW5jZXN0b3JOb2RlLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZUIgPSBub2RlQkFuY2VzdG9yTm9kZSwgLy8vXG4gICAgICAgICAgICBpbmRleEEgPSBwYXJlbnROb2RlLmluZGV4T2ZDaGlsZE5vZGUoY2hpbGROb2RlQSksXG4gICAgICAgICAgICBpbmRleEIgPSBwYXJlbnROb2RlLmluZGV4T2ZDaGlsZE5vZGUoY2hpbGROb2RlQik7XG5cbiAgICAgIGxlc3NUaGFuID0gKGluZGV4QSA8IGluZGV4Qik7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChsZXNzVGhhbiA9PT0gbnVsbCkge1xuICAgIGxlc3NUaGFuID0gKG5vZGVBQW5jZXN0b3JOb2Rlc0xlbmd0aCA8IG5vZGVCQW5jZXN0b3JOb2Rlc0xlbmd0aCk7XG4gIH1cblxuICByZXR1cm4gbGVzc1RoYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FuY2VzdG9yT2Yobm9kZUEsIG5vZGVCKSB7XG4gIGNvbnN0IGFuY2VzdG9yT2YgPSBub2RlQi5zb21lQW5jZXN0b3JOb2RlKChhbmNlc3Rvck5vZGVCKSA9PiB7XG4gICAgaWYgKG5vZGVBID09PSBhbmNlc3Rvck5vZGVCKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBhbmNlc3Rvck9mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEZXNjZW5kYW50T2Yobm9kZUEsIG5vZGVCKSB7XG4gIGNvbnN0IG5vZGVCQW5jZXN0b3JPZk5vZGVBID0gaXNBbmNlc3Rvck9mKG5vZGVCLCBub2RlQSksXG4gICAgICAgIG5vZGVBRGVzY2VuZGFudE9mTm9kZUIgPSBub2RlQkFuY2VzdG9yT2ZOb2RlQSwgIC8vL1xuICAgICAgICBkZXNjZW5kYW50T2YgPSBub2RlQURlc2NlbmRhbnRPZk5vZGVCOyAgLy8vXG5cbiAgcmV0dXJuIGRlc2NlbmRhbnRPZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3ROb2RlRnJvbU91dGVyTm9kZXMoQ2xhc3NGcm9tT3V0ZXJOb2RlLCBvdXRlck5vZGVzKSB7XG4gIGNvbnN0IG5vZGVzID0gb3V0ZXJOb2RlczsgLy8vXG5cbiAgb3JkZXJOb2Rlcyhub2Rlcyk7XG5cbiAgY29uc3Qgb3V0ZXJOb2RlID0gbnVsbCxcbiAgICAgICAgQ2xhc3MgPSBDbGFzc0Zyb21PdXRlck5vZGUob3V0ZXJOb2RlKSxcbiAgICAgICAgdG9wbW9zdE5vZGUgPSBDbGFzcy5mcm9tTm90aGluZyguLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICBvdXRlck5vZGVUb05vZGVNYXAgPSBuZXcgV2Vha01hcCgpO1xuXG4gIG91dGVyTm9kZXMuZm9yRWFjaCgob3V0ZXJOb2RlKSA9PiB7XG4gICAgbGV0IHBhcmVudE5vZGUgPSB0b3Btb3N0Tm9kZTsgLy8vXG5cbiAgICBvdXRlck5vZGUuc29tZUFuY2VzdG9yTm9kZSgoYW5jZXN0b3JOb2RlKSA9PiB7XG4gICAgICBjb25zdCBvdXRlck5vZGUgPSBhbmNlc3Rvck5vZGUsIC8vL1xuICAgICAgICAgICAgbm9kZSA9IG91dGVyTm9kZVRvTm9kZU1hcC5nZXQob3V0ZXJOb2RlKSB8fCBudWxsO1xuXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBwYXJlbnROb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgQ2xhc3MgPSBDbGFzc0Zyb21PdXRlck5vZGUob3V0ZXJOb2RlKSxcbiAgICAgICAgICBub2RlID0gQ2xhc3MuZnJvbU91dGVyTm9kZShvdXRlck5vZGUpLFxuICAgICAgICAgIGFwcGVuZGVkQ2hpbGROb2RlID0gbm9kZTsgLy8vXG5cbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkTm9kZShhcHBlbmRlZENoaWxkTm9kZSk7XG5cbiAgICBvdXRlck5vZGVUb05vZGVNYXAuc2V0KG91dGVyTm9kZSwgbm9kZSk7XG4gIH0pO1xuXG4gIHJldHVybiB0b3Btb3N0Tm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpc0xlc3NUaGFuLFxuICBpc0FuY2VzdG9yT2YsXG4gIGlzRGVzY2VuZGFudE9mLFxuICB0b3Btb3N0Tm9kZUZyb21PdXRlck5vZGVzXG59O1xuXG5mdW5jdGlvbiBvcmRlck5vZGVzKG5vZGVzKSB7XG4gIG5vZGVzLnNvcnQoKG5vZGVBLCBub2RlQikgPT4ge1xuICAgIGNvbnN0IG5vZGVBTGVzc1RoYW5Ob2RlQiA9IGlzTGVzc1RoYW4obm9kZUEsIG5vZGVCKSxcbiAgICAgICAgICByZXN1bHQgPSBub2RlQUxlc3NUaGFuTm9kZUIgP1xuICAgICAgICAgICAgICAgICAgICAgLTEgOlxuICAgICAgICAgICAgICAgICAgICAgICArMTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhbmNlc3Rvck5vZGVzRnJvbU5vZGUobm9kZSkge1xuICBjb25zdCBhbmNlc3Rvck5vZGVzID0gbm9kZS5nZXRBbmNlc3Rvck5vZGVzKCk7XG5cbiAgYW5jZXN0b3JOb2Rlcy51bnNoaWZ0KG5vZGUpO1xuXG4gIGFuY2VzdG9yTm9kZXMucmV2ZXJzZSgpO1xuXG4gIHJldHVybiBhbmNlc3Rvck5vZGVzO1xufVxuIl0sIm5hbWVzIjpbImlzQW5jZXN0b3JPZiIsImlzRGVzY2VuZGFudE9mIiwiaXNMZXNzVGhhbiIsInRvcG1vc3ROb2RlRnJvbU91dGVyTm9kZXMiLCJub2RlQSIsIm5vZGVCIiwibGVzc1RoYW4iLCJub2RlQUFuY2VzdG9yTm9kZXMiLCJhbmNlc3Rvck5vZGVzRnJvbU5vZGUiLCJub2RlQkFuY2VzdG9yTm9kZXMiLCJub2RlQUFuY2VzdG9yTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJub2RlQkFuY2VzdG9yTm9kZXNMZW5ndGgiLCJtaW5pbXVtQW5jZXN0b3JOb2Rlc0xlbmd0aCIsIk1hdGgiLCJtaW4iLCJpbmRleCIsIm5vZGVBQW5jZXN0b3JOb2RlIiwibm9kZUJBbmNlc3Rvck5vZGUiLCJwYXJlbnRJbmRleCIsIm5vZGVBQW5jZXN0b3JOb2RlUGFyZW50Tm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVBIiwiY2hpbGROb2RlQiIsImluZGV4QSIsImluZGV4T2ZDaGlsZE5vZGUiLCJpbmRleEIiLCJhbmNlc3Rvck9mIiwic29tZUFuY2VzdG9yTm9kZSIsImFuY2VzdG9yTm9kZUIiLCJub2RlQkFuY2VzdG9yT2ZOb2RlQSIsIm5vZGVBRGVzY2VuZGFudE9mTm9kZUIiLCJkZXNjZW5kYW50T2YiLCJDbGFzc0Zyb21PdXRlck5vZGUiLCJvdXRlck5vZGVzIiwiQ2xhc3MiLCJub2RlcyIsIm9yZGVyTm9kZXMiLCJvdXRlck5vZGUiLCJ0b3Btb3N0Tm9kZSIsImZyb21Ob3RoaW5nIiwicmVtYWluaW5nQXJndW1lbnRzIiwib3V0ZXJOb2RlVG9Ob2RlTWFwIiwiV2Vha01hcCIsImZvckVhY2giLCJhbmNlc3Rvck5vZGUiLCJub2RlIiwiZ2V0IiwiZnJvbU91dGVyTm9kZSIsImFwcGVuZGVkQ2hpbGROb2RlIiwiYXBwZW5kQ2hpbGROb2RlIiwic2V0Iiwic29ydCIsIm5vZGVBTGVzc1RoYW5Ob2RlQiIsInJlc3VsdCIsImFuY2VzdG9yTm9kZXMiLCJnZXRBbmNlc3Rvck5vZGVzIiwidW5zaGlmdCIsInJldmVyc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQTJGQTtlQUFBOztRQXREZ0JBO2VBQUFBOztRQVVBQztlQUFBQTs7UUE3Q0FDO2VBQUFBOztRQXFEQUM7ZUFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFyRFQsU0FBU0QsV0FBV0UsS0FBSyxFQUFFQyxLQUFLO0lBQ3JDLElBQUlDLFdBQVc7SUFFZixJQUFNQyxxQkFBcUJDLHNCQUFzQkosUUFDM0NLLHFCQUFxQkQsc0JBQXNCSCxRQUMzQ0ssMkJBQTJCSCxtQkFBbUJJLE1BQU0sRUFDcERDLDJCQUEyQkgsbUJBQW1CRSxNQUFNLEVBQ3BERSw2QkFBNkJD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