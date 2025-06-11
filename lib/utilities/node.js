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
    for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        remainingArguments[_key - 2] = arguments[_key];
    }
    var _Class;
    var nodes = outerNodes; ///
    orderNodes(nodes);
    var outerNode = null, Class = ClassFromOuterNode(outerNode), topmostNode = (_Class = Class).fromNothing.apply(_Class, _to_consumable_array(remainingArguments)), outerNodeToNodeMap = new WeakMap();
    outerNodes.forEach(function(outerNode) {
        var _Class;
        var parentNode = topmostNode; ///
        outerNode.someAncestorNode(function(ancestorNode) {
            var _$outerNode = ancestorNode, node = outerNodeToNodeMap.get(_$outerNode) || null;
            if (node !== null) {
                parentNode = node; ///
                return true;
            }
        });
        var Class = ClassFromOuterNode(outerNode), node = (_Class = Class).fromOuterNode.apply(_Class, [
            outerNode
        ].concat(_to_consumable_array(remainingArguments))), appendedChildNode = node; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzTGVzc1RoYW4obm9kZUEsIG5vZGVCKSB7XG4gIGxldCBsZXNzVGhhbiA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZUFBbmNlc3Rvck5vZGVzID0gYW5jZXN0b3JOb2Rlc0Zyb21Ob2RlKG5vZGVBKSxcbiAgICAgICAgbm9kZUJBbmNlc3Rvck5vZGVzID0gYW5jZXN0b3JOb2Rlc0Zyb21Ob2RlKG5vZGVCKSxcbiAgICAgICAgbm9kZUFBbmNlc3Rvck5vZGVzTGVuZ3RoID0gbm9kZUFBbmNlc3Rvck5vZGVzLmxlbmd0aCxcbiAgICAgICAgbm9kZUJBbmNlc3Rvck5vZGVzTGVuZ3RoID0gbm9kZUJBbmNlc3Rvck5vZGVzLmxlbmd0aCxcbiAgICAgICAgbWluaW11bUFuY2VzdG9yTm9kZXNMZW5ndGggPSBNYXRoLm1pbihub2RlQUFuY2VzdG9yTm9kZXNMZW5ndGgsIG5vZGVCQW5jZXN0b3JOb2Rlc0xlbmd0aCk7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1pbmltdW1BbmNlc3Rvck5vZGVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3Qgbm9kZUFBbmNlc3Rvck5vZGUgPSBub2RlQUFuY2VzdG9yTm9kZXNbaW5kZXhdLFxuICAgICAgICAgIG5vZGVCQW5jZXN0b3JOb2RlID0gbm9kZUJBbmNlc3Rvck5vZGVzW2luZGV4XTtcblxuICAgIGlmIChub2RlQUFuY2VzdG9yTm9kZSAhPT0gbm9kZUJBbmNlc3Rvck5vZGUpIHtcbiAgICAgIGNvbnN0IHBhcmVudEluZGV4ID0gaW5kZXggLSAxLFxuICAgICAgICAgICAgbm9kZUFBbmNlc3Rvck5vZGVQYXJlbnROb2RlID0gbm9kZUFBbmNlc3Rvck5vZGVzW3BhcmVudEluZGV4XSxcbiAgICAgICAgICAgIHBhcmVudE5vZGUgPSBub2RlQUFuY2VzdG9yTm9kZVBhcmVudE5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlQSA9IG5vZGVBQW5jZXN0b3JOb2RlLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZUIgPSBub2RlQkFuY2VzdG9yTm9kZSwgLy8vXG4gICAgICAgICAgICBpbmRleEEgPSBwYXJlbnROb2RlLmluZGV4T2ZDaGlsZE5vZGUoY2hpbGROb2RlQSksXG4gICAgICAgICAgICBpbmRleEIgPSBwYXJlbnROb2RlLmluZGV4T2ZDaGlsZE5vZGUoY2hpbGROb2RlQik7XG5cbiAgICAgIGxlc3NUaGFuID0gKGluZGV4QSA8IGluZGV4Qik7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChsZXNzVGhhbiA9PT0gbnVsbCkge1xuICAgIGxlc3NUaGFuID0gKG5vZGVBQW5jZXN0b3JOb2Rlc0xlbmd0aCA8IG5vZGVCQW5jZXN0b3JOb2Rlc0xlbmd0aCk7XG4gIH1cblxuICByZXR1cm4gbGVzc1RoYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FuY2VzdG9yT2Yobm9kZUEsIG5vZGVCKSB7XG4gIGNvbnN0IGFuY2VzdG9yT2YgPSBub2RlQi5zb21lQW5jZXN0b3JOb2RlKChhbmNlc3Rvck5vZGVCKSA9PiB7XG4gICAgaWYgKG5vZGVBID09PSBhbmNlc3Rvck5vZGVCKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBhbmNlc3Rvck9mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEZXNjZW5kYW50T2Yobm9kZUEsIG5vZGVCKSB7XG4gIGNvbnN0IG5vZGVCQW5jZXN0b3JPZk5vZGVBID0gaXNBbmNlc3Rvck9mKG5vZGVCLCBub2RlQSksXG4gICAgICAgIG5vZGVBRGVzY2VuZGFudE9mTm9kZUIgPSBub2RlQkFuY2VzdG9yT2ZOb2RlQSwgIC8vL1xuICAgICAgICBkZXNjZW5kYW50T2YgPSBub2RlQURlc2NlbmRhbnRPZk5vZGVCOyAgLy8vXG5cbiAgcmV0dXJuIGRlc2NlbmRhbnRPZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3ROb2RlRnJvbU91dGVyTm9kZXMoQ2xhc3NGcm9tT3V0ZXJOb2RlLCBvdXRlck5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgY29uc3Qgbm9kZXMgPSBvdXRlck5vZGVzOyAvLy9cblxuICBvcmRlck5vZGVzKG5vZGVzKTtcblxuICBjb25zdCBvdXRlck5vZGUgPSBudWxsLFxuICAgICAgICBDbGFzcyA9IENsYXNzRnJvbU91dGVyTm9kZShvdXRlck5vZGUpLFxuICAgICAgICB0b3Btb3N0Tm9kZSA9IENsYXNzLmZyb21Ob3RoaW5nKC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgIG91dGVyTm9kZVRvTm9kZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgb3V0ZXJOb2Rlcy5mb3JFYWNoKChvdXRlck5vZGUpID0+IHtcbiAgICBsZXQgcGFyZW50Tm9kZSA9IHRvcG1vc3ROb2RlOyAvLy9cblxuICAgIG91dGVyTm9kZS5zb21lQW5jZXN0b3JOb2RlKChhbmNlc3Rvck5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG91dGVyTm9kZSA9IGFuY2VzdG9yTm9kZSwgLy8vXG4gICAgICAgICAgICBub2RlID0gb3V0ZXJOb2RlVG9Ob2RlTWFwLmdldChvdXRlck5vZGUpIHx8IG51bGw7XG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIHBhcmVudE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBDbGFzcyA9IENsYXNzRnJvbU91dGVyTm9kZShvdXRlck5vZGUpLFxuICAgICAgICAgIG5vZGUgPSBDbGFzcy5mcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBhcHBlbmRlZENoaWxkTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZE5vZGUoYXBwZW5kZWRDaGlsZE5vZGUpO1xuXG4gICAgb3V0ZXJOb2RlVG9Ob2RlTWFwLnNldChvdXRlck5vZGUsIG5vZGUpO1xuICB9KTtcblxuICByZXR1cm4gdG9wbW9zdE5vZGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNMZXNzVGhhbixcbiAgaXNBbmNlc3Rvck9mLFxuICBpc0Rlc2NlbmRhbnRPZixcbiAgdG9wbW9zdE5vZGVGcm9tT3V0ZXJOb2Rlc1xufTtcblxuZnVuY3Rpb24gb3JkZXJOb2Rlcyhub2Rlcykge1xuICBub2Rlcy5zb3J0KChub2RlQSwgbm9kZUIpID0+IHtcbiAgICBjb25zdCBub2RlQUxlc3NUaGFuTm9kZUIgPSBpc0xlc3NUaGFuKG5vZGVBLCBub2RlQiksXG4gICAgICAgICAgcmVzdWx0ID0gbm9kZUFMZXNzVGhhbk5vZGVCID9cbiAgICAgICAgICAgICAgICAgICAgIC0xIDpcbiAgICAgICAgICAgICAgICAgICAgICAgKzE7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYW5jZXN0b3JOb2Rlc0Zyb21Ob2RlKG5vZGUpIHtcbiAgY29uc3QgYW5jZXN0b3JOb2RlcyA9IG5vZGUuZ2V0QW5jZXN0b3JOb2RlcygpO1xuXG4gIGFuY2VzdG9yTm9kZXMudW5zaGlmdChub2RlKTtcblxuICBhbmNlc3Rvck5vZGVzLnJldmVyc2UoKTtcblxuICByZXR1cm4gYW5jZXN0b3JOb2Rlcztcbn1cbiJdLCJuYW1lcyI6WyJpc0FuY2VzdG9yT2YiLCJpc0Rlc2NlbmRhbnRPZiIsImlzTGVzc1RoYW4iLCJ0b3Btb3N0Tm9kZUZyb21PdXRlck5vZGVzIiwibm9kZUEiLCJub2RlQiIsImxlc3NUaGFuIiwibm9kZUFBbmNlc3Rvck5vZGVzIiwiYW5jZXN0b3JOb2Rlc0Zyb21Ob2RlIiwibm9kZUJBbmNlc3Rvck5vZGVzIiwibm9kZUFBbmNlc3Rvck5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwibm9kZUJBbmNlc3Rvck5vZGVzTGVuZ3RoIiwibWluaW11bUFuY2VzdG9yTm9kZXNMZW5ndGgiLCJNYXRoIiwibWluIiwiaW5kZXgiLCJub2RlQUFuY2VzdG9yTm9kZSIsIm5vZGVCQW5jZXN0b3JOb2RlIiwicGFyZW50SW5kZXgiLCJub2RlQUFuY2VzdG9yTm9kZVBhcmVudE5vZGUiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlQSIsImNoaWxkTm9kZUIiLCJpbmRleEEiLCJpbmRleE9mQ2hpbGROb2RlIiwiaW5kZXhCIiwiYW5jZXN0b3JPZiIsInNvbWVBbmNlc3Rvck5vZGUiLCJhbmNlc3Rvck5vZGVCIiwibm9kZUJBbmNlc3Rvck9mTm9kZUEiLCJub2RlQURlc2NlbmRhbnRPZk5vZGVCIiwiZGVzY2VuZGFudE9mIiwiQ2xhc3NGcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIkNsYXNzIiwibm9kZXMiLCJvcmRlck5vZGVzIiwib3V0ZXJOb2RlIiwidG9wbW9zdE5vZGUiLCJmcm9tTm90aGluZyIsIm91dGVyTm9kZVRvTm9kZU1hcCIsIldlYWtNYXAiLCJmb3JFYWNoIiwiYW5jZXN0b3JOb2RlIiwibm9kZSIsImdldCIsImZyb21PdXRlck5vZGUiLCJhcHBlbmRlZENoaWxkTm9kZSIsImFwcGVuZENoaWxkTm9kZSIsInNldCIsInNvcnQiLCJub2RlQUxlc3NUaGFuTm9kZUIiLCJyZXN1bHQiLCJhbmNlc3Rvck5vZGVzIiwiZ2V0QW5jZXN0b3JOb2RlcyIsInVuc2hpZnQiLCJyZXZlcnNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUEyRkE7ZUFBQTs7UUF0RGdCQTtlQUFBQTs7UUFVQUM7ZUFBQUE7O1FBN0NBQztlQUFBQTs7UUFxREFDO2VBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBckRULFNBQVNELFdBQVdFLEtBQUssRUFBRUMsS0FBSztJQUNyQyxJQUFJQyxXQUFXO0lBRWYsSUFBTUMscUJBQXFCQyxzQkFBc0JKLFFBQzNDSyxxQkFBcUJELHNCQUFzQkgsUUFDM0NLLDJCQUEyQkgsbUJBQW1CSSxN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