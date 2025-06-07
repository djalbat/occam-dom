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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBhcHBlbmROb2RlLFxuICAgICAgICAgcmVtb3ZlTm9kZSxcbiAgICAgICAgIHByZXBlbmROb2RlLFxuICAgICAgICAgcmVwbGFjZU5vZGUsXG4gICAgICAgICBhZGROb2RlQWZ0ZXIsXG4gICAgICAgICBhcHBlbmRUb2tlbnMsXG4gICAgICAgICByZW1vdmVUb2tlbnMsXG4gICAgICAgICByZXBsYWNlVG9rZW5zLFxuICAgICAgICAgcHJlcGVuZFRva2VucyxcbiAgICAgICAgIGFkZFRva2Vuc0FmdGVyLFxuICAgICAgICAgb3ZlcndyaXRlQ2xvbmVkTm9kZVRva2VucyxcbiAgICAgICAgIGNsb25lZFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zLCB9IGZyb20gXCIuL3V0aWxpdGllcy90cmFuc2Zvcm1cIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgdG9rZW5zKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2Vucyh0b2tlbnMgPSBbXSkge1xuICAgIHB1c2godG9rZW5zLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBhcHBlbmRUbyhwYXJlbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgYXBwZW5kZWROb2RlID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgYXBwZW5kZWRUb2tlbnMgPSB0aGlzLnRva2VuczsgIC8vL1xuXG4gICAgYXBwZW5kTm9kZShhcHBlbmRlZE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgYXBwZW5kVG9rZW5zKGFwcGVuZGVkVG9rZW5zLCB0b2tlbnMpO1xuICB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBwcmVwZW5kZWROb2RlID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgcHJlcGVuZGVkVG9rZW5zID0gdGhpcy50b2tlbnM7ICAvLy9cblxuICAgIHByZXBlbmROb2RlKHByZXBlbmRlZE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgcHJlcGVuZFRva2VucyhwcmVwZW5kZWRUb2tlbnMsIHRva2Vucyk7XG4gIH1cblxuICBhZGRBZnRlcihleGlzdGluZ05vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBhZGRlZE5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBleGlzdGluZ05vZGUuZ2V0UGFyZW50Tm9kZSgpLFxuICAgICAgICAgIGFkZGVkVG9rZW5zID0gdGhpcy50b2tlbnM7ICAvLy9cblxuICAgIGFkZE5vZGVBZnRlcihleGlzdGluZ05vZGUsIGFkZGVkTm9kZSwgcGFyZW50Tm9kZSk7XG5cbiAgICBhZGRUb2tlbnNBZnRlcihleGlzdGluZ05vZGUsIGFkZGVkVG9rZW5zLCB0b2tlbnMpO1xuICB9XG5cbiAgcmVwbGFjZShyZXBsYWNlZE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBwYXJlbnROb2RlID0gcmVwbGFjZWROb2RlLmdldFBhcmVudE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50VG9rZW5zID0gdGhpcy50b2tlbnM7IC8vL1xuXG4gICAgcmVwbGFjZU5vZGUocmVwbGFjZW1lbnROb2RlLCByZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgcmVwbGFjZVRva2VucyhyZXBsYWNlbWVudFRva2VucywgcmVwbGFjZWROb2RlLCB0b2tlbnMpO1xuICB9XG5cbiAgcmVtb3ZlKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBwYXJlbnROb2RlID0gdGhpcy5ub2RlLmdldFBhcmVudE5vZGUoKSxcbiAgICAgICAgICByZW1vdmVkTm9kZSA9IHRoaXMubm9kZTsgIC8vL1xuXG4gICAgcmVtb3ZlTm9kZShyZW1vdmVkTm9kZSwgcGFyZW50Tm9kZSk7XG5cbiAgICByZW1vdmVUb2tlbnMocmVtb3ZlZE5vZGUsIHRva2Vucyk7XG4gIH1cblxuICBjbG9uZSguLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBjbG9uZWROb2RlID0gdGhpcy5ub2RlLmNsb25lKCksXG4gICAgICAgICAgY2xvbmVkVG9rZW5zID0gY2xvbmVkVG9rZW5zRnJvbU5vZGVBbmRUb2tlbnModGhpcy5ub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICBvdmVyd3JpdGVDbG9uZWROb2RlVG9rZW5zKGNsb25lZE5vZGUsIGNsb25lZFRva2VucywgdGhpcy50b2tlbnMpO1xuXG4gICAgY29uc3QgQ2xhc3MgPSB0aGlzLmNvbnN0cnVjdG9yLCAvLy9cbiAgICAgICAgICBub2RlID0gY2xvbmVkTm9kZSwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IGNsb25lZFRva2VucywgLy8vXG4gICAgICAgICAgdHJhbnNmb3JtID0gbmV3IENsYXNzKG5vZGUsIHRva2VucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB0cmFuc2Zvcm1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZShDbGFzcywgbm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGNvbnRleHQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCk7XG5cbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0ID0gbm9kZTsgLy8vXG5cbiAgICAgIG5vZGUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gVHJhbnNmb3JtOyAgLy8vXG4gICAgfVxuXG4gICAgbGV0IHsgdG9rZW5zIH0gPSBjb250ZXh0O1xuXG4gICAgY29uc3QgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgICAgY2xvbmVkTm9kZSA9IG5vZGUuY2xvbmUoKTtcblxuICAgIGxldCBjbG9uZWRUb2tlbnM7XG5cbiAgICBpZiAoZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGNsb25lZFRva2VucyA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleDsgIC8vL1xuXG4gICAgICBjbG9uZWRUb2tlbnMgPSBjbG9uZWRUb2tlbnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgICBvdmVyd3JpdGVDbG9uZWROb2RlVG9rZW5zKGNsb25lZE5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQpO1xuICAgIH1cblxuICAgIG5vZGUgPSBjbG9uZWROb2RlOyAgLy8vXG5cbiAgICB0b2tlbnMgPSBjbG9uZWRUb2tlbnM7IC8vL1xuXG4gICAgY29uc3QgdHJhbnNmb3JtID0gbmV3IENsYXNzKG5vZGUsIHRva2VucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB0cmFuc2Zvcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMoQ2xhc3MsIG5vZGUsIHRva2VucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKHRva2VucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0b2tlbnMgPSBub2RlOyAgLy8vXG5cbiAgICAgIG5vZGUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gVHJhbnNmb3JtOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgdHJhbnNmb3JtID0gbmV3IENsYXNzKG5vZGUsIHRva2VucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB0cmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUcmFuc2Zvcm0iLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJub2RlIiwidG9rZW5zIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImFwcGVuZFRvIiwicGFyZW50Tm9kZSIsImNvbnRleHQiLCJhcHBlbmRlZE5vZGUiLCJhcHBlbmRlZFRva2VucyIsImFwcGVuZE5vZGUiLCJhcHBlbmRUb2tlbnMiLCJwcmVwZW5kVG8iLCJwcmVwZW5kZWROb2RlIiwicHJlcGVuZGVkVG9rZW5zIiwicHJlcGVuZE5vZGUiLCJwcmVwZW5kVG9rZW5zIiwiYWRkQWZ0ZXIiLCJleGlzdGluZ05vZGUiLCJhZGRlZE5vZGUiLCJnZXRQYXJlbnROb2RlIiwiYWRkZWRUb2tlbnMiLCJhZGROb2RlQWZ0ZXIiLCJhZGRUb2tlbnNBZnRlciIsInJlcGxhY2UiLCJyZXBsYWNlZE5vZGUiLCJyZXBsYWNlbWVudE5vZGUiLCJyZXBsYWNlbWVudFRva2VucyIsInJlcGxhY2VOb2RlIiwicmVwbGFjZVRva2VucyIsInJlbW92ZSIsInJlbW92ZWROb2RlIiwicmVtb3ZlTm9kZSIsInJlbW92ZVRva2VucyIsImNsb25lIiwicmVtYWluaW5nQXJndW1lbnRzIiwiY2xvbmVkTm9kZSIsImNsb25lZFRva2VucyIsImNsb25lZFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zIiwib3ZlcndyaXRlQ2xvbmVkTm9kZVRva2VucyIsIkNsYXNzIiwidHJhbnNmb3JtIiwiZnJvbU5vZGUiLCJwb3AiLCJ1bmRlZmluZWQiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Iiwib2Zmc2V0IiwiZnJvbU5vZGVBbmRUb2tlbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBbUJxQkE7Ozt5QkFqQlU7eUJBYWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQyxJQUFNLEFBQUVDLE9BQVNDLHlCQUFjLENBQXZCRDtBQUVPLElBQUEsQUFBTUQsMEJBQU47YUFBTUEsVUFDUEcsSUFBSSxFQUFFQyxNQUFNO2dDQURMSjtRQUVqQixJQUFJLENBQUNHLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7O2tCQUhHSjs7WUFNbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBVUYsU0FBQUEsaUVBQVMsRUFBRTtnQkFDbkJILEtBQUtHLFFBQVEsSUFBSSxDQUFDQSxNQUFNO2dCQUV4QixPQUFPLElBQUksQ0FBQ0EsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxVQUFVLEVBQUVDLE9BQU87Z0JBQzFCLElBQU0sQUFBRUwsU0FBV0ssUUFBWEwsUUFDRk0sZUFBZSxJQUFJLENBQUNQLElBQUksRUFDeEJRLGlCQUFpQixJQUFJLENBQUNQLE1BQU0sRUFBRyxHQUFHO2dCQUV4Q1EsSUFBQUEscUJBQVUsRUFBQ0YsY0FBY0Y7Z0JBRXpCSyxJQUFBQSx1QkFBWSxFQUFDRixnQkFBZ0JQO1lBQy9COzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVOLFVBQVUsRUFBRUMsT0FBTztnQkFDM0IsSUFBTSxBQUFFTCxTQUFXSyxRQUFYTCxRQUNGVyxnQkFBZ0IsSUFBSSxDQUFDWixJQUFJLEVBQ3pCYSxr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