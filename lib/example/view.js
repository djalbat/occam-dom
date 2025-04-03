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
var _occamquery = require("occam-query");
var _easy = require("easy");
var _withstyle = require("with-style");
var _easylayout = require("easy-layout");
var _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
var _sizeable = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable"));
var _nodes = /*#__PURE__*/ _interop_require_default(require("./view/textarea/nodes"));
var _content = /*#__PURE__*/ _interop_require_default(require("./view/textarea/content"));
var _maximumDepth = /*#__PURE__*/ _interop_require_default(require("./view/input/maximumDepth"));
var _parseTree = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree"));
var _expressionString = /*#__PURE__*/ _interop_require_default(require("./view/input/expressionString"));
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
var cssLexer = _withstyle.CSSLexer.fromNothing(), cssParser = _withstyle.CSSParser.fromNothing();
var queryByExpressionString = _occamquery.queryUtilities.queryByExpressionString;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _call_super(this, View, arguments), _define_property(_this, "keyUpHandler", function(event, element) {
            _this.clearNodes();
            _this.clearParseTree();
            var content = _this.getContent(), tokens = cssLexer.tokenise(content), node = cssParser.parse(tokens);
            if (node === null) {
                return;
            }
            var abridged = true, parseTree = node.asParseTree(tokens, abridged), expressionString = _this.getExpressionString(), maximumDepth = _this.getMaximumDepth(), nodes = queryByExpressionString(node, expressionString, maximumDepth);
            if (nodes !== null) {
                _this.setNodes(nodes, tokens); ///
                _this.setParseTree(parseTree);
            }
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Expression"), /*#__PURE__*/ React.createElement(_expressionString.default, {
                        onKeyUp: this.keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Maximum depth"), /*#__PURE__*/ React.createElement(_maximumDepth.default, {
                        onKeyUp: this.keyUpHandler
                    }))), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
                        onKeyUp: this.keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Nodes"), /*#__PURE__*/ React.createElement(_nodes.default, null))))
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var _this_constructor = this.constructor, initialContent = _this_constructor.initialContent, initialExpressionString = _this_constructor.initialExpressionString, initialMaximumDepth = _this_constructor.initialMaximumDepth, content = initialContent, maximumDepth = initialMaximumDepth, expressionString = initialExpressionString; ///
                this.setContent(content);
                this.setMaximumDepth(maximumDepth);
                this.setExpressionString(expressionString);
                this.keyUpHandler(); ///
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "initialContent", ".view {\n  background: red;\n}\n");
_define_property(View, "initialExpressionString", "/*//@special[2...4]");
_define_property(View, "initialMaximumDepth", 5);
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5pbXBvcnQgeyBxdWVyeVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1xdWVyeVwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IENTU0xleGVyLCBDU1NQYXJzZXIgfSBmcm9tIFwid2l0aC1zdHlsZVwiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5cbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3ZpZXcvc3ViSGVhZGluZ1wiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3NpemVhYmxlXCI7XG5pbXBvcnQgTm9kZXNUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL25vZGVzXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvY29udGVudFwiO1xuaW1wb3J0IE1heGltdW1EZXB0aElucHV0IGZyb20gXCIuL3ZpZXcvaW5wdXQvbWF4aW11bURlcHRoXCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBFeHByZXNzaW9uU3RyaW5nSW5wdXQgZnJvbSBcIi4vdmlldy9pbnB1dC9leHByZXNzaW9uU3RyaW5nXCI7XG5cbmNvbnN0IGNzc0xleGVyID0gQ1NTTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGNzc1BhcnNlciA9IENTU1BhcnNlci5mcm9tTm90aGluZygpO1xuXG5jb25zdCB7IHF1ZXJ5QnlFeHByZXNzaW9uU3RyaW5nIH0gPSBxdWVyeVV0aWxpdGllcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlVcEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmNsZWFyTm9kZXMoKTtcblxuICAgIHRoaXMuY2xlYXJQYXJzZVRyZWUoKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBjc3NMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gY3NzUGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFicmlkZ2VkID0gdHJ1ZSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2VucywgYWJyaWRnZWQpLFxuICAgICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSB0aGlzLmdldEV4cHJlc3Npb25TdHJpbmcoKSxcbiAgICAgICAgICBtYXhpbXVtRGVwdGggPSB0aGlzLmdldE1heGltdW1EZXB0aCgpLFxuICAgICAgICAgIG5vZGVzID0gcXVlcnlCeUV4cHJlc3Npb25TdHJpbmcobm9kZSwgZXhwcmVzc2lvblN0cmluZywgbWF4aW11bURlcHRoKTtcblxuICAgIGlmIChub2RlcyAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXROb2Rlcyhub2RlcywgdG9rZW5zKTsgLy8vXG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gICAgfVxuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBFeHByZXNzaW9uXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8RXhwcmVzc2lvblN0cmluZ0lucHV0IG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIE1heGltdW0gZGVwdGhcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxNYXhpbXVtRGVwdGhJbnB1dCBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBOb2Rlc1xuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPE5vZGVzVGV4dGFyZWEgLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsQ29udGVudCwgaW5pdGlhbEV4cHJlc3Npb25TdHJpbmcsIGluaXRpYWxNYXhpbXVtRGVwdGggfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgY29udGVudCA9IGluaXRpYWxDb250ZW50LCAgLy8vXG4gICAgICAgICAgbWF4aW11bURlcHRoID0gaW5pdGlhbE1heGltdW1EZXB0aCwgIC8vL1xuICAgICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBpbml0aWFsRXhwcmVzc2lvblN0cmluZzsgIC8vL1xuXG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRNYXhpbXVtRGVwdGgobWF4aW11bURlcHRoKTtcblxuICAgIHRoaXMuc2V0RXhwcmVzc2lvblN0cmluZyhleHByZXNzaW9uU3RyaW5nKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGAudmlldyB7XG4gIGJhY2tncm91bmQ6IHJlZDtcbn1cbmA7XG5cbiAgc3RhdGljIGluaXRpYWxFeHByZXNzaW9uU3RyaW5nID0gXCIvKi8vQHNwZWNpYWxbMi4uLjRdXCI7XG5cbiAgc3RhdGljIGluaXRpYWxNYXhpbXVtRGVwdGggPSA1O1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbImNzc0xleGVyIiwiQ1NTTGV4ZXIiLCJmcm9tTm90aGluZyIsImNzc1BhcnNlciIsIkNTU1BhcnNlciIsInF1ZXJ5QnlFeHByZXNzaW9uU3RyaW5nIiwicXVlcnlVdGlsaXRpZXMiLCJWaWV3Iiwia2V5VXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY2xlYXJOb2RlcyIsImNsZWFyUGFyc2VUcmVlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsImFicmlkZ2VkIiwicGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJleHByZXNzaW9uU3RyaW5nIiwiZ2V0RXhwcmVzc2lvblN0cmluZyIsIm1heGltdW1EZXB0aCIsImdldE1heGltdW1EZXB0aCIsIm5vZGVzIiwic2V0Tm9kZXMiLCJzZXRQYXJzZVRyZWUiLCJjaGlsZEVsZW1lbnRzIiwiQ29sdW1uc0RpdiIsIlNpemVhYmxlRGl2IiwiUm93c0RpdiIsIlN1YkhlYWRpbmciLCJFeHByZXNzaW9uU3RyaW5nSW5wdXQiLCJvbktleVVwIiwiTWF4aW11bURlcHRoSW5wdXQiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiQ29udGVudFRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJOb2Rlc1RleHRhcmVhIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxDb250ZW50IiwiaW5pdGlhbEV4cHJlc3Npb25TdHJpbmciLCJpbml0aWFsTWF4aW11bURlcHRoIiwic2V0Q29udGVudCIsInNldE1heGltdW1EZXB0aCIsInNldEV4cHJlc3Npb25TdHJpbmciLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF3SEE7OztlQUFBOzs7b0VBdEhzQjswQkFDUztvQkFFUDt5QkFDWTswQkFDZ0M7aUVBRTdDOytEQUNDOzREQUNFOzhEQUNFO21FQUNFO2dFQUNBO3VFQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQU1BLFdBQVdDLG1CQUFRLENBQUNDLFdBQVcsSUFDL0JDLFlB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