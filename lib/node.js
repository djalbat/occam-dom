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
var _occamparsers = require("occam-parsers");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
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
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
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
                var startIndex = 0, deleteCount = Infinity, addedChildNodes = childNodes; ///
                this.spliceChildNodes(startIndex, deleteCount, addedChildNodes);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this.forEachChildNode(function(childNode) {
                    childNode.destroy();
                });
                this.outerNode = null;
                this.parentNode = null;
                this.childNodes = null;
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
        },
        {
            key: "clone",
            value: function clone() {
                for(var _len = arguments.length, remainingArguments = new Array(_len), _key = 0; _key < _len; _key++){
                    remainingArguments[_key] = arguments[_key];
                }
                var Class = this.constructor, outerNode = this.outerNode, parentNode = null, childNodes = cloneChildNodes(this.childNodes), node = _construct(Class, [
                    outerNode,
                    parentNode,
                    childNodes
                ].concat(_to_consumable_array(remainingArguments)));
                node.setChildNodesParentNode();
                return node;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                if (Class === undefined) {
                    Class = Node; ///
                }
                var outerNode = null, parentNode = null, childNodes = [], node = _construct(Class, [
                    outerNode,
                    parentNode,
                    childNodes
                ].concat(_to_consumable_array(remainingArguments)));
                return node;
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(Class, outerNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                if (outerNode === undefined) {
                    outerNode = Class; ///
                    Class = Node; ///
                }
                var parentNode = null, childNodes = [], node = _construct(Class, [
                    outerNode,
                    parentNode,
                    childNodes
                ].concat(_to_consumable_array(remainingArguments)));
                return node;
            }
        },
        {
            key: "fromChildNodes",
            value: function fromChildNodes(Class, childNodes) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                if (childNodes === undefined) {
                    childNodes = Class; ///
                    Class = Node; ///
                }
                var outerNode = null, parentNode = null, node = _construct(Class, [
                    outerNode,
                    parentNode,
                    childNodes
                ].concat(_to_consumable_array(remainingArguments)));
                node.setChildNodesParentNode();
                return node;
            }
        }
    ]);
    return Node;
}();
Object.assign(Node.prototype, _occamparsers.nodeMixins);
function cloneChildNodes(childNodes) {
    childNodes = childNodes.map(function(childNode) {
        childNode = childNode.clone(); ///
        return childNode;
    });
    return childNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlTWl4aW5zIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IE5vZGVQYXJzZVRyZWUgZnJvbSBcIi4vcGFyc2VUcmVlL25vZGVcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMpIHtcbiAgICB0aGlzLm91dGVyTm9kZSA9IG91dGVyTm9kZTtcbiAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IGNoaWxkTm9kZXM7XG4gIH1cblxuICBnZXRPdXRlck5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMub3V0ZXJOb2RlO1xuICB9XG5cbiAgZ2V0UGFyZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlO1xuICB9XG5cbiAgZ2V0Q2hpbGROb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzO1xuICB9XG5cbiAgc2V0T3V0ZXJOb2RlKG91dGVyTm9kZSkge1xuICAgIHRoaXMub3V0ZXJOb2RlID0gb3V0ZXJOb2RlO1xuICB9XG5cbiAgc2V0UGFyZW50Tm9kZShwYXJlbnROb2RlKSB7XG4gICAgdGhpcy5wYXJlbnROb2RlID0gcGFyZW50Tm9kZTtcbiAgfVxuXG4gIHNldENoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSAwLFxuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gSW5maW5pdHksXG4gICAgICAgICAgYWRkZWRDaGlsZE5vZGVzID0gY2hpbGROb2RlczsgIC8vL1xuXG4gICAgdGhpcy5zcGxpY2VDaGlsZE5vZGVzKHN0YXJ0SW5kZXgsIGRlbGV0ZUNvdW50LCBhZGRlZENoaWxkTm9kZXMpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmZvckVhY2hDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY2hpbGROb2RlLmRlc3Ryb3koKTtcbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJOb2RlID0gbnVsbDtcbiAgICB0aGlzLnBhcmVudE5vZGUgPSBudWxsO1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IG51bGw7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBsZXQgc3RyaW5nID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgaWYgKHRoaXMub3V0ZXJOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gdGhpcy5vdXRlck5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gdGhpcy5vdXRlck5vZGUsXG4gICAgICAgICAgICAgIHR5cGUgPSB0ZXJtaW5hbE5vZGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgICBzdHJpbmcgPSBgXCIke2NvbnRlbnR9XCIgWyR7dHlwZX1dYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRoaXMub3V0ZXJOb2RlLFxuICAgICAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gICAgICAgIHN0cmluZyA9IHJ1bGVOYW1lOyAgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGFzUGFyc2VUcmVlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgbm9kZVBhcnNlVHJlZSA9IE5vZGVQYXJzZVRyZWUuZnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgcGFyc2VUcmVlID0gbm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGNsb25lKC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IENsYXNzID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBvdXRlck5vZGUgPSB0aGlzLm91dGVyTm9kZSxcbiAgICAgICAgICBwYXJlbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gY2xvbmVDaGlsZE5vZGVzKHRoaXMuY2hpbGROb2RlcyksXG4gICAgICAgICAgbm9kZSA9IG5ldyBDbGFzcyhvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBub2RlLnNldENoaWxkTm9kZXNQYXJlbnROb2RlKCk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKENsYXNzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIENsYXNzID0gTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3Qgb3V0ZXJOb2RlID0gbnVsbCxcbiAgICAgICAgICBwYXJlbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gW10sXG4gICAgICAgICAgbm9kZSA9IG5ldyBDbGFzcyhvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKENsYXNzLCBvdXRlck5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChvdXRlck5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3V0ZXJOb2RlID0gQ2xhc3M7ICAvLy9cblxuICAgICAgQ2xhc3MgPSBOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gW10sXG4gICAgICAgICAgbm9kZSA9IG5ldyBDbGFzcyhvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2hpbGROb2RlcyhDbGFzcywgY2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKGNoaWxkTm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY2hpbGROb2RlcyA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3Qgb3V0ZXJOb2RlID0gbnVsbCxcbiAgICAgICAgICBwYXJlbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbmV3IENsYXNzKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIG5vZGUuc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUoKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oTm9kZS5wcm90b3R5cGUsIG5vZGVNaXhpbnMpO1xuXG5mdW5jdGlvbiBjbG9uZUNoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICBjaGlsZE5vZGVzID0gY2hpbGROb2Rlcy5tYXAoKGNoaWxkTm9kZSkgPT4geyAgLy8vXG4gICAgY2hpbGROb2RlID0gY2hpbGROb2RlLmNsb25lKCk7ICAvLy9cblxuICAgIHJldHVybiBjaGlsZE5vZGU7XG4gIH0pO1xuXG4gIHJldHVybiBjaGlsZE5vZGVzO1xufVxuIl0sIm5hbWVzIjpbIk5vZGUiLCJvdXRlck5vZGUiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsImdldE91dGVyTm9kZSIsImdldFBhcmVudE5vZGUiLCJnZXRDaGlsZE5vZGVzIiwic2V0T3V0ZXJOb2RlIiwic2V0UGFyZW50Tm9kZSIsInNldENoaWxkTm9kZXMiLCJzdGFydEluZGV4IiwiZGVsZXRlQ291bnQiLCJJbmZpbml0eSIsImFkZGVkQ2hpbGROb2RlcyIsInNwbGljZUNoaWxkTm9kZXMiLCJkZXN0cm95IiwiZm9yRWFjaENoaWxkTm9kZSIsImNoaWxkTm9kZSIsImFzU3RyaW5nIiwic3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwidHlwZSIsImdldFR5cGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsIm5vblRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJhc1BhcnNlVHJlZSIsIm5vZGUiLCJub2RlUGFyc2VUcmVlIiwiTm9kZVBhcnNlVHJlZSIsImZyb21Ob2RlIiwicGFyc2VUcmVlIiwiY2xvbmUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJDbGFzcyIsImNvbnN0cnVjdG9yIiwiY2xvbmVDaGlsZE5vZGVzIiwic2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUiLCJmcm9tTm90aGluZyIsInVuZGVmaW5lZCIsImZyb21PdXRlck5vZGUiLCJmcm9tQ2hpbGROb2RlcyIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsIm5vZGVNaXhpbnMiLCJtYXAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OzRCQU5NOzJEQUVEO3lCQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsSUFBQSxBQUFNQSxxQkFBTjthQUFNQSxLQUNQQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsVUFBVTtnQ0FEMUJIO1FBRWpCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUND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