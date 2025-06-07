"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NodeParseTree;
    }
});
var _string = /*#__PURE__*/ _interop_require_default(require("./string"));
var _childNodes = /*#__PURE__*/ _interop_require_default(require("./childNodes"));
var _verticalBranch = /*#__PURE__*/ _interop_require_default(require("./verticalBranch"));
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
var NodeParseTree = /*#__PURE__*/ function(VerticalBranchParseTree) {
    _inherits(NodeParseTree, VerticalBranchParseTree);
    function NodeParseTree() {
        _class_call_check(this, NodeParseTree);
        return _call_super(this, NodeParseTree, arguments);
    }
    _create_class(NodeParseTree, null, [
        {
            key: "fromNode",
            value: function fromNode(node) {
                var nodeParseTree;
                var childNodes = node.getChildNodes(), stringParseTree = _string.default.fromNode(node), childNodesParseTree = _childNodes.default.fromChildNodes(childNodes);
                if (childNodesParseTree === null) {
                    var ruleNameParseTreeDepth = stringParseTree.getDepth(), ruleNameParseTreeVerticalBranchPosition = stringParseTree.getVerticalBranchPosition(), verticalBranchPosition = ruleNameParseTreeVerticalBranchPosition, depth = ruleNameParseTreeDepth; ///
                    nodeParseTree = _verticalBranch.default.fromDepthAndVerticalBranchPosition(NodeParseTree, depth, verticalBranchPosition);
                    nodeParseTree.appendToRight(stringParseTree);
                } else {
                    var ruleNameParseTreeVerticalBranchPosition1 = stringParseTree.getVerticalBranchPosition();
                    var childNodesParseTreeVerticalBranchPosition = childNodesParseTree.getVerticalBranchPosition(), verticalBranchPositionsDifference = ruleNameParseTreeVerticalBranchPosition1 - childNodesParseTreeVerticalBranchPosition;
                    var leftMarginWidth;
                    if (false) {
                    ///
                    } else if (verticalBranchPositionsDifference < 0) {
                        leftMarginWidth = -verticalBranchPositionsDifference;
                        stringParseTree.addLeftMargin(leftMarginWidth);
                    } else if (verticalBranchPositionsDifference > 0) {
                        leftMarginWidth = +verticalBranchPositionsDifference;
                        childNodesParseTree.addLeftMargin(leftMarginWidth);
                    }
                    var ruleNameParseTreeWidth = stringParseTree.getWidth(), childNodesParseTreeWidth = childNodesParseTree.getWidth(), widthsDifference = ruleNameParseTreeWidth - childNodesParseTreeWidth;
                    var rightMarginWidth;
                    if (false) {
                    ///
                    } else if (widthsDifference < 0) {
                        rightMarginWidth = -widthsDifference;
                        stringParseTree.addRightMargin(rightMarginWidth);
                    } else if (widthsDifference > 0) {
                        rightMarginWidth = +widthsDifference;
                        childNodesParseTree.addRightMargin(rightMarginWidth);
                    }
                    ruleNameParseTreeVerticalBranchPosition1 = stringParseTree.getVerticalBranchPosition();
                    var ruleNameParseTreeDepth1 = stringParseTree.getDepth(), verticalBranchPosition1 = ruleNameParseTreeVerticalBranchPosition1, depth1 = ruleNameParseTreeDepth1; ///
                    nodeParseTree = _verticalBranch.default.fromDepthAndVerticalBranchPosition(NodeParseTree, depth1, verticalBranchPosition1);
                    nodeParseTree.appendToRight(stringParseTree);
                    nodeParseTree.appendToBottom(childNodesParseTree);
                }
                return nodeParseTree;
            }
        }
    ]);
    return NodeParseTree;
}(_verticalBranch.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN0cmluZ1BhcnNlVHJlZSBmcm9tIFwiLi9zdHJpbmdcIjtcbmltcG9ydCBDaGlsZE5vZGVzUGFyc2VUcmVlIGZyb20gXCIuL2NoaWxkTm9kZXNcIjtcbmltcG9ydCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSBmcm9tIFwiLi92ZXJ0aWNhbEJyYW5jaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbU5vZGUobm9kZSkge1xuICAgIGxldCBub2RlUGFyc2VUcmVlO1xuXG4gICAgY29uc3QgY2hpbGROb2RlcyA9IG5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHN0cmluZ1BhcnNlVHJlZSA9IFN0cmluZ1BhcnNlVHJlZS5mcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlID0gQ2hpbGROb2Rlc1BhcnNlVHJlZS5mcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzKTtcblxuICAgIGlmIChjaGlsZE5vZGVzUGFyc2VUcmVlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBydWxlTmFtZVBhcnNlVHJlZURlcHRoID0gc3RyaW5nUGFyc2VUcmVlLmdldERlcHRoKCksXG4gICAgICAgICAgICBydWxlTmFtZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBzdHJpbmdQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLFxuICAgICAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHJ1bGVOYW1lUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiwgLy8vXG4gICAgICAgICAgICBkZXB0aCA9IHJ1bGVOYW1lUGFyc2VUcmVlRGVwdGg7IC8vL1xuXG4gICAgICBub2RlUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbURlcHRoQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbihOb2RlUGFyc2VUcmVlLCBkZXB0aCwgdmVydGljYWxCcmFuY2hQb3NpdGlvbik7XG5cbiAgICAgIG5vZGVQYXJzZVRyZWUuYXBwZW5kVG9SaWdodChzdHJpbmdQYXJzZVRyZWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcnVsZU5hbWVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gc3RyaW5nUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKTtcblxuICAgICAgY29uc3QgY2hpbGROb2Rlc1BhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBjaGlsZE5vZGVzUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSxcbiAgICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb25zRGlmZmVyZW5jZSA9IHJ1bGVOYW1lUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiAtIGNoaWxkTm9kZXNQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuXG4gICAgICBsZXQgbGVmdE1hcmdpbldpZHRoO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgLy8vXG4gICAgICB9IGVsc2UgaWYgKHZlcnRpY2FsQnJhbmNoUG9zaXRpb25zRGlmZmVyZW5jZSA8IDApIHtcbiAgICAgICAgbGVmdE1hcmdpbldpZHRoID0gLXZlcnRpY2FsQnJhbmNoUG9zaXRpb25zRGlmZmVyZW5jZTtcblxuICAgICAgICBzdHJpbmdQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgICAgfSBlbHNlIGlmICh2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uc0RpZmZlcmVuY2UgPiAwKSB7XG4gICAgICAgIGxlZnRNYXJnaW5XaWR0aCA9ICt2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uc0RpZmZlcmVuY2U7XG5cbiAgICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZS5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJ1bGVOYW1lUGFyc2VUcmVlV2lkdGggPSBzdHJpbmdQYXJzZVRyZWUuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWVXaWR0aCA9IGNoaWxkTm9kZXNQYXJzZVRyZWUuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgIHdpZHRoc0RpZmZlcmVuY2UgPSBydWxlTmFtZVBhcnNlVHJlZVdpZHRoIC0gY2hpbGROb2Rlc1BhcnNlVHJlZVdpZHRoO1xuXG4gICAgICBsZXQgcmlnaHRNYXJnaW5XaWR0aDtcblxuICAgICAgaWYgKGZhbHNlKSB7XG4gICAgICAgIC8vL1xuICAgICAgfSBlbHNlIGlmICh3aWR0aHNEaWZmZXJlbmNlIDwgMCkge1xuICAgICAgICByaWdodE1hcmdpbldpZHRoID0gLXdpZHRoc0RpZmZlcmVuY2U7XG5cbiAgICAgICAgc3RyaW5nUGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuICAgICAgfSBlbHNlIGlmICh3aWR0aHNEaWZmZXJlbmNlID4gMCkge1xuICAgICAgICByaWdodE1hcmdpbldpZHRoID0gK3dpZHRoc0RpZmZlcmVuY2U7XG5cbiAgICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcbiAgICAgIH1cblxuICAgICAgcnVsZU5hbWVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gc3RyaW5nUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKTtcblxuICAgICAgY29uc3QgcnVsZU5hbWVQYXJzZVRyZWVEZXB0aCA9IHN0cmluZ1BhcnNlVHJlZS5nZXREZXB0aCgpLFxuICAgICAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHJ1bGVOYW1lUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiwgLy8vXG4gICAgICAgICAgICBkZXB0aCA9IHJ1bGVOYW1lUGFyc2VUcmVlRGVwdGg7IC8vL1xuXG4gICAgICBub2RlUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbURlcHRoQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbihOb2RlUGFyc2VUcmVlLCBkZXB0aCwgdmVydGljYWxCcmFuY2hQb3NpdGlvbik7XG5cbiAgICAgIG5vZGVQYXJzZVRyZWUuYXBwZW5kVG9SaWdodChzdHJpbmdQYXJzZVRyZWUpO1xuXG4gICAgICBub2RlUGFyc2VUcmVlLmFwcGVuZFRvQm90dG9tKGNoaWxkTm9kZXNQYXJzZVRyZWUpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlUGFyc2VUcmVlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTm9kZVBhcnNlVHJlZSIsImZyb21Ob2RlIiwibm9kZSIsIm5vZGVQYXJzZVRyZWUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInN0cmluZ1BhcnNlVHJlZSIsIlN0cmluZ1BhcnNlVHJlZSIsImNoaWxkTm9kZXNQYXJzZVRyZWUiLCJDaGlsZE5vZGVzUGFyc2VUcmVlIiwiZnJvbUNoaWxkTm9kZXMiLCJydWxlTmFtZVBhcnNlVHJlZURlcHRoIiwiZ2V0RGVwdGgiLCJydWxlTmFtZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImRlcHRoIiwiVmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJmcm9tRGVwdGhBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiYXBwZW5kVG9SaWdodCIsImNoaWxkTm9kZXNQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbnNEaWZmZXJlbmNlIiwibGVmdE1hcmdpbldpZHRoIiwiYWRkTGVmdE1hcmdpbiIsInJ1bGVOYW1lUGFyc2VUcmVlV2lkdGgiLCJnZXRXaWR0aCIsImNoaWxkTm9kZXNQYXJzZVRyZWVXaWR0aCIsIndpZHRoc0RpZmZlcmVuY2UiLCJyaWdodE1hcmdpbldpZHRoIiwiYWRkUmlnaHRNYXJnaW4iLCJhcHBlbmRUb0JvdHRvbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7NkRBSk87aUVBQ0k7cUVBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckIsSUFBQSxBQUFNQSw4QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTQyxJQUFJO2dCQUNsQixJQUFJQztnQkFFSixJQUFNQyxhQUFhRixLQUFLRyxhQUFhLElBQy9CQyxrQkFBa0JDLGVBQWUsQ0FBQ04sUUFBUSxDQUFDQyxPQUMzQ00sc0JBQXNCQyxtQkFBbUIsQ0FBQ0MsY0FBYyxDQUFDTjtnQkFFL0QsSUFBSUksd0JBQXdCLE1BQU07b0JBQ2hDLElBQU1HLHlCQUF5QkwsZ0JBQWdCTSxRQUFRLElBQ2pEQywwQ0FBMENQLGdCQUFnQlEseUJBQXlCLElBQ25GQyx5QkFBeUJGLHlDQUN6QkcsUUFBUUwsd0JBQXdCLEdBQUc7b0JBRXpDUixnQkFBZ0JjLHVCQUF1QixDQUFDQyxrQ0FBa0MsQ0FkM0RsQixlQWMyRWdCLE9BQU9EO29CQUVqR1osY0FBY2dCLGFBQWEsQ0FBQ2I7Z0JBQzlCLE9BQU87b0JBQ0wsSUFBSU8sMkNBQTBDUCxnQkFBZ0JRLHlCQUF5QjtvQkFFdkYsSUFBTU0sNENBQTRDWixvQkFBb0JNLHlCQUF5QixJQUN6Rk8sb0NBQW9DUiwyQ0FBMENPO29CQUVwRixJQUFJRTtvQkFFSixJQUFJLE9BQU87b0JBQ1QsR0FBRztvQkFDTCxPQUFPLElBQUlELG9DQUFvQyxHQUFHO3dCQUNoREMsa0JBQWtCLENBQUNEO3dCQUVuQmYsZ0JBQWdCaUIsYUFBYSxDQUFDRDtvQkFDaEMsT0FBTyxJQUFJRCxvQ0FBb0MsR0FBRzt3QkFDaERDLGtCQUFrQixDQUFDRDt3QkFFbkJiLG9CQUFvQmUsYUFBYSxDQUFDRDtvQkFDcEM7b0JBRUEsSUFBTUUseUJBQXlCbEIsZ0JBQWdCbUIsUUFBUSxJQUNqREMsMkJBQTJCbEIsb0JBQW9CaUIsUUFBUSxJQUN2REUsbUJBQW1CSCx5QkFBeUJFO29CQUVsRCxJQUFJRTtvQkFFSixJQUFJLE9BQU87b0JBQ1QsR0FBRztvQkFDTCxPQUFPLElBQUlELG1CQUFtQixHQUFHO3dCQUMvQkMsbUJBQW1CLENBQUNEO3dCQUVwQnJCLGdCQUFnQnVCLGNBQWMsQ0FBQ0Q7b0JBQ2pDLE9BQU8sSUFBSUQsbUJBQW1CLEdBQUc7d0JBQy9CQyxtQkFBbUIsQ0FBQ0Q7d0JBRXBCbkIsb0JBQW9CcUIsY0FBYyxDQUFDRDtvQkFDckM7b0JBRUFmLDJDQUEwQ1AsZ0JBQWdCUSx5QkFBeUI7b0JBRW5GLElBQU1ILDBCQUF5QkwsZ0JBQWdCTSxRQUFRLElBQ2pERywwQkFBeUJGLDBDQUN6QkcsU0FBUUwseUJBQXdCLEdBQUc7b0JBRXpDUixnQkFBZ0JjLHVCQUF1QixDQUFDQyxrQ0FBa0MsQ0E3RDNEbEIsZUE2RDJFZ0IsUUFBT0Q7b0JBRWpHWixjQUFjZ0IsYUFBYSxDQUFDYjtvQkFFNUJILGNBQWMyQixjQUFjLENBQUN0QjtnQkFDL0I7Z0JBRUEsT0FBT0w7WUFDVDs7O1dBckVtQkg7RUFBc0JpQix1QkFBdUIifQ==