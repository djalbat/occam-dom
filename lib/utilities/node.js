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
    isLessThan: function() {
        return isLessThan;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vZGUgZnJvbSBcIi4uL25vZGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzTGVzc1RoYW4obm9kZUEsIG5vZGVCKSB7XG4gIGxldCBsZXNzVGhhbiA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZUFBbmNlc3Rvck5vZGVzID0gYW5jZXN0b3JOb2Rlc0Zyb21Ob2RlKG5vZGVBKSxcbiAgICAgICAgbm9kZUJBbmNlc3Rvck5vZGVzID0gYW5jZXN0b3JOb2Rlc0Zyb21Ob2RlKG5vZGVCKSxcbiAgICAgICAgbm9kZUFBbmNlc3Rvck5vZGVzTGVuZ3RoID0gbm9kZUFBbmNlc3Rvck5vZGVzLmxlbmd0aCxcbiAgICAgICAgbm9kZUJBbmNlc3Rvck5vZGVzTGVuZ3RoID0gbm9kZUJBbmNlc3Rvck5vZGVzLmxlbmd0aCxcbiAgICAgICAgbWluaW11bUFuY2VzdG9yTm9kZXNMZW5ndGggPSBNYXRoLm1pbihub2RlQUFuY2VzdG9yTm9kZXNMZW5ndGgsIG5vZGVCQW5jZXN0b3JOb2Rlc0xlbmd0aCk7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1pbmltdW1BbmNlc3Rvck5vZGVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3Qgbm9kZUFBbmNlc3Rvck5vZGUgPSBub2RlQUFuY2VzdG9yTm9kZXNbaW5kZXhdLFxuICAgICAgICAgIG5vZGVCQW5jZXN0b3JOb2RlID0gbm9kZUJBbmNlc3Rvck5vZGVzW2luZGV4XTtcblxuICAgIGlmIChub2RlQUFuY2VzdG9yTm9kZSAhPT0gbm9kZUJBbmNlc3Rvck5vZGUpIHtcbiAgICAgIGNvbnN0IHBhcmVudEluZGV4ID0gaW5kZXggLSAxLFxuICAgICAgICAgICAgbm9kZUFBbmNlc3Rvck5vZGVQYXJlbnROb2RlID0gbm9kZUFBbmNlc3Rvck5vZGVzW3BhcmVudEluZGV4XSxcbiAgICAgICAgICAgIHBhcmVudE5vZGUgPSBub2RlQUFuY2VzdG9yTm9kZVBhcmVudE5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlQSA9IG5vZGVBQW5jZXN0b3JOb2RlLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZUIgPSBub2RlQkFuY2VzdG9yTm9kZSwgLy8vXG4gICAgICAgICAgICBpbmRleEEgPSBwYXJlbnROb2RlLmluZGV4T2ZDaGlsZE5vZGUoY2hpbGROb2RlQSksXG4gICAgICAgICAgICBpbmRleEIgPSBwYXJlbnROb2RlLmluZGV4T2ZDaGlsZE5vZGUoY2hpbGROb2RlQik7XG5cbiAgICAgIGxlc3NUaGFuID0gKGluZGV4QSA8IGluZGV4Qik7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChsZXNzVGhhbiA9PT0gbnVsbCkge1xuICAgIGxlc3NUaGFuID0gKG5vZGVBQW5jZXN0b3JOb2Rlc0xlbmd0aCA8IG5vZGVCQW5jZXN0b3JOb2Rlc0xlbmd0aCk7XG4gIH1cblxuICByZXR1cm4gbGVzc1RoYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b3Btb3N0Tm9kZUZyb21PdXRlck5vZGVzKENsYXNzRnJvbU91dGVyTm9kZSwgb3V0ZXJOb2Rlcykge1xuICBpZiAob3V0ZXJOb2RlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgb3V0ZXJOb2RlcyA9IENsYXNzRnJvbU91dGVyTm9kZTsgLy8vXG5cbiAgICBDbGFzc0Zyb21PdXRlck5vZGUgPSAob3V0ZXJOb2RlKSA9PiBOb2RlOyAgLy8vXG4gIH1cblxuICBjb25zdCBub2RlcyA9IG91dGVyTm9kZXM7IC8vL1xuXG4gIG9yZGVyTm9kZXMobm9kZXMpO1xuXG4gIGNvbnN0IG91dGVyTm9kZSA9IG51bGwsXG4gICAgICAgIENsYXNzID0gQ2xhc3NGcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSksXG4gICAgICAgIHRvcG1vc3ROb2RlID0gQ2xhc3MuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgb3V0ZXJOb2RlVG9Ob2RlTWFwID0gbmV3IFdlYWtNYXAoKTtcblxuICBvdXRlck5vZGVzLmZvckVhY2goKG91dGVyTm9kZSkgPT4ge1xuICAgIGxldCBwYXJlbnROb2RlID0gdG9wbW9zdE5vZGU7IC8vL1xuXG4gICAgb3V0ZXJOb2RlLnNvbWVBbmNlc3Rvck5vZGUoKGFuY2VzdG9yTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgb3V0ZXJOb2RlID0gYW5jZXN0b3JOb2RlLCAvLy9cbiAgICAgICAgICAgIG5vZGUgPSBvdXRlck5vZGVUb05vZGVNYXAuZ2V0KG91dGVyTm9kZSkgfHwgbnVsbDtcblxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgcGFyZW50Tm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IENsYXNzID0gQ2xhc3NGcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSksXG4gICAgICAgICAgbm9kZSA9IENsYXNzLmZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSxcbiAgICAgICAgICBhcHBlbmRlZENoaWxkTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZE5vZGUoYXBwZW5kZWRDaGlsZE5vZGUpO1xuXG4gICAgb3V0ZXJOb2RlVG9Ob2RlTWFwLnNldChvdXRlck5vZGUsIG5vZGUpO1xuICB9KTtcblxuICByZXR1cm4gdG9wbW9zdE5vZGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNMZXNzVGhhbixcbiAgdG9wbW9zdE5vZGVGcm9tT3V0ZXJOb2Rlc1xufTtcblxuZnVuY3Rpb24gb3JkZXJOb2Rlcyhub2Rlcykge1xuICBub2Rlcy5zb3J0KChub2RlQSwgbm9kZUIpID0+IHtcbiAgICBjb25zdCBub2RlQUxlc3NUaGFuTm9kZUIgPSBpc0xlc3NUaGFuKG5vZGVBLCBub2RlQiksXG4gICAgICAgICAgcmVzdWx0ID0gbm9kZUFMZXNzVGhhbk5vZGVCID9cbiAgICAgICAgICAgICAgICAgICAgIC0xIDpcbiAgICAgICAgICAgICAgICAgICAgICAgKzE7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYW5jZXN0b3JOb2Rlc0Zyb21Ob2RlKG5vZGUpIHtcbiAgY29uc3QgYW5jZXN0b3JOb2RlcyA9IG5vZGUuZ2V0QW5jZXN0b3JOb2RlcygpO1xuXG4gIGFuY2VzdG9yTm9kZXMudW5zaGlmdChub2RlKTtcblxuICBhbmNlc3Rvck5vZGVzLnJldmVyc2UoKTtcblxuICByZXR1cm4gYW5jZXN0b3JOb2Rlcztcbn1cbiJdLCJuYW1lcyI6WyJpc0xlc3NUaGFuIiwidG9wbW9zdE5vZGVGcm9tT3V0ZXJOb2RlcyIsIm5vZGVBIiwibm9kZUIiLCJsZXNzVGhhbiIsIm5vZGVBQW5jZXN0b3JOb2RlcyIsImFuY2VzdG9yTm9kZXNGcm9tTm9kZSIsIm5vZGVCQW5jZXN0b3JOb2RlcyIsIm5vZGVBQW5jZXN0b3JOb2Rlc0xlbmd0aCIsImxlbmd0aCIsIm5vZGVCQW5jZXN0b3JOb2Rlc0xlbmd0aCIsIm1pbmltdW1BbmNlc3Rvck5vZGVzTGVuZ3RoIiwiTWF0aCIsIm1pbiIsImluZGV4Iiwibm9kZUFBbmNlc3Rvck5vZGUiLCJub2RlQkFuY2VzdG9yTm9kZSIsInBhcmVudEluZGV4Iiwibm9kZUFBbmNlc3Rvck5vZGVQYXJlbnROb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZUEiLCJjaGlsZE5vZGVCIiwiaW5kZXhBIiwiaW5kZXhPZkNoaWxkTm9kZSIsImluZGV4QiIsIkNsYXNzRnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZXMiLCJ1bmRlZmluZWQiLCJvdXRlck5vZGUiLCJOb2RlIiwibm9kZXMiLCJvcmRlck5vZGVzIiwiQ2xhc3MiLCJ0b3Btb3N0Tm9kZSIsImZyb21Ob3RoaW5nIiwib3V0ZXJOb2RlVG9Ob2RlTWFwIiwiV2Vha01hcCIsImZvckVhY2giLCJzb21lQW5jZXN0b3JOb2RlIiwiYW5jZXN0b3JOb2RlIiwibm9kZSIsImdldCIsImZyb21PdXRlck5vZGUiLCJhcHBlbmRlZENoaWxkTm9kZSIsImFwcGVuZENoaWxkTm9kZSIsInNldCIsInNvcnQiLCJub2RlQUxlc3NUaGFuTm9kZUIiLCJyZXN1bHQiLCJhbmNlc3Rvck5vZGVzIiwiZ2V0QW5jZXN0b3JOb2RlcyIsInVuc2hpZnQiLCJyZXZlcnNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFpRkEsT0FHRTtlQUhGOztJQTdFZ0JBLFVBQVU7ZUFBVkE7O0lBbUNBQyx5QkFBeUI7ZUFBekJBOzs7MkRBckNDOzs7Ozs7QUFFVixTQUFTRCxXQUFXRSxLQUFLLEVBQUVDLEtBQUs7SUFDckMsSUFBSUMsV0FBVztJQUVmLElBQU1DLHFCQUFxQkMsc0JBQXNCSixRQUMzQ0sscUJBQXFCRCxzQkFBc0JILFFBQzNDSywyQkFBMkJILG1CQUFtQkksTUFBTSxFQUNwREMsMkJBQTJCSCxtQkFBbUJFLE1BQU0sRUFDcERFLDZCQUE2QkMsS0FBS0MsR0FBRyxDQUFDTCwwQkFBMEJFO0lBRXRFLElBQUssSUFBSUksUUFBUSxHQUFHQSxRQUFRSCw0QkFBNEJHLFFBQVM7UUFDL0QsSUFBTUMsb0JBQW9CVixrQkFBa0IsQ0FBQ1MsTUFBTSxFQUM3Q0Usb0JBQW9CVCxrQkFBa0IsQ0FBQ08sTUFBTTtRQUVuRCxJQUFJQyxzQkFBc0JDLG1CQUFtQjtZQUMzQyxJQUFNQyxjQUFjSCxRQUFRLEdBQ3RCSSw4QkFBOEJiLGtCQUFrQixDQUFDWSxZQUFZLEVBQzdERSxhQUFhRCw2QkFDYkUsYUFBYUwsbUJBQ2JNLGFBQWFMLG1CQUNiTSxTQUFTSCxXQUFXSSxnQkFBZ0IsQ0FBQ0gsYUFDckNJLFNBQVNMLFdBQVdJLGdCQUFnQixDQUFDRjtZQUUzQ2pCLFdBQVlrQixTQUFTRTtZQUVyQjtRQUNGO0lBQ0Y7SUFFQSxJQUFJcEIsYUFBYSxNQUFNO1FBQ3JCQSxXQUFZSSwyQkFBMkJFO0lBQ3pDO0lBRUEsT0FBT047QUFDVDtBQUVPLFNBQVNILDBCQUEwQndCLGtCQUFrQixFQUFFQyxVQUFVO0lBQ3RFLElBQUlBLGVBQWVDLFdBQVc7UUFDNUJELGFBQWFELG9CQUFvQixHQUFHO1FBRXBDQSxxQkFBcUIsU0FBQ0c7bUJBQWNDLGFBQUk7V0FBRyxHQUFHO0lBQ2hEO0lBRUEsSUFBTUMsUUFBUUosWUFBWSxHQUFHO0lBRTdCSyxXQUFXRDtJQUVYLElBQU1GLFlBQVksTUFDWkksUUFBUVAsbUJBQW1CRyxZQUMzQkssY0FBY0QsTUFBTUUsV0FBVyxJQUMvQkMscUJBQXFCLElBQUlDO0lBRS9CVixXQUFXVyxPQUFPLENBQUMsU0FBQ1Q7UUFDbEIsSUFBSVQsYUFBYWMsYUFBYSxHQUFHO1FBRWpDTCxVQUFVVSxnQkFBZ0IsQ0FBQyxTQUFDQztZQUMxQixJQUFNWCxjQUFZVyxjQUNaQyxPQUFPTCxtQkFBbUJNLEdBQUcsQ0FBQ2IsZ0JBQWM7WUFFbEQsSUFBSVksU0FBUyxNQUFNO2dCQUNqQnJCLGFBQWFxQixNQUFPLEdBQUc7Z0JBRXZCLE9BQU87WUFDVDtRQUNGO1FBRUEsSUFBTVIsUUFBUVAsbUJBQW1CRyxZQUMzQlksT0FBT1IsTUFBTVUsYUFBYSxDQUFDZCxZQUMzQmUsb0JBQW9CSCxNQUFNLEdBQUc7UUFFbkNyQixXQUFXeUIsZUFBZSxDQUFDRDtRQUUzQlIsbUJBQW1CVSxHQUFHLENBQUNqQixXQUFXWTtJQUNwQztJQUVBLE9BQU9QO0FBQ1Q7SUFFQSxXQUFlO0lBQ2JqQyxZQUFBQTtJQUNBQywyQkFBQUE7QUFDRjtBQUVBLFNBQVM4QixXQUFXRCxLQUFLO0lBQ3ZCQSxNQUFNZ0IsSUFBSSxDQUFDLFNBQUM1QyxPQUFPQztRQUNqQixJQUFNNEMscUJBQXFCL0MsV0FBV0UsT0FBT0MsUUFDdkM2QyxTQUFTRCxxQkFDRSxDQUFDLElBQ0MsQ0FBQztRQUVwQixPQUFPQztJQUNUO0FBQ0Y7QUFFQSxTQUFTMUMsc0JBQXNCa0MsSUFBSTtJQUNqQyxJQUFNUyxnQkFBZ0JULEtBQUtVLGdCQUFnQjtJQUUzQ0QsY0FBY0UsT0FBTyxDQUFDWDtJQUV0QlMsY0FBY0csT0FBTztJQUVyQixPQUFPSDtBQUNUIn0=