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
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ExpressionsTextarea extends _textarea.default {
    getExpressions() {
        const value = this.getValue(), jsonString = value, json = JSON.parse(jsonString), expressions = json; ///
        return expressions;
    }
    setExpressions(expressions) {
        const json = expressions, jsonString = JSON.stringify(json, null, 2), value = jsonString; ///
        this.setValue(value);
    }
    parentContext() {
        const getExpressions = this.getExpressions.bind(this), setExpressions = this.setExpressions.bind(this); ///;
        return {
            getExpressions,
            setExpressions
        };
    }
    static defaultProperties = {
        className: "expressions",
        spellCheck: "false"
    };
}
const _default = (0, _easywithstyle.default)(ExpressionsTextarea)`
  
  height: 18rem;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvZXhwcmVzc2lvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuY2xhc3MgRXhwcmVzc2lvbnNUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgZ2V0RXhwcmVzc2lvbnMoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAganNvblN0cmluZyA9IHZhbHVlLCAvLy9cbiAgICAgICAgICBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKSxcbiAgICAgICAgICBleHByZXNzaW9ucyA9IGpzb247IC8vL1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb25zO1xuICB9XG5cbiAgc2V0RXhwcmVzc2lvbnMoZXhwcmVzc2lvbnMpIHtcbiAgICBjb25zdCBqc29uID0gZXhwcmVzc2lvbnMsIC8vL1xuICAgICAgICAgIGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShqc29uLCBudWxsLCAyKSxcbiAgICAgICAgICB2YWx1ZSA9IGpzb25TdHJpbmc7ICAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRFeHByZXNzaW9ucyA9IHRoaXMuZ2V0RXhwcmVzc2lvbnMuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRFeHByZXNzaW9ucyA9IHRoaXMuc2V0RXhwcmVzc2lvbnMuYmluZCh0aGlzKTsgLy8vO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRFeHByZXNzaW9ucyxcbiAgICAgIHNldEV4cHJlc3Npb25zXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImV4cHJlc3Npb25zXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShFeHByZXNzaW9uc1RleHRhcmVhKWBcbiAgXG4gIGhlaWdodDogMThyZW07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJFeHByZXNzaW9uc1RleHRhcmVhIiwiVGV4dGFyZWEiLCJnZXRFeHByZXNzaW9ucyIsInZhbHVlIiwiZ2V0VmFsdWUiLCJqc29uU3RyaW5nIiwianNvbiIsIkpTT04iLCJwYXJzZSIsImV4cHJlc3Npb25zIiwic2V0RXhwcmVzc2lvbnMiLCJzdHJpbmdpZnkiLCJzZXRWYWx1ZSIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF3Q0E7OztlQUFBOzs7c0VBdENzQjtpRUFFRDs7Ozs7O0FBRXJCLE1BQU1BLDRCQUE0QkMsaUJBQVE7SUFDeENDLGlCQUFpQjtRQUNmLE1BQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxhQUFhRixPQUNiRyxPQUFPQyxLQUFLQyxLQUFLLENBQUNILGFBQ2xCSSxjQUFjSCxNQUFNLEdBQUc7UUFFN0IsT0FBT0c7SUFDVDtJQUVBQyxlQUFlRCxXQUFXLEVBQUU7UUFDMUIsTUFBTUgsT0FBT0csYUFDUEosYUFBYUUsS0FBS0ksU0FBUyxDQUFDTCxNQUFNLE1BQU0sSUFDeENILFFBQVFFLFlBQWEsR0FBRztRQUU5QixJQUFJLENBQUNPLFFBQVEsQ0FBQ1Q7SUFDaEI7SUFFQVUsZ0JBQWdCO1FBQ2QsTUFBTVgsaUJBQWlCLElBQUksQ0FBQ0EsY0FBYyxDQUFDWSxJQUFJLENBQUMsSUFBSSxHQUM5Q0osaUJBQWlCLElBQUksQ0FBQ0EsY0FBYyxDQUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7UUFFM0QsT0FBUTtZQUNOWjtZQUNBUTtRQUNGO0lBQ0Y7SUFFQSxPQUFPSyxvQkFBb0I7UUFDekJDLFdBQVc7UUFDWEMsWUFBWTtJQUNkLEVBQUU7QUFDSjtNQUVBLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNsQixvQkFBb0IsQ0FBQzs7OztBQUk5QyxDQUFDIn0=