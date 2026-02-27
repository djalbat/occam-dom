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
const _easy = require("easy");
const _index = require("../index" ///
);
const _withstyle = require("with-style");
const _easylayout = require("easy-layout");
const _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
const _sizeable = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable"));
const _content = /*#__PURE__*/ _interop_require_default(require("./view/textarea/content"));
const _expressions = /*#__PURE__*/ _interop_require_default(require("./view/textarea/expressions"));
const _outer = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree/outer"));
const _inner = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree/inner"));
const _query = require("./utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { topmostNodeFromOuterNodes: topmostInnerNodeFromOuterNodes } = _index.nodeUtilities;
const cssLexer = _withstyle.CSSLexer.fromNothing(), cssParser = _withstyle.CSSParser.fromNothing();
class View extends _easy.Element {
    keyUpHandler = (event, element)=>{
        const content = this.getContent(), tokens = cssLexer.tokenise(content), node = cssParser.parse(tokens);
        if (node === null) {
            return;
        }
        const outerNode = node, expressions = this.getExpressions(), outerNodes = (0, _query.queryByExpressions)(outerNode, expressions), topmostInnerNode = topmostInnerNodeFromOuterNodes(outerNodes), innerNode = topmostInnerNode, outerParseTree = outerNode.asParseTree(tokens), innerParseTree = innerNode.asParseTree();
        this.setOuterParseTree(outerParseTree);
        this.setInnerParseTree(innerParseTree);
    };
    childElements() {
        return [
            /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
                onKeyUp: this.keyUpHandler
            }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Expressions"), /*#__PURE__*/ React.createElement(_expressions.default, {
                onKeyUp: this.keyUpHandler
            }))), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Outer parse tree"), /*#__PURE__*/ React.createElement(_outer.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Inner parse tree"), /*#__PURE__*/ React.createElement(_inner.default, null))))
        ];
    }
    initialise() {
        this.assignContext();
        const { initialContent, initialExpressions } = this.constructor, content = initialContent, expressions = initialExpressions; ///
        this.setContent(content);
        this.setExpressions(expressions);
        this.keyUpHandler(); ///
    }
    static initialContent = `.view {
  background: red;
}
`;
    static initialExpressions = [
        "//term",
        "//ruleSet",
        "//selectors",
        "//declaration",
        "//propertyValue",
        "//@identifier"
    ];
    static tagName = "div";
    static defaultProperties = {
        className: "view"
    };
}
const _default = (0, _easywithstyle.default)(View)`

  padding: 1rem;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgbm9kZVV0aWxpdGllcyB9IGZyb20gXCIuLi9pbmRleFwiIC8vL1xuaW1wb3J0IHsgQ1NTTGV4ZXIsIENTU1BhcnNlciB9IGZyb20gXCJ3aXRoLXN0eWxlXCI7XG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vdmlldy9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vdmlldy9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBDb250ZW50VGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgRXhwcmVzc2lvbnNUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2V4cHJlc3Npb25zXCI7XG5pbXBvcnQgT3V0ZXJQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL3BhcnNlVHJlZS9vdXRlclwiO1xuaW1wb3J0IElubmVyUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9wYXJzZVRyZWUvaW5uZXJcIjtcblxuaW1wb3J0IHsgcXVlcnlCeUV4cHJlc3Npb25zIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHsgdG9wbW9zdE5vZGVGcm9tT3V0ZXJOb2RlczogdG9wbW9zdElubmVyTm9kZUZyb21PdXRlck5vZGVzIH0gPSBub2RlVXRpbGl0aWVzO1xuXG5jb25zdCBjc3NMZXhlciA9IENTU0xleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBjc3NQYXJzZXIgPSBDU1NQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlVcEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gY3NzTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IGNzc1BhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBvdXRlck5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBleHByZXNzaW9ucyA9IHRoaXMuZ2V0RXhwcmVzc2lvbnMoKSxcbiAgICAgICAgICBvdXRlck5vZGVzID0gcXVlcnlCeUV4cHJlc3Npb25zKG91dGVyTm9kZSwgZXhwcmVzc2lvbnMpLFxuICAgICAgICAgIHRvcG1vc3RJbm5lck5vZGUgPSB0b3Btb3N0SW5uZXJOb2RlRnJvbU91dGVyTm9kZXMob3V0ZXJOb2RlcyksXG4gICAgICAgICAgaW5uZXJOb2RlID0gdG9wbW9zdElubmVyTm9kZSwgLy8vXG4gICAgICAgICAgb3V0ZXJQYXJzZVRyZWUgPSBvdXRlck5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKSxcbiAgICAgICAgICBpbm5lclBhcnNlVHJlZSA9IGlubmVyTm9kZS5hc1BhcnNlVHJlZSgpO1xuXG4gICAgdGhpcy5zZXRPdXRlclBhcnNlVHJlZShvdXRlclBhcnNlVHJlZSk7XG5cbiAgICB0aGlzLnNldElubmVyUGFyc2VUcmVlKGlubmVyUGFyc2VUcmVlKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBFeHByZXNzaW9uc1xuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEV4cHJlc3Npb25zVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIE91dGVyIHBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxPdXRlclBhcnNlVHJlZVRleHRhcmVhLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBJbm5lciBwYXJzZSB0cmVlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8SW5uZXJQYXJzZVRyZWVUZXh0YXJlYS8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbENvbnRlbnQsIGluaXRpYWxFeHByZXNzaW9ucyB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsICAvLy9cbiAgICAgICAgICBleHByZXNzaW9ucyA9IGluaXRpYWxFeHByZXNzaW9uczsgIC8vL1xuXG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRFeHByZXNzaW9ucyhleHByZXNzaW9ucyk7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBgLnZpZXcge1xuICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5gO1xuXG4gIHN0YXRpYyBpbml0aWFsRXhwcmVzc2lvbnMgPSBbXG4gICAgXCIvL3Rlcm1cIixcbiAgICBcIi8vcnVsZVNldFwiLFxuICAgIFwiLy9zZWxlY3RvcnNcIixcbiAgICBcIi8vZGVjbGFyYXRpb25cIixcbiAgICBcIi8vcHJvcGVydHlWYWx1ZVwiLFxuICAgIFwiLy9AaWRlbnRpZmllclwiXG4gIF07XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7XG4iXSwibmFtZXMiOlsidG9wbW9zdE5vZGVGcm9tT3V0ZXJOb2RlcyIsInRvcG1vc3RJbm5lck5vZGVGcm9tT3V0ZXJOb2RlcyIsIm5vZGVVdGlsaXRpZXMiLCJjc3NMZXhlciIsIkNTU0xleGVyIiwiZnJvbU5vdGhpbmciLCJjc3NQYXJzZXIiLCJDU1NQYXJzZXIiLCJWaWV3IiwiRWxlbWVudCIsImtleVVwSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJvdXRlck5vZGUiLCJleHByZXNzaW9ucyIsImdldEV4cHJlc3Npb25zIiwib3V0ZXJOb2RlcyIsInF1ZXJ5QnlFeHByZXNzaW9ucyIsInRvcG1vc3RJbm5lck5vZGUiLCJpbm5lck5vZGUiLCJvdXRlclBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwiaW5uZXJQYXJzZVRyZWUiLCJzZXRPdXRlclBhcnNlVHJlZSIsInNldElubmVyUGFyc2VUcmVlIiwiY2hpbGRFbGVtZW50cyIsIkNvbHVtbnNEaXYiLCJTaXplYWJsZURpdiIsIlJvd3NEaXYiLCJTdWJIZWFkaW5nIiwiQ29udGVudFRleHRhcmVhIiwib25LZXlVcCIsIkV4cHJlc3Npb25zVGV4dGFyZWEiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiT3V0ZXJQYXJzZVRyZWVUZXh0YXJlYSIsIklubmVyUGFyc2VUcmVlVGV4dGFyZWEiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImluaXRpYWxDb250ZW50IiwiaW5pdGlhbEV4cHJlc3Npb25zIiwic2V0Q29udGVudCIsInNldEV4cHJlc3Npb25zIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtSEE7OztlQUFBOzs7c0VBakhzQjtzQkFFRTt1QkFDTSxXQUFXLEdBQUc7OzJCQUNSOzRCQUNnQzttRUFFN0M7aUVBQ0M7Z0VBQ0k7b0VBQ0k7OERBQ0c7OERBQ0E7dUJBRUE7Ozs7OztBQUVuQyxNQUFNLEVBQUVBLDJCQUEyQkMsOEJBQThCLEVBQUUsR0FBR0Msb0JBQWE7QUFFbkYsTUFBTUMsV0FBV0MsbUJBQVEsQ0FBQ0MsV0FBVyxJQUMvQkMsWUFBWUMsb0JBQVMsQ0FBQ0YsV0FBVztBQUV2QyxNQUFNRyxhQUFhQyxhQUFPO0lBQ3hCQyxlQUFlLENBQUNDLE9BQU9DO1FBQ3JCLE1BQU1DLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCQyxTQUFTWixTQUFTYSxRQUFRLENBQUNILFVBQzNCSSxPQUFPWCxVQUFVWSxLQUFLLENBQUNIO1FBRTdCLElBQUlFLFNBQVMsTUFBTTtZQUNqQjtRQUNGO1FBRUEsTUFBTUUsWUFBWUYsTUFDWkcsY0FBYyxJQUFJLENBQUNDLGNBQWMsSUFDakNDLGFBQWFDLElBQUFBLHlCQUFrQixFQUFDSixXQUFXQyxjQUMzQ0ksbUJBQW1CdkIsK0JBQStCcUIsYUFDbERHLFlBQVlELGtCQUNaRSxpQkFBaUJQLFVBQVVRLFdBQVcsQ0FBQ1osU0FDdkNhLGlCQUFpQkgsVUFBVUUsV0FBVztRQUU1QyxJQUFJLENBQUNFLGlCQUFpQixDQUFDSDtRQUV2QixJQUFJLENBQUNJLGlCQUFpQixDQUFDRjtJQUN6QixFQUFDO0lBRURHLGdCQUFnQjtRQUNkLE9BQVE7MEJBRU4sb0JBQUNDLHNCQUFVLHNCQUNULG9CQUFDQyxpQkFBVyxzQkFDVixvQkFBQ0MsbUJBQU8sc0JBQ04sb0JBQUNDLG1CQUFVLFFBQUMsMEJBR1osb0JBQUNDLGdCQUFlO2dCQUFDQyxTQUFTLElBQUksQ0FBQzNCLFlBQVk7OEJBQzNDLG9CQUFDeUIsbUJBQVUsUUFBQyw4QkFHWixvQkFBQ0csb0JBQW1CO2dCQUFDRCxTQUFTLElBQUksQ0FBQzNCLFlBQVk7Z0NBR25ELG9CQUFDNkIsK0JBQW1CLHVCQUNwQixvQkFBQ0MscUJBQVMsc0JBQ1Isb0JBQUNOLG1CQUFPLHNCQUNOLG9CQUFDQyxtQkFBVSxRQUFDLG1DQUdaLG9CQUFDTSxjQUFzQix1QkFDdkIsb0JBQUNOLG1CQUFVLFFBQUMsbUNBR1osb0JBQUNPLGNBQXNCO1NBSzlCO0lBQ0g7SUFFQUMsYUFBYTtRQUNYLElBQUksQ0FBQ0MsYUFBYTtRQUVsQixNQUFNLEVBQUVDLGNBQWMsRUFBRUMsa0JBQWtCLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUN6RGpDLFVBQVVnQyxnQkFDVnpCLGNBQWMwQixvQkFBcUIsR0FBRztRQUU1QyxJQUFJLENBQUNDLFVBQVUsQ0FBQ2xDO1FBRWhCLElBQUksQ0FBQ21DLGNBQWMsQ0FBQzVCO1FBRXBCLElBQUksQ0FBQ1YsWUFBWSxJQUFLLEdBQUc7SUFDM0I7SUFFQSxPQUFPbUMsaUJBQWlCLENBQUM7OztBQUczQixDQUFDLENBQUM7SUFFQSxPQUFPQyxxQkFBcUI7UUFDMUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO0tBQ0QsQ0FBQztJQUVGLE9BQU9HLFVBQVUsTUFBTTtJQUV2QixPQUFPQyxvQkFBb0I7UUFDekJDLFdBQVc7SUFDYixFQUFFO0FBQ0o7TUFFQSxXQUFlQyxJQUFBQSxzQkFBUyxFQUFDNUMsS0FBSyxDQUFDOzs7O0FBSS9CLENBQUMifQ==