"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Node;
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
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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
var Node = /*#__PURE__*/ function() {
    function Node(outerNode, parentNode, childNodes) {
        _class_call_check(this, Node);
        this.outerNode = outerNode;
        this.parentNode = parentNode;
        this.childNodes = childNodes;
    }
    _create_class(Node, [
        {
            key: "getOuterNode",
            value: function getOuterNode() {
                return this.outerNode;
            }
        },
        {
            key: "getParentNode",
            value: function getParentNode() {
                return this.parentNode;
            }
        },
        {
            key: "getChildNodes",
            value: function getChildNodes() {
                return this.childNodes;
            }
        },
        {
            key: "setOuterNode",
            value: function setOuterNode(outerNode) {
                this.outerNode = outerNode;
            }
        },
        {
            key: "setParentNode",
            value: function setParentNode(parentNode) {
                this.parentNode = parentNode;
            }
        },
        {
            key: "setChildNodes",
            value: function setChildNodes(childNodes) {
                this.childNodes = childNodes;
            }
        },
        {
            key: "mapChildNode",
            value: function mapChildNode(callback) {
                return this.childNodes.map(callback);
            }
        },
        {
            key: "someChildNode",
            value: function someChildNode(callback) {
                return this.childNodes.some(callback);
            }
        },
        {
            key: "findChildNode",
            value: function findChildNode(callback) {
                return this.childNodes.find(callback);
            }
        },
        {
            key: "everyChildNode",
            value: function everyChildNode(callback) {
                return this.childNodes.every(callback);
            }
        },
        {
            key: "filterChildNode",
            value: function filterChildNode(callback) {
                return this.childNodes.filter(callback);
            }
        },
        {
            key: "reduceChildNode",
            value: function reduceChildNode(callback, initialValue) {
                return this.childNodes.reduce(callback, initialValue);
            }
        },
        {
            key: "forEachChildNode",
            value: function forEachChildNode(callback) {
                this.childNodes.forEach(callback);
            }
        },
        {
            key: "setChildNodesParentNode",
            value: function setChildNodesParentNode(childNodes) {
                if (childNodes === undefined) {
                    childNodes = _to_consumable_array(this.childNodes);
                }
                var parentNode = this;
                childNodes.forEach(function(childNode) {
                    childNode.setParentNode(parentNode);
                });
            }
        },
        {
            key: "resetChildNodesParentNode",
            value: function resetChildNodesParentNode(childNodes) {
                if (childNodes === undefined) {
                    childNodes = _to_consumable_array(this.childNodes);
                }
                var parentNode = null;
                childNodes.forEach(function(childNode) {
                    childNode.setParentNode(parentNode);
                });
            }
        },
        {
            key: "addChildNode",
            value: function addChildNode(addedChildNode, startIndex) {
                var addedChildNodes = [
                    addedChildNode
                ];
                this.addChildNodes(addedChildNodes, startIndex);
            }
        },
        {
            key: "addChildNodes",
            value: function addChildNodes(addedChildNodes, startIndex) {
                var deleteCount = 0;
                this.spliceChildNodes(startIndex, deleteCount, addedChildNodes);
            }
        },
        {
            key: "removeChildNode",
            value: function removeChildNode(removedChildNode) {
                var removedChildNodes;
                removedChildNodes = [
                    removedChildNode
                ];
                removedChildNodes = this.removeChildNodes(removedChildNodes);
                return removedChildNodes;
            }
        },
        {
            key: "removeChildNodes",
            value: function removeChildNodes(removedChildNodes) {
                if (removedChildNodes === undefined) {
                    removedChildNodes = _to_consumable_array(this.childNodes);
                }
                var removedChildNodesLength = removedChildNodes.length;
                if (removedChildNodesLength === 0) {
                    return;
                }
                var firstReplacedChildNode = first(removedChildNodes), firstIndex = this.childNodes.indexOf(firstReplacedChildNode), startIndex = firstIndex, deleteCount = removedChildNodesLength, addedChildNodes = [];
                removedChildNodes = this.spliceChildNodes(startIndex, deleteCount, addedChildNodes);
                return removedChildNodes;
            }
        },
        {
            key: "replaceChildNode",
            value: function replaceChildNode(replacedChildNode, replacementChildNodes) {
                var replacedChildNodes = [
                    replacedChildNode
                ];
                this.replaceChildNodes(replacedChildNodes, replacementChildNodes);
            }
        },
        {
            key: "replaceChildNodes",
            value: function replaceChildNodes(replacedChildNodes, replacementChildNodes) {
                var replacedChildNodesLength = replacedChildNodes.length, firstReplacedChildNode = first(replacedChildNodes), firstIndex = this.childNodes.indexOf(firstReplacedChildNode), startIndex = firstIndex, deleteCount = replacedChildNodesLength; ///
                this.spliceChildNodes(startIndex, deleteCount, replacementChildNodes);
            }
        },
        {
            key: "spliceChildNodes",
            value: function spliceChildNodes(startIndex, deleteCount) {
                var addedChildNodes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
                var _this_childNodes;
                var removedChildNodes = (_this_childNodes = this.childNodes).splice.apply(_this_childNodes, [
                    startIndex,
                    deleteCount
                ].concat(_to_consumable_array(addedChildNodes)));
                this.resetChildNodesParentNode(removedChildNodes);
                this.setChildNodesParentNode(addedChildNodes);
                return removedChildNodes;
            }
        },
        {
            key: "sliceChildNodes",
            value: function sliceChildNodes(startIndex) {
                var endIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
                var childNodes = this.childNodes.slice(startIndex, endIndex);
                return childNodes;
            }
        }
    ], [
        {
            key: "fromOuterNode",
            value: function fromOuterNode(Class, outerNode) {
                if (outerNode === undefined) {
                    outerNode = Class; ///
                    Class = Node; ///
                }
                var parentNode = null, childNodes = [], node = new Class(outerNode, parentNode, childNodes);
                return node;
            }
        }
    ]);
    return Node;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3Iob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzKSB7XG4gICAgdGhpcy5vdXRlck5vZGUgPSBvdXRlck5vZGU7XG4gICAgdGhpcy5wYXJlbnROb2RlID0gcGFyZW50Tm9kZTtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICB9XG5cbiAgZ2V0T3V0ZXJOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm91dGVyTm9kZTtcbiAgfVxuXG4gIGdldFBhcmVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuXG4gIHNldE91dGVyTm9kZShvdXRlck5vZGUpIHtcbiAgICB0aGlzLm91dGVyTm9kZSA9IG91dGVyTm9kZTtcbiAgfVxuXG4gIHNldFBhcmVudE5vZGUocGFyZW50Tm9kZSkge1xuICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gIH1cblxuICBzZXRDaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICB9XG5cbiAgbWFwQ2hpbGROb2RlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmNoaWxkTm9kZXMubWFwKGNhbGxiYWNrKTsgfVxuXG4gIHNvbWVDaGlsZE5vZGUoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5zb21lKGNhbGxiYWNrKTsgfVxuXG4gIGZpbmRDaGlsZE5vZGUoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5maW5kKGNhbGxiYWNrKTsgfVxuXG4gIGV2ZXJ5Q2hpbGROb2RlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmNoaWxkTm9kZXMuZXZlcnkoY2FsbGJhY2spOyB9XG5cbiAgZmlsdGVyQ2hpbGROb2RlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmNoaWxkTm9kZXMuZmlsdGVyKGNhbGxiYWNrKTsgfVxuXG4gIHJlZHVjZUNoaWxkTm9kZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7IHJldHVybiB0aGlzLmNoaWxkTm9kZXMucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgZm9yRWFjaENoaWxkTm9kZShjYWxsYmFjaykgeyB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBzZXRDaGlsZE5vZGVzUGFyZW50Tm9kZShjaGlsZE5vZGVzKSB7XG4gICAgaWYgKGNoaWxkTm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY2hpbGROb2RlcyA9IFtcbiAgICAgICAgLi4udGhpcy5jaGlsZE5vZGVzXG4gICAgICBdO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudE5vZGUgPSB0aGlzO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNoaWxkTm9kZS5zZXRQYXJlbnROb2RlKHBhcmVudE5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzZXRDaGlsZE5vZGVzUGFyZW50Tm9kZShjaGlsZE5vZGVzKSB7XG4gICAgaWYgKGNoaWxkTm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY2hpbGROb2RlcyA9IFtcbiAgICAgICAgLi4udGhpcy5jaGlsZE5vZGVzXG4gICAgICBdO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBudWxsO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNoaWxkTm9kZS5zZXRQYXJlbnROb2RlKHBhcmVudE5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkQ2hpbGROb2RlKGFkZGVkQ2hpbGROb2RlLCBzdGFydEluZGV4KSB7XG4gICAgY29uc3QgYWRkZWRDaGlsZE5vZGVzID0gW1xuICAgICAgYWRkZWRDaGlsZE5vZGVcbiAgICBdO1xuXG4gICAgdGhpcy5hZGRDaGlsZE5vZGVzKGFkZGVkQ2hpbGROb2Rlcywgc3RhcnRJbmRleCk7XG4gIH1cblxuICBhZGRDaGlsZE5vZGVzKGFkZGVkQ2hpbGROb2Rlcywgc3RhcnRJbmRleCkge1xuICAgIGNvbnN0IGRlbGV0ZUNvdW50ID0gMDtcblxuICAgIHRoaXMuc3BsaWNlQ2hpbGROb2RlcyhzdGFydEluZGV4LCBkZWxldGVDb3VudCwgYWRkZWRDaGlsZE5vZGVzKTtcbiAgfVxuXG4gIHJlbW92ZUNoaWxkTm9kZShyZW1vdmVkQ2hpbGROb2RlKSB7XG4gICAgbGV0IHJlbW92ZWRDaGlsZE5vZGVzO1xuXG4gICAgcmVtb3ZlZENoaWxkTm9kZXMgPSBbXG4gICAgICByZW1vdmVkQ2hpbGROb2RlXG4gICAgXTtcblxuICAgIHJlbW92ZWRDaGlsZE5vZGVzID0gdGhpcy5yZW1vdmVDaGlsZE5vZGVzKHJlbW92ZWRDaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiByZW1vdmVkQ2hpbGROb2RlcztcbiAgfVxuXG4gIHJlbW92ZUNoaWxkTm9kZXMocmVtb3ZlZENoaWxkTm9kZXMpIHtcbiAgICBpZiAocmVtb3ZlZENoaWxkTm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVtb3ZlZENoaWxkTm9kZXMgPSBbXG4gICAgICAgIC4uLnRoaXMuY2hpbGROb2Rlc1xuICAgICAgXTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVkQ2hpbGROb2Rlc0xlbmd0aCA9IHJlbW92ZWRDaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChyZW1vdmVkQ2hpbGROb2Rlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0UmVwbGFjZWRDaGlsZE5vZGUgPSBmaXJzdChyZW1vdmVkQ2hpbGROb2RlcyksXG4gICAgICAgICAgZmlyc3RJbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKGZpcnN0UmVwbGFjZWRDaGlsZE5vZGUpLFxuICAgICAgICAgIHN0YXJ0SW5kZXggPSBmaXJzdEluZGV4LCAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IHJlbW92ZWRDaGlsZE5vZGVzTGVuZ3RoLCAvLy9cbiAgICAgICAgICBhZGRlZENoaWxkTm9kZXMgPSBbXTtcblxuICAgIHJlbW92ZWRDaGlsZE5vZGVzID0gdGhpcy5zcGxpY2VDaGlsZE5vZGVzKHN0YXJ0SW5kZXgsIGRlbGV0ZUNvdW50LCBhZGRlZENoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIHJlbW92ZWRDaGlsZE5vZGVzO1xuICB9XG5cbiAgcmVwbGFjZUNoaWxkTm9kZShyZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKSB7XG4gICAgY29uc3QgcmVwbGFjZWRDaGlsZE5vZGVzID0gW1xuICAgICAgcmVwbGFjZWRDaGlsZE5vZGVcbiAgICBdO1xuXG4gICAgdGhpcy5yZXBsYWNlQ2hpbGROb2RlcyhyZXBsYWNlZENoaWxkTm9kZXMsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG4gIH1cblxuICByZXBsYWNlQ2hpbGROb2RlcyhyZXBsYWNlZENoaWxkTm9kZXMsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcykge1xuICAgIGNvbnN0IHJlcGxhY2VkQ2hpbGROb2Rlc0xlbmd0aCA9IHJlcGxhY2VkQ2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgZmlyc3RSZXBsYWNlZENoaWxkTm9kZSA9IGZpcnN0KHJlcGxhY2VkQ2hpbGROb2RlcyksXG4gICAgICAgICAgZmlyc3RJbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKGZpcnN0UmVwbGFjZWRDaGlsZE5vZGUpLFxuICAgICAgICAgIHN0YXJ0SW5kZXggPSBmaXJzdEluZGV4LCAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IHJlcGxhY2VkQ2hpbGROb2Rlc0xlbmd0aDsgLy8vXG5cbiAgICB0aGlzLnNwbGljZUNoaWxkTm9kZXMoc3RhcnRJbmRleCwgZGVsZXRlQ291bnQsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG4gIH1cblxuICBzcGxpY2VDaGlsZE5vZGVzKHN0YXJ0SW5kZXgsIGRlbGV0ZUNvdW50LCBhZGRlZENoaWxkTm9kZXMgPSBbXSkge1xuICAgIGNvbnN0IHJlbW92ZWRDaGlsZE5vZGVzID0gdGhpcy5jaGlsZE5vZGVzLnNwbGljZShzdGFydEluZGV4LCBkZWxldGVDb3VudCwgLi4uYWRkZWRDaGlsZE5vZGVzKTtcblxuICAgIHRoaXMucmVzZXRDaGlsZE5vZGVzUGFyZW50Tm9kZShyZW1vdmVkQ2hpbGROb2Rlcyk7XG5cbiAgICB0aGlzLnNldENoaWxkTm9kZXNQYXJlbnROb2RlKGFkZGVkQ2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gcmVtb3ZlZENoaWxkTm9kZXM7XG4gIH1cblxuICBzbGljZUNoaWxkTm9kZXMoc3RhcnRJbmRleCwgZW5kSW5kZXggPSBJbmZpbml0eSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmNoaWxkTm9kZXMuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShDbGFzcywgb3V0ZXJOb2RlKSB7XG4gICAgaWYgKG91dGVyTm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvdXRlck5vZGUgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBbXSxcbiAgICAgICAgICBub2RlID0gbmV3IENsYXNzKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5vZGUiLCJvdXRlck5vZGUiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsImdldE91dGVyTm9kZSIsImdldFBhcmVudE5vZGUiLCJnZXRDaGlsZE5vZGVzIiwic2V0T3V0ZXJOb2RlIiwic2V0UGFyZW50Tm9kZSIsInNldENoaWxkTm9kZXMiLCJtYXBDaGlsZE5vZGUiLCJjYWxsYmFjayIsIm1hcCIsInNvbWVDaGlsZE5vZGUiLCJzb21lIiwiZmluZENoaWxkTm9kZSIsImZpbmQiLCJldmVyeUNoaWxkTm9kZSIsImV2ZXJ5IiwiZmlsdGVyQ2hpbGROb2RlIiwiZmlsdGVyIiwicmVkdWNlQ2hpbGROb2RlIiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwiZm9yRWFjaENoaWxkTm9kZSIsImZvckVhY2giLCJzZXRDaGlsZE5vZGVzUGFyZW50Tm9kZSIsInVuZGVmaW5lZCIsImNoaWxkTm9kZSIsInJlc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUiLCJhZGRDaGlsZE5vZGUiLCJhZGRlZENoaWxkTm9kZSIsInN0YXJ0SW5kZXgiLCJhZGRlZENoaWxkTm9kZXMiLCJhZGRDaGlsZE5vZGVzIiwiZGVsZXRlQ291bnQiLCJzcGxpY2VDaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGROb2RlIiwicmVtb3ZlZENoaWxkTm9kZSIsInJlbW92ZWRDaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGROb2RlcyIsInJlbW92ZWRDaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RSZXBsYWNlZENoaWxkTm9kZSIsImZpcnN0IiwiZmlyc3RJbmRleCIsImluZGV4T2YiLCJyZXBsYWNlQ2hpbGROb2RlIiwicmVwbGFjZWRDaGlsZE5vZGUiLCJyZXBsYWNlbWVudENoaWxkTm9kZXMiLCJyZXBsYWNlZENoaWxkTm9kZXMiLCJyZXBsYWNlQ2hpbGROb2RlcyIsInJlcGxhY2VkQ2hpbGROb2Rlc0xlbmd0aCIsInNwbGljZSIsInNsaWNlQ2hpbGROb2RlcyIsImVuZEluZGV4IiwiSW5maW5pdHkiLCJzbGljZSIsImZyb21PdXRlck5vZGUiLCJDbGFzcyIsIm5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7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