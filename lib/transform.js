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
                (0, _transform.appendTokens)(appendedTokens, tokens);
            }
        },
        {
            key: "prependTo",
            value: function prependTo(parentNode, context) {
                var tokens = context.tokens, prependedNode = this.node, prependedTokens = this.tokens; ///
                (0, _transform.prependNode)(prependedNode, parentNode);
                (0, _transform.prependTokens)(prependedTokens, tokens);
            }
        },
        {
            key: "addAfter",
            value: function addAfter(existingNode, context) {
                var tokens = context.tokens, addedNode = this.node, parentNode = existingNode.getParentNode(), addedTokens = this.tokens; ///
                (0, _transform.addNodeAfter)(existingNode, addedNode, parentNode);
                (0, _transform.addTokensAfter)(existingNode, addedTokens, tokens);
            }
        },
        {
            key: "replace",
            value: function replace(replacedNode, context) {
                var tokens = context.tokens, parentNode = replacedNode.getParentNode(), replacementNode = this.node, replacementTokens = this.tokens; ///
                (0, _transform.replaceNode)(replacementNode, replacedNode, parentNode);
                (0, _transform.replaceTokens)(replacementTokens, replacedNode, tokens);
            }
        },
        {
            key: "remove",
            value: function remove(context) {
                var tokens = context.tokens, parentNode = this.node.getParentNode(), removedNode = this.node; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBhcHBlbmROb2RlLFxuICAgICAgICAgcmVtb3ZlTm9kZSxcbiAgICAgICAgIHByZXBlbmROb2RlLFxuICAgICAgICAgcmVwbGFjZU5vZGUsXG4gICAgICAgICBhZGROb2RlQWZ0ZXIsXG4gICAgICAgICBhcHBlbmRUb2tlbnMsXG4gICAgICAgICByZW1vdmVUb2tlbnMsXG4gICAgICAgICByZXBsYWNlVG9rZW5zLFxuICAgICAgICAgcHJlcGVuZFRva2VucyxcbiAgICAgICAgIGFkZFRva2Vuc0FmdGVyLFxuICAgICAgICAgb3ZlcndyaXRlQ2xvbmVkTm9kZVRva2VucyxcbiAgICAgICAgIGNsb25lZFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zLCB9IGZyb20gXCIuL3V0aWxpdGllcy90cmFuc2Zvcm1cIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgdG9rZW5zKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2Vucyh0b2tlbnMgPSBbXSkge1xuICAgIHB1c2godG9rZW5zLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBjb250cmFjdChDbGFzcywgZGVzY2VuZGVudE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChkZXNjZW5kZW50Tm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBkZXNjZW5kZW50Tm9kZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBUcmFuc2Zvcm07ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gZGVzY2VuZGVudE5vZGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSB0aGlzLnRva2VucywgLy8vXG4gICAgICAgICAgY29udGV4dCA9IHsgLy8vXG4gICAgICAgICAgICB0b2tlbnNcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRyYW5zZm9ybSA9IENsYXNzLmZyb21Ob2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cywgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdHJhbnNmb3JtO1xuICB9XG5cbiAgZXhwYW5kKENsYXNzLCBhc2NlbmRhbnROb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoYXNjZW5kYW50Tm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhc2NlbmRhbnROb2RlID0gQ2xhc3M7XG5cbiAgICAgIENsYXNzID0gVHJhbnNmb3JtOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IGFzY2VuZGFudE5vZGUsIC8vL1xuICAgICAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zLCAvLy9cbiAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgdG9rZW5zXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBDbGFzcy5mcm9tTm9kZShub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRyYW5zZm9ybTtcbiAgfVxuXG4gIGFwcGVuZFRvKHBhcmVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBhcHBlbmRlZE5vZGUgPSB0aGlzLm5vZGUsICAvLy9cbiAgICAgICAgICBhcHBlbmRlZFRva2VucyA9IHRoaXMudG9rZW5zOyAgLy8vXG5cbiAgICBhcHBlbmROb2RlKGFwcGVuZGVkTm9kZSwgcGFyZW50Tm9kZSk7XG5cbiAgICBhcHBlbmRUb2tlbnMoYXBwZW5kZWRUb2tlbnMsIHRva2Vucyk7XG4gIH1cblxuICBwcmVwZW5kVG8ocGFyZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHByZXBlbmRlZE5vZGUgPSB0aGlzLm5vZGUsICAvLy9cbiAgICAgICAgICBwcmVwZW5kZWRUb2tlbnMgPSB0aGlzLnRva2VuczsgIC8vL1xuXG4gICAgcHJlcGVuZE5vZGUocHJlcGVuZGVkTm9kZSwgcGFyZW50Tm9kZSk7XG5cbiAgICBwcmVwZW5kVG9rZW5zKHByZXBlbmRlZFRva2VucywgdG9rZW5zKTtcbiAgfVxuXG4gIGFkZEFmdGVyKGV4aXN0aW5nTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0LFxuICAgICAgICAgIGFkZGVkTm9kZSA9IHRoaXMubm9kZSwgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IGV4aXN0aW5nTm9kZS5nZXRQYXJlbnROb2RlKCksXG4gICAgICAgICAgYWRkZWRUb2tlbnMgPSB0aGlzLnRva2VuczsgIC8vL1xuXG4gICAgYWRkTm9kZUFmdGVyKGV4aXN0aW5nTm9kZSwgYWRkZWROb2RlLCBwYXJlbnROb2RlKTtcblxuICAgIGFkZFRva2Vuc0FmdGVyKGV4aXN0aW5nTm9kZSwgYWRkZWRUb2tlbnMsIHRva2Vucyk7XG4gIH1cblxuICByZXBsYWNlKHJlcGxhY2VkTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHBhcmVudE5vZGUgPSByZXBsYWNlZE5vZGUuZ2V0UGFyZW50Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHRoaXMubm9kZSwgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnRUb2tlbnMgPSB0aGlzLnRva2VuczsgLy8vXG5cbiAgICByZXBsYWNlTm9kZShyZXBsYWNlbWVudE5vZGUsIHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSk7XG5cbiAgICByZXBsYWNlVG9rZW5zKHJlcGxhY2VtZW50VG9rZW5zLCByZXBsYWNlZE5vZGUsIHRva2Vucyk7XG4gIH1cblxuICByZW1vdmUoY29udGV4dCkge1xuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHBhcmVudE5vZGUgPSB0aGlzLm5vZGUuZ2V0UGFyZW50Tm9kZSgpLFxuICAgICAgICAgIHJlbW92ZWROb2RlID0gdGhpcy5ub2RlOyAgLy8vXG5cbiAgICByZW1vdmVOb2RlKHJlbW92ZWROb2RlLCBwYXJlbnROb2RlKTtcblxuICAgIHJlbW92ZVRva2VucyhyZW1vdmVkTm9kZSwgdG9rZW5zKTtcbiAgfVxuXG4gIGNsb25lKC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGNsb25lZE5vZGUgPSB0aGlzLm5vZGUuY2xvbmUoKSxcbiAgICAgICAgICBjbG9uZWRUb2tlbnMgPSBjbG9uZWRUb2tlbnNGcm9tTm9kZUFuZFRva2Vucyh0aGlzLm5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIG92ZXJ3cml0ZUNsb25lZE5vZGVUb2tlbnMoY2xvbmVkTm9kZSwgY2xvbmVkVG9rZW5zLCB0aGlzLnRva2Vucyk7XG5cbiAgICBjb25zdCBDbGFzcyA9IHRoaXMuY29uc3RydWN0b3IsIC8vL1xuICAgICAgICAgIG5vZGUgPSBjbG9uZWROb2RlLCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gY2xvbmVkVG9rZW5zLCAvLy9cbiAgICAgICAgICB0cmFuc2Zvcm0gPSBuZXcgQ2xhc3Mobm9kZSwgdG9rZW5zLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHRyYW5zZm9ybVxuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlKENsYXNzLCBub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgY29udGV4dCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKTtcblxuICAgIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRleHQgPSBub2RlOyAvLy9cblxuICAgICAgbm9kZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBUcmFuc2Zvcm07ICAvLy9cbiAgICB9XG5cbiAgICBsZXQgeyB0b2tlbnMgfSA9IGNvbnRleHQ7XG5cbiAgICBjb25zdCBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgICBjbG9uZWROb2RlID0gbm9kZS5jbG9uZSgpO1xuXG4gICAgbGV0IGNsb25lZFRva2VucztcblxuICAgIGlmIChmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9PT0gbnVsbCkge1xuICAgICAgY2xvbmVkVG9rZW5zID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4OyAgLy8vXG5cbiAgICAgIGNsb25lZFRva2VucyA9IGNsb25lZFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICAgIG92ZXJ3cml0ZUNsb25lZE5vZGVUb2tlbnMoY2xvbmVkTm9kZSwgY2xvbmVkVG9rZW5zLCB0b2tlbnMsIG9mZnNldCk7XG4gICAgfVxuXG4gICAgbm9kZSA9IGNsb25lZE5vZGU7ICAvLy9cblxuICAgIHRva2VucyA9IGNsb25lZFRva2VuczsgLy8vXG5cbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBuZXcgQ2xhc3Mobm9kZSwgdG9rZW5zLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHRyYW5zZm9ybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2VucyhDbGFzcywgbm9kZSwgdG9rZW5zLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAodG9rZW5zID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRva2VucyA9IG5vZGU7ICAvLy9cblxuICAgICAgbm9kZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBUcmFuc2Zvcm07ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBuZXcgQ2xhc3Mobm9kZSwgdG9rZW5zLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRyYW5zZm9ybSIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsIm5vZGUiLCJ0b2tlbnMiLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiY29udHJhY3QiLCJDbGFzcyIsImRlc2NlbmRlbnROb2RlIiwicmVtYWluaW5nQXJndW1lbnRzIiwidW5kZWZpbmVkIiwiY29udGV4dCIsInRyYW5zZm9ybSIsImZyb21Ob2RlIiwiZXhwYW5kIiwiYXNjZW5kYW50Tm9kZSIsImFwcGVuZFRvIiwicGFyZW50Tm9kZSIsImFwcGVuZGVkTm9kZSIsImFwcGVuZGVkVG9rZW5zIiwiYXBwZW5kTm9kZSIsImFwcGVuZFRva2VucyIsInByZXBlbmRUbyIsInByZXBlbmRlZE5vZGUiLCJwcmVwZW5kZWRUb2tlbnMiLCJwcmVwZW5kTm9kZSIsInByZXBlbmRUb2tlbnMiLCJhZGRBZnRlciIsImV4aXN0aW5nTm9kZSIsImFkZGVkTm9kZSIsImdldFBhcmVudE5vZGUiLCJhZGRlZFRva2VucyIsImFkZE5vZGVBZnRlciIsImFkZFRva2Vuc0FmdGVyIiwicmVwbGFjZSIsInJlcGxhY2VkTm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50VG9rZW5zIiwicmVwbGFjZU5vZGUiLCJyZXBsYWNlVG9rZW5zIiwicmVtb3ZlIiwicmVtb3ZlZE5vZGUiLCJyZW1vdmVOb2RlIiwicmVtb3ZlVG9rZW5zIiwiY2xvbmUiLCJjbG9uZWROb2RlIiwiY2xvbmVkVG9rZW5zIiwiY2xvbmVkVG9rZW5zRnJvbU5vZGVBbmRUb2tlbnMiLCJvdmVyd3JpdGVDbG9uZWROb2RlVG9rZW5zIiwiY29uc3RydWN0b3IiLCJwb3AiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Iiwib2Zmc2V0IiwiZnJvbU5vZGVBbmRUb2tlbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBbUJxQkE7Ozt5QkFqQlU7eUJBYWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQyxJQUFNLEFBQUVDLE9BQVNDLHlCQUFjLENBQXZCRDtBQUVPLElBQUEsQUFBTUQsMEJBQU47YUFBTUEsVUFDUEcsSUFBSSxFQUFFQyxNQUFNO2dDQURMSjtRQUVqQixJQUFJLENBQUNHLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7O2tCQUhHSjs7WUFNbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBVUYsU0FBQUEsaUVBQVMsRUFBRTtnQkFDbkJILEtBQUtHLFFBQVEsSUFBSSxDQUFDQSxNQUFNO2dCQUV4QixPQUFPLElBQUksQ0FBQ0EsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxLQUFLLEVBQUVDLGNBQWM7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztvQkFZakNGO2dCQVhsQixJQUFJQyxtQkFBbUJFLFdBQVc7b0JBQ2hDRixpQkFBaUJELE9BQU8sR0FBRztvQkFFM0JBLFFBcEJlUixXQW9CSyxHQUFHO2dCQUN6QjtnQkFFQSxJQUFNRyxPQUFPTSxnQkFDUEwsU0FBUyxJQUFJLENBQUNBLE1BQU0sRUFDcEJRLFVBQVU7b0JBQ1JS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