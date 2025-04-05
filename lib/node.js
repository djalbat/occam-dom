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
var _node = /*#__PURE__*/ _interop_require_default(require("./parseTree/node"));
var _constants = require("./constants");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
            key: "getMultiplicity",
            value: function getMultiplicity() {
                var childNodesLength = this.childNodes.length, multiplicity = childNodesLength; ///
                return multiplicity;
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
            key: "appendChildNode",
            value: function appendChildNode(appendedChildNode) {
                var appendedChildNodes = [
                    appendedChildNode
                ];
                this.appendChildNodes(appendedChildNodes);
            }
        },
        {
            key: "appendChildNodes",
            value: function appendChildNodes(appendedChildNodes) {
                var addedChildNodes = appendedChildNodes, multiplicity = this.getMultiplicity(), startIndex = multiplicity; ///
                this.addChildNodes(addedChildNodes, startIndex);
            }
        },
        {
            key: "prependChildNode",
            value: function prependChildNode(prependedChildNode) {
                var prependedChildNodes = [
                    prependedChildNode
                ];
                this.prependChildNodes(prependedChildNodes);
            }
        },
        {
            key: "prependChildNodes",
            value: function prependChildNodes(prependedChildNodes) {
                var addedChildNodes = prependedChildNodes, startIndex = 0;
                this.addChildNodes(addedChildNodes, startIndex);
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
        },
        {
            key: "asString",
            value: function asString() {
                var string = _constants.EMPTY_STRING;
                if (this.outerNode !== null) {
                    var nodeTerminalNode = this.outerNode.isTerminalNode();
                    if (nodeTerminalNode) {
                        var terminalNode = this.outerNode, type = terminalNode.getType(), content = terminalNode.getContent();
                        string = '"'.concat(content, '" [').concat(type, "]");
                    } else {
                        var nonTerminalNode = this.outerNode, ruleName = nonTerminalNode.getRuleName();
                        string = ruleName; ///
                    }
                }
                return string;
            }
        },
        {
            key: "asParseTree",
            value: function asParseTree() {
                var node = this, nodeParseTree = _node.default.fromNode(node), parseTree = nodeParseTree; ///
                return parseTree;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9kZVBhcnNlVHJlZSBmcm9tIFwiLi9wYXJzZVRyZWUvbm9kZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2Rlcykge1xuICAgIHRoaXMub3V0ZXJOb2RlID0gb3V0ZXJOb2RlO1xuICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuXG4gIGdldE91dGVyTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5vdXRlck5vZGU7XG4gIH1cblxuICBnZXRQYXJlbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGU7XG4gIH1cblxuICBnZXRDaGlsZE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXM7XG4gIH1cblxuICBzZXRPdXRlck5vZGUob3V0ZXJOb2RlKSB7XG4gICAgdGhpcy5vdXRlck5vZGUgPSBvdXRlck5vZGU7XG4gIH1cblxuICBzZXRQYXJlbnROb2RlKHBhcmVudE5vZGUpIHtcbiAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuICB9XG5cbiAgc2V0Q2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuXG4gIGdldE11bHRpcGxpY2l0eSgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzTGVuZ3RoID0gdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgbXVsdGlwbGljaXR5ID0gY2hpbGROb2Rlc0xlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIG11bHRpcGxpY2l0eTtcbiAgfVxuXG4gIG1hcENoaWxkTm9kZShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLm1hcChjYWxsYmFjayk7IH1cblxuICBzb21lQ2hpbGROb2RlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmNoaWxkTm9kZXMuc29tZShjYWxsYmFjayk7IH1cblxuICBmaW5kQ2hpbGROb2RlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmNoaWxkTm9kZXMuZmluZChjYWxsYmFjayk7IH1cblxuICBldmVyeUNoaWxkTm9kZShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIGZpbHRlckNoaWxkTm9kZShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLmZpbHRlcihjYWxsYmFjayk7IH1cblxuICByZWR1Y2VDaGlsZE5vZGUoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkgeyByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTsgfVxuXG4gIGZvckVhY2hDaGlsZE5vZGUoY2FsbGJhY2spIHsgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUoY2hpbGROb2Rlcykge1xuICAgIGlmIChjaGlsZE5vZGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNoaWxkTm9kZXMgPSBbXG4gICAgICAgIC4uLnRoaXMuY2hpbGROb2Rlc1xuICAgICAgXTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnROb2RlID0gdGhpcztcblxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjaGlsZE5vZGUuc2V0UGFyZW50Tm9kZShwYXJlbnROb2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUoY2hpbGROb2Rlcykge1xuICAgIGlmIChjaGlsZE5vZGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNoaWxkTm9kZXMgPSBbXG4gICAgICAgIC4uLnRoaXMuY2hpbGROb2Rlc1xuICAgICAgXTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnROb2RlID0gbnVsbDtcblxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjaGlsZE5vZGUuc2V0UGFyZW50Tm9kZShwYXJlbnROb2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZENoaWxkTm9kZShhZGRlZENoaWxkTm9kZSwgc3RhcnRJbmRleCkge1xuICAgIGNvbnN0IGFkZGVkQ2hpbGROb2RlcyA9IFtcbiAgICAgIGFkZGVkQ2hpbGROb2RlXG4gICAgXTtcblxuICAgIHRoaXMuYWRkQ2hpbGROb2RlcyhhZGRlZENoaWxkTm9kZXMsIHN0YXJ0SW5kZXgpO1xuICB9XG5cbiAgYWRkQ2hpbGROb2RlcyhhZGRlZENoaWxkTm9kZXMsIHN0YXJ0SW5kZXgpIHtcbiAgICBjb25zdCBkZWxldGVDb3VudCA9IDA7XG5cbiAgICB0aGlzLnNwbGljZUNoaWxkTm9kZXMoc3RhcnRJbmRleCwgZGVsZXRlQ291bnQsIGFkZGVkQ2hpbGROb2Rlcyk7XG4gIH1cblxuICByZW1vdmVDaGlsZE5vZGUocmVtb3ZlZENoaWxkTm9kZSkge1xuICAgIGxldCByZW1vdmVkQ2hpbGROb2RlcztcblxuICAgIHJlbW92ZWRDaGlsZE5vZGVzID0gW1xuICAgICAgcmVtb3ZlZENoaWxkTm9kZVxuICAgIF07XG5cbiAgICByZW1vdmVkQ2hpbGROb2RlcyA9IHRoaXMucmVtb3ZlQ2hpbGROb2RlcyhyZW1vdmVkQ2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gcmVtb3ZlZENoaWxkTm9kZXM7XG4gIH1cblxuICByZW1vdmVDaGlsZE5vZGVzKHJlbW92ZWRDaGlsZE5vZGVzKSB7XG4gICAgaWYgKHJlbW92ZWRDaGlsZE5vZGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlbW92ZWRDaGlsZE5vZGVzID0gW1xuICAgICAgICAuLi50aGlzLmNoaWxkTm9kZXNcbiAgICAgIF07XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlZENoaWxkTm9kZXNMZW5ndGggPSByZW1vdmVkQ2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAocmVtb3ZlZENoaWxkTm9kZXNMZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdFJlcGxhY2VkQ2hpbGROb2RlID0gZmlyc3QocmVtb3ZlZENoaWxkTm9kZXMpLFxuICAgICAgICAgIGZpcnN0SW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihmaXJzdFJlcGxhY2VkQ2hpbGROb2RlKSxcbiAgICAgICAgICBzdGFydEluZGV4ID0gZmlyc3RJbmRleCwgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSByZW1vdmVkQ2hpbGROb2Rlc0xlbmd0aCwgLy8vXG4gICAgICAgICAgYWRkZWRDaGlsZE5vZGVzID0gW107XG5cbiAgICByZW1vdmVkQ2hpbGROb2RlcyA9IHRoaXMuc3BsaWNlQ2hpbGROb2RlcyhzdGFydEluZGV4LCBkZWxldGVDb3VudCwgYWRkZWRDaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiByZW1vdmVkQ2hpbGROb2RlcztcbiAgfVxuXG4gIHJlcGxhY2VDaGlsZE5vZGUocmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcykge1xuICAgIGNvbnN0IHJlcGxhY2VkQ2hpbGROb2RlcyA9IFtcbiAgICAgIHJlcGxhY2VkQ2hpbGROb2RlXG4gICAgXTtcblxuICAgIHRoaXMucmVwbGFjZUNoaWxkTm9kZXMocmVwbGFjZWRDaGlsZE5vZGVzLCByZXBsYWNlbWVudENoaWxkTm9kZXMpO1xuICB9XG5cbiAgcmVwbGFjZUNoaWxkTm9kZXMocmVwbGFjZWRDaGlsZE5vZGVzLCByZXBsYWNlbWVudENoaWxkTm9kZXMpIHtcbiAgICBjb25zdCByZXBsYWNlZENoaWxkTm9kZXNMZW5ndGggPSByZXBsYWNlZENoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgIGZpcnN0UmVwbGFjZWRDaGlsZE5vZGUgPSBmaXJzdChyZXBsYWNlZENoaWxkTm9kZXMpLFxuICAgICAgICAgIGZpcnN0SW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihmaXJzdFJlcGxhY2VkQ2hpbGROb2RlKSxcbiAgICAgICAgICBzdGFydEluZGV4ID0gZmlyc3RJbmRleCwgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSByZXBsYWNlZENoaWxkTm9kZXNMZW5ndGg7IC8vL1xuXG4gICAgdGhpcy5zcGxpY2VDaGlsZE5vZGVzKHN0YXJ0SW5kZXgsIGRlbGV0ZUNvdW50LCByZXBsYWNlbWVudENoaWxkTm9kZXMpO1xuICB9XG5cbiAgYXBwZW5kQ2hpbGROb2RlKGFwcGVuZGVkQ2hpbGROb2RlKSB7XG4gICAgY29uc3QgYXBwZW5kZWRDaGlsZE5vZGVzID0gW1xuICAgICAgYXBwZW5kZWRDaGlsZE5vZGVcbiAgICBdO1xuXG4gICAgdGhpcy5hcHBlbmRDaGlsZE5vZGVzKGFwcGVuZGVkQ2hpbGROb2Rlcyk7XG4gIH1cblxuICBhcHBlbmRDaGlsZE5vZGVzKGFwcGVuZGVkQ2hpbGROb2Rlcykge1xuICAgIGNvbnN0IGFkZGVkQ2hpbGROb2RlcyA9IGFwcGVuZGVkQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgbXVsdGlwbGljaXR5ID0gdGhpcy5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgICBzdGFydEluZGV4ID0gbXVsdGlwbGljaXR5OyAgLy8vXG5cbiAgICB0aGlzLmFkZENoaWxkTm9kZXMoYWRkZWRDaGlsZE5vZGVzLCBzdGFydEluZGV4KTtcbiAgfVxuXG4gIHByZXBlbmRDaGlsZE5vZGUocHJlcGVuZGVkQ2hpbGROb2RlKSB7XG4gICAgY29uc3QgcHJlcGVuZGVkQ2hpbGROb2RlcyA9IFtcbiAgICAgIHByZXBlbmRlZENoaWxkTm9kZVxuICAgIF07XG5cbiAgICB0aGlzLnByZXBlbmRDaGlsZE5vZGVzKHByZXBlbmRlZENoaWxkTm9kZXMpO1xuICB9XG5cbiAgcHJlcGVuZENoaWxkTm9kZXMocHJlcGVuZGVkQ2hpbGROb2Rlcykge1xuICAgIGNvbnN0IGFkZGVkQ2hpbGROb2RlcyA9IHByZXBlbmRlZENoaWxkTm9kZXMsICAvLy9cbiAgICAgICAgICBzdGFydEluZGV4ID0gMDtcblxuICAgIHRoaXMuYWRkQ2hpbGROb2RlcyhhZGRlZENoaWxkTm9kZXMsIHN0YXJ0SW5kZXgpO1xuICB9XG5cbiAgc3BsaWNlQ2hpbGROb2RlcyhzdGFydEluZGV4LCBkZWxldGVDb3VudCwgYWRkZWRDaGlsZE5vZGVzID0gW10pIHtcbiAgICBjb25zdCByZW1vdmVkQ2hpbGROb2RlcyA9IHRoaXMuY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnRJbmRleCwgZGVsZXRlQ291bnQsIC4uLmFkZGVkQ2hpbGROb2Rlcyk7XG5cbiAgICB0aGlzLnJlc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUocmVtb3ZlZENoaWxkTm9kZXMpO1xuXG4gICAgdGhpcy5zZXRDaGlsZE5vZGVzUGFyZW50Tm9kZShhZGRlZENoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIHJlbW92ZWRDaGlsZE5vZGVzO1xuICB9XG5cbiAgc2xpY2VDaGlsZE5vZGVzKHN0YXJ0SW5kZXgsIGVuZEluZGV4ID0gSW5maW5pdHkpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5jaGlsZE5vZGVzLnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgbGV0IHN0cmluZyA9IEVNUFRZX1NUUklORztcblxuICAgIGlmICh0aGlzLm91dGVyTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IHRoaXMub3V0ZXJOb2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRoaXMub3V0ZXJOb2RlLFxuICAgICAgICAgICAgICB0eXBlID0gdGVybWluYWxOb2RlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgICAgc3RyaW5nID0gYFwiJHtjb250ZW50fVwiIFske3R5cGV9XWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0aGlzLm91dGVyTm9kZSxcbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgICBzdHJpbmcgPSBydWxlTmFtZTsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBhc1BhcnNlVHJlZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIG5vZGVQYXJzZVRyZWUgPSBOb2RlUGFyc2VUcmVlLmZyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IG5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcbiAgICBpZiAoQ2xhc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgQ2xhc3MgPSBOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBvdXRlck5vZGUgPSBudWxsLFxuICAgICAgICAgIHBhcmVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBbXSxcbiAgICAgICAgICBub2RlID0gbmV3IENsYXNzKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKENsYXNzLCBvdXRlck5vZGUpIHtcbiAgICBpZiAob3V0ZXJOb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG91dGVyTm9kZSA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IFtdLFxuICAgICAgICAgIG5vZGUgPSBuZXcgQ2xhc3Mob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTm9kZSIsIm91dGVyTm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0T3V0ZXJOb2RlIiwiZ2V0UGFyZW50Tm9kZSIsImdldENoaWxkTm9kZXMiLCJzZXRPdXRlck5vZGUiLCJzZXRQYXJlbnROb2RlIiwic2V0Q2hpbGROb2RlcyIsImdldE11bHRpcGxpY2l0eSIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJtdWx0aXBsaWNpdHkiLCJtYXBDaGlsZE5vZGUiLCJjYWxsYmFjayIsIm1hcCIsInNvbWVDaGlsZE5vZGUiLCJzb21lIiwiZmluZENoaWxkTm9kZSIsImZpbmQiLCJldmVyeUNoaWxkTm9kZSIsImV2ZXJ5IiwiZmlsdGVyQ2hpbGROb2RlIiwiZmlsdGVyIiwicmVkdWNlQ2hpbGROb2RlIiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwiZm9yRWFjaENoaWxkTm9kZSIsImZvckVhY2giLCJzZXRDaGlsZE5vZGVzUGFyZW50Tm9kZSIsInVuZGVmaW5lZCIsImNoaWxkTm9kZSIsInJlc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUiLCJhZGRDaGlsZE5vZGUiLCJhZGRlZENoaWxkTm9kZSIsInN0YXJ0SW5kZXgiLCJhZGRlZENoaWxkTm9kZXMiLCJhZGRDaGlsZE5vZGVzIiwiZGVsZXRlQ291bnQiLCJzcGxpY2VDaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGROb2RlIiwicmVtb3ZlZENoaWxkTm9kZSIsInJlbW92ZWRDaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGROb2RlcyIsInJlbW92ZWRDaGlsZE5vZGVzTGVuZ3RoIiwiZmlyc3RSZXBsYWNlZENoaWxkTm9kZSIsImZpcnN0IiwiZmlyc3RJbmRleCIsImluZGV4T2YiLCJyZXBsYWNlQ2hpbGROb2RlIiwicmVwbGFjZWRDaGlsZE5vZGUiLCJyZXBsYWNlbWVudENoaWxkTm9kZXMiLCJyZXBsYWNlZENoaWxkTm9kZXMiLCJyZXBsYWNlQ2hpbGROb2RlcyIsInJlcGxhY2VkQ2hpbGROb2Rlc0xlbmd0aCIsImFwcGVuZENoaWxkTm9kZSIsImFwcGVuZGVkQ2hpbGROb2RlIiwiYXBwZW5kZWRDaGlsZE5vZGVzIiwiYXBwZW5kQ2hpbGROb2RlcyIsInByZXBlbmRDaGlsZE5vZGUiLCJwcmVwZW5kZWRDaGlsZE5vZGUiLCJwcmVwZW5kZWRDaGlsZE5vZGVzIiwicHJlcGVuZENoaWxkTm9kZXMiLCJzcGxpY2UiLCJzbGljZUNoaWxkTm9kZXMiLCJlbmRJbmRleCIsIkluZmluaXR5Iiwic2xpY2UiLCJhc1N0cmluZyIsInN0cmluZyIsIkVNUFRZX1NUUklORyIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInR5cGUiLCJnZXRUeXBlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJub25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiYXNQYXJzZVRyZWUiLCJub2RlIiwibm9kZVBhcnNlVHJlZSIsIk5vZGVQYXJzZVRyZWUiLCJmcm9tTm9kZSIsInBhcnNlVHJlZSIsImZyb21Ob3RoaW5nIiwiQ2xhc3MiLCJmcm9tT3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsyREFKSzt5QkFFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxJQUFBLEFBQU1BLHFCQUFOO2FBQU1BLEtBQ1BDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxVQUFVO2dDQUQxQkg7UUFFakIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FB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