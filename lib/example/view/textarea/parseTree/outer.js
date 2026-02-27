"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return OuterParseTreeTextarea;
    }
});
const _parseTree = /*#__PURE__*/ _interop_require_default(require("../../textarea/parseTree"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class OuterParseTreeTextarea extends _parseTree.default {
    parentContext() {
        const setOuterParseTree = this.setParseTree.bind(this); ///
        return {
            setOuterParseTree
        };
    }
    static defaultProperties = {
        className: "outer"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlL291dGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4uLy4uL3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdXRlclBhcnNlVHJlZVRleHRhcmVhIGV4dGVuZHMgUGFyc2VUcmVlVGV4dGFyZWEge1xuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNldE91dGVyUGFyc2VUcmVlID0gdGhpcy5zZXRQYXJzZVRyZWUuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNldE91dGVyUGFyc2VUcmVlXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm91dGVyXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJPdXRlclBhcnNlVHJlZVRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJwYXJlbnRDb250ZXh0Iiwic2V0T3V0ZXJQYXJzZVRyZWUiLCJzZXRQYXJzZVRyZWUiLCJiaW5kIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7a0VBRlM7Ozs7OztBQUVmLE1BQU1BLCtCQUErQkMsa0JBQWlCO0lBQ25FQyxnQkFBZ0I7UUFDZCxNQUFNQyxvQkFBb0IsSUFBSSxDQUFDQyxZQUFZLENBQUNDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRztRQUUzRCxPQUFRO1lBQ05GO1FBQ0Y7SUFDRjtJQUVBLE9BQU9HLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7QUFDSiJ9