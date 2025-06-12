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
    get isGreaterThanOfEqualTo () {
        return isGreaterThanOfEqualTo;
    },
    get isLessThan () {
        return isLessThan;
    },
    get isLessThanOfEqualTo () {
        return isLessThanOfEqualTo;
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
function isLessThanOfEqualTo(nodeA, nodeB) {
    var lessThanOrEqualTo = false;
    if (nodeA === nodeB) {
        lessThanOrEqualTo = true;
    } else {
        var lessThan = isLessThan(nodeA, nodeB);
        lessThanOrEqualTo = lessThan; ///
    }
    return lessThanOrEqualTo;
}
function isGreaterThanOfEqualTo(nodeA, nodeB) {
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
    isLessThanOfEqualTo: isLessThanOfEqualTo,
    isGreaterThanOfEqualTo: isGreaterThanOfEqualTo,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzTGVzc1RoYW4obm9kZUEsIG5vZGVCKSB7XG4gIGxldCBsZXNzVGhhbiA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZUFBbmNlc3Rvck5vZGVzID0gYW5jZXN0b3JOb2Rlc0Zyb21Ob2RlKG5vZGVBKSxcbiAgICAgICAgbm9kZUJBbmNlc3Rvck5vZGVzID0gYW5jZXN0b3JOb2Rlc0Zyb21Ob2RlKG5vZGVCKSxcbiAgICAgICAgbm9kZUFBbmNlc3Rvck5vZGVzTGVuZ3RoID0gbm9kZUFBbmNlc3Rvck5vZGVzLmxlbmd0aCxcbiAgICAgICAgbm9kZUJBbmNlc3Rvck5vZGVzTGVuZ3RoID0gbm9kZUJBbmNlc3Rvck5vZGVzLmxlbmd0aCxcbiAgICAgICAgbWluaW11bUFuY2VzdG9yTm9kZXNMZW5ndGggPSBNYXRoLm1pbihub2RlQUFuY2VzdG9yTm9kZXNMZW5ndGgsIG5vZGVCQW5jZXN0b3JOb2Rlc0xlbmd0aCk7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1pbmltdW1BbmNlc3Rvck5vZGVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3Qgbm9kZUFBbmNlc3Rvck5vZGUgPSBub2RlQUFuY2VzdG9yTm9kZXNbaW5kZXhdLFxuICAgICAgICAgIG5vZGVCQW5jZXN0b3JOb2RlID0gbm9kZUJBbmNlc3Rvck5vZGVzW2luZGV4XTtcblxuICAgIGlmIChub2RlQUFuY2VzdG9yTm9kZSAhPT0gbm9kZUJBbmNlc3Rvck5vZGUpIHtcbiAgICAgIGNvbnN0IHBhcmVudEluZGV4ID0gaW5kZXggLSAxLFxuICAgICAgICAgICAgbm9kZUFBbmNlc3Rvck5vZGVQYXJlbnROb2RlID0gbm9kZUFBbmNlc3Rvck5vZGVzW3BhcmVudEluZGV4XSxcbiAgICAgICAgICAgIHBhcmVudE5vZGUgPSBub2RlQUFuY2VzdG9yTm9kZVBhcmVudE5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlQSA9IG5vZGVBQW5jZXN0b3JOb2RlLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZUIgPSBub2RlQkFuY2VzdG9yTm9kZSwgLy8vXG4gICAgICAgICAgICBpbmRleEEgPSBwYXJlbnROb2RlLmluZGV4T2ZDaGlsZE5vZGUoY2hpbGROb2RlQSksXG4gICAgICAgICAgICBpbmRleEIgPSBwYXJlbnROb2RlLmluZGV4T2ZDaGlsZE5vZGUoY2hpbGROb2RlQik7XG5cbiAgICAgIGxlc3NUaGFuID0gKGluZGV4QSA8IGluZGV4Qik7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChsZXNzVGhhbiA9PT0gbnVsbCkge1xuICAgIGxlc3NUaGFuID0gKG5vZGVBQW5jZXN0b3JOb2Rlc0xlbmd0aCA8IG5vZGVCQW5jZXN0b3JOb2Rlc0xlbmd0aCk7XG4gIH1cblxuICByZXR1cm4gbGVzc1RoYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0dyZWF0ZXJUaGFuKG5vZGVBLCBub2RlQikge1xuICBjb25zdCBsZXNzVGhhbiA9IGlzTGVzc1RoYW4obm9kZUEsIG5vZGVCKSxcbiAgICAgICAgZ3JlYXRlclRoYW4gPSAhbGVzc1RoYW47XG5cbiAgcmV0dXJuIGdyZWF0ZXJUaGFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNMZXNzVGhhbk9mRXF1YWxUbyhub2RlQSwgbm9kZUIpIHtcbiAgbGV0IGxlc3NUaGFuT3JFcXVhbFRvID0gZmFsc2U7XG5cbiAgaWYgKG5vZGVBID09PSBub2RlQikge1xuICAgIGxlc3NUaGFuT3JFcXVhbFRvID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsZXNzVGhhbiA9IGlzTGVzc1RoYW4obm9kZUEsIG5vZGVCKTtcblxuICAgIGxlc3NUaGFuT3JFcXVhbFRvID0gbGVzc1RoYW47IC8vL1xuICB9XG5cbiAgcmV0dXJuIGxlc3NUaGFuT3JFcXVhbFRvO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNHcmVhdGVyVGhhbk9mRXF1YWxUbyhub2RlQSwgbm9kZUIpIHtcbiAgbGV0IGdyZWF0ZXJUaGFuT3JFcXVhbFRvID0gZmFsc2U7XG5cbiAgaWYgKG5vZGVBID09PSBub2RlQikge1xuICAgIGdyZWF0ZXJUaGFuT3JFcXVhbFRvID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBncmVhdGVyVGhhbiA9IGlzR3JlYXRlclRoYW4obm9kZUEsIG5vZGVCKTtcblxuICAgIGdyZWF0ZXJUaGFuT3JFcXVhbFRvID0gZ3JlYXRlclRoYW47IC8vL1xuICB9XG5cbiAgcmV0dXJuIGdyZWF0ZXJUaGFuT3JFcXVhbFRvO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3JkZXJOb2Rlcyhub2Rlcykge1xuICBub2Rlcy5zb3J0KChub2RlQSwgbm9kZUIpID0+IHtcbiAgICBjb25zdCBub2RlQUxlc3NUaGFuTm9kZUIgPSBpc0xlc3NUaGFuKG5vZGVBLCBub2RlQiksXG4gICAgICAgICAgcmVzdWx0ID0gbm9kZUFMZXNzVGhhbk5vZGVCID9cbiAgICAgICAgICAgICAgICAgICAgLTEgOlxuICAgICAgICAgICAgICAgICAgICAgICsxO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FuY2VzdG9yT2Yobm9kZUEsIG5vZGVCKSB7XG4gIGNvbnN0IGFuY2VzdG9yT2YgPSBub2RlQi5zb21lQW5jZXN0b3JOb2RlKChhbmNlc3Rvck5vZGVCKSA9PiB7XG4gICAgaWYgKG5vZGVBID09PSBhbmNlc3Rvck5vZGVCKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBhbmNlc3Rvck9mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEZXNjZW5kYW50T2Yobm9kZUEsIG5vZGVCKSB7XG4gIGNvbnN0IG5vZGVCQW5jZXN0b3JPZk5vZGVBID0gaXNBbmNlc3Rvck9mKG5vZGVCLCBub2RlQSksXG4gICAgICAgIG5vZGVBRGVzY2VuZGFudE9mTm9kZUIgPSBub2RlQkFuY2VzdG9yT2ZOb2RlQSwgIC8vL1xuICAgICAgICBkZXNjZW5kYW50T2YgPSBub2RlQURlc2NlbmRhbnRPZk5vZGVCOyAgLy8vXG5cbiAgcmV0dXJuIGRlc2NlbmRhbnRPZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3ROb2RlRnJvbU91dGVyTm9kZXMoQ2xhc3NGcm9tT3V0ZXJOb2RlLCBvdXRlck5vZGVzKSB7XG4gIGNvbnN0IG5vZGVzID0gb3V0ZXJOb2RlczsgLy8vXG5cbiAgb3JkZXJOb2Rlcyhub2Rlcyk7XG5cbiAgY29uc3Qgb3V0ZXJOb2RlID0gbnVsbCxcbiAgICAgICAgQ2xhc3MgPSBDbGFzc0Zyb21PdXRlck5vZGUob3V0ZXJOb2RlKSxcbiAgICAgICAgdG9wbW9zdE5vZGUgPSBDbGFzcy5mcm9tTm90aGluZygpLFxuICAgICAgICBvdXRlck5vZGVUb05vZGVNYXAgPSBuZXcgV2Vha01hcCgpO1xuXG4gIG91dGVyTm9kZXMuZm9yRWFjaCgob3V0ZXJOb2RlKSA9PiB7XG4gICAgbGV0IHBhcmVudE5vZGUgPSB0b3Btb3N0Tm9kZTsgLy8vXG5cbiAgICBvdXRlck5vZGUuc29tZUFuY2VzdG9yTm9kZSgoYW5jZXN0b3JOb2RlKSA9PiB7XG4gICAgICBjb25zdCBvdXRlck5vZGUgPSBhbmNlc3Rvck5vZGUsIC8vL1xuICAgICAgICAgICAgbm9kZSA9IG91dGVyTm9kZVRvTm9kZU1hcC5nZXQob3V0ZXJOb2RlKSB8fCBudWxsO1xuXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBwYXJlbnROb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgQ2xhc3MgPSBDbGFzc0Zyb21PdXRlck5vZGUob3V0ZXJOb2RlKSxcbiAgICAgICAgICBub2RlID0gQ2xhc3MuZnJvbU91dGVyTm9kZShvdXRlck5vZGUpLFxuICAgICAgICAgIGFwcGVuZGVkQ2hpbGROb2RlID0gbm9kZTsgLy8vXG5cbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkTm9kZShhcHBlbmRlZENoaWxkTm9kZSk7XG5cbiAgICBvdXRlck5vZGVUb05vZGVNYXAuc2V0KG91dGVyTm9kZSwgbm9kZSk7XG4gIH0pO1xuXG4gIHJldHVybiB0b3Btb3N0Tm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpc0xlc3NUaGFuLFxuICBpc0dyZWF0ZXJUaGFuLFxuICBpc0xlc3NUaGFuT2ZFcXVhbFRvLFxuICBpc0dyZWF0ZXJUaGFuT2ZFcXVhbFRvLFxuICBvcmRlck5vZGVzLFxuICBpc0FuY2VzdG9yT2YsXG4gIGlzRGVzY2VuZGFudE9mLFxuICB0b3Btb3N0Tm9kZUZyb21PdXRlck5vZGVzLFxufTtcblxuZnVuY3Rpb24gYW5jZXN0b3JOb2Rlc0Zyb21Ob2RlKG5vZGUpIHtcbiAgY29uc3QgYW5jZXN0b3JOb2RlcyA9IG5vZGUuZ2V0QW5jZXN0b3JOb2RlcygpO1xuXG4gIGFuY2VzdG9yTm9kZXMudW5zaGlmdChub2RlKTtcblxuICBhbmNlc3Rvck5vZGVzLnJldmVyc2UoKTtcblxuICByZXR1cm4gYW5jZXN0b3JOb2Rlcztcbn1cbiJdLCJuYW1lcyI6WyJpc0FuY2VzdG9yT2YiLCJpc0Rlc2NlbmRhbnRPZiIsImlzR3JlYXRlclRoYW4iLCJpc0dyZWF0ZXJUaGFuT2ZFcXVhbFRvIiwiaXNMZXNzVGhhbiIsImlzTGVzc1RoYW5PZkVxdWFsVG8iLCJvcmRlck5vZGVzIiwidG9wbW9zdE5vZGVGcm9tT3V0ZXJOb2RlcyIsIm5vZGVBIiwibm9kZUIiLCJsZXNzVGhhbiIsIm5vZGVBQW5jZXN0b3JOb2RlcyIsImFuY2VzdG9yTm9kZXNGcm9tTm9kZSIsIm5vZGVCQW5jZXN0b3JOb2RlcyIsIm5vZGVBQW5jZXN0b3JOb2Rlc0xlbmd0aCIsImxlbmd0aCIsIm5vZGVCQW5jZXN0b3JOb2Rlc0xlbmd0aCIsIm1pbmltdW1BbmNlc3Rvck5vZGVzTGVuZ3RoIiwiTWF0aCIsIm1pbiIsImluZGV4Iiwibm9kZUFBbmNlc3Rvck5vZGUiLCJub2RlQkFuY2VzdG9yTm9kZSIsInBhcmVudEluZGV4Iiwibm9kZUFBbmNlc3Rvck5vZGVQYXJlbnROb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZUEiLCJjaGlsZE5vZGVCIiwiaW5kZXhBIiwiaW5kZXhPZkNoaWxkTm9kZSIsImluZGV4QiIsImdyZWF0ZXJUaGFuIiwibGVzc1RoYW5PckVxdWFsVG8iLCJncmVhdGVyVGhhbk9yRXF1YWxUbyIsIm5vZGVzIiwic29ydCIsIm5vZGVBTGVzc1RoYW5Ob2RlQiIsInJlc3VsdCIsImFuY2VzdG9yT2YiLCJzb21lQW5jZXN0b3JOb2RlIiwiYW5jZXN0b3JOb2RlQiIsIm5vZGVCQW5jZXN0b3JPZk5vZGVBIiwibm9kZUFEZXNjZW5kYW50T2ZOb2RlQiIsImRlc2NlbmRhbnRPZiIsIkNsYXNzRnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZXMiLCJvdXRlck5vZGUiLCJDbGFzcyIsInRvcG1vc3ROb2RlIiwiZnJvbU5vdGhpbmciLCJvdXRlck5vZGVUb05vZGVNYXAiLCJXZWFrTWFwIiwiZm9yRWFjaCIsImFuY2VzdG9yTm9kZSIsIm5vZGUiLCJnZXQiLCJmcm9tT3V0ZXJOb2RlIiwiYXBwZW5kZWRDaGlsZE5vZGUiLCJhcHBlbmRDaGlsZE5vZGUiLCJzZXQiLCJhbmNlc3Rvck5vZGVzIiwiZ2V0QW5jZXN0b3JOb2RlcyIsInVuc2hpZnQiLCJyZXZlcnNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUF5SUE7ZUFBQTs7UUF0RGdCQTtlQUFBQTs7UUFVQUM7ZUFBQUE7O1FBeERBQztlQUFBQTs7UUFxQkFDO2VBQUFBOztRQXhEQUM7ZUFBQUE7O1FBMENBQztlQUFBQTs7UUE0QkFDO2VBQUFBOztRQTZCQUM7ZUFBQUE7OztBQW5HVCxTQUFTSCxXQUFXSSxLQUFLLEVBQUVDLEtBQUs7SUFDckMsSUFBSUMsV0FBVztJQUVmLElBQU1DLHFCQUFxQkMsc0JBQXNCSixRQUMzQ0sscUJBQXFCRCxzQkFBc0JILFFBQzNDSywyQkFBMkJI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