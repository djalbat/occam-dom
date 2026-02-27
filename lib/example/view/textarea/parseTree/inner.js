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
const _parseTree = /*#__PURE__*/ _interop_require_default(require("../../textarea/parseTree"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class InnerParseTreeTextarea extends _parseTree.default {
    setParseTree(parseTree) {
        parseTree.shiftLine(); //
        parseTree.shiftLine(); //
        super.setParseTree(parseTree);
    }
    parentContext() {
        const setInnerParseTree = this.setParseTree.bind(this); ///
        return {
            setInnerParseTree
        };
    }
    static defaultProperties = {
        className: "inner"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlL2lubmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4uLy4uL3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbm5lclBhcnNlVHJlZVRleHRhcmVhIGV4dGVuZHMgUGFyc2VUcmVlVGV4dGFyZWEge1xuICBzZXRQYXJzZVRyZWUocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLnNoaWZ0TGluZSgpOyAgLy9cbiAgICBwYXJzZVRyZWUuc2hpZnRMaW5lKCk7ICAvL1xuXG4gICAgc3VwZXIuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNldElubmVyUGFyc2VUcmVlID0gdGhpcy5zZXRQYXJzZVRyZWUuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNldElubmVyUGFyc2VUcmVlXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImlubmVyXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJJbm5lclBhcnNlVHJlZVRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJzZXRQYXJzZVRyZWUiLCJwYXJzZVRyZWUiLCJzaGlmdExpbmUiLCJwYXJlbnRDb250ZXh0Iiwic2V0SW5uZXJQYXJzZVRyZWUiLCJiaW5kIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7a0VBRlM7Ozs7OztBQUVmLE1BQU1BLCtCQUErQkMsa0JBQWlCO0lBQ25FQyxhQUFhQyxTQUFTLEVBQUU7UUFDdEJBLFVBQVVDLFNBQVMsSUFBSyxFQUFFO1FBQzFCRCxVQUFVQyxTQUFTLElBQUssRUFBRTtRQUUxQixLQUFLLENBQUNGLGFBQWFDO0lBQ3JCO0lBRUFFLGdCQUFnQjtRQUNkLE1BQU1DLG9CQUFvQixJQUFJLENBQUNKLFlBQVksQ0FBQ0ssSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO1FBRTNELE9BQVE7WUFDTkQ7UUFDRjtJQUNGO0lBRUEsT0FBT0Usb0JBQW9CO1FBQ3pCQyxXQUFXO0lBQ2IsRUFBRTtBQUNKIn0=