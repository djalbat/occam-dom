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
var _node1 = require("./utilities/node");
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
            key: "isLessThan",
            value: function isLessThan(node) {
                var nodeA = this, nodeB = node, lessThan = (0, _node1.isLessThan)(nodeA, nodeB);
                return lessThan;
            }
        },
        {
            key: "isGreaterThan",
            value: function isGreaterThan(node) {
                var nodeA = this, nodeB = node, greaterThan = (0, _node1.isGreaterThan)(nodeA, nodeB);
                return greaterThan;
            }
        },
        {
            key: "isLessThanOrEqualTo",
            value: function isLessThanOrEqualTo(node) {
                var nodeA = this, nodeB = node, lessThanOrEqualTo = (0, _node1.isLessThanOrEqualTo)(nodeA, nodeB);
                return lessThanOrEqualTo;
            }
        },
        {
            key: "isGreaterThanOrEqualTo",
            value: function isGreaterThanOrEqualTo(node) {
                var nodeA = this, nodeB = node, greaterThanOrEqualTo = (0, _node1.isGreaterThanOrEqualTo)(nodeA, nodeB);
                return greaterThanOrEqualTo;
            }
        },
        {
            key: "matchOuterNode",
            value: function matchOuterNode(outerNode) {
                var outerNodeMatches = this.outerNode === outerNode;
                return outerNodeMatches;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlTWl4aW5zIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IE5vZGVQYXJzZVRyZWUgZnJvbSBcIi4vcGFyc2VUcmVlL25vZGVcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBpc0xlc3NUaGFuLCBpc0dyZWF0ZXJUaGFuLCBpc0xlc3NUaGFuT3JFcXVhbFRvLCBpc0dyZWF0ZXJUaGFuT3JFcXVhbFRvIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2Rlcykge1xuICAgIHRoaXMub3V0ZXJOb2RlID0gb3V0ZXJOb2RlO1xuICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuXG4gIGdldE91dGVyTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5vdXRlck5vZGU7XG4gIH1cblxuICBnZXRQYXJlbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGU7XG4gIH1cblxuICBnZXRDaGlsZE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXM7XG4gIH1cblxuICBzZXRPdXRlck5vZGUob3V0ZXJOb2RlKSB7XG4gICAgdGhpcy5vdXRlck5vZGUgPSBvdXRlck5vZGU7XG4gIH1cblxuICBzZXRQYXJlbnROb2RlKHBhcmVudE5vZGUpIHtcbiAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuICB9XG5cbiAgc2V0Q2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IDAsXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSBJbmZpbml0eSxcbiAgICAgICAgICBhZGRlZENoaWxkTm9kZXMgPSBjaGlsZE5vZGVzOyAgLy8vXG5cbiAgICB0aGlzLnNwbGljZUNoaWxkTm9kZXMoc3RhcnRJbmRleCwgZGVsZXRlQ291bnQsIGFkZGVkQ2hpbGROb2Rlcyk7XG4gIH1cblxuICBpc0xlc3NUaGFuKG5vZGUpIHtcbiAgICBjb25zdCBub2RlQSA9IHRoaXMsIC8vL1xuICAgICAgICAgIG5vZGVCID0gbm9kZSwgLy8vXG4gICAgICAgICAgbGVzc1RoYW4gPSBpc0xlc3NUaGFuKG5vZGVBLCBub2RlQik7XG5cbiAgICByZXR1cm4gbGVzc1RoYW47XG4gIH1cblxuICBpc0dyZWF0ZXJUaGFuKG5vZGUpIHtcbiAgICBjb25zdCBub2RlQSA9IHRoaXMsIC8vL1xuICAgICAgICAgIG5vZGVCID0gbm9kZSwgLy8vXG4gICAgICAgICAgZ3JlYXRlclRoYW4gPSBpc0dyZWF0ZXJUaGFuKG5vZGVBLCBub2RlQik7XG5cbiAgICByZXR1cm4gZ3JlYXRlclRoYW47XG4gIH1cblxuICBpc0xlc3NUaGFuT3JFcXVhbFRvKG5vZGUpIHtcbiAgICBjb25zdCBub2RlQSA9IHRoaXMsIC8vL1xuICAgICAgICAgIG5vZGVCID0gbm9kZSwgLy8vXG4gICAgICAgICAgbGVzc1RoYW5PckVxdWFsVG8gPSBpc0xlc3NUaGFuT3JFcXVhbFRvKG5vZGVBLCBub2RlQik7XG5cbiAgICByZXR1cm4gbGVzc1RoYW5PckVxdWFsVG87XG4gIH1cblxuICBpc0dyZWF0ZXJUaGFuT3JFcXVhbFRvKG5vZGUpIHtcbiAgICBjb25zdCBub2RlQSA9IHRoaXMsIC8vL1xuICAgICAgICBub2RlQiA9IG5vZGUsIC8vL1xuICAgICAgICBncmVhdGVyVGhhbk9yRXF1YWxUbyA9IGlzR3JlYXRlclRoYW5PckVxdWFsVG8obm9kZUEsIG5vZGVCKTtcblxuICAgIHJldHVybiBncmVhdGVyVGhhbk9yRXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoT3V0ZXJOb2RlKG91dGVyTm9kZSkge1xuICAgIGNvbnN0IG91dGVyTm9kZU1hdGNoZXMgPSAodGhpcy5vdXRlck5vZGUgPT09IG91dGVyTm9kZSk7XG5cbiAgICByZXR1cm4gb3V0ZXJOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5mb3JFYWNoQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNoaWxkTm9kZS5kZXN0cm95KCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyTm9kZSA9IG51bGw7XG4gICAgdGhpcy5wYXJlbnROb2RlID0gbnVsbDtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBudWxsO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgbGV0IHN0cmluZyA9IEVNUFRZX1NUUklORztcblxuICAgIGlmICh0aGlzLm91dGVyTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IHRoaXMub3V0ZXJOb2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRoaXMub3V0ZXJOb2RlLFxuICAgICAgICAgICAgICB0eXBlID0gdGVybWluYWxOb2RlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgICAgc3RyaW5nID0gYFwiJHtjb250ZW50fVwiIFske3R5cGV9XWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0aGlzLm91dGVyTm9kZSxcbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgICBzdHJpbmcgPSBydWxlTmFtZTsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBhc1BhcnNlVHJlZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIG5vZGVQYXJzZVRyZWUgPSBOb2RlUGFyc2VUcmVlLmZyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IG5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBjbG9uZSguLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBDbGFzcyA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgb3V0ZXJOb2RlID0gdGhpcy5vdXRlck5vZGUsXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IGNsb25lQ2hpbGROb2Rlcyh0aGlzLmNoaWxkTm9kZXMpLFxuICAgICAgICAgIG5vZGUgPSBuZXcgQ2xhc3Mob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgbm9kZS5zZXRDaGlsZE5vZGVzUGFyZW50Tm9kZSgpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChDbGFzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBDbGFzcyA9IE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IG91dGVyTm9kZSA9IG51bGwsXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IFtdLFxuICAgICAgICAgIG5vZGUgPSBuZXcgQ2xhc3Mob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShDbGFzcywgb3V0ZXJOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAob3V0ZXJOb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG91dGVyTm9kZSA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IFtdLFxuICAgICAgICAgIG5vZGUgPSBuZXcgQ2xhc3Mob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNoaWxkTm9kZXMoQ2xhc3MsIGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChjaGlsZE5vZGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNoaWxkTm9kZXMgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IG91dGVyTm9kZSA9IG51bGwsXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgbm9kZSA9IG5ldyBDbGFzcyhvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBub2RlLnNldENoaWxkTm9kZXNQYXJlbnROb2RlKCk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKE5vZGUucHJvdG90eXBlLCBub2RlTWl4aW5zKTtcblxuZnVuY3Rpb24gY2xvbmVDaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXMubWFwKChjaGlsZE5vZGUpID0+IHsgIC8vL1xuICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZS5jbG9uZSgpOyAgLy8vXG5cbiAgICByZXR1cm4gY2hpbGROb2RlO1xuICB9KTtcblxuICByZXR1cm4gY2hpbGROb2Rlcztcbn1cbiJdLCJuYW1lcyI6WyJOb2RlIiwib3V0ZXJOb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJnZXRPdXRlck5vZGUiLCJnZXRQYXJlbnROb2RlIiwiZ2V0Q2hpbGROb2RlcyIsInNldE91dGVyTm9kZSIsInNldFBhcmVudE5vZGUiLCJzZXRDaGlsZE5vZGVzIiwic3RhcnRJbmRleCIsImRlbGV0ZUNvdW50IiwiSW5maW5pdHkiLCJhZGRlZENoaWxkTm9kZXMiLCJzcGxpY2VDaGlsZE5vZGVzIiwiaXNMZXNzVGhhbiIsIm5vZGUiLCJub2RlQSIsIm5vZGVCIiwibGVzc1RoYW4iLCJpc0dyZWF0ZXJUaGFuIiwiZ3JlYXRlclRoYW4iLCJpc0xlc3NUaGFuT3JFcXVhbFRvIiwibGVzc1RoYW5PckVxdWFsVG8iLCJpc0dyZWF0ZXJUaGFuT3JFcXVhbFRvIiwiZ3JlYXRlclRoYW5PckVxdWFsVG8iLCJtYXRjaE91dGVyTm9kZSIsIm91dGVyTm9kZU1hdGNoZXMiLCJkZXN0cm95IiwiZm9yRWFjaENoaWxkTm9kZSIsImNoaWxkTm9kZSIsImFzU3RyaW5nIiwic3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwidHlwZSIsImdldFR5cGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsIm5vblRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJhc1BhcnNlVHJlZSIsIm5vZGVQYXJzZVRyZWUiLCJOb2RlUGFyc2VUcmVlIiwiZnJvbU5vZGUiLCJwYXJzZVRyZWUiLCJjbG9uZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIkNsYXNzIiwiY2xvbmVDaGlsZE5vZGVzIiwic2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUiLCJmcm9tTm90aGluZyIsInVuZGVmaW5lZCIsImZyb21PdXRlck5vZGUiLCJmcm9tQ2hpbGROb2RlcyIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsIm5vZGVNaXhpbnMi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