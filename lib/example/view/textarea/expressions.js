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
const _constants = require("../../constants");
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
        const space = _constants.SPACE, replacer = null, expressionsString = JSON.stringify(expressions, replacer, space), value = expressionsString; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvZXhwcmVzc2lvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuaW1wb3J0IHsgU1BBQ0UgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIEV4cHJlc3Npb25zVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIGdldEV4cHJlc3Npb25zKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSB2YWx1ZSwgLy8vXG4gICAgICAgICAgZXhwcmVzc2lvbnMgPSBKU09OLnBhcnNlKGV4cHJlc3Npb25TdHJpbmcpOyAvLy9cblxuICAgIHJldHVybiBleHByZXNzaW9ucztcbiAgfVxuXG4gIHNldEV4cHJlc3Npb25zKGV4cHJlc3Npb25zKSB7XG4gICAgY29uc3Qgc3BhY2UgPSBTUEFDRSxcbiAgICAgICAgICByZXBsYWNlciA9IG51bGwsXG4gICAgICAgICAgZXhwcmVzc2lvbnNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHByZXNzaW9ucywgcmVwbGFjZXIsIHNwYWNlKSxcbiAgICAgICAgICB2YWx1ZSA9IGV4cHJlc3Npb25zU3RyaW5nOyAgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0RXhwcmVzc2lvbnMgPSB0aGlzLmdldEV4cHJlc3Npb25zLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0RXhwcmVzc2lvbnMgPSB0aGlzLnNldEV4cHJlc3Npb25zLmJpbmQodGhpcyk7IC8vLztcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0RXhwcmVzc2lvbnMsXG4gICAgICBzZXRFeHByZXNzaW9uc1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJleHByZXNzaW9uc1wiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRXhwcmVzc2lvbnNUZXh0YXJlYSlgXG4gIFxuICBoZWlnaHQ6IDE4cmVtO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiRXhwcmVzc2lvbnNUZXh0YXJlYSIsIlRleHRhcmVhIiwiZ2V0RXhwcmVzc2lvbnMiLCJ2YWx1ZSIsImdldFZhbHVlIiwiZXhwcmVzc2lvblN0cmluZyIsImV4cHJlc3Npb25zIiwiSlNPTiIsInBhcnNlIiwic2V0RXhwcmVzc2lvbnMiLCJzcGFjZSIsIlNQQUNFIiwicmVwbGFjZXIiLCJleHByZXNzaW9uc1N0cmluZyIsInN0cmluZ2lmeSIsInNldFZhbHVlIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBDQTs7O2VBQUE7OztzRUF4Q3NCO2lFQUVEOzJCQUVDOzs7Ozs7QUFFdEIsTUFBTUEsNEJBQTRCQyxpQkFBUTtJQUN4Q0MsaUJBQWlCO1FBQ2YsTUFBTUMsUUFBUSxJQUFJLENBQUNDLFFBQVEsSUFDckJDLG1CQUFtQkYsT0FDbkJHLGNBQWNDLEtBQUtDLEtBQUssQ0FBQ0gsbUJBQW1CLEdBQUc7UUFFckQsT0FBT0M7SUFDVDtJQUVBRyxlQUFlSCxXQUFXLEVBQUU7UUFDMUIsTUFBTUksUUFBUUMsZ0JBQUssRUFDYkMsV0FBVyxNQUNYQyxvQkFBb0JOLEtBQUtPLFNBQVMsQ0FBQ1IsYUFBYU0sVUFBVUYsUUFDMURQLFFBQVFVLG1CQUFvQixHQUFHO1FBRXJDLElBQUksQ0FBQ0UsUUFBUSxDQUFDWjtJQUNoQjtJQUVBYSxnQkFBZ0I7UUFDZCxNQUFNZCxpQkFBaUIsSUFBSSxDQUFDQSxjQUFjLENBQUNlLElBQUksQ0FBQyxJQUFJLEdBQzlDUixpQkFBaUIsSUFBSSxDQUFDQSxjQUFjLENBQUNRLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtRQUUzRCxPQUFRO1lBQ05mO1lBQ0FPO1FBQ0Y7SUFDRjtJQUVBLE9BQU9TLG9CQUFvQjtRQUN6QkMsV0FBVztRQUNYQyxZQUFZO0lBQ2QsRUFBRTtBQUNKO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ3JCLG9CQUFvQixDQUFDOzs7O0FBSTlDLENBQUMifQ==