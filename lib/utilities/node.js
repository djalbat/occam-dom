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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vZGUgZnJvbSBcIi4uL25vZGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzTGVzc1RoYW4obm9kZUEsIG5vZGVCKSB7XG4gIGxldCBsZXNzVGhhbiA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZUFBbmNlc3Rvck5vZGVzID0gYW5jZXN0b3JOb2Rlc0Zyb21Ob2RlKG5vZGVBKSxcbiAgICBub2RlQkFuY2VzdG9yTm9kZXMgPSBhbmNlc3Rvck5vZGVzRnJvbU5vZGUobm9kZUIpLFxuICAgIG5vZGVBQW5jZXN0b3JOb2Rlc0xlbmd0aCA9IG5vZGVBQW5jZXN0b3JOb2Rlcy5sZW5ndGgsXG4gICAgbm9kZUJBbmNlc3Rvck5vZGVzTGVuZ3RoID0gbm9kZUJBbmNlc3Rvck5vZGVzLmxlbmd0aCxcbiAgICBtaW5pbXVtQW5jZXN0b3JOb2Rlc0xlbmd0aCA9IE1hdGgubWluKG5vZGVBQW5jZXN0b3JOb2Rlc0xlbmd0aCwgbm9kZUJBbmNlc3Rvck5vZGVzTGVuZ3RoKTtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbWluaW11bUFuY2VzdG9yTm9kZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBub2RlQUFuY2VzdG9yTm9kZSA9IG5vZGVBQW5jZXN0b3JOb2Rlc1tpbmRleF0sXG4gICAgICBub2RlQkFuY2VzdG9yTm9kZSA9IG5vZGVCQW5jZXN0b3JOb2Rlc1tpbmRleF07XG5cbiAgICBpZiAobm9kZUFBbmNlc3Rvck5vZGUgIT09IG5vZGVCQW5jZXN0b3JOb2RlKSB7XG4gICAgICBjb25zdCBwYXJlbnRJbmRleCA9IGluZGV4IC0gMSxcbiAgICAgICAgbm9kZUFBbmNlc3Rvck5vZGVQYXJlbnROb2RlID0gbm9kZUFBbmNlc3Rvck5vZGVzW3BhcmVudEluZGV4XSxcbiAgICAgICAgcGFyZW50Tm9kZSA9IG5vZGVBQW5jZXN0b3JOb2RlUGFyZW50Tm9kZSwgLy8vXG4gICAgICAgIGNoaWxkTm9kZUEgPSBub2RlQUFuY2VzdG9yTm9kZSwgLy8vXG4gICAgICAgIGNoaWxkTm9kZUIgPSBub2RlQkFuY2VzdG9yTm9kZSwgLy8vXG4gICAgICAgIGluZGV4QSA9IHBhcmVudE5vZGUuaW5kZXhPZkNoaWxkTm9kZShjaGlsZE5vZGVBKSxcbiAgICAgICAgaW5kZXhCID0gcGFyZW50Tm9kZS5pbmRleE9mQ2hpbGROb2RlKGNoaWxkTm9kZUIpO1xuXG4gICAgICBsZXNzVGhhbiA9IChpbmRleEEgPCBpbmRleEIpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAobGVzc1RoYW4gPT09IG51bGwpIHtcbiAgICBsZXNzVGhhbiA9IChub2RlQUFuY2VzdG9yTm9kZXNMZW5ndGggPCBub2RlQkFuY2VzdG9yTm9kZXNMZW5ndGgpO1xuICB9XG5cbiAgcmV0dXJuIGxlc3NUaGFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9wbW9zdE5vZGVGcm9tT3V0ZXJOb2RlcyhDbGFzc0Zyb21PdXRlck5vZGUsIG91dGVyTm9kZXMpIHtcbiAgaWYgKG91dGVyTm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgIG91dGVyTm9kZXMgPSBDbGFzc0Zyb21PdXRlck5vZGU7IC8vL1xuXG4gICAgQ2xhc3NGcm9tT3V0ZXJOb2RlID0gKG91dGVyTm9kZSkgPT4gTm9kZTsgIC8vL1xuICB9XG5cbiAgY29uc3Qgbm9kZXMgPSBvdXRlck5vZGVzOyAvLy9cblxuICBvcmRlck5vZGVzKG5vZGVzKTtcblxuICBjb25zdCBvdXRlck5vZGUgPSBudWxsLFxuICAgICAgICBDbGFzcyA9IENsYXNzRnJvbU91dGVyTm9kZShvdXRlck5vZGUpLFxuICAgICAgICB0b3Btb3N0Tm9kZSA9IENsYXNzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgIG91dGVyTm9kZVRvTm9kZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgb3V0ZXJOb2Rlcy5mb3JFYWNoKChvdXRlck5vZGUpID0+IHtcbiAgICBsZXQgcGFyZW50Tm9kZSA9IHRvcG1vc3ROb2RlOyAvLy9cblxuICAgIG91dGVyTm9kZS5zb21lQW5jZXN0b3JOb2RlKChhbmNlc3Rvck5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG91dGVyTm9kZSA9IGFuY2VzdG9yTm9kZSwgLy8vXG4gICAgICAgICAgICBub2RlID0gb3V0ZXJOb2RlVG9Ob2RlTWFwLmdldChvdXRlck5vZGUpIHx8IG51bGw7XG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIHBhcmVudE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBDbGFzcyA9IENsYXNzRnJvbU91dGVyTm9kZShvdXRlck5vZGUpLFxuICAgICAgICAgIG5vZGUgPSBDbGFzcy5mcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSksXG4gICAgICAgICAgYXBwZW5kZWRDaGlsZE5vZGUgPSBub2RlOyAvLy9cblxuICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGROb2RlKGFwcGVuZGVkQ2hpbGROb2RlKTtcblxuICAgIG91dGVyTm9kZVRvTm9kZU1hcC5zZXQob3V0ZXJOb2RlLCBub2RlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRvcG1vc3ROb2RlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlzTGVzc1RoYW4sXG4gIHRvcG1vc3ROb2RlRnJvbU91dGVyTm9kZXNcbn07XG5cbmZ1bmN0aW9uIG9yZGVyTm9kZXMobm9kZXMpIHtcbiAgbm9kZXMuc29ydCgobm9kZUEsIG5vZGVCKSA9PiB7XG4gICAgY29uc3Qgbm9kZUFMZXNzVGhhbk5vZGVCID0gaXNMZXNzVGhhbihub2RlQSwgbm9kZUIpLFxuICAgICAgICAgIHJlc3VsdCA9IG5vZGVBTGVzc1RoYW5Ob2RlQiA/XG4gICAgICAgICAgICAgICAgICAgICAtMSA6XG4gICAgICAgICAgICAgICAgICAgICAgICsxO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFuY2VzdG9yTm9kZXNGcm9tTm9kZShub2RlKSB7XG4gIGNvbnN0IGFuY2VzdG9yTm9kZXMgPSBub2RlLmdldEFuY2VzdG9yTm9kZXMoKTtcblxuICBhbmNlc3Rvck5vZGVzLnVuc2hpZnQobm9kZSk7XG5cbiAgYW5jZXN0b3JOb2Rlcy5yZXZlcnNlKCk7XG5cbiAgcmV0dXJuIGFuY2VzdG9yTm9kZXM7XG59XG4iXSwibmFtZXMiOlsiaXNMZXNzVGhhbiIsInRvcG1vc3ROb2RlRnJvbU91dGVyTm9kZXMiLCJub2RlQSIsIm5vZGVCIiwibGVzc1RoYW4iLCJub2RlQUFuY2VzdG9yTm9kZXMiLCJhbmNlc3Rvck5vZGVzRnJvbU5vZGUiLCJub2RlQkFuY2VzdG9yTm9kZXMiLCJub2RlQUFuY2VzdG9yTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJub2RlQkFuY2VzdG9yTm9kZXNMZW5ndGgiLCJtaW5pbXVtQW5jZXN0b3JOb2Rlc0xlbmd0aCIsIk1hdGgiLCJtaW4iLCJpbmRleCIsIm5vZGVBQW5jZXN0b3JOb2RlIiwibm9kZUJBbmNlc3Rvck5vZGUiLCJwYXJlbnRJbmRleCIsIm5vZGVBQW5jZXN0b3JOb2RlUGFyZW50Tm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVBIiwiY2hpbGROb2RlQiIsImluZGV4QSIsImluZGV4T2ZDaGlsZE5vZGUiLCJpbmRleEIiLCJDbGFzc0Zyb21PdXRlck5vZGUiLCJvdXRlck5vZGVzIiwidW5kZWZpbmVkIiwib3V0ZXJOb2RlIiwiTm9kZSIsIm5vZGVzIiwib3JkZXJOb2RlcyIsIkNsYXNzIiwidG9wbW9zdE5vZGUiLCJmcm9tTm90aGluZyIsIm91dGVyTm9kZVRvTm9kZU1hcCIsIldlYWtNYXAiLCJmb3JFYWNoIiwic29tZUFuY2VzdG9yTm9kZSIsImFuY2VzdG9yTm9kZSIsIm5vZGUiLCJnZXQiLCJmcm9tT3V0ZXJOb2RlIiwiYXBwZW5kZWRDaGlsZE5vZGUiLCJhcHBlbmRDaGlsZE5vZGUiLCJzZXQiLCJzb3J0Iiwibm9kZUFMZXNzVGhhbk5vZGVCIiwicmVzdWx0IiwiYW5jZXN0b3JOb2RlcyIsImdldEFuY2VzdG9yTm9kZXMiLCJ1bnNoaWZ0IiwicmV2ZXJzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBaUZBLE9BR0U7ZUFIRjs7SUE3RWdCQSxVQUFVO2VBQVZBOztJQW1DQUMseUJBQXlCO2VBQXpCQTs7OzJEQXJDQzs7Ozs7O0FBRVYsU0FBU0QsV0FBV0UsS0FBSyxFQUFFQyxLQUFLO0lBQ3JDLElBQUlDLFdBQVc7SUFFZixJQUFNQyxxQkFBcUJDLHNCQUFzQkosUUFDL0NLLHFCQUFxQkQsc0JBQXNCSCxRQUMzQ0ssMkJBQTJCSCxtQkFBbUJJLE1BQU0sRUFDcERDLDJCQUEyQkgsbUJBQW1CRSxNQUFNLEVBQ3BERSw2QkFBNkJDLEtBQUtDLEdBQUcsQ0FBQ0wsMEJBQTBCRTtJQUVsRSxJQUFLLElBQUlJLFFBQVEsR0FBR0EsUUFBUUgsNEJBQTRCRyxRQUFTO1FBQy9ELElBQU1DLG9CQUFvQlYsa0JBQWtCLENBQUNTLE1BQU0sRUFDakRFLG9CQUFvQlQsa0JBQWtCLENBQUNPLE1BQU07UUFFL0MsSUFBSUMsc0JBQXNCQyxtQkFBbUI7WUFDM0MsSUFBTUMsY0FBY0gsUUFBUSxHQUMxQkksOEJBQThCYixrQkFBa0IsQ0FBQ1ksWUFBWSxFQUM3REUsYUFBYUQsNkJBQ2JFLGFBQWFMLG1CQUNiTSxhQUFhTCxtQkFDYk0sU0FBU0gsV0FBV0ksZ0JBQWdCLENBQUNILGFBQ3JDSSxTQUFTTCxXQUFXSSxnQkFBZ0IsQ0FBQ0Y7WUFFdkNqQixXQUFZa0IsU0FBU0U7WUFFckI7UUFDRjtJQUNGO0lBRUEsSUFBSXBCLGFBQWEsTUFBTTtRQUNyQkEsV0FBWUksMkJBQTJCRTtJQUN6QztJQUVBLE9BQU9OO0FBQ1Q7QUFFTyxTQUFTSCwwQkFBMEJ3QixrQkFBa0IsRUFBRUMsVUFBVTtJQUN0RSxJQUFJQSxlQUFlQyxXQUFXO1FBQzVCRCxhQUFhRCxvQkFBb0IsR0FBRztRQUVwQ0EscUJBQXFCLFNBQUNHO21CQUFjQyxhQUFJO1dBQUcsR0FBRztJQUNoRDtJQUVBLElBQU1DLFFBQVFKLFlBQVksR0FBRztJQUU3QkssV0FBV0Q7SUFFWCxJQUFNRixZQUFZLE1BQ1pJLFFBQVFQLG1CQUFtQkcsWUFDM0JLLGNBQWNELE1BQU1FLFdBQVcsSUFDL0JDLHFCQUFxQixJQUFJQztJQUUvQlYsV0FBV1csT0FBTyxDQUFDLFNBQUNUO1FBQ2xCLElBQUlULGFBQWFjLGFBQWEsR0FBRztRQUVqQ0wsVUFBVVUsZ0JBQWdCLENBQUMsU0FBQ0M7WUFDMUIsSUFBTVgsY0FBWVcsY0FDWkMsT0FBT0wsbUJBQW1CTSxHQUFHLENBQUNiLGdCQUFjO1lBRWxELElBQUlZLFNBQVMsTUFBTTtnQkFDakJyQixhQUFhcUIsTUFBTyxHQUFHO2dCQUV2QixPQUFPO1lBQ1Q7UUFDRjtRQUVBLElBQU1SLFFBQVFQLG1CQUFtQkcsWUFDM0JZLE9BQU9SLE1BQU1VLGFBQWEsQ0FBQ2QsWUFDM0JlLG9CQUFvQkgsTUFBTSxHQUFHO1FBRW5DckIsV0FBV3lCLGVBQWUsQ0FBQ0Q7UUFFM0JSLG1CQUFtQlUsR0FBRyxDQUFDakIsV0FBV1k7SUFDcEM7SUFFQSxPQUFPUDtBQUNUO0lBRUEsV0FBZTtJQUNiakMsWUFBQUE7SUFDQUMsMkJBQUFBO0FBQ0Y7QUFFQSxTQUFTOEIsV0FBV0QsS0FBSztJQUN2QkEsTUFBTWdCLElBQUksQ0FBQyxTQUFDNUMsT0FBT0M7UUFDakIsSUFBTTRDLHFCQUFxQi9DLFdBQVdFLE9BQU9DLFFBQ3ZDNkMsU0FBU0QscUJBQ0UsQ0FBQyxJQUNDLENBQUM7UUFFcEIsT0FBT0M7SUFDVDtBQUNGO0FBRUEsU0FBUzFDLHNCQUFzQmtDLElBQUk7SUFDakMsSUFBTVMsZ0JBQWdCVCxLQUFLVSxnQkFBZ0I7SUFFM0NELGNBQWNFLE9BQU8sQ0FBQ1g7SUFFdEJTLGNBQWNHLE9BQU87SUFFckIsT0FBT0g7QUFDVCJ9