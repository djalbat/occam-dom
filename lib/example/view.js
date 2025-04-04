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
var _maximumDepth = /*#__PURE__*/ _interop_require_default(require("./view/input/maximumDepth"));
var _outerNodes = /*#__PURE__*/ _interop_require_default(require("./view/textarea/outerNodes"));
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
            var outerNode = node, expressions = _this.getExpressions(), maximumDepth = _this.getMaximumDepth(), outerNodes = (0, _query.queryByExpressions)(outerNode, expressions, maximumDepth), topmostInnerNode = topmostInnerNodeFromOuterNodes(outerNodes), innerNode = topmostInnerNode, outerParseTree = outerNode.asParseTree(tokens), innerParseTree = innerNode.asParseTree();
            _this.setOuterNodes(outerNodes, tokens); ///
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
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Maximum depth"), /*#__PURE__*/ React.createElement(_maximumDepth.default, {
                        onKeyUp: this.keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Outer nodes"), /*#__PURE__*/ React.createElement(_outerNodes.default, null))), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Outer parse tree"), /*#__PURE__*/ React.createElement(_outer.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Inner parse tree"), /*#__PURE__*/ React.createElement(_inner.default, null))))
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var _this_constructor = this.constructor, initialContent = _this_constructor.initialContent, initialExpressions = _this_constructor.initialExpressions, initialMaximumDepth = _this_constructor.initialMaximumDepth, content = initialContent, maximumDepth = initialMaximumDepth, expressions = initialExpressions; ///
                this.setContent(content);
                this.setMaximumDepth(maximumDepth);
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
    "//propertyName",
    "//@identifier"
]);
_define_property(View, "initialMaximumDepth", 5);
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgbm9kZVV0aWxpdGllcyB9IGZyb20gXCIuLi9pbmRleFwiIC8vL1xuaW1wb3J0IHsgQ1NTTGV4ZXIsIENTU1BhcnNlciB9IGZyb20gXCJ3aXRoLXN0eWxlXCI7XG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vdmlldy9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vdmlldy9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBDb250ZW50VGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgTWF4aW11bURlcHRoSW5wdXQgZnJvbSBcIi4vdmlldy9pbnB1dC9tYXhpbXVtRGVwdGhcIjtcbmltcG9ydCBPdXRlck5vZGVzVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9vdXRlck5vZGVzXCI7XG5pbXBvcnQgRXhwcmVzc2lvbnNUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2V4cHJlc3Npb25zXCI7XG5pbXBvcnQgT3V0ZXJQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL3BhcnNlVHJlZS9vdXRlclwiO1xuaW1wb3J0IElubmVyUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9wYXJzZVRyZWUvaW5uZXJcIjtcblxuaW1wb3J0IHsgcXVlcnlCeUV4cHJlc3Npb25zIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHsgdG9wbW9zdE5vZGVGcm9tT3V0ZXJOb2RlczogdG9wbW9zdElubmVyTm9kZUZyb21PdXRlck5vZGVzIH0gPSBub2RlVXRpbGl0aWVzO1xuXG5jb25zdCBjc3NMZXhlciA9IENTU0xleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBjc3NQYXJzZXIgPSBDU1NQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlVcEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gY3NzTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IGNzc1BhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBvdXRlck5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBleHByZXNzaW9ucyA9IHRoaXMuZ2V0RXhwcmVzc2lvbnMoKSxcbiAgICAgICAgICBtYXhpbXVtRGVwdGggPSB0aGlzLmdldE1heGltdW1EZXB0aCgpLFxuICAgICAgICAgIG91dGVyTm9kZXMgPSBxdWVyeUJ5RXhwcmVzc2lvbnMob3V0ZXJOb2RlLCBleHByZXNzaW9ucywgbWF4aW11bURlcHRoKSxcbiAgICAgICAgICB0b3Btb3N0SW5uZXJOb2RlID0gdG9wbW9zdElubmVyTm9kZUZyb21PdXRlck5vZGVzKG91dGVyTm9kZXMpLFxuICAgICAgICAgIGlubmVyTm9kZSA9IHRvcG1vc3RJbm5lck5vZGUsIC8vL1xuICAgICAgICAgIG91dGVyUGFyc2VUcmVlID0gb3V0ZXJOb2RlLmFzUGFyc2VUcmVlKHRva2VucyksXG4gICAgICAgICAgaW5uZXJQYXJzZVRyZWUgPSBpbm5lck5vZGUuYXNQYXJzZVRyZWUoKTtcblxuICAgIHRoaXMuc2V0T3V0ZXJOb2RlcyhvdXRlck5vZGVzLCB0b2tlbnMpOyAvLy9cblxuICAgIHRoaXMuc2V0T3V0ZXJQYXJzZVRyZWUob3V0ZXJQYXJzZVRyZWUpO1xuXG4gICAgdGhpcy5zZXRJbm5lclBhcnNlVHJlZShpbm5lclBhcnNlVHJlZSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgRXhwcmVzc2lvbnNcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxFeHByZXNzaW9uc1RleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIE1heGltdW0gZGVwdGhcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxNYXhpbXVtRGVwdGhJbnB1dCBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBPdXRlciBub2Rlc1xuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPE91dGVyTm9kZXNUZXh0YXJlYS8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIE91dGVyIHBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxPdXRlclBhcnNlVHJlZVRleHRhcmVhLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBJbm5lciBwYXJzZSB0cmVlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8SW5uZXJQYXJzZVRyZWVUZXh0YXJlYS8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbENvbnRlbnQsIGluaXRpYWxFeHByZXNzaW9ucywgaW5pdGlhbE1heGltdW1EZXB0aCB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsICAvLy9cbiAgICAgICAgICBtYXhpbXVtRGVwdGggPSBpbml0aWFsTWF4aW11bURlcHRoLCAgLy8vXG4gICAgICAgICAgZXhwcmVzc2lvbnMgPSBpbml0aWFsRXhwcmVzc2lvbnM7ICAvLy9cblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0TWF4aW11bURlcHRoKG1heGltdW1EZXB0aCk7XG5cbiAgICB0aGlzLnNldEV4cHJlc3Npb25zKGV4cHJlc3Npb25zKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGAudmlldyB7XG4gIGJhY2tncm91bmQ6IHJlZDtcbn1cbmA7XG5cbiAgc3RhdGljIGluaXRpYWxFeHByZXNzaW9ucyA9IFtcbiAgICBcIi8vdGVybVwiLFxuICAgIFwiLy9ydWxlU2V0XCIsXG4gICAgXCIvL3NlbGVjdG9yc1wiLFxuICAgIFwiLy9wcm9wZXJ0eU5hbWVcIixcbiAgICBcIi8vQGlkZW50aWZpZXJcIlxuICBdO1xuXG4gIHN0YXRpYyBpbml0aWFsTWF4aW11bURlcHRoID0gNTtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJ0b3Btb3N0Tm9kZUZyb21PdXRlck5vZGVzIiwidG9wbW9zdElubmVyTm9kZUZyb21PdXRlck5vZGVzIiwibm9kZVV0aWxpdGllcyIsImNzc0xleGVyIiwiQ1NTTGV4ZXIiLCJmcm9tTm90aGluZyIsImNzc1BhcnNlciIsIkNTU1BhcnNlciIsIlZpZXciLCJrZXlVcEhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwib3V0ZXJOb2RlIiwiZXhwcmVzc2lvbnMiLCJnZXRFeHByZXNzaW9ucyIsIm1heGltdW1EZXB0aCIsImdldE1heGltdW1EZXB0aCIsIm91dGVyTm9kZXMiLCJxdWVyeUJ5RXhwcmVzc2lvbnMiLCJ0b3Btb3N0SW5uZXJOb2RlIiwiaW5uZXJOb2RlIiwib3V0ZXJQYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsImlubmVyUGFyc2VUcmVlIiwic2V0T3V0ZXJOb2RlcyIsInNldE91dGVyUGFyc2VUcmVlIiwic2V0SW5uZXJQYXJzZVRyZWUiLCJjaGlsZEVsZW1lbnRzIiwiQ29sdW1uc0RpdiIsIlNpemVhYmxlRGl2IiwiUm93c0RpdiIsIlN1YkhlYWRpbmciLCJDb250ZW50VGV4dGFyZWEiLCJvbktleVVwIiwiRXhwcmVzc2lvbnNUZXh0YXJlYSIsIk1heGltdW1EZXB0aElucHV0IiwiT3V0ZXJOb2Rlc1RleHRhcmVhIiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIk91dGVyUGFyc2VUcmVlVGV4dGFyZWEiLCJJbm5lclBhcnNlVHJlZVRleHRhcmVhIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxDb250ZW50IiwiaW5pdGlhbEV4cHJlc3Npb25zIiwiaW5pdGlhbE1heGltdW1EZXB0aCIsInNldENvbnRlbnQiLCJzZXRNYXhpbXVtRGVwdGgiLCJzZXRFeHByZXNzaW9ucyIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW9JQTs7O2VBQUE7OztvRUFsSXNCO29CQUVFO3FCQUNNLFdBQVcsR0FBRzs7eUJBQ1I7MEJBQ2dDO2lFQUU3QzsrREFDQzs4REFDSTttRUFDRTtpRUFDQztrRUFDQzs0REFDRzs0REFDQTtxQkFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQyxJQUFRQSxBQUEyQkMsaUNBQW1DQyxvQkFBYSxDQUEzRUY7QUFFUixJQUFNRyxXQUFXQyxtQkFBUSxDQUFDQyxXQUFXLElBQy9CQyxZQUFZQyxvQkFBUyxDQUFDRixXQUFXO0FBRXZDLElBQUEsQUFBTUcscUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztnQkFBTixrQkFBTUEsa0JBQ0pDLHdCQUFBQSxnQkFBZSxTQUFDQyxPQUFPQztZQUNyQixJQUFNQyxVQUFVLE1BQUtDLFVBQVUsSUFDekJDLFNBQVNYLFNBQVNZLFFBQVEsQ0FBQ0gsVUFDM0JJLE9BQU9WLFVBQVVXLEtBQUssQ0FBQ0g7WUFFN0IsSUFBSUUsU0FBUyxNQUFNO2dCQUNqQjtZQUNGO1lBRUEsSUFBTUUsWUFBWUYsTUFDWkcsY0FBYyxNQUFLQyxjQUFjLElBQ2pDQyxlQUFlLE1BQUtDLGVBQWUsSUFDbkNDLGFBQWFDLElBQUFBLHlCQUFrQixFQUFDTixXQUFXQyxhQUFhRSxlQUN4REksbUJBQW1CeEIsK0JBQStCc0IsYUFDbERHLFlBQVlELGtCQUNaRSxpQkFBaUJULFVBQVVVLFdBQVcsQ0FBQ2QsU0FDdkNlLGlCQUFpQkgsVUFBVUUsV0FBVztZQUU1QyxNQUFLRSxhQUFhLENBQUNQLFlBQVlULFNBQVMsR0FBRztZQUUzQyxNQUFLaUIsaUJBQWlCLENBQUNKO1lBRXZCLE1BQUtLLGlCQUFpQixDQUFDSDtRQUN6Qjs7O2tCQXhCSXJCOztZQTBCSnlCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFRO2tDQUVOLG9CQUFDQyxzQkFBVSxzQkFDVCxvQkFBQ0MsaUJBQVcsc0JBQ1Ysb0JBQUNDLG1CQUFPLHNCQUNOLG9CQUFDQyxtQkFBVSxRQUFDLDBCQUdaLG9CQUFDQyxnQkFBZTt3QkFBQ0MsU0FBUyxJQUFJLENBQUM5QixZQUFZO3NDQUMzQyxvQkFBQzRCLG1CQUFVLFFBQUMsOEJBR1osb0JBQUNHLG9CQUFtQjt3QkFBQ0QsU0FBUyxJQUFJLENBQUM5QixZQUFZO3NDQUMvQyxvQkFBQzRCLG1CQUFVLFFBQUMsZ0NBR1osb0JBQUNJLHFCQUFpQjt3QkFBQ0YsU0FBUyxJQUFJLENBQUM5QixZQUFZO3NDQUM3QyxvQkFBQzRCLG1CQUFVLFFBQUMsOEJBR1osb0JBQUNLLG1CQUFrQix5QkFHdkIsb0JBQUNDLCtCQUFtQix1QkFDcEIsb0JBQUNDLHFCQUFTLHNCQUNSLG9CQUFDUixtQkFBTyxzQkFDTixvQkFBQ0MsbUJBQVUsUUFBQyxtQ0FHWixvQkFBQ1EsY0FBc0IsdUJBQ3ZCLG9CQUFDUixtQkFBVSxRQUFDLG1DQUdaLG9CQUFDUyxjQUFzQjtpQkFLOUI7WUFDSDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLGFBQWE7Z0JBRWxCLElBQW9FLG9CQUFBLElBQUksQ0FBQ0MsV0FBVyxFQUE1RUMsaUJBQTRELGtCQUE1REEsZ0JBQWdCQyxxQkFBNEMsa0JBQTVDQSxvQkFBb0JDLHNCQUF3QixrQkFBeEJBLHFCQUN0Q3hDLFVBQVVzQyxnQkFDVjdCLGVBQWUrQixxQkFDZmpDLGNBQWNnQyxvQkFBcUIsR0FBRztnQkFFNUMsSUFBSSxDQUFDRSxVQUFVLENBQUN6QztnQkFFaEIsSUFBSSxDQUFDMEMsZUFBZSxDQUFDakM7Z0JBRXJCLElBQUksQ0FBQ2tDLGNBQWMsQ0FBQ3BDO2dCQUVwQixJQUFJLENBQUNWLFlBQVksSUFBSyxHQUFHO1lBQzNCOzs7V0FuRklEO3FCQUFhZ0QsYUFBTztBQXFGeEIsaUJBckZJaEQsTUFxRkcwQyxrQkFBa0I7QUFLekIsaUJBMUZJMUMsTUEwRkcyQyxzQkFBcUI7SUFDMUI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNEO0FBRUQsaUJBbEdJM0MsTUFrR0c0Qyx1QkFBc0I7QUFFN0IsaUJBcEdJNUMsTUFvR0dpRCxXQUFVO0FBRWpCLGlCQXRHSWpELE1Bc0dHa0QscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDcEQifQ==