"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Transform;
    }
});
var _necessary = require("necessary");
var _transform = require("./utilities/transform");
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
var push = _necessary.arrayUtilities.push;
var Transform = /*#__PURE__*/ function() {
    function Transform(node, tokens) {
        _class_call_check(this, Transform);
        this.node = node;
        this.tokens = tokens;
    }
    _create_class(Transform, [
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                var tokens = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                push(tokens, this.tokens);
                return this.tokens;
            }
        },
        {
            key: "contract",
            value: function contract(Class, descendentNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _Class;
                if (descendentNode === undefined) {
                    descendentNode = Class; ///
                    Class = Transform; ///
                }
                var node = descendentNode, tokens = this.tokens, context = {
                    tokens: tokens
                }, transform = (_Class = Class).fromNode.apply(_Class, [
                    node
                ].concat(_to_consumable_array(remainingArguments), [
                    context
                ]));
                return transform;
            }
        },
        {
            key: "expand",
            value: function expand(Class, ascendantNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _Class;
                if (ascendantNode === undefined) {
                    ascendantNode = Class;
                    Class = Transform; ///
                }
                var node = ascendantNode, tokens = this.tokens, context = {
                    tokens: tokens
                }, transform = (_Class = Class).fromNode.apply(_Class, [
                    node
                ].concat(_to_consumable_array(remainingArguments), [
                    context
                ]));
                return transform;
            }
        },
        {
            key: "appendTo",
            value: function appendTo(parentNode, context) {
                var tokens = context.tokens, appendedNode = this.node, appendedTokens = this.tokens; ///
                (0, _transform.appendNode)(appendedNode, parentNode);
                (0, _transform.appendTokens)(appendedTokens, parentNode, tokens);
            }
        },
        {
            key: "prependTo",
            value: function prependTo(parentNode, context) {
                var tokens = context.tokens, prependedNode = this.node, prependedTokens = this.tokens; ///
                (0, _transform.prependNode)(prependedNode, parentNode);
                (0, _transform.prependTokens)(prependedTokens, parentNode, tokens);
            }
        },
        {
            key: "addAfter",
            value: function addAfter(existingNode, parentNode, context) {
                var tokens = context.tokens, markdownNode = this.node, removedChildNodes = markdownNode.removeChildNodes(), addedTokens = this.tokens, addedNodes = removedChildNodes; ///
                (0, _transform.addNodesAfter)(existingNode, addedNodes, parentNode);
                (0, _transform.addTokensAfter)(existingNode, addedTokens, tokens);
            }
        },
        {
            key: "replace",
            value: function replace(replacedNode, parentNode, context) {
                var tokens = context.tokens, replacementNode = this.node, replacementTokens = this.tokens; ///
                (0, _transform.replaceNode)(replacementNode, replacedNode, parentNode);
                (0, _transform.replaceTokens)(replacementTokens, replacedNode, tokens);
            }
        },
        {
            key: "removeFrom",
            value: function removeFrom(parentNode, context) {
                var tokens = context.tokens, removedNode = this.node; ///
                (0, _transform.removeNode)(removedNode, parentNode);
                (0, _transform.removeTokens)(removedNode, tokens);
            }
        },
        {
            key: "clone",
            value: function clone() {
                for(var _len = arguments.length, remainingArguments = new Array(_len), _key = 0; _key < _len; _key++){
                    remainingArguments[_key] = arguments[_key];
                }
                var clonedNode = this.node.clone(), clonedTokens = (0, _transform.clonedTokensFromNodeAndTokens)(this.node, this.tokens);
                (0, _transform.overwriteClonedNodeTokens)(clonedNode, clonedTokens, this.tokens);
                var Class = this.constructor, node = clonedNode, tokens = clonedTokens, transform = _construct(Class, [
                    node,
                    tokens
                ].concat(_to_consumable_array(remainingArguments)));
                return transform;
            }
        }
    ], [
        {
            key: "fromNode",
            value: function fromNode(Class, node) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var context = remainingArguments.pop();
                if (context === undefined) {
                    context = node; ///
                    node = Class; ///
                    Class = Transform; ///
                }
                var tokens = context.tokens;
                var firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens), clonedNode = node.clone();
                var clonedTokens;
                if (firstSignificantTokenIndex === null) {
                    clonedTokens = [];
                } else {
                    var offset = firstSignificantTokenIndex; ///
                    clonedTokens = (0, _transform.clonedTokensFromNodeAndTokens)(node, tokens);
                    (0, _transform.overwriteClonedNodeTokens)(clonedNode, clonedTokens, tokens, offset);
                }
                node = clonedNode; ///
                tokens = clonedTokens; ///
                var transform = _construct(Class, [
                    node,
                    tokens
                ].concat(_to_consumable_array(remainingArguments)));
                return transform;
            }
        },
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(Class, node, tokens) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
                    remainingArguments[_key - 3] = arguments[_key];
                }
                if (tokens === undefined) {
                    tokens = node; ///
                    node = Class; ///
                    Class = Transform; ///
                }
                var transform = _construct(Class, [
                    node,
                    tokens
                ].concat(_to_consumable_array(remainingArguments)));
                return transform;
            }
        }
    ]);
    return Transform;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBhcHBlbmROb2RlLFxuICAgICAgICAgcmVtb3ZlTm9kZSxcbiAgICAgICAgIHByZXBlbmROb2RlLFxuICAgICAgICAgcmVwbGFjZU5vZGUsXG4gICAgICAgICBhcHBlbmRUb2tlbnMsXG4gICAgICAgICByZW1vdmVUb2tlbnMsXG4gICAgICAgICByZXBsYWNlVG9rZW5zLFxuICAgICAgICAgYWRkTm9kZXNBZnRlcixcbiAgICAgICAgIHByZXBlbmRUb2tlbnMsXG4gICAgICAgICBhZGRUb2tlbnNBZnRlcixcbiAgICAgICAgIG92ZXJ3cml0ZUNsb25lZE5vZGVUb2tlbnMsXG4gICAgICAgICBjbG9uZWRUb2tlbnNGcm9tTm9kZUFuZFRva2VucywgfSBmcm9tIFwiLi91dGlsaXRpZXMvdHJhbnNmb3JtXCI7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIHRva2Vucykge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUb2tlbnModG9rZW5zID0gW10pIHtcbiAgICBwdXNoKHRva2VucywgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgY29udHJhY3QoQ2xhc3MsIGRlc2NlbmRlbnROb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoZGVzY2VuZGVudE5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZGVzY2VuZGVudE5vZGUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gVHJhbnNmb3JtOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IGRlc2NlbmRlbnROb2RlLCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnMsIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSB7IC8vL1xuICAgICAgICAgICAgdG9rZW5zXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBDbGFzcy5mcm9tTm9kZShub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRyYW5zZm9ybTtcbiAgfVxuXG4gIGV4cGFuZChDbGFzcywgYXNjZW5kYW50Tm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKGFzY2VuZGFudE5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYXNjZW5kYW50Tm9kZSA9IENsYXNzO1xuXG4gICAgICBDbGFzcyA9IFRyYW5zZm9ybTsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBhc2NlbmRhbnROb2RlLCAvLy9cbiAgICAgICAgICB0b2tlbnMgPSB0aGlzLnRva2VucywgLy8vXG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdHJhbnNmb3JtID0gQ2xhc3MuZnJvbU5vZGUobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0cmFuc2Zvcm07XG4gIH1cblxuICBhcHBlbmRUbyhwYXJlbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgYXBwZW5kZWROb2RlID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgYXBwZW5kZWRUb2tlbnMgPSB0aGlzLnRva2VuczsgIC8vL1xuXG4gICAgYXBwZW5kTm9kZShhcHBlbmRlZE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgYXBwZW5kVG9rZW5zKGFwcGVuZGVkVG9rZW5zLCBwYXJlbnROb2RlLCB0b2tlbnMpO1xuICB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBwcmVwZW5kZWROb2RlID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgcHJlcGVuZGVkVG9rZW5zID0gdGhpcy50b2tlbnM7ICAvLy9cblxuICAgIHByZXBlbmROb2RlKHByZXBlbmRlZE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgcHJlcGVuZFRva2VucyhwcmVwZW5kZWRUb2tlbnMsIHBhcmVudE5vZGUsIHRva2Vucyk7XG4gIH1cblxuICBhZGRBZnRlcihleGlzdGluZ05vZGUsIHBhcmVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBtYXJrZG93bk5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIHJlbW92ZWRDaGlsZE5vZGVzID0gbWFya2Rvd25Ob2RlLnJlbW92ZUNoaWxkTm9kZXMoKSxcbiAgICAgICAgICBhZGRlZFRva2VucyA9IHRoaXMudG9rZW5zLCAgLy8vXG4gICAgICAgICAgYWRkZWROb2RlcyA9IHJlbW92ZWRDaGlsZE5vZGVzOyAgLy8vXG5cbiAgICBhZGROb2Rlc0FmdGVyKGV4aXN0aW5nTm9kZSwgYWRkZWROb2RlcywgcGFyZW50Tm9kZSk7XG5cbiAgICBhZGRUb2tlbnNBZnRlcihleGlzdGluZ05vZGUsIGFkZGVkVG9rZW5zLCB0b2tlbnMpO1xuICB9XG5cbiAgcmVwbGFjZShyZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50VG9rZW5zID0gdGhpcy50b2tlbnM7IC8vL1xuXG4gICAgcmVwbGFjZU5vZGUocmVwbGFjZW1lbnROb2RlLCByZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgcmVwbGFjZVRva2VucyhyZXBsYWNlbWVudFRva2VucywgcmVwbGFjZWROb2RlLCB0b2tlbnMpO1xuICB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcmVtb3ZlZE5vZGUgPSB0aGlzLm5vZGU7ICAvLy9cblxuICAgIHJlbW92ZU5vZGUocmVtb3ZlZE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgcmVtb3ZlVG9rZW5zKHJlbW92ZWROb2RlLCB0b2tlbnMpO1xuICB9XG5cbiAgY2xvbmUoLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgY2xvbmVkTm9kZSA9IHRoaXMubm9kZS5jbG9uZSgpLFxuICAgICAgICAgIGNsb25lZFRva2VucyA9IGNsb25lZFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zKHRoaXMubm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgb3ZlcndyaXRlQ2xvbmVkTm9kZVRva2VucyhjbG9uZWROb2RlLCBjbG9uZWRUb2tlbnMsIHRoaXMudG9rZW5zKTtcblxuICAgIGNvbnN0IENsYXNzID0gdGhpcy5jb25zdHJ1Y3RvciwgLy8vXG4gICAgICAgICAgbm9kZSA9IGNsb25lZE5vZGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBjbG9uZWRUb2tlbnMsIC8vL1xuICAgICAgICAgIHRyYW5zZm9ybSA9IG5ldyBDbGFzcyhub2RlLCB0b2tlbnMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gdHJhbnNmb3JtXG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGUoQ2xhc3MsIG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBjb250ZXh0ID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpO1xuXG4gICAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGV4dCA9IG5vZGU7IC8vL1xuXG4gICAgICBub2RlID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IFRyYW5zZm9ybTsgIC8vL1xuICAgIH1cblxuICAgIGxldCB7IHRva2VucyB9ID0gY29udGV4dDtcblxuICAgIGNvbnN0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICAgIGNsb25lZE5vZGUgPSBub2RlLmNsb25lKCk7XG5cbiAgICBsZXQgY2xvbmVkVG9rZW5zO1xuXG4gICAgaWYgKGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID09PSBudWxsKSB7XG4gICAgICBjbG9uZWRUb2tlbnMgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXg7ICAvLy9cblxuICAgICAgY2xvbmVkVG9rZW5zID0gY2xvbmVkVG9rZW5zRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgb3ZlcndyaXRlQ2xvbmVkTm9kZVRva2VucyhjbG9uZWROb2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KTtcbiAgICB9XG5cbiAgICBub2RlID0gY2xvbmVkTm9kZTsgIC8vL1xuXG4gICAgdG9rZW5zID0gY2xvbmVkVG9rZW5zOyAvLy9cblxuICAgIGNvbnN0IHRyYW5zZm9ybSA9IG5ldyBDbGFzcyhub2RlLCB0b2tlbnMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gdHJhbnNmb3JtO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKENsYXNzLCBub2RlLCB0b2tlbnMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmICh0b2tlbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdG9rZW5zID0gbm9kZTsgIC8vL1xuXG4gICAgICBub2RlID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IFRyYW5zZm9ybTsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHRyYW5zZm9ybSA9IG5ldyBDbGFzcyhub2RlLCB0b2tlbnMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gdHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVHJhbnNmb3JtIiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwibm9kZSIsInRva2VucyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJjb250cmFjdCIsIkNsYXNzIiwiZGVzY2VuZGVudE5vZGUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJjb250ZXh0IiwidHJhbnNmb3JtIiwiZnJvbU5vZGUiLCJleHBhbmQiLCJhc2NlbmRhbnROb2RlIiwiYXBwZW5kVG8iLCJwYXJlbnROb2RlIiwiYXBwZW5kZWROb2RlIiwiYXBwZW5kZWRUb2tlbnMiLCJhcHBlbmROb2RlIiwiYXBwZW5kVG9rZW5zIiwicHJlcGVuZFRvIiwicHJlcGVuZGVkTm9kZSIsInByZXBlbmRlZFRva2VucyIsInByZXBlbmROb2RlIiwicHJlcGVuZFRva2VucyIsImFkZEFmdGVyIiwiZXhpc3RpbmdOb2RlIiwibWFya2Rvd25Ob2RlIiwicmVtb3ZlZENoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZE5vZGVzIiwiYWRkZWRUb2tlbnMiLCJhZGRlZE5vZGVzIiwiYWRkTm9kZXNBZnRlciIsImFkZFRva2Vuc0FmdGVyIiwicmVwbGFjZSIsInJlcGxhY2VkTm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50VG9rZW5zIiwicmVwbGFjZU5vZGUiLCJyZXBsYWNlVG9rZW5zIiwicmVtb3ZlRnJvbSIsInJlbW92ZWROb2RlIiwicmVtb3ZlTm9kZSIsInJlbW92ZVRva2VucyIsImNsb25lIiwiY2xvbmVkTm9kZSIsImNsb25lZFRva2VucyIsImNsb25lZFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zIiwib3ZlcndyaXRlQ2xvbmVkTm9kZVRva2VucyIsImNvbnN0cnVjdG9yIiwicG9wIiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsIm9mZnNldCIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQW1CcUJBOzs7eUJBakJVO3lCQWFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0MsSUFBTSxBQUFFQyxPQUFTQyx5QkFBYyxDQUF2QkQ7QUFFTyxJQUFBLEFBQU1ELDBCQUFOO2FBQU1BLFVBQ1BHLElBQUksRUFBRUMsTUFBTTtnQ0FETEo7UUFFakIsSUFBSSxDQUFDRyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBOztrQkFIR0o7O1lBTW5CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQVVGLFNBQUFBLGlFQUFTLEVBQUU7Z0JBQ25CSCxLQUFLRyxRQUFRLElBQUksQ0FBQ0EsTUFBTTtnQkFFeEIsT0FBTyxJQUFJLENBQUNBLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsS0FBSyxFQUFFQyxjQUFjO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQyxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7b0JBWWpDRjtnQkFYbEIsSUFBSUMsbUJBQW1CRSxXQUFXO29CQUNoQ0YsaUJBQWlCRCxPQUFPLEdBQUc7b0JBRTNCQSxRQXBCZVIsV0FvQkssR0FBRztnQkFD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