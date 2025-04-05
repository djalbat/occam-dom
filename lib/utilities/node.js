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
        someAncestorNode(outerNode, function(ancestorNode) {
            var _$outerNode = ancestorNode, node = outerNodeToNodeMap.get(_$outerNode) || null;
            if (node !== null) {
                parentNode = node; ///
                return true;
            }
        });
        var Class = ClassFromOuterNode(outerNode), node = Class.fromOuterNode(outerNode), childNode = node, multiplicity = parentNode.getMultiplicity(), startIndex = multiplicity; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vZGUgZnJvbSBcIi4uL25vZGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3ROb2RlRnJvbU91dGVyTm9kZXMoQ2xhc3NGcm9tT3V0ZXJOb2RlLCBvdXRlck5vZGVzKSB7XG4gIGlmIChvdXRlck5vZGVzID09PSB1bmRlZmluZWQpIHtcbiAgICBvdXRlck5vZGVzID0gQ2xhc3NGcm9tT3V0ZXJOb2RlOyAvLy9cblxuICAgIENsYXNzRnJvbU91dGVyTm9kZSA9IChvdXRlck5vZGUpID0+IE5vZGU7ICAvLy9cbiAgfVxuXG4gIGNvbnN0IG5vZGVzID0gb3V0ZXJOb2RlczsgLy8vXG5cbiAgb3JkZXJOb2Rlcyhub2Rlcyk7XG5cbiAgY29uc3Qgb3V0ZXJOb2RlID0gbnVsbCxcbiAgICAgICAgQ2xhc3MgPSBDbGFzc0Zyb21PdXRlck5vZGUob3V0ZXJOb2RlKSxcbiAgICAgICAgdG9wbW9zdE5vZGUgPSBDbGFzcy5mcm9tTm90aGluZygpLFxuICAgICAgICBvdXRlck5vZGVUb05vZGVNYXAgPSBuZXcgV2Vha01hcCgpO1xuXG4gIG91dGVyTm9kZXMuZm9yRWFjaCgob3V0ZXJOb2RlKSA9PiB7XG4gICAgbGV0IHBhcmVudE5vZGUgPSB0b3Btb3N0Tm9kZTsgLy8vXG5cbiAgICBzb21lQW5jZXN0b3JOb2RlKG91dGVyTm9kZSwgKGFuY2VzdG9yTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgb3V0ZXJOb2RlID0gYW5jZXN0b3JOb2RlLCAvLy9cbiAgICAgICAgICAgIG5vZGUgPSBvdXRlck5vZGVUb05vZGVNYXAuZ2V0KG91dGVyTm9kZSkgfHwgbnVsbDtcblxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgcGFyZW50Tm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IENsYXNzID0gQ2xhc3NGcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSksXG4gICAgICAgICAgbm9kZSA9IENsYXNzLmZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSxcbiAgICAgICAgICBjaGlsZE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgbXVsdGlwbGljaXR5ID0gcGFyZW50Tm9kZS5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgICBzdGFydEluZGV4ID0gbXVsdGlwbGljaXR5OyAgLy8vXG5cbiAgICBwYXJlbnROb2RlLmFkZENoaWxkTm9kZShjaGlsZE5vZGUsIHN0YXJ0SW5kZXgpO1xuXG4gICAgb3V0ZXJOb2RlVG9Ob2RlTWFwLnNldChvdXRlck5vZGUsIG5vZGUpO1xuICB9KTtcblxuICByZXR1cm4gdG9wbW9zdE5vZGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdG9wbW9zdE5vZGVGcm9tT3V0ZXJOb2Rlc1xufTtcblxuZnVuY3Rpb24gb3JkZXJOb2Rlcyhub2Rlcykge1xuICBub2Rlcy5zb3J0KChub2RlQSwgbm9kZUIpID0+IHtcbiAgICBjb25zdCBub2RlQUxlc3NUaGFuTm9kZUIgPSBpc0xlc3NUaGFuKG5vZGVBLCBub2RlQiksXG4gICAgICAgICAgcmVzdWx0ID0gbm9kZUFMZXNzVGhhbk5vZGVCID9cbiAgICAgICAgICAgICAgICAgICAgIC0xIDpcbiAgICAgICAgICAgICAgICAgICAgICAgKzE7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaXNMZXNzVGhhbihub2RlQSwgbm9kZUIpIHtcbiAgbGV0IGxlc3NUaGFuID0gbnVsbDtcblxuICBjb25zdCBhbmNlc3Rvck5vZGVzQSA9IGFuY2VzdG9yTm9kZXNGcm9tTm9kZShub2RlQSksXG4gICAgICAgIGFuY2VzdG9yTm9kZXNCID0gYW5jZXN0b3JOb2Rlc0Zyb21Ob2RlKG5vZGVCKSxcbiAgICAgICAgYW5jZXN0b3JOb2Rlc0FMZW5ndGggPSBhbmNlc3Rvck5vZGVzQS5sZW5ndGgsXG4gICAgICAgIGFuY2VzdG9yTm9kZXNCTGVuZ3RoID0gYW5jZXN0b3JOb2Rlc0IubGVuZ3RoLFxuICAgICAgICBtaW5pbXVtQW5jZXN0b3JOb2Rlc0xlbmd0aCA9IE1hdGgubWluKGFuY2VzdG9yTm9kZXNBTGVuZ3RoLCBhbmNlc3Rvck5vZGVzQkxlbmd0aCk7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1pbmltdW1BbmNlc3Rvck5vZGVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgYW5jZXN0b3JOb2RlQSA9IGFuY2VzdG9yTm9kZXNBW2luZGV4XSxcbiAgICAgICAgICBhbmNlc3Rvck5vZGVCID0gYW5jZXN0b3JOb2Rlc0JbaW5kZXhdO1xuXG4gICAgaWYgKGFuY2VzdG9yTm9kZUEgIT09IGFuY2VzdG9yTm9kZUIpIHtcbiAgICAgIGNvbnN0IHBhcmVudEluZGV4ID0gaW5kZXggLSAxLFxuICAgICAgICAgICAgYW5jZXN0b3JOb2RlQVBhcmVudE5vZGUgPSBhbmNlc3Rvck5vZGVzQVtwYXJlbnRJbmRleF0sXG4gICAgICAgICAgICBwYXJlbnROb2RlID0gYW5jZXN0b3JOb2RlQVBhcmVudE5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlQSA9IGFuY2VzdG9yTm9kZUEsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlQiA9IGFuY2VzdG9yTm9kZUIsIC8vL1xuICAgICAgICAgICAgaW5kZXhBID0gcGFyZW50Tm9kZS5pbmRleE9mQ2hpbGROb2RlKGNoaWxkTm9kZUEpLFxuICAgICAgICAgICAgaW5kZXhCID0gcGFyZW50Tm9kZS5pbmRleE9mQ2hpbGROb2RlKGNoaWxkTm9kZUIpO1xuXG4gICAgICBsZXNzVGhhbiA9IChpbmRleEEgPCBpbmRleEIpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAobGVzc1RoYW4gPT09IG51bGwpIHtcbiAgICBsZXNzVGhhbiA9IChhbmNlc3Rvck5vZGVzQUxlbmd0aCA8IGFuY2VzdG9yTm9kZXNCTGVuZ3RoKTtcbiAgfVxuXG4gIHJldHVybiBsZXNzVGhhbjtcbn1cblxuZnVuY3Rpb24gc29tZUFuY2VzdG9yTm9kZShub2RlLCBjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0ID0gZmFsc2U7XG5cbiAgbGV0IHBhcmVudE5vZGUgPSBub2RlLmdldFBhcmVudE5vZGUoKTtcblxuICB3aGlsZSAocGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGFuY2VzdG9yTm9kZSA9IHBhcmVudE5vZGU7ICAvLy9cblxuICAgIHJlc3VsdCA9ICEhY2FsbGJhY2soYW5jZXN0b3JOb2RlKTsgIC8vL1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbm9kZSA9IHBhcmVudE5vZGU7ICAvLy9cblxuICAgIHBhcmVudE5vZGUgPSBub2RlLmdldFBhcmVudE5vZGUoKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGFuY2VzdG9yTm9kZXNGcm9tTm9kZShub2RlKSB7XG4gIGNvbnN0IGFuY2VzdG9yTm9kZXMgPSBub2RlLmdldEFuY2VzdG9yTm9kZXMoKTtcblxuICBhbmNlc3Rvck5vZGVzLnVuc2hpZnQobm9kZSk7XG5cbiAgYW5jZXN0b3JOb2Rlcy5yZXZlcnNlKCk7XG5cbiAgcmV0dXJuIGFuY2VzdG9yTm9kZXM7XG59Il0sIm5hbWVzIjpbInRvcG1vc3ROb2RlRnJvbU91dGVyTm9kZXMiLCJDbGFzc0Zyb21PdXRlck5vZGUiLCJvdXRlck5vZGVzIiwidW5kZWZpbmVkIiwib3V0ZXJOb2RlIiwiTm9kZSIsIm5vZGVzIiwib3JkZXJOb2RlcyIsIkNsYXNzIiwidG9wbW9zdE5vZGUiLCJmcm9tTm90aGluZyIsIm91dGVyTm9kZVRvTm9kZU1hcCIsIldlYWtNYXAiLCJmb3JFYWNoIiwicGFyZW50Tm9kZSIsInNvbWVBbmNlc3Rvck5vZGUiLCJhbmNlc3Rvck5vZGUiLCJub2RlIiwiZ2V0IiwiZnJvbU91dGVyTm9kZSIsImNoaWxkTm9kZSIsIm11bHRpcGxpY2l0eSIsImdldE11bHRpcGxpY2l0eSIsInN0YXJ0SW5kZXgiLCJhZGRDaGlsZE5vZGUiLCJzZXQiLCJzb3J0Iiwibm9kZUEiLCJub2RlQiIsIm5vZGVBTGVzc1RoYW5Ob2RlQiIsImlzTGVzc1RoYW4iLCJyZXN1bHQiLCJsZXNzVGhhbiIsImFuY2VzdG9yTm9kZXNBIiwiYW5jZXN0b3JOb2Rlc0Zyb21Ob2RlIiwiYW5jZXN0b3JOb2Rlc0IiLCJhbmNlc3Rvck5vZGVzQUxlbmd0aCIsImxlbmd0aCIsImFuY2VzdG9yTm9kZXNCTGVuZ3RoIiwibWluaW11bUFuY2VzdG9yTm9kZXNMZW5ndGgiLCJNYXRoIiwibWluIiwiaW5kZXgiLCJhbmNlc3Rvck5vZGVBIiwiYW5jZXN0b3JOb2RlQiIsInBhcmVudEluZGV4IiwiYW5jZXN0b3JOb2RlQVBhcmVudE5vZGUiLCJjaGlsZE5vZGVBIiwiY2hpbGROb2RlQiIsImluZGV4QSIsImluZGV4T2ZDaGlsZE5vZGUiLCJpbmRleEIiLCJjYWxsYmFjayIsImdldFBhcmVudE5vZGUiLCJhbmNlc3Rvck5vZGVzIiwiZ2V0QW5jZXN0b3JOb2RlcyIsInVuc2hpZnQiLCJyZXZlcnNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFnREEsT0FFRTtlQUZGOztJQTVDZ0JBLHlCQUF5QjtlQUF6QkE7OzsyREFGQzs7Ozs7O0FBRVYsU0FBU0EsMEJBQTBCQyxrQkFBa0IsRUFBRUMsVUFBVTtJQUN0RSxJQUFJQSxlQUFlQyxXQUFXO1FBQzVCRCxhQUFhRCxvQkFBb0IsR0FBRztRQUVwQ0EscUJBQXFCLFNBQUNHO21CQUFjQyxhQUFJO1dBQUcsR0FBRztJQUNoRDtJQUVBLElBQU1DLFFBQVFKLFlBQVksR0FBRztJQUU3QkssV0FBV0Q7SUFFWCxJQUFNRixZQUFZLE1BQ1pJLFFBQVFQLG1CQUFtQkcsWUFDM0JLLGNBQWNELE1BQU1FLFdBQVcsSUFDL0JDLHFCQUFxQixJQUFJQztJQUUvQlYsV0FBV1csT0FBTyxDQUFDLFNBQUNUO1FBQ2xC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