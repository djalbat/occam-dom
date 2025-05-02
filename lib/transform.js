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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBhcHBlbmROb2RlLFxuICAgICAgICAgcmVtb3ZlTm9kZSxcbiAgICAgICAgIHByZXBlbmROb2RlLFxuICAgICAgICAgcmVwbGFjZU5vZGUsXG4gICAgICAgICBhZGROb2RlQWZ0ZXIsXG4gICAgICAgICBhcHBlbmRUb2tlbnMsXG4gICAgICAgICByZW1vdmVUb2tlbnMsXG4gICAgICAgICByZXBsYWNlVG9rZW5zLFxuICAgICAgICAgcHJlcGVuZFRva2VucyxcbiAgICAgICAgIGFkZFRva2Vuc0FmdGVyLFxuICAgICAgICAgb3ZlcndyaXRlQ2xvbmVkTm9kZVRva2VucyxcbiAgICAgICAgIGNsb25lZFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zLCB9IGZyb20gXCIuL3V0aWxpdGllcy90cmFuc2Zvcm1cIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgdG9rZW5zKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2Vucyh0b2tlbnMgPSBbXSkge1xuICAgIHB1c2godG9rZW5zLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBhcHBlbmRUbyhwYXJlbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgYXBwZW5kZWROb2RlID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgYXBwZW5kZWRUb2tlbnMgPSB0aGlzLnRva2VuczsgIC8vL1xuXG4gICAgYXBwZW5kTm9kZShhcHBlbmRlZE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgYXBwZW5kVG9rZW5zKGFwcGVuZGVkVG9rZW5zLCB0b2tlbnMpO1xuICB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBwcmVwZW5kZWROb2RlID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgcHJlcGVuZGVkVG9rZW5zID0gdGhpcy50b2tlbnM7ICAvLy9cblxuICAgIHByZXBlbmROb2RlKHByZXBlbmRlZE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgcHJlcGVuZFRva2VucyhwcmVwZW5kZWRUb2tlbnMsIHRva2Vucyk7XG4gIH1cblxuICBhZGRBZnRlcihleGlzdGluZ05vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBhZGRlZE5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBleGlzdGluZ05vZGUuZ2V0UGFyZW50Tm9kZSgpLFxuICAgICAgICAgIGFkZGVkVG9rZW5zID0gdGhpcy50b2tlbnM7ICAvLy9cblxuICAgIGFkZE5vZGVBZnRlcihleGlzdGluZ05vZGUsIGFkZGVkTm9kZSwgcGFyZW50Tm9kZSk7XG5cbiAgICBhZGRUb2tlbnNBZnRlcihleGlzdGluZ05vZGUsIGFkZGVkVG9rZW5zLCB0b2tlbnMpO1xuICB9XG5cbiAgcmVwbGFjZShyZXBsYWNlZE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBwYXJlbnROb2RlID0gcmVwbGFjZWROb2RlLmdldFBhcmVudE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50VG9rZW5zID0gdGhpcy50b2tlbnM7IC8vL1xuXG4gICAgcmVwbGFjZU5vZGUocmVwbGFjZW1lbnROb2RlLCByZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgcmVwbGFjZVRva2VucyhyZXBsYWNlbWVudFRva2VucywgcmVwbGFjZWROb2RlLCB0b2tlbnMpO1xuICB9XG5cbiAgcmVtb3ZlKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBwYXJlbnROb2RlID0gdGhpcy5ub2RlLmdldFBhcmVudE5vZGUoKSxcbiAgICAgICAgICByZW1vdmVkTm9kZSA9IHRoaXMubm9kZTsgIC8vL1xuXG4gICAgcmVtb3ZlTm9kZShyZW1vdmVkTm9kZSwgcGFyZW50Tm9kZSk7XG5cbiAgICByZW1vdmVUb2tlbnMocmVtb3ZlZE5vZGUsIHRva2Vucyk7XG4gIH1cblxuICBjbG9uZSguLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBjbG9uZWROb2RlID0gdGhpcy5ub2RlLmNsb25lKCksXG4gICAgICAgICAgY2xvbmVkVG9rZW5zID0gY2xvbmVkVG9rZW5zRnJvbU5vZGVBbmRUb2tlbnModGhpcy5ub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICBvdmVyd3JpdGVDbG9uZWROb2RlVG9rZW5zKGNsb25lZE5vZGUsIGNsb25lZFRva2VucywgdGhpcy50b2tlbnMpO1xuXG4gICAgY29uc3QgQ2xhc3MgPSB0aGlzLmNvbnN0cnVjdG9yLCAvLy9cbiAgICAgICAgICBub2RlID0gY2xvbmVkTm9kZSwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IGNsb25lZFRva2VucywgLy8vXG4gICAgICAgICAgdHJhbnNmb3JtID0gbmV3IENsYXNzKG5vZGUsIHRva2VucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB0cmFuc2Zvcm1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZShDbGFzcywgbm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGNvbnRleHQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCk7XG5cbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0ID0gbm9kZTsgLy8vXG5cbiAgICAgIG5vZGUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gVHJhbnNmb3JtOyAgLy8vXG4gICAgfVxuXG4gICAgbGV0IHsgdG9rZW5zIH0gPSBjb250ZXh0O1xuXG4gICAgY29uc3QgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgICAgY2xvbmVkTm9kZSA9IG5vZGUuY2xvbmUoKTtcblxuICAgIGxldCBjbG9uZWRUb2tlbnM7XG5cbiAgICBpZiAoZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGNsb25lZFRva2VucyA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleDsgIC8vL1xuXG4gICAgICBjbG9uZWRUb2tlbnMgPSBjbG9uZWRUb2tlbnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgICBvdmVyd3JpdGVDbG9uZWROb2RlVG9rZW5zKGNsb25lZE5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQpO1xuICAgIH1cblxuICAgIG5vZGUgPSBjbG9uZWROb2RlOyAgLy8vXG5cbiAgICB0b2tlbnMgPSBjbG9uZWRUb2tlbnM7IC8vL1xuXG4gICAgY29uc3QgdHJhbnNmb3JtID0gbmV3IENsYXNzKG5vZGUsIHRva2VucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB0cmFuc2Zvcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMoQ2xhc3MsIG5vZGUsIHRva2VucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKHRva2VucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0b2tlbnMgPSBub2RlOyAgLy8vXG5cbiAgICAgIG5vZGUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gVHJhbnNmb3JtOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgdHJhbnNmb3JtID0gbmV3IENsYXNzKG5vZGUsIHRva2VucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB0cmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUcmFuc2Zvcm0iLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJub2RlIiwidG9rZW5zIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImFwcGVuZFRvIiwicGFyZW50Tm9kZSIsImNvbnRleHQiLCJhcHBlbmRlZE5vZGUiLCJhcHBlbmRlZFRva2VucyIsImFwcGVuZE5vZGUiLCJhcHBlbmRUb2tlbnMiLCJwcmVwZW5kVG8iLCJwcmVwZW5kZWROb2RlIiwicHJlcGVuZGVkVG9rZW5zIiwicHJlcGVuZE5vZGUiLCJwcmVwZW5kVG9rZW5zIiwiYWRkQWZ0ZXIiLCJleGlzdGluZ05vZGUiLCJhZGRlZE5vZGUiLCJnZXRQYXJlbnROb2RlIiwiYWRkZWRUb2tlbnMiLCJhZGROb2RlQWZ0ZXIiLCJhZGRUb2tlbnNBZnRlciIsInJlcGxhY2UiLCJyZXBsYWNlZE5vZGUiLCJyZXBsYWNlbWVudE5vZGUiLCJyZXBsYWNlbWVudFRva2VucyIsInJlcGxhY2VOb2RlIiwicmVwbGFjZVRva2VucyIsInJlbW92ZSIsInJlbW92ZWROb2RlIiwicmVtb3ZlTm9kZSIsInJlbW92ZVRva2VucyIsImNsb25lIiwicmVtYWluaW5nQXJndW1lbnRzIiwiY2xvbmVkTm9kZSIsImNsb25lZFRva2VucyIsImNsb25lZFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zIiwib3ZlcndyaXRlQ2xvbmVkTm9kZVRva2VucyIsIkNsYXNzIiwiY29uc3RydWN0b3IiLCJ0cmFuc2Zvcm0iLCJmcm9tTm9kZSIsInBvcCIsInVuZGVmaW5lZCIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJvZmZzZXQiLCJmcm9tTm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFtQnFCQTs7O3lCQWpCVTt5QkFhZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLElBQU0sQUFBRUMsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRU8sSUFBQSxBQUFNRCwwQkFBTjthQUFNQSxVQUNQRyxJQUFJLEVBQUVDLE1BQU07Z0NBRExKO1FBRWpCLElBQUksQ0FBQ0csSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTs7a0JBSEdKOztZQU1uQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFVRixTQUFBQSxpRUFBUyxFQUFFO2dCQUNuQkgsS0FBS0csUUFBUSxJQUFJLENBQUNBLE1BQU07Z0JBRXhCLE9BQU8sSUFBSSxDQUFDQSxNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLFVBQVUsRUFBRUMsT0FBTztnQkFDMUIsSUFBTSxBQUFFTCxTQUFXSyxRQUFYTCxRQUNGTSxlQUFlLElBQUksQ0FBQ1AsSUFBSSxFQUN4QlEsaUJBQWlCLElBQUksQ0FBQ1AsTUFBTSxFQUFHLEdBQUc7Z0JBRXhDUSxJQUFBQSxxQkFBVSxFQUFDRixjQUFjRjtnQkFFekJLLElBQUFBLHVCQUFZLEVBQUNGLGdCQUFnQlA7WUFDL0I7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVU4sVUFBVSxFQUFFQyxPQUFPO2dCQUMzQixJQUFNLEFBQUVMLFNBQVdLLFFBQVhMLFFBQ0ZXLGdCQUFnQixJQUFJLENBQUNa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