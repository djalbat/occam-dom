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
var orderOuterNodes = _index.nodeUtilities.orderNodes, topmostInnerNodeFromOuterNodes = _index.nodeUtilities.topmostNodeFromOuterNodes;
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
            var outerNode = node, expressions = _this.getExpressions(), maximumDepth = _this.getMaximumDepth(), outerNodes = (0, _query.queryByExpressions)(outerNode, expressions, maximumDepth);
            orderOuterNodes(outerNodes);
            var topmostInnerNode = topmostInnerNodeFromOuterNodes(outerNodes), innerNode = topmostInnerNode; ///
            var outerParseTree = outerNode.asParseTree(tokens), innerParseTree = innerNode.asParseTree(tokens);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgbm9kZVV0aWxpdGllcyB9IGZyb20gXCIuLi9pbmRleFwiIC8vL1xuaW1wb3J0IHsgQ1NTTGV4ZXIsIENTU1BhcnNlciB9IGZyb20gXCJ3aXRoLXN0eWxlXCI7XG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vdmlldy9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vdmlldy9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBDb250ZW50VGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgTWF4aW11bURlcHRoSW5wdXQgZnJvbSBcIi4vdmlldy9pbnB1dC9tYXhpbXVtRGVwdGhcIjtcbmltcG9ydCBPdXRlck5vZGVzVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9vdXRlck5vZGVzXCI7XG5pbXBvcnQgRXhwcmVzc2lvbnNUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2V4cHJlc3Npb25zXCI7XG5pbXBvcnQgT3V0ZXJQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL3BhcnNlVHJlZS9vdXRlclwiO1xuaW1wb3J0IElubmVyUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9wYXJzZVRyZWUvaW5uZXJcIjtcblxuaW1wb3J0IHsgcXVlcnlCeUV4cHJlc3Npb25zIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHsgb3JkZXJOb2Rlczogb3JkZXJPdXRlck5vZGVzLCB0b3Btb3N0Tm9kZUZyb21PdXRlck5vZGVzOiB0b3Btb3N0SW5uZXJOb2RlRnJvbU91dGVyTm9kZXMgfSA9IG5vZGVVdGlsaXRpZXM7XG5cbmNvbnN0IGNzc0xleGVyID0gQ1NTTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGNzc1BhcnNlciA9IENTU1BhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBjc3NMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gY3NzUGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG91dGVyTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIGV4cHJlc3Npb25zID0gdGhpcy5nZXRFeHByZXNzaW9ucygpLFxuICAgICAgICAgIG1heGltdW1EZXB0aCA9IHRoaXMuZ2V0TWF4aW11bURlcHRoKCksXG4gICAgICAgICAgb3V0ZXJOb2RlcyA9IHF1ZXJ5QnlFeHByZXNzaW9ucyhvdXRlck5vZGUsIGV4cHJlc3Npb25zLCBtYXhpbXVtRGVwdGgpO1xuXG4gICAgb3JkZXJPdXRlck5vZGVzKG91dGVyTm9kZXMpO1xuXG4gICAgY29uc3QgdG9wbW9zdElubmVyTm9kZSA9IHRvcG1vc3RJbm5lck5vZGVGcm9tT3V0ZXJOb2RlcyhvdXRlck5vZGVzKSxcbiAgICAgICAgICBpbm5lck5vZGUgPSB0b3Btb3N0SW5uZXJOb2RlOyAvLy9cblxuICAgIGNvbnN0IG91dGVyUGFyc2VUcmVlID0gb3V0ZXJOb2RlLmFzUGFyc2VUcmVlKHRva2VucyksXG4gICAgICAgICAgaW5uZXJQYXJzZVRyZWUgPSBpbm5lck5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcblxuICAgIHRoaXMuc2V0T3V0ZXJOb2RlcyhvdXRlck5vZGVzLCB0b2tlbnMpOyAvLy9cblxuICAgIHRoaXMuc2V0T3V0ZXJQYXJzZVRyZWUob3V0ZXJQYXJzZVRyZWUpO1xuXG4gICAgdGhpcy5zZXRJbm5lclBhcnNlVHJlZShpbm5lclBhcnNlVHJlZSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgRXhwcmVzc2lvbnNcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxFeHByZXNzaW9uc1RleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIE1heGltdW0gZGVwdGhcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxNYXhpbXVtRGVwdGhJbnB1dCBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBPdXRlciBub2Rlc1xuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPE91dGVyTm9kZXNUZXh0YXJlYS8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIE91dGVyIHBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxPdXRlclBhcnNlVHJlZVRleHRhcmVhLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBJbm5lciBwYXJzZSB0cmVlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8SW5uZXJQYXJzZVRyZWVUZXh0YXJlYS8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbENvbnRlbnQsIGluaXRpYWxFeHByZXNzaW9ucywgaW5pdGlhbE1heGltdW1EZXB0aCB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsICAvLy9cbiAgICAgICAgICBtYXhpbXVtRGVwdGggPSBpbml0aWFsTWF4aW11bURlcHRoLCAgLy8vXG4gICAgICAgICAgZXhwcmVzc2lvbnMgPSBpbml0aWFsRXhwcmVzc2lvbnM7ICAvLy9cblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0TWF4aW11bURlcHRoKG1heGltdW1EZXB0aCk7XG5cbiAgICB0aGlzLnNldEV4cHJlc3Npb25zKGV4cHJlc3Npb25zKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGAudmlldyB7XG4gIGJhY2tncm91bmQ6IHJlZDtcbn1cbmA7XG5cbiAgc3RhdGljIGluaXRpYWxFeHByZXNzaW9ucyA9IFtcbiAgICBcIi8vdGVybVwiLFxuICAgIFwiLy9ydWxlU2V0XCIsXG4gICAgXCIvL3NlbGVjdG9yc1wiLFxuICAgIFwiLy9wcm9wZXJ0eU5hbWVcIixcbiAgICBcIi8vQGlkZW50aWZpZXJcIlxuICBdO1xuXG4gIHN0YXRpYyBpbml0aWFsTWF4aW11bURlcHRoID0gNTtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJvcmRlck5vZGVzIiwib3JkZXJPdXRlck5vZGVzIiwibm9kZVV0aWxpdGllcyIsInRvcG1vc3ROb2RlRnJvbU91dGVyTm9kZXMiLCJ0b3Btb3N0SW5uZXJOb2RlRnJvbU91dGVyTm9kZXMiLCJjc3NMZXhlciIsIkNTU0xleGVyIiwiZnJvbU5vdGhpbmciLCJjc3NQYXJzZXIiLCJDU1NQYXJzZXIiLCJWaWV3Iiwia2V5VXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsIm91dGVyTm9kZSIsImV4cHJlc3Npb25zIiwiZ2V0RXhwcmVzc2lvbnMiLCJtYXhpbXVtRGVwdGgiLCJnZXRNYXhpbXVtRGVwdGgiLCJvdXRlck5vZGVzIiwicXVlcnlCeUV4cHJlc3Npb25zIiwidG9wbW9zdElubmVyTm9kZSIsImlubmVyTm9kZSIsIm91dGVyUGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJpbm5lclBhcnNlVHJlZSIsInNldE91dGVyTm9kZXMiLCJzZXRPdXRlclBhcnNlVHJlZSIsInNldElubmVyUGFyc2VUcmVlIiwiY2hpbGRFbGVtZW50cyIsIkNvbHVtbnNEaXYiLCJTaXplYWJsZURpdiIsIlJvd3NEaXYiLCJTdWJIZWFkaW5nIiwiQ29udGVudFRleHRhcmVhIiwib25LZXlVcCIsIkV4cHJlc3Npb25zVGV4dGFyZWEiLCJNYXhpbXVtRGVwdGhJbnB1dCIsIk91dGVyTm9kZXNUZXh0YXJlYSIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJPdXRlclBhcnNlVHJlZVRleHRhcmVhIiwiSW5uZXJQYXJzZVRyZWVUZXh0YXJlYSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiY29uc3RydWN0b3IiLCJpbml0aWFsQ29udGVudCIsImluaXRpYWxFeHByZXNzaW9ucyIsImluaXRpYWxNYXhpbXVtRGVwdGgiLCJzZXRDb250ZW50Iiwic2V0TWF4aW11bURlcHRoIiwic2V0RXhwcmVzc2lvbnMiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF3SUE7OztlQUFBOzs7b0VBdElzQjtvQkFFRTtxQkFDTSxXQUFXLEdBQUc7O3lCQUNSOzBCQUNnQztpRUFFN0M7K0RBQ0M7OERBQ0k7bUVBQ0U7aUVBQ0M7a0VBQ0M7NERBQ0c7NERBQ0E7cUJBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkMsSUFBUUEsQUFBWUMsa0JBQStFQyxvQkFBYSxDQUF4R0YsWUFBNkJHLEFBQTJCQyxpQ0FBbUNGLG9CQUFhLENBQTNFQztBQUVyQyxJQUFNRSxXQUFXQyxtQkFBUSxDQUFDQyxXQUFXLElBQy9CQyxZQUFZQyxvQkFBUyxDQUFDRixXQUFXO0FBRXZDLElBQUEsQUFBTUcscUJBQU47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