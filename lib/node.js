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
            key: "fromNothing",
            value: function fromNothing(Class) {
                if (Class === undefined) {
                    Class = Node; ///
                }
                var outerNode = null, parentNode = null, childNodes = [], node = new Class(outerNode, parentNode, childNodes);
                return node;
            }
        },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3Iob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzKSB7XG4gICAgdGhpcy5vdXRlck5vZGUgPSBvdXRlck5vZGU7XG4gICAgdGhpcy5wYXJlbnROb2RlID0gcGFyZW50Tm9kZTtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICB9XG5cbiAgZ2V0T3V0ZXJOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm91dGVyTm9kZTtcbiAgfVxuXG4gIGdldFBhcmVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuXG4gIHNldE91dGVyTm9kZShvdXRlck5vZGUpIHtcbiAgICB0aGlzLm91dGVyTm9kZSA9IG91dGVyTm9kZTtcbiAgfVxuXG4gIHNldFBhcmVudE5vZGUocGFyZW50Tm9kZSkge1xuICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gIH1cblxuICBzZXRDaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICB9XG5cbiAgbWFwQ2hpbGROb2RlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmNoaWxkTm9kZXMubWFwKGNhbGxiYWNrKTsgfVxuXG4gIHNvbWVDaGlsZE5vZGUoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5zb21lKGNhbGxiYWNrKTsgfVxuXG4gIGZpbmRDaGlsZE5vZGUoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5maW5kKGNhbGxiYWNrKTsgfVxuXG4gIGV2ZXJ5Q2hpbGROb2RlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmNoaWxkTm9kZXMuZXZlcnkoY2FsbGJhY2spOyB9XG5cbiAgZmlsdGVyQ2hpbGROb2RlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmNoaWxkTm9kZXMuZmlsdGVyKGNhbGxiYWNrKTsgfVxuXG4gIHJlZHVjZUNoaWxkTm9kZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7IHJldHVybiB0aGlzLmNoaWxkTm9kZXMucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgZm9yRWFjaENoaWxkTm9kZShjYWxsYmFjaykgeyB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBzZXRDaGlsZE5vZGVzUGFyZW50Tm9kZShjaGlsZE5vZGVzKSB7XG4gICAgaWYgKGNoaWxkTm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY2hpbGROb2RlcyA9IFtcbiAgICAgICAgLi4udGhpcy5jaGlsZE5vZGVzXG4gICAgICBdO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudE5vZGUgPSB0aGlzO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNoaWxkTm9kZS5zZXRQYXJlbnROb2RlKHBhcmVudE5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzZXRDaGlsZE5vZGVzUGFyZW50Tm9kZShjaGlsZE5vZGVzKSB7XG4gICAgaWYgKGNoaWxkTm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY2hpbGROb2RlcyA9IFtcbiAgICAgICAgLi4udGhpcy5jaGlsZE5vZGVzXG4gICAgICBdO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBudWxsO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNoaWxkTm9kZS5zZXRQYXJlbnROb2RlKHBhcmVudE5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkQ2hpbGROb2RlKGFkZGVkQ2hpbGROb2RlLCBzdGFydEluZGV4KSB7XG4gICAgY29uc3QgYWRkZWRDaGlsZE5vZGVzID0gW1xuICAgICAgYWRkZWRDaGlsZE5vZGVcbiAgICBdO1xuXG4gICAgdGhpcy5hZGRDaGlsZE5vZGVzKGFkZGVkQ2hpbGROb2Rlcywgc3RhcnRJbmRleCk7XG4gIH1cblxuICBhZGRDaGlsZE5vZGVzKGFkZGVkQ2hpbGROb2Rlcywgc3RhcnRJbmRleCkge1xuICAgIGNvbnN0IGRlbGV0ZUNvdW50ID0gMDtcblxuICAgIHRoaXMuc3BsaWNlQ2hpbGROb2RlcyhzdGFydEluZGV4LCBkZWxldGVDb3VudCwgYWRkZWRDaGlsZE5vZGVzKTtcbiAgfVxuXG4gIHJlbW92ZUNoaWxkTm9kZShyZW1vdmVkQ2hpbGROb2RlKSB7XG4gICAgbGV0IHJlbW92ZWRDaGlsZE5vZGVzO1xuXG4gICAgcmVtb3ZlZENoaWxkTm9kZXMgPSBbXG4gICAgICByZW1vdmVkQ2hpbGROb2RlXG4gICAgXTtcblxuICAgIHJlbW92ZWRDaGlsZE5vZGVzID0gdGhpcy5yZW1vdmVDaGlsZE5vZGVzKHJlbW92ZWRDaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiByZW1vdmVkQ2hpbGROb2RlcztcbiAgfVxuXG4gIHJlbW92ZUNoaWxkTm9kZXMocmVtb3ZlZENoaWxkTm9kZXMpIHtcbiAgICBpZiAocmVtb3ZlZENoaWxkTm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVtb3ZlZENoaWxkTm9kZXMgPSBbXG4gICAgICAgIC4uLnRoaXMuY2hpbGROb2Rlc1xuICAgICAgXTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVkQ2hpbGROb2Rlc0xlbmd0aCA9IHJlbW92ZWRDaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChyZW1vdmVkQ2hpbGROb2Rlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0UmVwbGFjZWRDaGlsZE5vZGUgPSBmaXJzdChyZW1vdmVkQ2hpbGROb2RlcyksXG4gICAgICAgICAgZmlyc3RJbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKGZpcnN0UmVwbGFjZWRDaGlsZE5vZGUpLFxuICAgICAgICAgIHN0YXJ0SW5kZXggPSBmaXJzdEluZGV4LCAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IHJlbW92ZWRDaGlsZE5vZGVzTGVuZ3RoLCAvLy9cbiAgICAgICAgICBhZGRlZENoaWxkTm9kZXMgPSBbXTtcblxuICAgIHJlbW92ZWRDaGlsZE5vZGVzID0gdGhpcy5zcGxpY2VDaGlsZE5vZGVzKHN0YXJ0SW5kZXgsIGRlbGV0ZUNvdW50LCBhZGRlZENoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIHJlbW92ZWRDaGlsZE5vZGVzO1xuICB9XG5cbiAgcmVwbGFjZUNoaWxkTm9kZShyZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKSB7XG4gICAgY29uc3QgcmVwbGFjZWRDaGlsZE5vZGVzID0gW1xuICAgICAgcmVwbGFjZWRDaGlsZE5vZGVcbiAgICBdO1xuXG4gICAgdGhpcy5yZXBsYWNlQ2hpbGROb2RlcyhyZXBsYWNlZENoaWxkTm9kZXMsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG4gIH1cblxuICByZXBsYWNlQ2hpbGROb2RlcyhyZXBsYWNlZENoaWxkTm9kZXMsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcykge1xuICAgIGNvbnN0IHJlcGxhY2VkQ2hpbGROb2Rlc0xlbmd0aCA9IHJlcGxhY2VkQ2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgZmlyc3RSZXBsYWNlZENoaWxkTm9kZSA9IGZpcnN0KHJlcGxhY2VkQ2hpbGROb2RlcyksXG4gICAgICAgICAgZmlyc3RJbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKGZpcnN0UmVwbGFjZWRDaGlsZE5vZGUpLFxuICAgICAgICAgIHN0YXJ0SW5kZXggPSBmaXJzdEluZGV4LCAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IHJlcGxhY2VkQ2hpbGROb2Rlc0xlbmd0aDsgLy8vXG5cbiAgICB0aGlzLnNwbGljZUNoaWxkTm9kZXMoc3RhcnRJbmRleCwgZGVsZXRlQ291bnQsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG4gIH1cblxuICBzcGxpY2VDaGlsZE5vZGVzKHN0YXJ0SW5kZXgsIGRlbGV0ZUNvdW50LCBhZGRlZENoaWxkTm9kZXMgPSBbXSkge1xuICAgIGNvbnN0IHJlbW92ZWRDaGlsZE5vZGVzID0gdGhpcy5jaGlsZE5vZGVzLnNwbGljZShzdGFydEluZGV4LCBkZWxldGVDb3VudCwgLi4uYWRkZWRDaGlsZE5vZGVzKTtcblxuICAgIHRoaXMucmVzZXRDaGlsZE5vZGVzUGFyZW50Tm9kZShyZW1vdmVkQ2hpbGROb2Rlcyk7XG5cbiAgICB0aGlzLnNldENoaWxkTm9kZXNQYXJlbnROb2RlKGFkZGVkQ2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gcmVtb3ZlZENoaWxkTm9kZXM7XG4gIH1cblxuICBzbGljZUNoaWxkTm9kZXMoc3RhcnRJbmRleCwgZW5kSW5kZXggPSBJbmZpbml0eSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmNoaWxkTm9kZXMuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcbiAgICBpZiAoQ2xhc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgQ2xhc3MgPSBOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBvdXRlck5vZGUgPSBudWxsLFxuICAgICAgICAgIHBhcmVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBbXSxcbiAgICAgICAgICBub2RlID0gbmV3IENsYXNzKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKENsYXNzLCBvdXRlck5vZGUpIHtcbiAgICBpZiAob3V0ZXJOb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG91dGVyTm9kZSA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IFtdLFxuICAgICAgICAgIG5vZGUgPSBuZXcgQ2xhc3Mob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTm9kZSIsIm91dGVyTm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0T3V0ZXJOb2RlIiwiZ2V0UGFyZW50Tm9kZSIsImdldENoaWxkTm9kZXMiLCJzZXRPdXRlck5vZGUiLCJzZXRQYXJlbnROb2RlIiwic2V0Q2hpbGROb2RlcyIsIm1hcENoaWxkTm9kZSIsImNhbGxiYWNrIiwibWFwIiwic29tZUNoaWxkTm9kZSIsInNvbWUiLCJmaW5kQ2hpbGROb2RlIiwiZmluZCIsImV2ZXJ5Q2hpbGROb2RlIiwiZXZlcnkiLCJmaWx0ZXJDaGlsZE5vZGUiLCJmaWx0ZXIiLCJyZWR1Y2VDaGlsZE5vZGUiLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJmb3JFYWNoQ2hpbGROb2RlIiwiZm9yRWFjaCIsInNldENoaWxkTm9kZXNQYXJlbnROb2RlIiwidW5kZWZpbmVkIiwiY2hpbGROb2RlIiwicmVzZXRDaGlsZE5vZGVzUGFyZW50Tm9kZSIsImFkZENoaWxkTm9kZSIsImFkZGVkQ2hpbGROb2RlIiwic3RhcnRJbmRleCIsImFkZGVkQ2hpbGROb2RlcyIsImFkZENoaWxkTm9kZXMiLCJkZWxldGVDb3VudCIsInNwbGljZUNoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZE5vZGUiLCJyZW1vdmVkQ2hpbGROb2RlIiwicmVtb3ZlZENoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZE5vZGVzIiwicmVtb3ZlZENoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFJlcGxhY2VkQ2hpbGROb2RlIiwiZmlyc3QiLCJmaXJzdEluZGV4IiwiaW5kZXhPZiIsInJlcGxhY2VDaGlsZE5vZGUiLCJyZXBsYWNlZENoaWxkTm9kZSIsInJlcGxhY2VtZW50Q2hpbGROb2RlcyIsInJlcGxhY2VkQ2hpbGROb2RlcyIsInJlcGxhY2VDaGlsZE5vZGVzIiwicmVwbGFjZWRDaGlsZE5vZGVzTGVuZ3RoIiwic3BsaWNlIiwic2xpY2VDaGlsZE5vZGVzIiwiZW5kSW5kZXgiLCJJbmZpbml0eSIsInNsaWNlIiwiZnJvbU5vdGhpbmciLCJDbGFzcyIsIm5vZGUiLCJmcm9tT3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSxxQkFBTjthQUFNQSxLQUNQQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsVUFBVTtnQ0FEMUJIO1FBRWpCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztrQkFKREg7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFNBQVM7WUFDdkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFVBQVU7WUFDeEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFVBQVU7WUFDeEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYU4sU0FBUztnQkFDcEIsSUFBSSxDQUFDQSxTQUFTLEdBQUdBO1lBQ25COzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNOLFVBQVU7Z0JBQ3RCLElBQUksQ0FBQ0EsVUFBVSxHQUFHQTtZQUNwQjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjTixVQUFVO2dCQUN0QixJQUFJLENBQUNBLFVBQVUsR0FBR0E7WUFDcEI7OztZQUVBTyxL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