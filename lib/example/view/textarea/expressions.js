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
var _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
var _constants = require("../../constants");
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
        "\n  \n  height: 18rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ExpressionsTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(ExpressionsTextarea, Textarea);
    function ExpressionsTextarea() {
        _class_call_check(this, ExpressionsTextarea);
        return _call_super(this, ExpressionsTextarea, arguments);
    }
    _create_class(ExpressionsTextarea, [
        {
            key: "getExpressions",
            value: function getExpressions() {
                var value = this.getValue(), expressionString = value, expressions = JSON.parse(expressionString); ///
                return expressions;
            }
        },
        {
            key: "setExpressions",
            value: function setExpressions(expressions) {
                var space = _constants.SPACE, replacer = null, expressionsString = JSON.stringify(expressions, replacer, space), value = expressionsString; ///
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getExpressions = this.getExpressions.bind(this), setExpressions = this.setExpressions.bind(this); ///;
                return {
                    getExpressions: getExpressions,
                    setExpressions: setExpressions
                };
            }
        }
    ]);
    return ExpressionsTextarea;
}(_textarea.default);
_define_property(ExpressionsTextarea, "defaultProperties", {
    className: "expressions",
    spellCheck: "false"
});
var _default = (0, _easywithstyle.default)(ExpressionsTextarea)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvZXhwcmVzc2lvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuaW1wb3J0IHsgU1BBQ0UgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIEV4cHJlc3Npb25zVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIGdldEV4cHJlc3Npb25zKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSB2YWx1ZSwgLy8vXG4gICAgICAgICAgZXhwcmVzc2lvbnMgPSBKU09OLnBhcnNlKGV4cHJlc3Npb25TdHJpbmcpOyAvLy9cblxuICAgIHJldHVybiBleHByZXNzaW9ucztcbiAgfVxuXG4gIHNldEV4cHJlc3Npb25zKGV4cHJlc3Npb25zKSB7XG4gICAgY29uc3Qgc3BhY2UgPSBTUEFDRSxcbiAgICAgICAgICByZXBsYWNlciA9IG51bGwsXG4gICAgICAgICAgZXhwcmVzc2lvbnNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHByZXNzaW9ucywgcmVwbGFjZXIsIHNwYWNlKSxcbiAgICAgICAgICB2YWx1ZSA9IGV4cHJlc3Npb25zU3RyaW5nOyAgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0RXhwcmVzc2lvbnMgPSB0aGlzLmdldEV4cHJlc3Npb25zLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0RXhwcmVzc2lvbnMgPSB0aGlzLnNldEV4cHJlc3Npb25zLmJpbmQodGhpcyk7IC8vLztcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0RXhwcmVzc2lvbnMsXG4gICAgICBzZXRFeHByZXNzaW9uc1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJleHByZXNzaW9uc1wiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRXhwcmVzc2lvbnNUZXh0YXJlYSlgXG4gIFxuICBoZWlnaHQ6IDE4cmVtO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiRXhwcmVzc2lvbnNUZXh0YXJlYSIsImdldEV4cHJlc3Npb25zIiwidmFsdWUiLCJnZXRWYWx1ZSIsImV4cHJlc3Npb25TdHJpbmciLCJleHByZXNzaW9ucyIsIkpTT04iLCJwYXJzZSIsInNldEV4cHJlc3Npb25zIiwic3BhY2UiLCJTUEFDRSIsInJlcGxhY2VyIiwiZXhwcmVzc2lvbnNTdHJpbmciLCJzdHJpbmdpZnkiLCJzZXRWYWx1ZSIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiVGV4dGFyZWEiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBDQTs7O2VBQUE7OztvRUF4Q3NCOytEQUVEO3lCQUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEIsSUFBQSxBQUFNQSxvQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxtQkFBbUJGLE9BQ25CRyxjQUFjQyxLQUFLQyxLQUFLLENBQUNILG1CQUFtQixHQUFHO2dCQUVyRCxPQUFPQztZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVILFdBQVc7Z0JBQ3hCLElBQU1JLFFBQVFDLGdCQUFLLEVBQ2JDLFdBQVcsTUFDWEMsb0JBQW9CTixLQUFLTyxTQUFTLENBQUNSLGFBQWFNLFVBQVVGLFFBQzFEUCxRQUFRVSxtQkFBb0IsR0FBRztnQkFFckMsSUFBSSxDQUFDRSxRQUFRLENBQUNaO1lBQ2hCOzs7WUFFQWEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1kLGlCQUFpQixJQUFJLENBQUNBLGNBQWMsQ0FBQ2UsSUFBSSxDQUFDLElBQUksR0FDOUNSLGlCQUFpQixJQUFJLENBQUNBLGNBQWMsQ0FBQ1EsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO2dCQUUzRCxPQUFRO29CQUNOZixnQkFBQUE7b0JBQ0FPLGdCQUFBQTtnQkFDRjtZQUNGOzs7V0ExQklSO0VBQTRCaUIsaUJBQVE7QUE0QnhDLGlCQTVCSWpCLHFCQTRCR2tCLHFCQUFvQjtJQUN6QkMsV0FBVztJQUNYQyxZQUFZO0FBQ2Q7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDckIifQ==