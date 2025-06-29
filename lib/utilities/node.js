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
    get isGreaterThan () {
        return isGreaterThan;
    },
    get isGreaterThanOrEqualTo () {
        return isGreaterThanOrEqualTo;
    },
    get isLessThan () {
        return isLessThan;
    },
    get isLessThanOrEqualTo () {
        return isLessThanOrEqualTo;
    },
    get orderNodes () {
        return orderNodes;
    },
    get topmostNodeFromOuterNodes () {
        return topmostNodeFromOuterNodes;
    }
});
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
function isGreaterThan(nodeA, nodeB) {
    var lessThan = isLessThan(nodeA, nodeB), greaterThan = !lessThan;
    return greaterThan;
}
function isLessThanOrEqualTo(nodeA, nodeB) {
    var lessThanOrEqualTo;
    if (nodeA === nodeB) {
        lessThanOrEqualTo = true;
    } else {
        var lessThan = isLessThan(nodeA, nodeB);
        lessThanOrEqualTo = lessThan; ///
    }
    return lessThanOrEqualTo;
}
function isGreaterThanOrEqualTo(nodeA, nodeB) {
    var greaterThanOrEqualTo = false;
    if (nodeA === nodeB) {
        greaterThanOrEqualTo = true;
    } else {
        var greaterThan = isGreaterThan(nodeA, nodeB);
        greaterThanOrEqualTo = greaterThan; ///
    }
    return greaterThanOrEqualTo;
}
function orderNodes(nodes) {
    nodes.sort(function(nodeA, nodeB) {
        var nodeALessThanNodeB = isLessThan(nodeA, nodeB), result = nodeALessThanNodeB ? -1 : +1;
        return result;
    });
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
    isGreaterThan: isGreaterThan,
    isLessThanOrEqualTo: isLessThanOrEqualTo,
    isGreaterThanOrEqualTo: isGreaterThanOrEqualTo,
    orderNodes: orderNodes,
    isAncestorOf: isAncestorOf,
    isDescendantOf: isDescendantOf,
    topmostNodeFromOuterNodes: topmostNodeFromOuterNodes
};
function ancestorNodesFromNode(node) {
    var ancestorNodes = node.getAncestorNodes();
    ancestorNodes.unshift(node);
    ancestorNodes.reverse();
    return ancestorNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzTGVzc1RoYW4obm9kZUEsIG5vZGVCKSB7XG4gIGxldCBsZXNzVGhhbiA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZUFBbmNlc3Rvck5vZGVzID0gYW5jZXN0b3JOb2Rlc0Zyb21Ob2RlKG5vZGVBKSxcbiAgICAgICAgbm9kZUJBbmNlc3Rvck5vZGVzID0gYW5jZXN0b3JOb2Rlc0Zyb21Ob2RlKG5vZGVCKSxcbiAgICAgICAgbm9kZUFBbmNlc3Rvck5vZGVzTGVuZ3RoID0gbm9kZUFBbmNlc3Rvck5vZGVzLmxlbmd0aCxcbiAgICAgICAgbm9kZUJBbmNlc3Rvck5vZGVzTGVuZ3RoID0gbm9kZUJBbmNlc3Rvck5vZGVzLmxlbmd0aCxcbiAgICAgICAgbWluaW11bUFuY2VzdG9yTm9kZXNMZW5ndGggPSBNYXRoLm1pbihub2RlQUFuY2VzdG9yTm9kZXNMZW5ndGgsIG5vZGVCQW5jZXN0b3JOb2Rlc0xlbmd0aCk7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1pbmltdW1BbmNlc3Rvck5vZGVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3Qgbm9kZUFBbmNlc3Rvck5vZGUgPSBub2RlQUFuY2VzdG9yTm9kZXNbaW5kZXhdLFxuICAgICAgICAgIG5vZGVCQW5jZXN0b3JOb2RlID0gbm9kZUJBbmNlc3Rvck5vZGVzW2luZGV4XTtcblxuICAgIGlmIChub2RlQUFuY2VzdG9yTm9kZSAhPT0gbm9kZUJBbmNlc3Rvck5vZGUpIHtcbiAgICAgIGNvbnN0IHBhcmVudEluZGV4ID0gaW5kZXggLSAxLFxuICAgICAgICAgICAgbm9kZUFBbmNlc3Rvck5vZGVQYXJlbnROb2RlID0gbm9kZUFBbmNlc3Rvck5vZGVzW3BhcmVudEluZGV4XSxcbiAgICAgICAgICAgIHBhcmVudE5vZGUgPSBub2RlQUFuY2VzdG9yTm9kZVBhcmVudE5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlQSA9IG5vZGVBQW5jZXN0b3JOb2RlLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZUIgPSBub2RlQkFuY2VzdG9yTm9kZSwgLy8vXG4gICAgICAgICAgICBpbmRleEEgPSBwYXJlbnROb2RlLmluZGV4T2ZDaGlsZE5vZGUoY2hpbGROb2RlQSksXG4gICAgICAgICAgICBpbmRleEIgPSBwYXJlbnROb2RlLmluZGV4T2ZDaGlsZE5vZGUoY2hpbGROb2RlQik7XG5cbiAgICAgIGxlc3NUaGFuID0gKGluZGV4QSA8IGluZGV4Qik7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChsZXNzVGhhbiA9PT0gbnVsbCkge1xuICAgIGxlc3NUaGFuID0gKG5vZGVBQW5jZXN0b3JOb2Rlc0xlbmd0aCA8IG5vZGVCQW5jZXN0b3JOb2Rlc0xlbmd0aCk7XG4gIH1cblxuICByZXR1cm4gbGVzc1RoYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0dyZWF0ZXJUaGFuKG5vZGVBLCBub2RlQikge1xuICBjb25zdCBsZXNzVGhhbiA9IGlzTGVzc1RoYW4obm9kZUEsIG5vZGVCKSxcbiAgICAgICAgZ3JlYXRlclRoYW4gPSAhbGVzc1RoYW47XG5cbiAgcmV0dXJuIGdyZWF0ZXJUaGFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNMZXNzVGhhbk9yRXF1YWxUbyhub2RlQSwgbm9kZUIpIHtcbiAgbGV0IGxlc3NUaGFuT3JFcXVhbFRvO1xuXG4gIGlmIChub2RlQSA9PT0gbm9kZUIpIHtcbiAgICBsZXNzVGhhbk9yRXF1YWxUbyA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbGVzc1RoYW4gPSBpc0xlc3NUaGFuKG5vZGVBLCBub2RlQik7XG5cbiAgICBsZXNzVGhhbk9yRXF1YWxUbyA9IGxlc3NUaGFuOyAvLy9cbiAgfVxuXG4gIHJldHVybiBsZXNzVGhhbk9yRXF1YWxUbztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzR3JlYXRlclRoYW5PckVxdWFsVG8obm9kZUEsIG5vZGVCKSB7XG4gIGxldCBncmVhdGVyVGhhbk9yRXF1YWxUbyA9IGZhbHNlO1xuXG4gIGlmIChub2RlQSA9PT0gbm9kZUIpIHtcbiAgICBncmVhdGVyVGhhbk9yRXF1YWxUbyA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZ3JlYXRlclRoYW4gPSBpc0dyZWF0ZXJUaGFuKG5vZGVBLCBub2RlQik7XG5cbiAgICBncmVhdGVyVGhhbk9yRXF1YWxUbyA9IGdyZWF0ZXJUaGFuOyAvLy9cbiAgfVxuXG4gIHJldHVybiBncmVhdGVyVGhhbk9yRXF1YWxUbztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9yZGVyTm9kZXMobm9kZXMpIHtcbiAgbm9kZXMuc29ydCgobm9kZUEsIG5vZGVCKSA9PiB7XG4gICAgY29uc3Qgbm9kZUFMZXNzVGhhbk5vZGVCID0gaXNMZXNzVGhhbihub2RlQSwgbm9kZUIpLFxuICAgICAgICAgIHJlc3VsdCA9IG5vZGVBTGVzc1RoYW5Ob2RlQiA/XG4gICAgICAgICAgICAgICAgICAgIC0xIDpcbiAgICAgICAgICAgICAgICAgICAgICArMTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBbmNlc3Rvck9mKG5vZGVBLCBub2RlQikge1xuICBjb25zdCBhbmNlc3Rvck9mID0gbm9kZUIuc29tZUFuY2VzdG9yTm9kZSgoYW5jZXN0b3JOb2RlQikgPT4ge1xuICAgIGlmIChub2RlQSA9PT0gYW5jZXN0b3JOb2RlQikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gYW5jZXN0b3JPZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGVzY2VuZGFudE9mKG5vZGVBLCBub2RlQikge1xuICBjb25zdCBub2RlQkFuY2VzdG9yT2ZOb2RlQSA9IGlzQW5jZXN0b3JPZihub2RlQiwgbm9kZUEpLFxuICAgICAgICBub2RlQURlc2NlbmRhbnRPZk5vZGVCID0gbm9kZUJBbmNlc3Rvck9mTm9kZUEsICAvLy9cbiAgICAgICAgZGVzY2VuZGFudE9mID0gbm9kZUFEZXNjZW5kYW50T2ZOb2RlQjsgIC8vL1xuXG4gIHJldHVybiBkZXNjZW5kYW50T2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b3Btb3N0Tm9kZUZyb21PdXRlck5vZGVzKENsYXNzRnJvbU91dGVyTm9kZSwgb3V0ZXJOb2Rlcykge1xuICBjb25zdCBub2RlcyA9IG91dGVyTm9kZXM7IC8vL1xuXG4gIG9yZGVyTm9kZXMobm9kZXMpO1xuXG4gIGNvbnN0IG91dGVyTm9kZSA9IG51bGwsXG4gICAgICAgIENsYXNzID0gQ2xhc3NGcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSksXG4gICAgICAgIHRvcG1vc3ROb2RlID0gQ2xhc3MuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgb3V0ZXJOb2RlVG9Ob2RlTWFwID0gbmV3IFdlYWtNYXAoKTtcblxuICBvdXRlck5vZGVzLmZvckVhY2goKG91dGVyTm9kZSkgPT4ge1xuICAgIGxldCBwYXJlbnROb2RlID0gdG9wbW9zdE5vZGU7IC8vL1xuXG4gICAgb3V0ZXJOb2RlLnNvbWVBbmNlc3Rvck5vZGUoKGFuY2VzdG9yTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgb3V0ZXJOb2RlID0gYW5jZXN0b3JOb2RlLCAvLy9cbiAgICAgICAgICAgIG5vZGUgPSBvdXRlck5vZGVUb05vZGVNYXAuZ2V0KG91dGVyTm9kZSkgfHwgbnVsbDtcblxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgcGFyZW50Tm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IENsYXNzID0gQ2xhc3NGcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSksXG4gICAgICAgICAgbm9kZSA9IENsYXNzLmZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSxcbiAgICAgICAgICBhcHBlbmRlZENoaWxkTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZE5vZGUoYXBwZW5kZWRDaGlsZE5vZGUpO1xuXG4gICAgb3V0ZXJOb2RlVG9Ob2RlTWFwLnNldChvdXRlck5vZGUsIG5vZGUpO1xuICB9KTtcblxuICByZXR1cm4gdG9wbW9zdE5vZGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNMZXNzVGhhbixcbiAgaXNHcmVhdGVyVGhhbixcbiAgaXNMZXNzVGhhbk9yRXF1YWxUbyxcbiAgaXNHcmVhdGVyVGhhbk9yRXF1YWxUbyxcbiAgb3JkZXJOb2RlcyxcbiAgaXNBbmNlc3Rvck9mLFxuICBpc0Rlc2NlbmRhbnRPZixcbiAgdG9wbW9zdE5vZGVGcm9tT3V0ZXJOb2Rlcyxcbn07XG5cbmZ1bmN0aW9uIGFuY2VzdG9yTm9kZXNGcm9tTm9kZShub2RlKSB7XG4gIGNvbnN0IGFuY2VzdG9yTm9kZXMgPSBub2RlLmdldEFuY2VzdG9yTm9kZXMoKTtcblxuICBhbmNlc3Rvck5vZGVzLnVuc2hpZnQobm9kZSk7XG5cbiAgYW5jZXN0b3JOb2Rlcy5yZXZlcnNlKCk7XG5cbiAgcmV0dXJuIGFuY2VzdG9yTm9kZXM7XG59XG4iXSwibmFtZXMiOlsiaXNBbmNlc3Rvck9mIiwiaXNEZXNjZW5kYW50T2YiLCJpc0dyZWF0ZXJUaGFuIiwiaXNHcmVhdGVyVGhhbk9yRXF1YWxUbyIsImlzTGVzc1RoYW4iLCJpc0xlc3NUaGFuT3JFcXVhbFRvIiwib3JkZXJOb2RlcyIsInRvcG1vc3ROb2RlRnJvbU91dGVyTm9kZXMiLCJub2RlQSIsIm5vZGVCIiwibGVzc1RoYW4iLCJub2RlQUFuY2VzdG9yTm9kZXMiLCJhbmNlc3Rvck5vZGVzRnJvbU5vZGUiLCJub2RlQkFuY2VzdG9yTm9kZXMiLCJub2RlQUFuY2VzdG9yTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJub2RlQkFuY2VzdG9yTm9kZXNMZW5ndGgiLCJtaW5pbXVtQW5jZXN0b3JOb2Rlc0xlbmd0aCIsIk1hdGgiLCJtaW4iLCJpbmRleCIsIm5vZGVBQW5jZXN0b3JOb2RlIiwibm9kZUJBbmNlc3Rvck5vZGUiLCJwYXJlbnRJbmRleCIsIm5vZGVBQW5jZXN0b3JOb2RlUGFyZW50Tm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVBIiwiY2hpbGROb2RlQiIsImluZGV4QSIsImluZGV4T2ZDaGlsZE5vZGUiLCJpbmRleEIiLCJncmVhdGVyVGhhbiIsImxlc3NUaGFuT3JFcXVhbFRvIiwiZ3JlYXRlclRoYW5PckVxdWFsVG8iLCJub2RlcyIsInNvcnQiLCJub2RlQUxlc3NUaGFuTm9kZUIiLCJyZXN1bHQiLCJhbmNlc3Rvck9mIiwic29tZUFuY2VzdG9yTm9kZSIsImFuY2VzdG9yTm9kZUIiLCJub2RlQkFuY2VzdG9yT2ZOb2RlQSIsIm5vZGVBRGVzY2VuZGFudE9mTm9kZUIiLCJkZXNjZW5kYW50T2YiLCJDbGFzc0Zyb21PdXRlck5vZGUiLCJvdXRlck5vZGVzIiwib3V0ZXJOb2RlIiwiQ2xhc3MiLCJ0b3Btb3N0Tm9kZSIsImZyb21Ob3RoaW5nIiwib3V0ZXJOb2RlVG9Ob2RlTWFwIiwiV2Vha01hcCIsImZvckVhY2giLCJhbmNlc3Rvck5vZGUiLCJub2RlIiwiZ2V0IiwiZnJvbU91dGVyTm9kZSIsImFwcGVuZGVkQ2hpbGROb2RlIiwiYXBwZW5kQ2hpbGROb2RlIiwic2V0IiwiYW5jZXN0b3JOb2RlcyIsImdldEFuY2VzdG9yTm9kZXMiLCJ1bnNoaWZ0IiwicmV2ZXJzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBeUlBO2VBQUE7O1FBdERnQkE7ZUFBQUE7O1FBVUFDO2VBQUFBOztRQXhEQUM7ZUFBQUE7O1FBcUJBQztlQUFBQTs7UUF4REFDO2VBQUFBOztRQTBDQUM7ZUFBQUE7O1FBNEJBQztlQUFBQTs7UUE2QkFDO2VBQUFBOzs7QUFuR1QsU0FBU0gsV0FBV0ksS0FBSyxFQUFFQyxLQUFLO0lBQ3JDLElBQUlDLFdBQVc7SUFFZixJQUFNQyxxQkFBcUJDLHNCQUFzQkosUUFDM0NLLHFCQUFxQkQsc0JBQXNCSCxRQUMzQ0ssMkJBQTJCSCxtQkFBbUJJ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