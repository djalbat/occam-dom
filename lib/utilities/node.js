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
    var topmostNode = Class.fromNothing(), outerNodeToNodeMap = new WeakMap();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vZGUgZnJvbSBcIi4uL25vZGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3ROb2RlRnJvbU91dGVyTm9kZXMoQ2xhc3MsIG91dGVyTm9kZXMpIHtcbiAgaWYgKG91dGVyTm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgIG91dGVyTm9kZXMgPSBDbGFzczsgLy8vXG5cbiAgICBDbGFzcyA9IE5vZGU7ICAvLy9cbiAgfVxuXG4gIGNvbnN0IG5vZGVzID0gb3V0ZXJOb2RlczsgLy8vXG5cbiAgb3JkZXJOb2Rlcyhub2Rlcyk7XG5cbiAgY29uc3QgdG9wbW9zdE5vZGUgPSBDbGFzcy5mcm9tTm90aGluZygpLFxuICAgICAgICBvdXRlck5vZGVUb05vZGVNYXAgPSBuZXcgV2Vha01hcCgpO1xuXG4gIG91dGVyTm9kZXMuZm9yRWFjaCgob3V0ZXJOb2RlKSA9PiB7XG4gICAgbGV0IHBhcmVudE5vZGUgPSB0b3Btb3N0Tm9kZTsgLy8vXG5cbiAgICBzb21lQW5jZXN0b3JOb2RlKG91dGVyTm9kZSwgKGFuY2VzdG9yTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgb3V0ZXJOb2RlID0gYW5jZXN0b3JOb2RlLCAvLy9cbiAgICAgICAgICAgIG5vZGUgPSBvdXRlck5vZGVUb05vZGVNYXAuZ2V0KG91dGVyTm9kZSkgfHwgbnVsbDtcblxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgcGFyZW50Tm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IG5vZGUgPSBDbGFzcy5mcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSksXG4gICAgICAgICAgY2hpbGROb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIG11bHRpcGxpY2l0eSA9IHBhcmVudE5vZGUuZ2V0TXVsdGlwbGljaXR5KCksXG4gICAgICAgICAgc3RhcnRJbmRleCA9IG11bHRpcGxpY2l0eTsgIC8vL1xuXG4gICAgcGFyZW50Tm9kZS5hZGRDaGlsZE5vZGUoY2hpbGROb2RlLCBzdGFydEluZGV4KTtcblxuICAgIG91dGVyTm9kZVRvTm9kZU1hcC5zZXQob3V0ZXJOb2RlLCBub2RlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRvcG1vc3ROb2RlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRvcG1vc3ROb2RlRnJvbU91dGVyTm9kZXNcbn07XG5cbmZ1bmN0aW9uIG9yZGVyTm9kZXMobm9kZXMpIHtcbiAgbm9kZXMuc29ydCgobm9kZUEsIG5vZGVCKSA9PiB7XG4gICAgY29uc3Qgbm9kZUFMZXNzVGhhbk5vZGVCID0gaXNMZXNzVGhhbihub2RlQSwgbm9kZUIpLFxuICAgICAgICAgIHJlc3VsdCA9IG5vZGVBTGVzc1RoYW5Ob2RlQiA/XG4gICAgICAgICAgICAgICAgICAgICAtMSA6XG4gICAgICAgICAgICAgICAgICAgICAgICsxO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGlzTGVzc1RoYW4obm9kZUEsIG5vZGVCKSB7XG4gIGxldCBsZXNzVGhhbiA9IG51bGw7XG5cbiAgY29uc3QgYW5jZXN0b3JOb2Rlc0EgPSBhbmNlc3Rvck5vZGVzRnJvbU5vZGUobm9kZUEpLFxuICAgICAgICBhbmNlc3Rvck5vZGVzQiA9IGFuY2VzdG9yTm9kZXNGcm9tTm9kZShub2RlQiksXG4gICAgICAgIGFuY2VzdG9yTm9kZXNBTGVuZ3RoID0gYW5jZXN0b3JOb2Rlc0EubGVuZ3RoLFxuICAgICAgICBhbmNlc3Rvck5vZGVzQkxlbmd0aCA9IGFuY2VzdG9yTm9kZXNCLmxlbmd0aCxcbiAgICAgICAgbWluaW11bUFuY2VzdG9yTm9kZXNMZW5ndGggPSBNYXRoLm1pbihhbmNlc3Rvck5vZGVzQUxlbmd0aCwgYW5jZXN0b3JOb2Rlc0JMZW5ndGgpO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtaW5pbXVtQW5jZXN0b3JOb2Rlc0xlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGFuY2VzdG9yTm9kZUEgPSBhbmNlc3Rvck5vZGVzQVtpbmRleF0sXG4gICAgICAgICAgYW5jZXN0b3JOb2RlQiA9IGFuY2VzdG9yTm9kZXNCW2luZGV4XTtcblxuICAgIGlmIChhbmNlc3Rvck5vZGVBICE9PSBhbmNlc3Rvck5vZGVCKSB7XG4gICAgICBjb25zdCBwYXJlbnRJbmRleCA9IGluZGV4IC0gMSxcbiAgICAgICAgICAgIGFuY2VzdG9yTm9kZUFQYXJlbnROb2RlID0gYW5jZXN0b3JOb2Rlc0FbcGFyZW50SW5kZXhdLFxuICAgICAgICAgICAgcGFyZW50Tm9kZSA9IGFuY2VzdG9yTm9kZUFQYXJlbnROb2RlLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZUEgPSBhbmNlc3Rvck5vZGVBLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZUIgPSBhbmNlc3Rvck5vZGVCLCAvLy9cbiAgICAgICAgICAgIGluZGV4QSA9IHBhcmVudE5vZGUuaW5kZXhPZkNoaWxkTm9kZShjaGlsZE5vZGVBKSxcbiAgICAgICAgICAgIGluZGV4QiA9IHBhcmVudE5vZGUuaW5kZXhPZkNoaWxkTm9kZShjaGlsZE5vZGVCKTtcblxuICAgICAgbGVzc1RoYW4gPSAoaW5kZXhBIDwgaW5kZXhCKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGxlc3NUaGFuID09PSBudWxsKSB7XG4gICAgbGVzc1RoYW4gPSAoYW5jZXN0b3JOb2Rlc0FMZW5ndGggPCBhbmNlc3Rvck5vZGVzQkxlbmd0aCk7XG4gIH1cblxuICByZXR1cm4gbGVzc1RoYW47XG59XG5cbmZ1bmN0aW9uIHNvbWVBbmNlc3Rvck5vZGUobm9kZSwgY2FsbGJhY2spIHtcbiAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuXG4gIGxldCBwYXJlbnROb2RlID0gbm9kZS5nZXRQYXJlbnROb2RlKCk7XG5cbiAgd2hpbGUgKHBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBhbmNlc3Rvck5vZGUgPSBwYXJlbnROb2RlOyAgLy8vXG5cbiAgICByZXN1bHQgPSAhIWNhbGxiYWNrKGFuY2VzdG9yTm9kZSk7ICAvLy9cblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIG5vZGUgPSBwYXJlbnROb2RlOyAgLy8vXG5cbiAgICBwYXJlbnROb2RlID0gbm9kZS5nZXRQYXJlbnROb2RlKCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBhbmNlc3Rvck5vZGVzRnJvbU5vZGUobm9kZSkge1xuICBjb25zdCBhbmNlc3Rvck5vZGVzID0gbm9kZS5nZXRBbmNlc3Rvck5vZGVzKCk7XG5cbiAgYW5jZXN0b3JOb2Rlcy51bnNoaWZ0KG5vZGUpO1xuXG4gIGFuY2VzdG9yTm9kZXMucmV2ZXJzZSgpO1xuXG4gIHJldHVybiBhbmNlc3Rvck5vZGVzO1xufSJdLCJuYW1lcyI6WyJ0b3Btb3N0Tm9kZUZyb21PdXRlck5vZGVzIiwiQ2xhc3MiLCJvdXRlck5vZGVzIiwidW5kZWZpbmVkIiwiTm9kZSIsIm5vZGVzIiwib3JkZXJOb2RlcyIsInRvcG1vc3ROb2RlIiwiZnJvbU5vdGhpbmciLCJvdXRlck5vZGVUb05vZGVNYXAiLCJXZWFrTWFwIiwiZm9yRWFjaCIsIm91dGVyTm9kZSIsInBhcmVudE5vZGUiLCJzb21lQW5jZXN0b3JOb2RlIiwiYW5jZXN0b3JOb2RlIiwibm9kZSIsImdldCIsImZyb21PdXRlck5vZGUiLCJjaGlsZE5vZGUiLCJtdWx0aXBsaWNpdHkiLCJnZXRNdWx0aXBsaWNpdHkiLCJzdGFydEluZGV4IiwiYWRkQ2hpbGROb2RlIiwic2V0Iiwic29ydCIsIm5vZGVBIiwibm9kZUIiLCJub2RlQUxlc3NUaGFuTm9kZUIiLCJpc0xlc3NUaGFuIiwicmVzdWx0IiwibGVzc1RoYW4iLCJhbmNlc3Rvck5vZGVzQSIsImFuY2VzdG9yTm9kZXNGcm9tTm9kZSIsImFuY2VzdG9yTm9kZXNCIiwiYW5jZXN0b3JOb2Rlc0FMZW5ndGgiLCJsZW5ndGgiLCJhbmNlc3Rvck5vZGVzQkxlbmd0aCIsIm1pbmltdW1BbmNlc3Rvck5vZGVzTGVuZ3RoIiwiTWF0aCIsIm1pbiIsImluZGV4IiwiYW5jZXN0b3JOb2RlQSIsImFuY2VzdG9yTm9kZUIiLCJwYXJlbnRJbmRleCIsImFuY2VzdG9yTm9kZUFQYXJlbnROb2RlIiwiY2hpbGROb2RlQSIsImNoaWxkTm9kZUIiLCJpbmRleEEiLCJpbmRleE9mQ2hpbGROb2RlIiwiaW5kZXhCIiwiY2FsbGJhY2siLCJnZXRQYXJlbnROb2RlIiwiYW5jZXN0b3JOb2RlcyIsImdldEFuY2VzdG9yTm9kZXMiLCJ1bnNoaWZ0IiwicmV2ZXJzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBNkNBLE9BRUU7ZUFGRjs7SUF6Q2dCQSx5QkFBeUI7ZUFBekJBOzs7MkRBRkM7Ozs7OztBQUVWLFNBQVNBLDBCQUEwQkMsS0FBSyxFQUFFQyxVQUFVO0lBQ3pELElBQUlBLGVBQWVDLFdBQVc7UUFDNUJELGFBQWFELE9BQU8sR0FBRztRQUV2QkEsUUFBUUcsYUFBSSxFQUFHLEdBQUc7SUFDcEI7SUFFQSxJQUFNQyxRQUFRSCxZQUFZLEdBQUc7SUFFN0JJLFdBQVdEO0lBRVgsSUFBTUUsY0FBY04sTUFBTU8sV0FBVyxJQUMvQkMscUJBQXFCLElBQUlDO0lBRS9CUixXQUFXUyxPQUFPLENBQUMsU0FBQ0M7UUFDbEIsSUFBSUMsYUFBYU4sYUFBYSxHQUFHO1FBRWpDTyxpQkFBaUJGLFdBQVcsU0FBQ0c7WUFDM0IsSUFBTUgsY0FBWUcsY0FDWkMsT0FBT1AsbUJBQW1CUSxHQUFHLENBQUNMLGdCQUFjO1lBRWxELElBQUlJLFNBQVMsTUFBTTtnQkFDakJILGFBQWFHLE1BQU8sR0FBRztnQkFFdkIsT0FBTztZQUNUO1FBQ0Y7UUFFQSxJQUFNQSxPQUFPZixNQUFNaUIsYUFBYSxDQUFDTixZQUMzQk8sWUFBWUgsTUFDWkksZUFBZVAsV0FBV1EsZUFBZSxJQUN6Q0MsYUFBYUYsY0FBZSxHQUFHO1FBRXJDUCxXQUFXVSxZQUFZLENBQUNKLFdBQVdHO1FBRW5DYixtQkFBbUJlLEdBQUcsQ0FBQ1osV0FBV0k7SUFDcEM7SUFFQSxPQUFPVDtBQUNUO0lBRUEsV0FBZTtJQUNiUCwyQkFBQUE7QUFDRjtBQUVBLFNBQVNNLFdBQVdELEtBQUs7SUFDdkJBLE1BQU1vQixJQUFJLENBQUMsU0FBQ0MsT0FBT0M7UUFDakIsSUFBTUMscUJBQXFCQyxXQUFXSCxPQUFPQyxRQUN2Q0csU0FBU0YscUJBQ0UsQ0FBQyxJQUNDLENBQUM7UUFFcEIsT0FBT0U7SUFDVDtBQUNGO0FBRUEsU0FBU0QsV0FBV0gsS0FBSyxFQUFFQyxLQUFLO0lBQzlCLElBQUlJLFdBQVc7SUFFZixJQUFNQyxpQkFBaUJDLHNCQUFzQlAsUUFDdkNRLGlCQUFpQkQsc0JBQXNCTixRQUN2Q1EsdUJBQXVCSCxlQUFlSSxNQUFNLEVBQzVDQyx1QkFBdUJILGVBQWVFLE1BQU0sRUFDNUNFLDZCQUE2QkMsS0FBS0MsR0FBRyxDQUFDTCxzQkFBc0JFO0lBRWxFLElBQUssSUFBSUksUUFBUSxHQUFHQSxRQUFRSCw0QkFBNEJHLFFBQVM7UUFDL0QsSUFBTUMsZ0JBQWdCVixjQUFjLENBQUNTLE1BQU0sRUFDckNFLGdCQUFnQlQsY0FBYyxDQUFDTyxNQUFNO1FBRTNDLElBQUlDLGtCQUFrQkMsZUFBZTtZQUNuQyxJQUFNQyxjQUFjSCxRQUFRLEdBQ3RCSSwwQkFBMEJiLGNBQWMsQ0FBQ1ksWUFBWSxFQUNyRC9CLGFBQWFnQyx5QkFDYkMsYUFBYUosZUFDYkssYUFBYUosZUFDYkssU0FBU25DLFdBQVdvQyxnQkFBZ0IsQ0FBQ0gsYUFDckNJLFNBQVNyQyxXQUFXb0MsZ0JBQWdCLENBQUNGO1lBRTNDaEIsV0FBWWlCLFNBQVNFO1lBRXJCO1FBQ0Y7SUFDRjtJQUVBLElBQUluQixhQUFhLE1BQU07UUFDckJBLFdBQVlJLHVCQUF1QkU7SUFDckM7SUFFQSxPQUFPTjtBQUNUO0FBRUEsU0FBU2pCLGlCQUFpQkUsSUFBSSxFQUFFbUMsUUFBUTtJQUN0QyxJQUFJckIsU0FBUztJQUViLElBQUlqQixhQUFhRyxLQUFLb0MsYUFBYTtJQUVuQyxNQUFPdkMsZUFBZSxLQUFNO1FBQzFCLElBQU1FLGVBQWVGLFlBQWEsR0FBRztRQUVyQ2lCLFNBQVMsQ0FBQyxDQUFDcUIsU0FBU3BDLGVBQWdCLEdBQUc7UUFFdkMsSUFBSWUsUUFBUTtZQUNWO1FBQ0Y7UUFFQWQsT0FBT0gsWUFBYSxHQUFHO1FBRXZCQSxhQUFhRyxLQUFLb0MsYUFBYTtJQUNqQztJQUVBLE9BQU90QjtBQUNUO0FBRUEsU0FBU0csc0JBQXNCakIsSUFBSTtJQUNqQyxJQUFNcUMsZ0JBQWdCckMsS0FBS3NDLGdCQUFnQjtJQUUzQ0QsY0FBY0UsT0FBTyxDQUFDdkM7SUFFdEJxQyxjQUFjRyxPQUFPO0lBRXJCLE9BQU9IO0FBQ1QifQ==