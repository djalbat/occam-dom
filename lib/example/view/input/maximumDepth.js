"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MaximumDepthInput;
    }
});
var _input = /*#__PURE__*/ _interop_require_default(require("../input"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var MaximumDepthInput = /*#__PURE__*/ function(Input) {
    _inherits(MaximumDepthInput, Input);
    var _super = _create_super(MaximumDepthInput);
    function MaximumDepthInput() {
        _class_call_check(this, MaximumDepthInput);
        return _super.apply(this, arguments);
    }
    _create_class(MaximumDepthInput, [
        {
            key: "getMaximumDepth",
            value: function getMaximumDepth() {
                var value = this.getValue(), maximumDepth = Number(value);
                return maximumDepth;
            }
        },
        {
            key: "setMaximumDepth",
            value: function setMaximumDepth(maximumDepth) {
                var value = maximumDepth; ///
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getMaximumDepth = this.getMaximumDepth.bind(this), setMaximumDepth = this.setMaximumDepth.bind(this), setMaximumDepthReadOnly = this.setReadOnly.bind(this); ///;
                return {
                    getMaximumDepth: getMaximumDepth,
                    setMaximumDepth: setMaximumDepth,
                    setMaximumDepthReadOnly: setMaximumDepthReadOnly
                };
            }
        }
    ]);
    return MaximumDepthInput;
}(_input.default);
_define_property(MaximumDepthInput, "defaultProperties", {
    className: "maximum-depth",
    spellCheck: "false"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvaW5wdXQvbWF4aW11bURlcHRoLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2lucHV0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1heGltdW1EZXB0aElucHV0IGV4dGVuZHMgSW5wdXQge1xuICBnZXRNYXhpbXVtRGVwdGgoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgbWF4aW11bURlcHRoID0gTnVtYmVyKHZhbHVlKTtcblxuICAgIHJldHVybiBtYXhpbXVtRGVwdGg7XG4gIH1cblxuICBzZXRNYXhpbXVtRGVwdGgobWF4aW11bURlcHRoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBtYXhpbXVtRGVwdGg7IC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldE1heGltdW1EZXB0aCA9IHRoaXMuZ2V0TWF4aW11bURlcHRoLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0TWF4aW11bURlcHRoID0gdGhpcy5zZXRNYXhpbXVtRGVwdGguYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRNYXhpbXVtRGVwdGhSZWFkT25seSA9IHRoaXMuc2V0UmVhZE9ubHkuYmluZCh0aGlzKTsgLy8vO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRNYXhpbXVtRGVwdGgsXG4gICAgICBzZXRNYXhpbXVtRGVwdGgsXG4gICAgICBzZXRNYXhpbXVtRGVwdGhSZWFkT25seVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJtYXhpbXVtLWRlcHRoXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIk1heGltdW1EZXB0aElucHV0IiwiZ2V0TWF4aW11bURlcHRoIiwidmFsdWUiLCJnZXRWYWx1ZSIsIm1heGltdW1EZXB0aCIsIk51bWJlciIsInNldE1heGltdW1EZXB0aCIsInNldFZhbHVlIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJzZXRNYXhpbXVtRGVwdGhSZWFkT25seSIsInNldFJlYWRPbmx5IiwiSW5wdXQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzREQUZIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVILElBQUEsQUFBTUEsa0NBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxRQUFRLElBQUksQ0FBQ0MsWUFDYkMsZUFBZUMsT0FBT0g7Z0JBRTVCLE9BQU9FO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCRixZQUFZO2dCQUMxQixJQUFNRixRQUFRRSxjQUFjLEdBQUc7Z0JBRS9CLElBQUksQ0FBQ0csU0FBU0w7WUFDaEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVAsa0JBQWtCLElBQUksQ0FBQ0EsZ0JBQWdCUSxLQUFLLElBQUksR0FDaERILGtCQUFrQixJQUFJLENBQUNBLGdCQUFnQkcsS0FBSyxJQUFJLEdBQ2hEQywwQkFBMEIsSUFBSSxDQUFDQyxZQUFZRixLQUFLLElBQUksR0FBRyxJQUFJO2dCQUVqRSxPQUFRO29CQUNOUixpQkFBQUE7b0JBQ0FLLGlCQUFBQTtvQkFDQUkseUJBQUFBO2dCQUNGO1lBQ0Y7OztXQXhCbUJWO0VBQTBCWTtBQTBCN0MsaUJBMUJtQlosbUJBMEJaYSxxQkFBb0I7SUFDekJDLFdBQVc7SUFDWEMsWUFBWTtBQUNkIn0=