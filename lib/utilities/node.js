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
function topmostNodeFromOuterNodes(Class, outerNodes) {
    if (outerNodes === undefined) {
        outerNodes = Class; ///
        Class = _node.default; ///
    }
    var nodes = outerNodes; ///
    orderNodes(nodes);
    var topmostNode = _node.default.fromNothing(), outerNodeToNodeMap = new WeakMap();
    outerNodes.forEach(function(outerNode) {
        var parentNode = topmostNode; ///
        someAncestorNode(outerNode, function(ancestorNode) {
            var _$outerNode = ancestorNode, node = outerNodeToNodeMap.get(_$outerNode) || null;
            if (node !== null) {
                parentNode = node; ///
                return true;
            }
        });
        var node = Class.fromOuterNode(outerNode), childNode = node, multiplicity = parentNode.getMultiplicity(), startIndex = multiplicity; ///
        parentNode.addChildNode(childNode, startIndex);
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
    var ancestorNodesA = ancestorNodesFromNode(nodeA), ancestorNodesB = ancestorNodesFromNode(nodeB), ancestorNodesALength = ancestorNodesA.length, ancestorNodesBLength = ancestorNodesB.length, minimumAncestorNodesLength = Math.min(ancestorNodesALength, ancestorNodesBLength);
    for(var index = 0; index < minimumAncestorNodesLength; index++){
        var ancestorNodeA = ancestorNodesA[index], ancestorNodeB = ancestorNodesB[index];
        if (ancestorNodeA !== ancestorNodeB) {
            var parentIndex = index - 1, ancestorNodeAParentNode = ancestorNodesA[parentIndex], parentNode = ancestorNodeAParentNode, childNodeA = ancestorNodeA, childNodeB = ancestorNodeB, indexA = parentNode.indexOfChildNode(childNodeA), indexB = parentNode.indexOfChildNode(childNodeB);
            lessThan = indexA < indexB;
            break;
        }
    }
    if (lessThan === null) {
        lessThan = ancestorNodesALength < ancestorNodesBLength;
    }
    return lessThan;
}
function someAncestorNode(node, callback) {
    var result = false;
    var parentNode = node.getParentNode();
    while(parentNode !== null){
        var ancestorNode = parentNode; ///
        result = !!callback(ancestorNode); ///
        if (result) {
            break;
        }
        node = parentNode; ///
        parentNode = node.getParentNode();
    }
    return result;
}
function ancestorNodesFromNode(node) {
    var ancestorNodes = node.getAncestorNodes();
    ancestorNodes.unshift(node);
    ancestorNodes.reverse();
    return ancestorNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vZGUgZnJvbSBcIi4uL25vZGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3ROb2RlRnJvbU91dGVyTm9kZXMoQ2xhc3MsIG91dGVyTm9kZXMpIHtcbiAgaWYgKG91dGVyTm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgIG91dGVyTm9kZXMgPSBDbGFzczsgLy8vXG5cbiAgICBDbGFzcyA9IE5vZGU7ICAvLy9cbiAgfVxuXG4gIGNvbnN0IG5vZGVzID0gb3V0ZXJOb2RlczsgLy8vXG5cbiAgb3JkZXJOb2Rlcyhub2Rlcyk7XG5cbiAgY29uc3QgdG9wbW9zdE5vZGUgPSBOb2RlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgIG91dGVyTm9kZVRvTm9kZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgb3V0ZXJOb2Rlcy5mb3JFYWNoKChvdXRlck5vZGUpID0+IHtcbiAgICBsZXQgcGFyZW50Tm9kZSA9IHRvcG1vc3ROb2RlOyAvLy9cblxuICAgIHNvbWVBbmNlc3Rvck5vZGUob3V0ZXJOb2RlLCAoYW5jZXN0b3JOb2RlKSA9PiB7XG4gICAgICBjb25zdCBvdXRlck5vZGUgPSBhbmNlc3Rvck5vZGUsIC8vL1xuICAgICAgICAgICAgbm9kZSA9IG91dGVyTm9kZVRvTm9kZU1hcC5nZXQob3V0ZXJOb2RlKSB8fCBudWxsO1xuXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBwYXJlbnROb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgbm9kZSA9IENsYXNzLmZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSxcbiAgICAgICAgICBjaGlsZE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgbXVsdGlwbGljaXR5ID0gcGFyZW50Tm9kZS5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgICBzdGFydEluZGV4ID0gbXVsdGlwbGljaXR5OyAgLy8vXG5cbiAgICBwYXJlbnROb2RlLmFkZENoaWxkTm9kZShjaGlsZE5vZGUsIHN0YXJ0SW5kZXgpO1xuXG4gICAgb3V0ZXJOb2RlVG9Ob2RlTWFwLnNldChvdXRlck5vZGUsIG5vZGUpO1xuICB9KTtcblxuICByZXR1cm4gdG9wbW9zdE5vZGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdG9wbW9zdE5vZGVGcm9tT3V0ZXJOb2Rlc1xufTtcblxuZnVuY3Rpb24gb3JkZXJOb2Rlcyhub2Rlcykge1xuICBub2Rlcy5zb3J0KChub2RlQSwgbm9kZUIpID0+IHtcbiAgICBjb25zdCBub2RlQUxlc3NUaGFuTm9kZUIgPSBpc0xlc3NUaGFuKG5vZGVBLCBub2RlQiksXG4gICAgICAgICAgcmVzdWx0ID0gbm9kZUFMZXNzVGhhbk5vZGVCID9cbiAgICAgICAgICAgICAgICAgICAgIC0xIDpcbiAgICAgICAgICAgICAgICAgICAgICAgKzE7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaXNMZXNzVGhhbihub2RlQSwgbm9kZUIpIHtcbiAgbGV0IGxlc3NUaGFuID0gbnVsbDtcblxuICBjb25zdCBhbmNlc3Rvck5vZGVzQSA9IGFuY2VzdG9yTm9kZXNGcm9tTm9kZShub2RlQSksXG4gICAgICAgIGFuY2VzdG9yTm9kZXNCID0gYW5jZXN0b3JOb2Rlc0Zyb21Ob2RlKG5vZGVCKSxcbiAgICAgICAgYW5jZXN0b3JOb2Rlc0FMZW5ndGggPSBhbmNlc3Rvck5vZGVzQS5sZW5ndGgsXG4gICAgICAgIGFuY2VzdG9yTm9kZXNCTGVuZ3RoID0gYW5jZXN0b3JOb2Rlc0IubGVuZ3RoLFxuICAgICAgICBtaW5pbXVtQW5jZXN0b3JOb2Rlc0xlbmd0aCA9IE1hdGgubWluKGFuY2VzdG9yTm9kZXNBTGVuZ3RoLCBhbmNlc3Rvck5vZGVzQkxlbmd0aCk7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1pbmltdW1BbmNlc3Rvck5vZGVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgYW5jZXN0b3JOb2RlQSA9IGFuY2VzdG9yTm9kZXNBW2luZGV4XSxcbiAgICAgICAgICBhbmNlc3Rvck5vZGVCID0gYW5jZXN0b3JOb2Rlc0JbaW5kZXhdO1xuXG4gICAgaWYgKGFuY2VzdG9yTm9kZUEgIT09IGFuY2VzdG9yTm9kZUIpIHtcbiAgICAgIGNvbnN0IHBhcmVudEluZGV4ID0gaW5kZXggLSAxLFxuICAgICAgICAgICAgYW5jZXN0b3JOb2RlQVBhcmVudE5vZGUgPSBhbmNlc3Rvck5vZGVzQVtwYXJlbnRJbmRleF0sXG4gICAgICAgICAgICBwYXJlbnROb2RlID0gYW5jZXN0b3JOb2RlQVBhcmVudE5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlQSA9IGFuY2VzdG9yTm9kZUEsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlQiA9IGFuY2VzdG9yTm9kZUIsIC8vL1xuICAgICAgICAgICAgaW5kZXhBID0gcGFyZW50Tm9kZS5pbmRleE9mQ2hpbGROb2RlKGNoaWxkTm9kZUEpLFxuICAgICAgICAgICAgaW5kZXhCID0gcGFyZW50Tm9kZS5pbmRleE9mQ2hpbGROb2RlKGNoaWxkTm9kZUIpO1xuXG4gICAgICBsZXNzVGhhbiA9IChpbmRleEEgPCBpbmRleEIpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAobGVzc1RoYW4gPT09IG51bGwpIHtcbiAgICBsZXNzVGhhbiA9IChhbmNlc3Rvck5vZGVzQUxlbmd0aCA8IGFuY2VzdG9yTm9kZXNCTGVuZ3RoKTtcbiAgfVxuXG4gIHJldHVybiBsZXNzVGhhbjtcbn1cblxuZnVuY3Rpb24gc29tZUFuY2VzdG9yTm9kZShub2RlLCBjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0ID0gZmFsc2U7XG5cbiAgbGV0IHBhcmVudE5vZGUgPSBub2RlLmdldFBhcmVudE5vZGUoKTtcblxuICB3aGlsZSAocGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGFuY2VzdG9yTm9kZSA9IHBhcmVudE5vZGU7ICAvLy9cblxuICAgIHJlc3VsdCA9ICEhY2FsbGJhY2soYW5jZXN0b3JOb2RlKTsgIC8vL1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbm9kZSA9IHBhcmVudE5vZGU7ICAvLy9cblxuICAgIHBhcmVudE5vZGUgPSBub2RlLmdldFBhcmVudE5vZGUoKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGFuY2VzdG9yTm9kZXNGcm9tTm9kZShub2RlKSB7XG4gIGNvbnN0IGFuY2VzdG9yTm9kZXMgPSBub2RlLmdldEFuY2VzdG9yTm9kZXMoKTtcblxuICBhbmNlc3Rvck5vZGVzLnVuc2hpZnQobm9kZSk7XG5cbiAgYW5jZXN0b3JOb2Rlcy5yZXZlcnNlKCk7XG5cbiAgcmV0dXJuIGFuY2VzdG9yTm9kZXM7XG59Il0sIm5hbWVzIjpbInRvcG1vc3ROb2RlRnJvbU91dGVyTm9kZXMiLCJDbGFzcyIsIm91dGVyTm9kZXMiLCJ1bmRlZmluZWQiLCJOb2RlIiwibm9kZXMiLCJvcmRlck5vZGVzIiwidG9wbW9zdE5vZGUiLCJmcm9tTm90aGluZyIsIm91dGVyTm9kZVRvTm9kZU1hcCIsIldlYWtNYXAiLCJmb3JFYWNoIiwib3V0ZXJOb2RlIiwicGFyZW50Tm9kZSIsInNvbWVBbmNlc3Rvck5vZGUiLCJhbmNlc3Rvck5vZGUiLCJub2RlIiwiZ2V0IiwiZnJvbU91dGVyTm9kZSIsImNoaWxkTm9kZSIsIm11bHRpcGxpY2l0eSIsImdldE11bHRpcGxpY2l0eSIsInN0YXJ0SW5kZXgiLCJhZGRDaGlsZE5vZGUiLCJzZXQiLCJzb3J0Iiwibm9kZUEiLCJub2RlQiIsIm5vZGVBTGVzc1RoYW5Ob2RlQiIsImlzTGVzc1RoYW4iLCJyZXN1bHQiLCJsZXNzVGhhbiIsImFuY2VzdG9yTm9kZXNBIiwiYW5jZXN0b3JOb2Rlc0Zyb21Ob2RlIiwiYW5jZXN0b3JOb2Rlc0IiLCJhbmNlc3Rvck5vZGVzQUxlbmd0aCIsImxlbmd0aCIsImFuY2VzdG9yTm9kZXNCTGVuZ3RoIiwibWluaW11bUFuY2VzdG9yTm9kZXNMZW5ndGgiLCJNYXRoIiwibWluIiwiaW5kZXgiLCJhbmNlc3Rvck5vZGVBIiwiYW5jZXN0b3JOb2RlQiIsInBhcmVudEluZGV4IiwiYW5jZXN0b3JOb2RlQVBhcmVudE5vZGUiLCJjaGlsZE5vZGVBIiwiY2hpbGROb2RlQiIsImluZGV4QSIsImluZGV4T2ZDaGlsZE5vZGUiLCJpbmRleEIiLCJjYWxsYmFjayIsImdldFBhcmVudE5vZGUiLCJhbmNlc3Rvck5vZGVzIiwiZ2V0QW5jZXN0b3JOb2RlcyIsInVuc2hpZnQiLCJyZXZlcnNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUE2Q0EsT0FFRTtlQUZGOztJQXpDZ0JBLHlCQUF5QjtlQUF6QkE7OzsyREFGQzs7Ozs7O0FBRVYsU0FBU0EsMEJBQTBCQyxLQUFLLEVBQUVDLFVBQVU7SUFDekQsSUFBSUEsZUFBZUMsV0FBVztRQUM1QkQsYUFBYUQsT0FBTyxHQUFHO1FBRXZCQSxRQUFRRyxhQUFJLEVBQUcsR0FBRztJQUNwQjtJQUVBLElBQU1DLFFBQVFILFlBQVksR0FBRztJQUU3QkksV0FBV0Q7SUFFWCxJQUFNRSxjQUFjSCxhQUFJLENBQUNJLFdBQVcsSUFDOUJDLHFCQUFxQixJQUFJQztJQUUvQlIsV0FBV1MsT0FBTyxDQUFDLFNBQUNDO1FBQ2xCLElBQUlDLGFBQWFOLGFBQWEsR0FBRztRQUVqQ08saUJBQWlCRixXQUFXLFNBQUNHO1lBQzNCLElBQU1ILGNBQVlHLGNBQ1pDLE9BQU9QLG1CQUFtQlEsR0FBRyxDQUFDTCxnQkFBYztZQUVsRCxJQUFJSSxTQUFTLE1BQU07Z0JBQ2pCSCxhQUFhRyxNQUFPLEdBQUc7Z0JBRXZCLE9BQU87WUFDVDtRQUNGO1FBRUEsSUFBTUEsT0FBT2YsTUFBTWlCLGFBQWEsQ0FBQ04sWUFDM0JPLFlBQVlILE1BQ1pJLGVBQWVQLFdBQVdRLGVBQWUsSUFDekNDLGFBQWFGLGNBQWUsR0FBRztRQUVyQ1AsV0FBV1UsWUFBWSxDQUFDSixXQUFXRztRQUVuQ2IsbUJBQW1CZSxHQUFHLENBQUNaLFdBQVdJO0lBQ3BDO0lBRUEsT0FBT1Q7QUFDVDtJQUVBLFdBQWU7SUFDYlAsMkJBQUFBO0FBQ0Y7QUFFQSxTQUFTTSxXQUFXRCxLQUFLO0lBQ3ZCQSxNQUFNb0IsSUFBSSxDQUFDLFNBQUNDLE9BQU9DO1FBQ2pCLElBQU1DLHFCQUFxQkMsV0FBV0gsT0FBT0MsUUFDdkNHLFNBQVNGLHFCQUNFLENBQUMsSUFDQyxDQUFDO1FBRXBCLE9BQU9FO0lBQ1Q7QUFDRjtBQUVBLFNBQVNELFdBQVdILEtBQUssRUFBRUMsS0FBSztJQUM5QixJQUFJSSxXQUFXO0lBRWYsSUFBTUMsaUJBQWlCQyxzQkFBc0JQLFFBQ3ZDUSxpQkFBaUJELHNCQUFzQk4sUUFDdkNRLHVCQUF1QkgsZUFBZUksTUFBTSxFQUM1Q0MsdUJBQXVCSCxlQUFlRSxNQUFNLEVBQzVDRSw2QkFBNkJDLEtBQUtDLEdBQUcsQ0FBQ0wsc0JBQXNCRTtJQUVsRSxJQUFLLElBQUlJLFFBQVEsR0FBR0EsUUFBUUgsNEJBQTRCRyxRQUFTO1FBQy9ELElBQU1DLGdCQUFnQlYsY0FBYyxDQUFDUyxNQUFNLEVBQ3JDRSxnQkFBZ0JULGNBQWMsQ0FBQ08sTUFBTTtRQUUzQyxJQUFJQyxrQkFBa0JDLGVBQWU7WUFDbkMsSUFBTUMsY0FBY0gsUUFBUSxHQUN0QkksMEJBQTBCYixjQUFjLENBQUNZLFlBQVksRUFDckQvQixhQUFhZ0MseUJBQ2JDLGFBQWFKLGVBQ2JLLGFBQWFKLGVBQ2JLLFNBQVNuQyxXQUFXb0MsZ0JBQWdCLENBQUNILGFBQ3JDSSxTQUFTckMsV0FBV29DLGdCQUFnQixDQUFDRjtZQUUzQ2hCLFdBQVlpQixTQUFTRTtZQUVyQjtRQUNGO0lBQ0Y7SUFFQSxJQUFJbkIsYUFBYSxNQUFNO1FBQ3JCQSxXQUFZSSx1QkFBdUJFO0lBQ3JDO0lBRUEsT0FBT047QUFDVDtBQUVBLFNBQVNqQixpQkFBaUJFLElBQUksRUFBRW1DLFFBQVE7SUFDdEMsSUFBSXJCLFNBQVM7SUFFYixJQUFJakIsYUFBYUcsS0FBS29DLGFBQWE7SUFFbkMsTUFBT3ZDLGVBQWUsS0FBTTtRQUMxQixJQUFNRSxlQUFlRixZQUFhLEdBQUc7UUFFckNpQixTQUFTLENBQUMsQ0FBQ3FCLFNBQVNwQyxlQUFnQixHQUFHO1FBRXZDLElBQUllLFFBQVE7WUFDVjtRQUNGO1FBRUFkLE9BQU9ILFlBQWEsR0FBRztRQUV2QkEsYUFBYUcsS0FBS29DLGFBQWE7SUFDakM7SUFFQSxPQUFPdEI7QUFDVDtBQUVBLFNBQVNHLHNCQUFzQmpCLElBQUk7SUFDakMsSUFBTXFDLGdCQUFnQnJDLEtBQUtzQyxnQkFBZ0I7SUFFM0NELGNBQWNFLE9BQU8sQ0FBQ3ZDO0lBRXRCcUMsY0FBY0csT0FBTztJQUVyQixPQUFPSDtBQUNUIn0=