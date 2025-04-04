"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ExpressionsTextarea;
    }
});
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvZXhwcmVzc2lvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuaW1wb3J0IHsgU1BBQ0UgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cHJlc3Npb25zVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIGdldEV4cHJlc3Npb25zKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSB2YWx1ZSwgLy8vXG4gICAgICAgICAgZXhwcmVzc2lvbnMgPSBKU09OLnBhcnNlKGV4cHJlc3Npb25TdHJpbmcpOyAvLy9cblxuICAgIHJldHVybiBleHByZXNzaW9ucztcbiAgfVxuXG4gIHNldEV4cHJlc3Npb25zKGV4cHJlc3Npb25zKSB7XG4gICAgY29uc3Qgc3BhY2UgPSBTUEFDRSxcbiAgICAgICAgICByZXBsYWNlciA9IG51bGwsXG4gICAgICAgICAgZXhwcmVzc2lvbnNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHByZXNzaW9ucywgcmVwbGFjZXIsIHNwYWNlKSxcbiAgICAgICAgICB2YWx1ZSA9IGV4cHJlc3Npb25zU3RyaW5nOyAgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0RXhwcmVzc2lvbnMgPSB0aGlzLmdldEV4cHJlc3Npb25zLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0RXhwcmVzc2lvbnMgPSB0aGlzLnNldEV4cHJlc3Npb25zLmJpbmQodGhpcyk7IC8vLztcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0RXhwcmVzc2lvbnMsXG4gICAgICBzZXRFeHByZXNzaW9uc1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJleHByZXNzaW9uc1wiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkV4cHJlc3Npb25zVGV4dGFyZWEiLCJnZXRFeHByZXNzaW9ucyIsInZhbHVlIiwiZ2V0VmFsdWUiLCJleHByZXNzaW9uU3RyaW5nIiwiZXhwcmVzc2lvbnMiLCJKU09OIiwicGFyc2UiLCJzZXRFeHByZXNzaW9ucyIsInNwYWNlIiwiU1BBQ0UiLCJyZXBsYWNlciIsImV4cHJlc3Npb25zU3RyaW5nIiwic3RyaW5naWZ5Iiwic2V0VmFsdWUiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsIlRleHRhcmVhIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsrREFKQTt5QkFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFBLEFBQU1BLG9DQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxtQkFBbUJGLE9BQ25CRyxjQUFjQyxLQUFLQyxLQUFLLENBQUNILG1CQUFtQixHQUFHO2dCQUVyRCxPQUFPQztZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVILFdBQVc7Z0JBQ3hCLElBQU1JLFFBQVFDLGdCQUFLLEVBQ2JDLFdBQVcsTUFDWEMsb0JBQW9CTixLQUFLTyxTQUFTLENBQUNSLGFBQWFNLFVBQVVGLFFBQzFEUCxRQUFRVSxtQkFBb0IsR0FBRztnQkFFckMsSUFBSSxDQUFDRSxRQUFRLENBQUNaO1lBQ2hCOzs7WUFFQWEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1kLGlCQUFpQixJQUFJLENBQUNBLGNBQWMsQ0FBQ2UsSUFBSSxDQUFDLElBQUksR0FDOUNSLGlCQUFpQixJQUFJLENBQUNBLGNBQWMsQ0FBQ1EsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO2dCQUUzRCxPQUFRO29CQUNOZixnQkFBQUE7b0JBQ0FPLGdCQUFBQTtnQkFDRjtZQUNGOzs7V0ExQm1CUjtFQUE0QmlCLGlCQUFRO0FBNEJ2RCxpQkE1Qm1CakIscUJBNEJaa0IscUJBQW9CO0lBQ3pCQyxXQUFXO0lBQ1hDLFlBQVk7QUFDZCJ9