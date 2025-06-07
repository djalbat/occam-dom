"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return InnerParseTreeTextarea;
    }
});
var _parseTree = /*#__PURE__*/ _interop_require_default(require("../../textarea/parseTree"));
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
var InnerParseTreeTextarea = /*#__PURE__*/ function(ParseTreeTextarea) {
    _inherits(InnerParseTreeTextarea, ParseTreeTextarea);
    function InnerParseTreeTextarea() {
        _class_call_check(this, InnerParseTreeTextarea);
        return _call_super(this, InnerParseTreeTextarea, arguments);
    }
    _create_class(InnerParseTreeTextarea, [
        {
            key: "setParseTree",
            value: function setParseTree(parseTree) {
                parseTree.shiftLine(); //
                parseTree.shiftLine(); //
                _get(_get_prototype_of(InnerParseTreeTextarea.prototype), "setParseTree", this).call(this, parseTree);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var setInnerParseTree = this.setParseTree.bind(this); ///
                return {
                    setInnerParseTree: setInnerParseTree
                };
            }
        }
    ]);
    return InnerParseTreeTextarea;
}(_parseTree.default);
_define_property(InnerParseTreeTextarea, "defaultProperties", {
    className: "inner"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlL2lubmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4uLy4uL3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbm5lclBhcnNlVHJlZVRleHRhcmVhIGV4dGVuZHMgUGFyc2VUcmVlVGV4dGFyZWEge1xuICBzZXRQYXJzZVRyZWUocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLnNoaWZ0TGluZSgpOyAgLy9cbiAgICBwYXJzZVRyZWUuc2hpZnRMaW5lKCk7ICAvL1xuXG4gICAgc3VwZXIuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNldElubmVyUGFyc2VUcmVlID0gdGhpcy5zZXRQYXJzZVRyZWUuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNldElubmVyUGFyc2VUcmVlXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImlubmVyXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJJbm5lclBhcnNlVHJlZVRleHRhcmVhIiwic2V0UGFyc2VUcmVlIiwicGFyc2VUcmVlIiwic2hpZnRMaW5lIiwicGFyZW50Q29udGV4dCIsInNldElubmVyUGFyc2VUcmVlIiwiYmluZCIsIlBhcnNlVHJlZVRleHRhcmVhIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O2dFQUZTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWYsSUFBQSxBQUFNQSx1Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLFNBQVM7Z0JBQ3BCQSxVQUFVQyxTQUFTLElBQUssRUFBRTtnQkFDMUJELFVBQVVDLFNBQVMsSUFBSyxFQUFFO2dCQUUxQix1QkFMaUJILG1DQUtYQyxnQkFBTixJQUFLLGFBQWNDO1lBQ3JCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG9CQUFvQixJQUFJLENBQUNKLFlBQVksQ0FBQ0ssSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO2dCQUUzRCxPQUFRO29CQUNORCxtQkFBQUE7Z0JBQ0Y7WUFDRjs7O1dBZG1CTDtFQUErQk8sa0JBQWlCO0FBZ0JuRSxpQkFoQm1CUCx3QkFnQlpRLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=