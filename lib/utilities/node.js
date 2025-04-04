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
        var ancestorNodes = outerNode.getAncestorNodes();
        var parentNode = topmostNode; ///
        ancestorNodes.some(function(ancestorNode) {
            var _$outerNode = ancestorNode, node = outerNodeToNodeMap.get(_$outerNode) || null;
            if (node !== null) {
                parentNode = node; ///
                return true;
            }
        });
        var node = Class.fromOuterNode(outerNode), childNode = node; ///
        parentNode.addChildNode(childNode);
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
function ancestorNodesFromNode(node) {
    var ancestorNodes = node.getAncestorNodes();
    ancestorNodes.unshift(node);
    ancestorNodes.reverse();
    return ancestorNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vZGUgZnJvbSBcIi4uL25vZGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3ROb2RlRnJvbU91dGVyTm9kZXMoQ2xhc3MsIG91dGVyTm9kZXMpIHtcbiAgaWYgKG91dGVyTm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgIG91dGVyTm9kZXMgPSBDbGFzczsgLy8vXG5cbiAgICBDbGFzcyA9IE5vZGU7ICAvLy9cbiAgfVxuXG4gIGNvbnN0IG5vZGVzID0gb3V0ZXJOb2RlczsgLy8vXG5cbiAgb3JkZXJOb2Rlcyhub2Rlcyk7XG5cbiAgY29uc3QgdG9wbW9zdE5vZGUgPSBOb2RlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgIG91dGVyTm9kZVRvTm9kZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgb3V0ZXJOb2Rlcy5mb3JFYWNoKChvdXRlck5vZGUpID0+IHtcbiAgICBjb25zdCBhbmNlc3Rvck5vZGVzID0gb3V0ZXJOb2RlLmdldEFuY2VzdG9yTm9kZXMoKTtcblxuICAgIGxldCBwYXJlbnROb2RlID0gdG9wbW9zdE5vZGU7IC8vL1xuXG4gICAgYW5jZXN0b3JOb2Rlcy5zb21lKChhbmNlc3Rvck5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG91dGVyTm9kZSA9IGFuY2VzdG9yTm9kZSwgLy8vXG4gICAgICAgICAgICBub2RlID0gb3V0ZXJOb2RlVG9Ob2RlTWFwLmdldChvdXRlck5vZGUpIHx8IG51bGw7XG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIHBhcmVudE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBub2RlID0gQ2xhc3MuZnJvbU91dGVyTm9kZShvdXRlck5vZGUpLFxuICAgICAgICAgIGNoaWxkTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHBhcmVudE5vZGUuYWRkQ2hpbGROb2RlKGNoaWxkTm9kZSk7XG5cbiAgICBvdXRlck5vZGVUb05vZGVNYXAuc2V0KG91dGVyTm9kZSwgbm9kZSk7XG4gIH0pO1xuXG4gIHJldHVybiB0b3Btb3N0Tm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICB0b3Btb3N0Tm9kZUZyb21PdXRlck5vZGVzXG59O1xuXG5mdW5jdGlvbiBvcmRlck5vZGVzKG5vZGVzKSB7XG4gIG5vZGVzLnNvcnQoKG5vZGVBLCBub2RlQikgPT4ge1xuICAgIGNvbnN0IG5vZGVBTGVzc1RoYW5Ob2RlQiA9IGlzTGVzc1RoYW4obm9kZUEsIG5vZGVCKSxcbiAgICAgICAgICByZXN1bHQgPSBub2RlQUxlc3NUaGFuTm9kZUIgP1xuICAgICAgICAgICAgICAgICAgICAgLTEgOlxuICAgICAgICAgICAgICAgICAgICAgICArMTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpc0xlc3NUaGFuKG5vZGVBLCBub2RlQikge1xuICBsZXQgbGVzc1RoYW4gPSBudWxsO1xuXG4gIGNvbnN0IGFuY2VzdG9yTm9kZXNBID0gYW5jZXN0b3JOb2Rlc0Zyb21Ob2RlKG5vZGVBKSxcbiAgICAgICAgYW5jZXN0b3JOb2Rlc0IgPSBhbmNlc3Rvck5vZGVzRnJvbU5vZGUobm9kZUIpLFxuICAgICAgICBhbmNlc3Rvck5vZGVzQUxlbmd0aCA9IGFuY2VzdG9yTm9kZXNBLmxlbmd0aCxcbiAgICAgICAgYW5jZXN0b3JOb2Rlc0JMZW5ndGggPSBhbmNlc3Rvck5vZGVzQi5sZW5ndGgsXG4gICAgICAgIG1pbmltdW1BbmNlc3Rvck5vZGVzTGVuZ3RoID0gTWF0aC5taW4oYW5jZXN0b3JOb2Rlc0FMZW5ndGgsIGFuY2VzdG9yTm9kZXNCTGVuZ3RoKTtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbWluaW11bUFuY2VzdG9yTm9kZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBhbmNlc3Rvck5vZGVBID0gYW5jZXN0b3JOb2Rlc0FbaW5kZXhdLFxuICAgICAgICAgIGFuY2VzdG9yTm9kZUIgPSBhbmNlc3Rvck5vZGVzQltpbmRleF07XG5cbiAgICBpZiAoYW5jZXN0b3JOb2RlQSAhPT0gYW5jZXN0b3JOb2RlQikge1xuICAgICAgY29uc3QgcGFyZW50SW5kZXggPSBpbmRleCAtIDEsXG4gICAgICAgICAgICBhbmNlc3Rvck5vZGVBUGFyZW50Tm9kZSA9IGFuY2VzdG9yTm9kZXNBW3BhcmVudEluZGV4XSxcbiAgICAgICAgICAgIHBhcmVudE5vZGUgPSBhbmNlc3Rvck5vZGVBUGFyZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVBID0gYW5jZXN0b3JOb2RlQSwgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVCID0gYW5jZXN0b3JOb2RlQiwgLy8vXG4gICAgICAgICAgICBpbmRleEEgPSBwYXJlbnROb2RlLmluZGV4T2ZDaGlsZE5vZGUoY2hpbGROb2RlQSksXG4gICAgICAgICAgICBpbmRleEIgPSBwYXJlbnROb2RlLmluZGV4T2ZDaGlsZE5vZGUoY2hpbGROb2RlQik7XG5cbiAgICAgIGxlc3NUaGFuID0gKGluZGV4QSA8IGluZGV4Qik7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChsZXNzVGhhbiA9PT0gbnVsbCkge1xuICAgIGxlc3NUaGFuID0gKGFuY2VzdG9yTm9kZXNBTGVuZ3RoIDwgYW5jZXN0b3JOb2Rlc0JMZW5ndGgpO1xuICB9XG5cbiAgcmV0dXJuIGxlc3NUaGFuO1xufVxuXG5mdW5jdGlvbiBhbmNlc3Rvck5vZGVzRnJvbU5vZGUobm9kZSkge1xuICBjb25zdCBhbmNlc3Rvck5vZGVzID0gbm9kZS5nZXRBbmNlc3Rvck5vZGVzKCk7XG5cbiAgYW5jZXN0b3JOb2Rlcy51bnNoaWZ0KG5vZGUpO1xuXG4gIGFuY2VzdG9yTm9kZXMucmV2ZXJzZSgpO1xuXG4gIHJldHVybiBhbmNlc3Rvck5vZGVzO1xufSJdLCJuYW1lcyI6WyJ0b3Btb3N0Tm9kZUZyb21PdXRlck5vZGVzIiwiQ2xhc3MiLCJvdXRlck5vZGVzIiwidW5kZWZpbmVkIiwiTm9kZSIsIm5vZGVzIiwib3JkZXJOb2RlcyIsInRvcG1vc3ROb2RlIiwiZnJvbU5vdGhpbmciLCJvdXRlck5vZGVUb05vZGVNYXAiLCJXZWFrTWFwIiwiZm9yRWFjaCIsIm91dGVyTm9kZSIsImFuY2VzdG9yTm9kZXMiLCJnZXRBbmNlc3Rvck5vZGVzIiwicGFyZW50Tm9kZSIsInNvbWUiLCJhbmNlc3Rvck5vZGUiLCJub2RlIiwiZ2V0IiwiZnJvbU91dGVyTm9kZSIsImNoaWxkTm9kZSIsImFkZENoaWxkTm9kZSIsInNldCIsInNvcnQiLCJub2RlQSIsIm5vZGVCIiwibm9kZUFMZXNzVGhhbk5vZGVCIiwiaXNMZXNzVGhhbiIsInJlc3VsdCIsImxlc3NUaGFuIiwiYW5jZXN0b3JOb2Rlc0EiLCJhbmNlc3Rvck5vZGVzRnJvbU5vZGUiLCJhbmNlc3Rvck5vZGVzQiIsImFuY2VzdG9yTm9kZXNBTGVuZ3RoIiwibGVuZ3RoIiwiYW5jZXN0b3JOb2Rlc0JMZW5ndGgiLCJtaW5pbXVtQW5jZXN0b3JOb2Rlc0xlbmd0aCIsIk1hdGgiLCJtaW4iLCJpbmRleCIsImFuY2VzdG9yTm9kZUEiLCJhbmNlc3Rvck5vZGVCIiwicGFyZW50SW5kZXgiLCJhbmNlc3Rvck5vZGVBUGFyZW50Tm9kZSIsImNoaWxkTm9kZUEiLCJjaGlsZE5vZGVCIiwiaW5kZXhBIiwiaW5kZXhPZkNoaWxkTm9kZSIsImluZGV4QiIsInVuc2hpZnQiLCJyZXZlcnNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUE2Q0EsT0FFRTtlQUZGOztJQXpDZ0JBLHlCQUF5QjtlQUF6QkE7OzsyREFGQzs7Ozs7O0FBRVYsU0FBU0EsMEJBQTBCQyxLQUFLLEVBQUVDLFVBQVU7SUFDekQsSUFBSUEsZUFBZUMsV0FBVztRQUM1QkQsYUFBYUQsT0FBTyxHQUFHO1FBRXZCQSxRQUFRRyxhQUFJLEVBQUcsR0FBRztJQUNwQjtJQUVBLElBQU1DLFFBQVFILFlBQVksR0FBRztJQUU3QkksV0FBV0Q7SUFFWCxJQUFNRSxjQUFjSCxhQUFJLENBQUNJLFdBQVcsSUFDOUJDLHFCQUFxQixJQUFJQztJQUUvQlIsV0FBV1MsT0FBTyxDQUFDLFNBQUNDO1FBQ2xCLElBQU1DLGdCQUFnQkQsVUFBVUUsZ0JBQWdCO1FBRWhELElBQUlDLGFBQWFSLGFBQWEsR0FBRztRQUVqQ00sY0FBY0csSUFBSSxDQUFDLFNBQUNDO1lBQ2xCLElBQU1MLGNBQVlLLGNBQ1pDLE9BQU9ULG1CQUFtQlUsR0FBRyxDQUFDUCxnQkFBYztZQUVsRCxJQUFJTSxTQUFTLE1BQU07Z0JBQ2pCSCxhQUFhRyxNQUFPLEdBQUc7Z0JBRXZCLE9BQU87WUFDVDtRQUNGO1FBRUEsSUFBTUEsT0FBT2pCLE1BQU1tQixhQUFhLENBQUNSLFlBQzNCUyxZQUFZSCxNQUFPLEdBQUc7UUFFNUJILFdBQVdPLFlBQVksQ0FBQ0Q7UUFFeEJaLG1CQUFtQmMsR0FBRyxDQUFDWCxXQUFXTTtJQUNwQztJQUVBLE9BQU9YO0FBQ1Q7SUFFQSxXQUFlO0lBQ2JQLDJCQUFBQTtBQUNGO0FBRUEsU0FBU00sV0FBV0QsS0FBSztJQUN2QkEsTUFBTW1CLElBQUksQ0FBQyxTQUFDQyxPQUFPQztRQUNqQixJQUFNQyxxQkFBcUJDLFdBQVdILE9BQU9DLFFBQ3ZDRyxTQUFTRixxQkFDRSxDQUFDLElBQ0MsQ0FBQztRQUVwQixPQUFPRTtJQUNUO0FBQ0Y7QUFFQSxTQUFTRCxXQUFXSCxLQUFLLEVBQUVDLEtBQUs7SUFDOUIsSUFBSUksV0FBVztJQUVmLElBQU1DLGlCQUFpQkMsc0JBQXNCUCxRQUN2Q1EsaUJBQWlCRCxzQkFBc0JOLFFBQ3ZDUSx1QkFBdUJILGVBQWVJLE1BQU0sRUFDNUNDLHVCQUF1QkgsZUFBZUUsTUFBTSxFQUM1Q0UsNkJBQTZCQyxLQUFLQyxHQUFHLENBQUNMLHNCQUFzQkU7SUFFbEUsSUFBSyxJQUFJSSxRQUFRLEdBQUdBLFFBQVFILDRCQUE0QkcsUUFBUztRQUMvRCxJQUFNQyxnQkFBZ0JWLGNBQWMsQ0FBQ1MsTUFBTSxFQUNyQ0UsZ0JBQWdCVCxjQUFjLENBQUNPLE1BQU07UUFFM0MsSUFBSUMsa0JBQWtCQyxlQUFlO1lBQ25DLElBQU1DLGNBQWNILFFBQVEsR0FDdEJJLDBCQUEwQmIsY0FBYyxDQUFDWSxZQUFZLEVBQ3JENUIsYUFBYTZCLHlCQUNiQyxhQUFhSixlQUNiSyxhQUFhSixlQUNiSyxTQUFTaEMsV0FBV2lDLGdCQUFnQixDQUFDSCxhQUNyQ0ksU0FBU2xDLFdBQVdpQyxnQkFBZ0IsQ0FBQ0Y7WUFFM0NoQixXQUFZaUIsU0FBU0U7WUFFckI7UUFDRjtJQUNGO0lBRUEsSUFBSW5CLGFBQWEsTUFBTTtRQUNyQkEsV0FBWUksdUJBQXVCRTtJQUNyQztJQUVBLE9BQU9OO0FBQ1Q7QUFFQSxTQUFTRSxzQkFBc0JkLElBQUk7SUFDakMsSUFBTUwsZ0JBQWdCSyxLQUFLSixnQkFBZ0I7SUFFM0NELGNBQWNxQyxPQUFPLENBQUNoQztJQUV0QkwsY0FBY3NDLE9BQU87SUFFckIsT0FBT3RDO0FBQ1QifQ==