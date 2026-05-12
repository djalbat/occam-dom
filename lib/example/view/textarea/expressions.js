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
        const value = this.getValue(), expressionString = value, expressions = JSON.parse(expressionString); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvZXhwcmVzc2lvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuY2xhc3MgRXhwcmVzc2lvbnNUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgZ2V0RXhwcmVzc2lvbnMoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IHZhbHVlLCAvLy9cbiAgICAgICAgICBleHByZXNzaW9ucyA9IEpTT04ucGFyc2UoZXhwcmVzc2lvblN0cmluZyk7IC8vL1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb25zO1xuICB9XG5cbiAgc2V0RXhwcmVzc2lvbnMoZXhwcmVzc2lvbnMpIHtcbiAgICBjb25zdCBqc29uID0gZXhwcmVzc2lvbnMsIC8vL1xuICAgICAgICAgIGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShqc29uLCBudWxsLCAyKSxcbiAgICAgICAgICB2YWx1ZSA9IGpzb25TdHJpbmc7ICAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRFeHByZXNzaW9ucyA9IHRoaXMuZ2V0RXhwcmVzc2lvbnMuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRFeHByZXNzaW9ucyA9IHRoaXMuc2V0RXhwcmVzc2lvbnMuYmluZCh0aGlzKTsgLy8vO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRFeHByZXNzaW9ucyxcbiAgICAgIHNldEV4cHJlc3Npb25zXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImV4cHJlc3Npb25zXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShFeHByZXNzaW9uc1RleHRhcmVhKWBcbiAgXG4gIGhlaWdodDogMThyZW07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJFeHByZXNzaW9uc1RleHRhcmVhIiwiVGV4dGFyZWEiLCJnZXRFeHByZXNzaW9ucyIsInZhbHVlIiwiZ2V0VmFsdWUiLCJleHByZXNzaW9uU3RyaW5nIiwiZXhwcmVzc2lvbnMiLCJKU09OIiwicGFyc2UiLCJzZXRFeHByZXNzaW9ucyIsImpzb24iLCJqc29uU3RyaW5nIiwic3RyaW5naWZ5Iiwic2V0VmFsdWUiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBdUNBOzs7ZUFBQTs7O3NFQXJDc0I7aUVBRUQ7Ozs7OztBQUVyQixNQUFNQSw0QkFBNEJDLGlCQUFRO0lBQ3hDQyxpQkFBaUI7UUFDZixNQUFNQyxRQUFRLElBQUksQ0FBQ0MsUUFBUSxJQUNyQkMsbUJBQW1CRixPQUNuQkcsY0FBY0MsS0FBS0MsS0FBSyxDQUFDSCxtQkFBbUIsR0FBRztRQUVyRCxPQUFPQztJQUNUO0lBRUFHLGVBQWVILFdBQVcsRUFBRTtRQUMxQixNQUFNSSxPQUFPSixhQUNQSyxhQUFhSixLQUFLSyxTQUFTLENBQUNGLE1BQU0sTUFBTSxJQUN4Q1AsUUFBUVEsWUFBYSxHQUFHO1FBRTlCLElBQUksQ0FBQ0UsUUFBUSxDQUFDVjtJQUNoQjtJQUVBVyxnQkFBZ0I7UUFDZCxNQUFNWixpQkFBaUIsSUFBSSxDQUFDQSxjQUFjLENBQUNhLElBQUksQ0FBQyxJQUFJLEdBQzlDTixpQkFBaUIsSUFBSSxDQUFDQSxjQUFjLENBQUNNLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtRQUUzRCxPQUFRO1lBQ05iO1lBQ0FPO1FBQ0Y7SUFDRjtJQUVBLE9BQU9PLG9CQUFvQjtRQUN6QkMsV0FBVztRQUNYQyxZQUFZO0lBQ2QsRUFBRTtBQUNKO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ25CLG9CQUFvQixDQUFDOzs7O0FBSTlDLENBQUMifQ==