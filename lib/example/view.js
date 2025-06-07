"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _index = require("../index" ///
);
var _withstyle = require("with-style");
var _easylayout = require("easy-layout");
var _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
var _sizeable = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable"));
var _content = /*#__PURE__*/ _interop_require_default(require("./view/textarea/content"));
var _expressions = /*#__PURE__*/ _interop_require_default(require("./view/textarea/expressions"));
var _outer = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree/outer"));
var _inner = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree/inner"));
var _query = require("./utilities/query");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  padding: 1rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var topmostInnerNodeFromOuterNodes = _index.nodeUtilities.topmostNodeFromOuterNodes;
var cssLexer = _withstyle.CSSLexer.fromNothing(), cssParser = _withstyle.CSSParser.fromNothing();
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _call_super(this, View, arguments), _define_property(_this, "keyUpHandler", function(event, element) {
            var content = _this.getContent(), tokens = cssLexer.tokenise(content), node = cssParser.parse(tokens);
            if (node === null) {
                return;
            }
            var outerNode = node, expressions = _this.getExpressions(), outerNodes = (0, _query.queryByExpressions)(outerNode, expressions), topmostInnerNode = topmostInnerNodeFromOuterNodes(outerNodes), innerNode = topmostInnerNode, outerParseTree = outerNode.asParseTree(tokens), innerParseTree = innerNode.asParseTree();
            _this.setOuterParseTree(outerParseTree);
            _this.setInnerParseTree(innerParseTree);
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
                        onKeyUp: this.keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Expressions"), /*#__PURE__*/ React.createElement(_expressions.default, {
                        onKeyUp: this.keyUpHandler
                    }))), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Outer parse tree"), /*#__PURE__*/ React.createElement(_outer.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Inner parse tree"), /*#__PURE__*/ React.createElement(_inner.default, null))))
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var _this_constructor = this.constructor, initialContent = _this_constructor.initialContent, initialExpressions = _this_constructor.initialExpressions, content = initialContent, expressions = initialExpressions; ///
                this.setContent(content);
                this.setExpressions(expressions);
                this.keyUpHandler(); ///
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "initialContent", ".view {\n  background: red;\n}\n");
_define_property(View, "initialExpressions", [
    "//term",
    "//ruleSet",
    "//selectors",
    "//declaration",
    "//propertyValue",
    "//@identifier"
]);
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgbm9kZVV0aWxpdGllcyB9IGZyb20gXCIuLi9pbmRleFwiIC8vL1xuaW1wb3J0IHsgQ1NTTGV4ZXIsIENTU1BhcnNlciB9IGZyb20gXCJ3aXRoLXN0eWxlXCI7XG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vdmlldy9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vdmlldy9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBDb250ZW50VGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgRXhwcmVzc2lvbnNUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2V4cHJlc3Npb25zXCI7XG5pbXBvcnQgT3V0ZXJQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL3BhcnNlVHJlZS9vdXRlclwiO1xuaW1wb3J0IElubmVyUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9wYXJzZVRyZWUvaW5uZXJcIjtcblxuaW1wb3J0IHsgcXVlcnlCeUV4cHJlc3Npb25zIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHsgdG9wbW9zdE5vZGVGcm9tT3V0ZXJOb2RlczogdG9wbW9zdElubmVyTm9kZUZyb21PdXRlck5vZGVzIH0gPSBub2RlVXRpbGl0aWVzO1xuXG5jb25zdCBjc3NMZXhlciA9IENTU0xleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBjc3NQYXJzZXIgPSBDU1NQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlVcEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gY3NzTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IGNzc1BhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBvdXRlck5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBleHByZXNzaW9ucyA9IHRoaXMuZ2V0RXhwcmVzc2lvbnMoKSxcbiAgICAgICAgICBvdXRlck5vZGVzID0gcXVlcnlCeUV4cHJlc3Npb25zKG91dGVyTm9kZSwgZXhwcmVzc2lvbnMpLFxuICAgICAgICAgIHRvcG1vc3RJbm5lck5vZGUgPSB0b3Btb3N0SW5uZXJOb2RlRnJvbU91dGVyTm9kZXMob3V0ZXJOb2RlcyksXG4gICAgICAgICAgaW5uZXJOb2RlID0gdG9wbW9zdElubmVyTm9kZSwgLy8vXG4gICAgICAgICAgb3V0ZXJQYXJzZVRyZWUgPSBvdXRlck5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKSxcbiAgICAgICAgICBpbm5lclBhcnNlVHJlZSA9IGlubmVyTm9kZS5hc1BhcnNlVHJlZSgpO1xuXG4gICAgdGhpcy5zZXRPdXRlclBhcnNlVHJlZShvdXRlclBhcnNlVHJlZSk7XG5cbiAgICB0aGlzLnNldElubmVyUGFyc2VUcmVlKGlubmVyUGFyc2VUcmVlKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBFeHByZXNzaW9uc1xuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEV4cHJlc3Npb25zVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIE91dGVyIHBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxPdXRlclBhcnNlVHJlZVRleHRhcmVhLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBJbm5lciBwYXJzZSB0cmVlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8SW5uZXJQYXJzZVRyZWVUZXh0YXJlYS8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbENvbnRlbnQsIGluaXRpYWxFeHByZXNzaW9ucyB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsICAvLy9cbiAgICAgICAgICBleHByZXNzaW9ucyA9IGluaXRpYWxFeHByZXNzaW9uczsgIC8vL1xuXG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRFeHByZXNzaW9ucyhleHByZXNzaW9ucyk7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBgLnZpZXcge1xuICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5gO1xuXG4gIHN0YXRpYyBpbml0aWFsRXhwcmVzc2lvbnMgPSBbXG4gICAgXCIvL3Rlcm1cIixcbiAgICBcIi8vcnVsZVNldFwiLFxuICAgIFwiLy9zZWxlY3RvcnNcIixcbiAgICBcIi8vZGVjbGFyYXRpb25cIixcbiAgICBcIi8vcHJvcGVydHlWYWx1ZVwiLFxuICAgIFwiLy9AaWRlbnRpZmllclwiXG4gIF07XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7XG4iXSwibmFtZXMiOlsidG9wbW9zdE5vZGVGcm9tT3V0ZXJOb2RlcyIsInRvcG1vc3RJbm5lck5vZGVGcm9tT3V0ZXJOb2RlcyIsIm5vZGVVdGlsaXRpZXMiLCJjc3NMZXhlciIsIkNTU0xleGVyIiwiZnJvbU5vdGhpbmciLCJjc3NQYXJzZXIiLCJDU1NQYXJzZXIiLCJWaWV3Iiwia2V5VXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsIm91dGVyTm9kZSIsImV4cHJlc3Npb25zIiwiZ2V0RXhwcmVzc2lvbnMiLCJvdXRlck5vZGVzIiwicXVlcnlCeUV4cHJlc3Npb25zIiwidG9wbW9zdElubmVyTm9kZSIsImlubmVyTm9kZSIsIm91dGVyUGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJpbm5lclBhcnNlVHJlZSIsInNldE91dGVyUGFyc2VUcmVlIiwic2V0SW5uZXJQYXJzZVRyZWUiLCJjaGlsZEVsZW1lbnRzIiwiQ29sdW1uc0RpdiIsIlNpemVhYmxlRGl2IiwiUm93c0RpdiIsIlN1YkhlYWRpbmciLCJDb250ZW50VGV4dGFyZWEiLCJvbktleVVwIiwiRXhwcmVzc2lvbnNUZXh0YXJlYSIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJPdXRlclBhcnNlVHJlZVRleHRhcmVhIiwiSW5uZXJQYXJzZVRyZWVUZXh0YXJlYSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiaW5pdGlhbENvbnRlbnQiLCJpbml0aWFsRXhwcmVzc2lvbnMiLCJzZXRDb250ZW50Iiwic2V0RXhwcmVzc2lvbnMiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtSEE7OztlQUFBOzs7b0VBakhzQjtvQkFFRTtxQkFDTSxXQUFXLEdBQUc7O3lCQUNSOzBCQUNnQztpRUFFN0M7K0RBQ0M7OERBQ0k7a0VBQ0k7NERBQ0c7NERBQ0E7cUJBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkMsSUFBUUEsQUFBMkJDLGlDQUFtQ0Msb0JBQWEsQ0FBM0VGO0FBRVIsSUFBTUcsV0FBV0MsbUJBQVEsQ0FBQ0MsV0FBVyxJQUMvQkMsWUFBWUMsb0JBQVMsQ0FBQ0YsV0FBVztBQUV2QyxJQUFBLEFBQU1HLHFCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTs7Z0JBQU4sa0JBQU1BLGtCQUNKQyx3QkFBQUEsZ0JBQWUsU0FBQ0MsT0FBT0M7WUFDckIsSUFBTUMsVUFBVSxNQUFLQyxVQUFVLElBQ3pCQyxTQUFTWCxTQUFTWSxRQUFRLENBQUNILFVBQzNCSSxPQUFPVixVQUFVVyxLQUFLLENBQUNIO1lBRTdCLElBQUlFLFNBQVMsTUFBTTtnQkFDakI7WUFDRjtZQUVBLElBQU1FLFlBQVlGLE1BQ1pHLGNBQWMsTUFBS0MsY0FBYyxJQUNqQ0MsYUFBYUMsSUFBQUEseUJBQWtCLEVBQUNKLFdBQVdDLGNBQzNDSSxtQkFBbUJ0QiwrQkFBK0JvQixhQUNsREcsWUFBWUQsa0JBQ1pFLGlCQUFpQlAsVUFBVVEsV0FBVyxDQUFDWixTQUN2Q2EsaUJBQWlCSCxVQUFVRSxXQUFXO1lBRTVDLE1BQUtFLGlCQUFpQixDQUFDSDtZQUV2QixNQUFLSSxpQkFBaUIsQ0FBQ0Y7UUFDekI7OztrQkFyQkluQjs7WUF1QkpzQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBUTtrQ0FFTixvQkFBQ0Msc0JBQVUsc0JBQ1Qsb0JBQUNDLGlCQUFXLHNCQUNWLG9CQUFDQyxtQkFBTyxzQkFDTixvQkFBQ0MsbUJBQVUsUUFBQywwQkFHWixvQkFBQ0MsZ0JBQWU7d0JBQUNDLFNBQVMsSUFBSSxDQUFDM0IsWUFBWTtzQ0FDM0Msb0JBQUN5QixtQkFBVSxRQUFDLDhCQUdaLG9CQUFDRyxvQkFBbUI7d0JBQUNELFNBQVMsSUFBSSxDQUFDM0IsWUFBWTt3Q0FHbkQsb0JBQUM2QiwrQkFBbUIsdUJBQ3BCLG9CQUFDQyxxQkFBUyxzQkFDUixvQkFBQ04sbUJBQU8sc0JBQ04sb0JBQUNDLG1CQUFVLFFBQUMsbUNBR1osb0JBQUNNLGNBQXNCLHVCQUN2QixvQkFBQ04sbUJBQVUsUUFBQyxtQ0FHWixvQkFBQ08sY0FBc0I7aUJBSzlCO1lBQ0g7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxhQUFhO2dCQUVsQixJQUErQyxvQkFBQSxJQUFJLENBQUMsV0FBVyxFQUF2REMsaUJBQXVDLGtCQUF2Q0EsZ0JBQWdCQyxxQkFBdUIsa0JBQXZCQSxvQkFDbEJqQyxVQUFVZ0MsZ0JBQ1Z6QixjQUFjMEIsb0JBQXFCLEdBQUc7Z0JBRTVDLElBQUksQ0FBQ0MsVUFBVSxDQUFDbEM7Z0JBRWhCLElBQUksQ0FBQ21DLGNBQWMsQ0FBQzVCO2dCQUVwQixJQUFJLENBQUNWLFlBQVksSUFBSyxHQUFHO1lBQzNCOzs7V0FyRUlEO3FCQUFhd0MsYUFBTztBQXVFeEIsaUJBdkVJeEMsTUF1RUdvQyxrQkFBa0I7QUFLekIsaUJBNUVJcEMsTUE0RUdxQyxzQkFBcUI7SUFDMUI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUFFRCxpQkFyRklyQyxNQXFGR3lDLFdBQVU7QUFFakIsaUJBdkZJekMsTUF1RkcwQyxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUM1QyJ9