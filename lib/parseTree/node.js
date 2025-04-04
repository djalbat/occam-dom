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
                var childNodes = node.getChildNodes(), ruleNameParseTree = _string.default.fromNode(node), childNodesParseTree = _childNodes.default.fromChildNodes(childNodes);
                if (childNodesParseTree === null) {
                    var ruleNameParseTreeDepth = ruleNameParseTree.getDepth(), ruleNameParseTreeVerticalBranchPosition = ruleNameParseTree.getVerticalBranchPosition(), verticalBranchPosition = ruleNameParseTreeVerticalBranchPosition, depth = ruleNameParseTreeDepth; ///
                    nodeParseTree = _verticalBranch.default.fromDepthAndVerticalBranchPosition(NodeParseTree, depth, verticalBranchPosition);
                    nodeParseTree.appendToRight(ruleNameParseTree);
                } else {
                    var ruleNameParseTreeVerticalBranchPosition1 = ruleNameParseTree.getVerticalBranchPosition();
                    var childNodesParseTreeVerticalBranchPosition = childNodesParseTree.getVerticalBranchPosition(), verticalBranchPositionsDifference = ruleNameParseTreeVerticalBranchPosition1 - childNodesParseTreeVerticalBranchPosition;
                    var leftMarginWidth;
                    if (false) {
                    ///
                    } else if (verticalBranchPositionsDifference < 0) {
                        leftMarginWidth = -verticalBranchPositionsDifference;
                        ruleNameParseTree.addLeftMargin(leftMarginWidth);
                    } else if (verticalBranchPositionsDifference > 0) {
                        leftMarginWidth = +verticalBranchPositionsDifference;
                        childNodesParseTree.addLeftMargin(leftMarginWidth);
                    }
                    var ruleNameParseTreeWidth = ruleNameParseTree.getWidth(), childNodesParseTreeWidth = childNodesParseTree.getWidth(), widthsDifference = ruleNameParseTreeWidth - childNodesParseTreeWidth;
                    var rightMarginWidth;
                    if (false) {
                    ///
                    } else if (widthsDifference < 0) {
                        rightMarginWidth = -widthsDifference;
                        ruleNameParseTree.addRightMargin(rightMarginWidth);
                    } else if (widthsDifference > 0) {
                        rightMarginWidth = +widthsDifference;
                        childNodesParseTree.addRightMargin(rightMarginWidth);
                    }
                    ruleNameParseTreeVerticalBranchPosition1 = ruleNameParseTree.getVerticalBranchPosition();
                    var ruleNameParseTreeDepth1 = ruleNameParseTree.getDepth(), verticalBranchPosition1 = ruleNameParseTreeVerticalBranchPosition1, depth1 = ruleNameParseTreeDepth1; ///
                    nodeParseTree = _verticalBranch.default.fromDepthAndVerticalBranchPosition(NodeParseTree, depth1, verticalBranchPosition1);
                    nodeParseTree.appendToRight(ruleNameParseTree);
                    nodeParseTree.appendToBottom(childNodesParseTree);
                }
                return nodeParseTree;
            }
        }
    ]);
    return NodeParseTree;
}(_verticalBranch.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN0cmluZ1BhcnNlVHJlZSBmcm9tIFwiLi9zdHJpbmdcIjtcbmltcG9ydCBDaGlsZE5vZGVzUGFyc2VUcmVlIGZyb20gXCIuL2NoaWxkTm9kZXNcIjtcbmltcG9ydCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSBmcm9tIFwiLi92ZXJ0aWNhbEJyYW5jaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbU5vZGUobm9kZSkge1xuICAgIGxldCBub2RlUGFyc2VUcmVlO1xuXG4gICAgY29uc3QgY2hpbGROb2RlcyA9IG5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHJ1bGVOYW1lUGFyc2VUcmVlID0gU3RyaW5nUGFyc2VUcmVlLmZyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUgPSBDaGlsZE5vZGVzUGFyc2VUcmVlLmZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMpO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNQYXJzZVRyZWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lUGFyc2VUcmVlRGVwdGggPSBydWxlTmFtZVBhcnNlVHJlZS5nZXREZXB0aCgpLFxuICAgICAgICAgICAgcnVsZU5hbWVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gcnVsZU5hbWVQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLFxuICAgICAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHJ1bGVOYW1lUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiwgLy8vXG4gICAgICAgICAgICBkZXB0aCA9IHJ1bGVOYW1lUGFyc2VUcmVlRGVwdGg7IC8vL1xuXG4gICAgICBub2RlUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbURlcHRoQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbihOb2RlUGFyc2VUcmVlLCBkZXB0aCwgdmVydGljYWxCcmFuY2hQb3NpdGlvbik7XG5cbiAgICAgIG5vZGVQYXJzZVRyZWUuYXBwZW5kVG9SaWdodChydWxlTmFtZVBhcnNlVHJlZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBydWxlTmFtZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBydWxlTmFtZVBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCk7XG5cbiAgICAgIGNvbnN0IGNoaWxkTm9kZXNQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gY2hpbGROb2Rlc1BhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCksXG4gICAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uc0RpZmZlcmVuY2UgPSBydWxlTmFtZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gLSBjaGlsZE5vZGVzUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbjtcblxuICAgICAgbGV0IGxlZnRNYXJnaW5XaWR0aDtcblxuICAgICAgaWYgKGZhbHNlKSB7XG4gICAgICAgIC8vL1xuICAgICAgfSBlbHNlIGlmICh2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uc0RpZmZlcmVuY2UgPCAwKSB7XG4gICAgICAgIGxlZnRNYXJnaW5XaWR0aCA9IC12ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uc0RpZmZlcmVuY2U7XG5cbiAgICAgICAgcnVsZU5hbWVQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgICAgfSBlbHNlIGlmICh2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uc0RpZmZlcmVuY2UgPiAwKSB7XG4gICAgICAgIGxlZnRNYXJnaW5XaWR0aCA9ICt2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uc0RpZmZlcmVuY2U7XG5cbiAgICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZS5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJ1bGVOYW1lUGFyc2VUcmVlV2lkdGggPSBydWxlTmFtZVBhcnNlVHJlZS5nZXRXaWR0aCgpLFxuICAgICAgICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZVdpZHRoID0gY2hpbGROb2Rlc1BhcnNlVHJlZS5nZXRXaWR0aCgpLFxuICAgICAgICAgICAgd2lkdGhzRGlmZmVyZW5jZSA9IHJ1bGVOYW1lUGFyc2VUcmVlV2lkdGggLSBjaGlsZE5vZGVzUGFyc2VUcmVlV2lkdGg7XG5cbiAgICAgIGxldCByaWdodE1hcmdpbldpZHRoO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgLy8vXG4gICAgICB9IGVsc2UgaWYgKHdpZHRoc0RpZmZlcmVuY2UgPCAwKSB7XG4gICAgICAgIHJpZ2h0TWFyZ2luV2lkdGggPSAtd2lkdGhzRGlmZmVyZW5jZTtcblxuICAgICAgICBydWxlTmFtZVBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcbiAgICAgIH0gZWxzZSBpZiAod2lkdGhzRGlmZmVyZW5jZSA+IDApIHtcbiAgICAgICAgcmlnaHRNYXJnaW5XaWR0aCA9ICt3aWR0aHNEaWZmZXJlbmNlO1xuXG4gICAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgICB9XG5cbiAgICAgIHJ1bGVOYW1lUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHJ1bGVOYW1lUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKTtcblxuICAgICAgY29uc3QgcnVsZU5hbWVQYXJzZVRyZWVEZXB0aCA9IHJ1bGVOYW1lUGFyc2VUcmVlLmdldERlcHRoKCksXG4gICAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gcnVsZU5hbWVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uLCAvLy9cbiAgICAgICAgICAgIGRlcHRoID0gcnVsZU5hbWVQYXJzZVRyZWVEZXB0aDsgLy8vXG5cbiAgICAgIG5vZGVQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tRGVwdGhBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKE5vZGVQYXJzZVRyZWUsIGRlcHRoLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgICAgbm9kZVBhcnNlVHJlZS5hcHBlbmRUb1JpZ2h0KHJ1bGVOYW1lUGFyc2VUcmVlKTtcblxuICAgICAgbm9kZVBhcnNlVHJlZS5hcHBlbmRUb0JvdHRvbShjaGlsZE5vZGVzUGFyc2VUcmVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZVBhcnNlVHJlZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5vZGVQYXJzZVRyZWUiLCJmcm9tTm9kZSIsIm5vZGUiLCJub2RlUGFyc2VUcmVlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJydWxlTmFtZVBhcnNlVHJlZSIsIlN0cmluZ1BhcnNlVHJlZSIsImNoaWxkTm9kZXNQYXJzZVRyZWUiLCJDaGlsZE5vZGVzUGFyc2VUcmVlIiwiZnJvbUNoaWxkTm9kZXMiLCJydWxlTmFtZVBhcnNlVHJlZURlcHRoIiwiZ2V0RGVwdGgiLCJydWxlTmFtZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImRlcHRoIiwiVmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJmcm9tRGVwdGhBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiYXBwZW5kVG9SaWdodCIsImNoaWxkTm9kZXNQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbnNEaWZmZXJlbmNlIiwibGVmdE1hcmdpbldpZHRoIiwiYWRkTGVmdE1hcmdpbiIsInJ1bGVOYW1lUGFyc2VUcmVlV2lkdGgiLCJnZXRXaWR0aCIsImNoaWxkTm9kZXNQYXJzZVRyZWVXaWR0aCIsIndpZHRoc0RpZmZlcmVuY2UiLCJyaWdodE1hcmdpbldpZHRoIiwiYWRkUmlnaHRNYXJnaW4iLCJhcHBlbmRUb0JvdHRvbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7NkRBSk87aUVBQ0k7cUVBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckIsSUFBQSxBQUFNQSw4QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0MsSUFBSTtnQkFDbEIsSUFBSUM7Z0JBRUosSUFBTUMsYUFBYUYsS0FBS0csYUFBYSxJQUMvQkMsb0JBQW9CQyxlQUFlLENBQUNOLFFBQVEsQ0FBQ0MsT0FDN0NNLHNCQUFzQkMsbUJBQW1CLENBQUNDLGNBQWMsQ0FBQ047Z0JBRS9ELElBQUlJLHdCQUF3QixNQUFNO29CQUNoQyxJQUFNRyx5QkFBeUJMLGtCQUFrQk0sUUFBUSxJQUNuREMsMENBQTBDUCxrQkFBa0JRLHlCQUF5QixJQUNyRkMseUJBQXlCRix5Q0FDekJHLFFBQVFMLHdCQUF3QixHQUFHO29CQUV6Q1IsZ0JBQWdCYyx1QkFBdUIsQ0FBQ0Msa0NBQWtDLENBZDNEbEIsZUFjMkVnQixPQUFPRDtvQkFFakdaLGNBQWNnQixhQUFhLENBQUNiO2dCQUM5QixPQUFPO29CQUNMLElBQUlPLDJDQUEwQ1Asa0JBQWtCUSx5QkFBeUI7b0JBRXpGLElBQU1NLDRDQUE0Q1osb0JBQW9CTSx5QkFBeUIsSUFDekZPLG9DQUFvQ1IsMkNBQTBDTztvQkFFcEYsSUFBSUU7b0JBRUosSUFBSSxPQUFPO29CQUNULEdBQUc7b0JBQ0wsT0FBTyxJQUFJRCxvQ0FBb0MsR0FBRzt3QkFDaERDLGtCQUFrQixDQUFDRDt3QkFFbkJmLGtCQUFrQmlCLGFBQWEsQ0FBQ0Q7b0JBQ2xDLE9BQU8sSUFBSUQsb0NBQW9DLEdBQUc7d0JBQ2hEQyxrQkFBa0IsQ0FBQ0Q7d0JBRW5CYixvQkFBb0JlLGFBQWEsQ0FBQ0Q7b0JBQ3BDO29CQUVBLElBQU1FLHlCQUF5QmxCLGtCQUFrQm1CLFFBQVEsSUFDbkRDLDJCQUEyQmxCLG9CQUFvQmlCLFFBQVEsSUFDdkRFLG1CQUFtQkgseUJBQXlCRTtvQkFFbEQsSUFBSUU7b0JBRUosSUFBSSxPQUFPO29CQUNULEdBQUc7b0JBQ0wsT0FBTyxJQUFJRCxtQkFBbUIsR0FBRzt3QkFDL0JDLG1CQUFtQixDQUFDRDt3QkFFcEJyQixrQkFBa0J1QixjQUFjLENBQUNEO29CQUNuQyxPQUFPLElBQUlELG1CQUFtQixHQUFHO3dCQUMvQkMsbUJBQW1CLENBQUNEO3dCQUVwQm5CLG9CQUFvQnFCLGNBQWMsQ0FBQ0Q7b0JBQ3JDO29CQUVBZiwyQ0FBMENQLGtCQUFrQlEseUJBQXlCO29CQUVyRixJQUFNSCwwQkFBeUJMLGtCQUFrQk0sUUFBUSxJQUNuREcsMEJBQXlCRiwwQ0FDekJHLFNBQVFMLHlCQUF3QixHQUFHO29CQUV6Q1IsZ0JBQWdCYyx1QkFBdUIsQ0FBQ0Msa0NBQWtDLENBN0QzRGxCLGVBNkQyRWdCLFFBQU9EO29CQUVqR1osY0FBY2dCLGFBQWEsQ0FBQ2I7b0JBRTVCSCxjQUFjMkIsY0FBYyxDQUFDdEI7Z0JBQy9CO2dCQUVBLE9BQU9MO1lBQ1Q7OztXQXJFbUJIO0VBQXNCaUIsdUJBQXVCIn0=