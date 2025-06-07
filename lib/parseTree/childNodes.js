"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ChildNodesParseTree;
    }
});
var _necessary = require("necessary");
var _verticalBranch = /*#__PURE__*/ _interop_require_default(require("./verticalBranch"));
var _horizontalBranch = /*#__PURE__*/ _interop_require_default(require("./horizontalBranch"));
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
var first = _necessary.arrayUtilities.first;
var ChildNodesParseTree = /*#__PURE__*/ function(VerticalBranchParseTree) {
    _inherits(ChildNodesParseTree, VerticalBranchParseTree);
    function ChildNodesParseTree() {
        _class_call_check(this, ChildNodesParseTree);
        return _call_super(this, ChildNodesParseTree, arguments);
    }
    _create_class(ChildNodesParseTree, null, [
        {
            key: "fromChildNodes",
            value: function fromChildNodes(childNodes) {
                var childNodesParseTree = null;
                var childNodesLength = childNodes.length;
                if (childNodesLength > 0) {
                    var childNodeParseTrees = childNodes.reduce(function(childNodeParseTrees, childNode) {
                        var childNodeParseTree = childNode.asParseTree();
                        childNodeParseTrees.push(childNodeParseTree);
                        return childNodeParseTrees;
                    }, []), childNodeParseTreesLength = childNodeParseTrees.length;
                    if (childNodeParseTreesLength === 1) {
                        var firstChildNodeParseTree = first(childNodeParseTrees);
                        childNodesParseTree = firstChildNodeParseTree; ///
                    } else {
                        var firstVerticalBranchPosition, lastVerticalBranchPosition = 0, childNodeParseTreesWidth = 0, childNodeParseTreesDepth = 0;
                        childNodeParseTrees.forEach(function(childNodeParseTree, index) {
                            var childNodeParseTreeWidth = childNodeParseTree.getWidth(), childNodeParseTreeDepth = childNodeParseTree.getDepth();
                            if (index === 0) {
                                var firstChildNodeParseTree = childNodeParseTree, firstChildNodeParseTreeVerticalBranchPosition = firstChildNodeParseTree.getVerticalBranchPosition();
                                firstVerticalBranchPosition = firstChildNodeParseTreeVerticalBranchPosition;
                            }
                            if (index === childNodeParseTreesLength - 1) {
                                var lastChildNodeParseTree = childNodeParseTree, lastChildNodeParseTreeVerticalBranchPosition = lastChildNodeParseTree.getVerticalBranchPosition();
                                lastVerticalBranchPosition += lastChildNodeParseTreeVerticalBranchPosition;
                            }
                            if (index < childNodeParseTreesLength - 1) {
                                lastVerticalBranchPosition += childNodeParseTreeWidth;
                                lastVerticalBranchPosition += 1;
                                childNodeParseTreesWidth += 1;
                            }
                            childNodeParseTreesWidth += childNodeParseTreeWidth;
                            childNodeParseTreesDepth = Math.max(childNodeParseTreesDepth, childNodeParseTreeDepth);
                        });
                        var width = lastVerticalBranchPosition - firstVerticalBranchPosition + 1, verticalBranchParseTree = _verticalBranch.default.fromWidth(width), horizontalBranchParseTree = _horizontalBranch.default.fromWidth(width), leftMarginWidth = firstVerticalBranchPosition, rightMarginWidth = childNodeParseTreesWidth - width - leftMarginWidth;
                        verticalBranchParseTree.addLeftMargin(leftMarginWidth);
                        verticalBranchParseTree.addRightMargin(rightMarginWidth);
                        horizontalBranchParseTree.addLeftMargin(leftMarginWidth);
                        horizontalBranchParseTree.addRightMargin(rightMarginWidth);
                        var verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), depth = childNodeParseTreesDepth; ///
                        childNodesParseTree = _verticalBranch.default.fromDepthAndVerticalBranchPosition(ChildNodesParseTree, depth, verticalBranchPosition);
                        childNodeParseTrees.forEach(function(childNodeParseTree, index) {
                            var childNodeParseTreeDepth = childNodeParseTree.getDepth(), clonedChildNodeParseTree = childNodeParseTree.clone();
                            if (index < childNodeParseTreesLength - 1) {
                                var rightMarginWidth = 1;
                                clonedChildNodeParseTree.addRightMargin(rightMarginWidth);
                            }
                            if (childNodeParseTreeDepth < childNodeParseTreesDepth) {
                                var bottomMarginDepth = childNodeParseTreesDepth - childNodeParseTreeDepth;
                                clonedChildNodeParseTree.addBottomMargin(bottomMarginDepth);
                            }
                            childNodesParseTree.appendToRight(clonedChildNodeParseTree);
                        });
                        childNodesParseTree.appendToTop(horizontalBranchParseTree);
                        childNodesParseTree.appendToTop(verticalBranchParseTree);
                    }
                }
                return childNodesParseTree;
            }
        }
    ]);
    return ChildNodesParseTree;
}(_verticalBranch.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvY2hpbGROb2Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSBmcm9tIFwiLi92ZXJ0aWNhbEJyYW5jaFwiO1xuaW1wb3J0IEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUgZnJvbSBcIi4vaG9yaXpvbnRhbEJyYW5jaFwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hpbGROb2Rlc1BhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgICBsZXQgY2hpbGROb2Rlc1BhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZXMgPSBjaGlsZE5vZGVzLnJlZHVjZSgoY2hpbGROb2RlUGFyc2VUcmVlcywgY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZS5hc1BhcnNlVHJlZSgpO1xuXG4gICAgICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXMucHVzaChjaGlsZE5vZGVQYXJzZVRyZWUpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGVQYXJzZVRyZWVzO1xuICAgICAgICAgICAgfSwgW10pLFxuICAgICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZSA9IGZpcnN0KGNoaWxkTm9kZVBhcnNlVHJlZXMpO1xuXG4gICAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUgPSBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZTsgIC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbixcbiAgICAgICAgICAgIGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gMCxcbiAgICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNXaWR0aCA9IDAsXG4gICAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGggPSAwO1xuXG4gICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXMuZm9yRWFjaCgoY2hpbGROb2RlUGFyc2VUcmVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZVdpZHRoID0gY2hpbGROb2RlUGFyc2VUcmVlLmdldFdpZHRoKCksXG4gICAgICAgICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlRGVwdGggPSBjaGlsZE5vZGVQYXJzZVRyZWUuZ2V0RGVwdGgoKTtcblxuICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWUgPSBjaGlsZE5vZGVQYXJzZVRyZWUsXG4gICAgICAgICAgICAgICAgICBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCk7XG5cbiAgICAgICAgICAgIGZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW5kZXggPT09IGNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBjb25zdCBsYXN0Q2hpbGROb2RlUGFyc2VUcmVlID0gY2hpbGROb2RlUGFyc2VUcmVlLFxuICAgICAgICAgICAgICAgICAgbGFzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBsYXN0Q2hpbGROb2RlUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKTtcblxuICAgICAgICAgICAgbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKz0gbGFzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb247XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGluZGV4IDwgY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uICs9IGNoaWxkTm9kZVBhcnNlVHJlZVdpZHRoO1xuICAgICAgICAgICAgbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKz0gMTtcblxuICAgICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoICs9IDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoICs9IGNoaWxkTm9kZVBhcnNlVHJlZVdpZHRoO1xuICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCA9IE1hdGgubWF4KGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCwgY2hpbGROb2RlUGFyc2VUcmVlRGVwdGgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB3aWR0aCA9IGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIC0gZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uICsgMSxcbiAgICAgICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgod2lkdGgpLFxuICAgICAgICAgICAgICBob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlID0gSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgod2lkdGgpLFxuICAgICAgICAgICAgICBsZWZ0TWFyZ2luV2lkdGggPSBmaXJzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24sXG4gICAgICAgICAgICAgIHJpZ2h0TWFyZ2luV2lkdGggPSBjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGggLSB3aWR0aCAtIGxlZnRNYXJnaW5XaWR0aDtcblxuICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG4gICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuICAgICAgICBob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcbiAgICAgICAgaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcblxuICAgICAgICBjb25zdCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLFxuICAgICAgICAgICAgICBkZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aDsgLy8vXG5cbiAgICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21EZXB0aEFuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oQ2hpbGROb2Rlc1BhcnNlVHJlZSwgZGVwdGgsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuXG4gICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXMuZm9yRWFjaCgoY2hpbGROb2RlUGFyc2VUcmVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoID0gY2hpbGROb2RlUGFyc2VUcmVlLmdldERlcHRoKCksXG4gICAgICAgICAgICAgICAgY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlID0gY2hpbGROb2RlUGFyc2VUcmVlLmNsb25lKCk7XG5cbiAgICAgICAgICBpZiAoaW5kZXggPCBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgY29uc3QgcmlnaHRNYXJnaW5XaWR0aCA9IDE7XG5cbiAgICAgICAgICAgIGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY2hpbGROb2RlUGFyc2VUcmVlRGVwdGggPCBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbU1hcmdpbkRlcHRoID0gY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoIC0gY2hpbGROb2RlUGFyc2VUcmVlRGVwdGg7XG5cbiAgICAgICAgICAgIGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZS5hZGRCb3R0b21NYXJnaW4oYm90dG9tTWFyZ2luRGVwdGgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUuYXBwZW5kVG9SaWdodChjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlLmFwcGVuZFRvVG9wKGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjaGlsZE5vZGVzUGFyc2VUcmVlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ2hpbGROb2Rlc1BhcnNlVHJlZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJmcm9tQ2hpbGROb2RlcyIsImNoaWxkTm9kZXMiLCJjaGlsZE5vZGVzUGFyc2VUcmVlIiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImNoaWxkTm9kZVBhcnNlVHJlZXMiLCJyZWR1Y2UiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVQYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsInB1c2giLCJjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoIiwiZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWUiLCJmaXJzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImNoaWxkTm9kZVBhcnNlVHJlZXNXaWR0aCIsImNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCIsImZvckVhY2giLCJpbmRleCIsImNoaWxkTm9kZVBhcnNlVHJlZVdpZHRoIiwiZ2V0V2lkdGgiLCJjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCIsImdldERlcHRoIiwiZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImxhc3RDaGlsZE5vZGVQYXJzZVRyZWUiLCJsYXN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsIk1hdGgiLCJtYXgiLCJ3aWR0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiVmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJmcm9tV2lkdGgiLCJob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlIiwiSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSIsImxlZnRNYXJnaW5XaWR0aCIsInJpZ2h0TWFyZ2luV2lkdGgiLCJhZGRMZWZ0TWFyZ2luIiwiYWRkUmlnaHRNYXJnaW4iLCJ2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiZGVwdGgiLCJmcm9tRGVwdGhBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlIiwiY2xvbmUiLCJib3R0b21NYXJnaW5EZXB0aCIsImFkZEJvdHRvbU1hcmdpbiIsImFwcGVuZFRvUmlnaHQiLCJhcHBlbmRUb1RvcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7eUJBUFU7cUVBRUs7dUVBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFTyxJQUFBLEFBQU1ELG9DQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ1pHLEtBQUFBO21CQUFQLFNBQU9BLGVBQWVDLFVBQVU7Z0JBQzlCLElBQUlDLHNCQUFzQjtnQkFFMUIsSUFBTUMsbUJBQW1CRixXQUFXRyxNQUFNO2dCQUUxQyxJQUFJRCxtQkFBbUIsR0FBRztvQkFDeEIsSUFBTUUsc0JBQXNCSixXQUFXSyxNQUFNLENBQUMsU0FBQ0QscUJBQXFCRTt3QkFDNUQsSUFBTUMscUJBQXFCRCxVQUFVRSxXQUFXO3dCQUVoREosb0JBQW9CSyxJQUFJLENBQUNGO3dCQUV6QixPQUFPSDtvQkFDVCxHQUFHLEVBQUUsR0FDTE0sNEJBQTRCTixvQkFBb0JELE1BQU07b0JBRTVELElBQUlPLDhCQUE4QixHQUFHO3dCQUNuQyxJQUFNQywwQkFBMEJkLE1BQU1PO3dCQUV0Q0gsc0JBQXNCVSx5QkFBMEIsR0FBRztvQkFDckQsT0FBTzt3QkFDTCxJQUFJQyw2QkFDQUMsNkJBQTZCLEdBQzdCQywyQkFBMkIsR0FDM0JDLDJCQUEyQjt3QkFFL0JYLG9CQUFvQlksT0FBTyxDQUFDLFNBQUNULG9CQUFvQlU7NEJBQy9DLElBQU1DLDBCQUEwQlgsbUJBQW1CWSxRQUFRLElBQ3JEQywwQkFBMEJiLG1CQUFtQmMsUUFBUTs0QkFFM0QsSUFBSUosVUFBVSxHQUFHO2dDQUNmLElBQU1OLDBCQUEwQkosb0JBQzFCZSxnREFBZ0RYLHdCQUF3QlkseUJBQXlCO2dDQUV2R1gsOEJBQThCVTs0QkFDaEM7NEJBRUEsSUFBSUwsVUFBVVAsNEJBQTRCLEdBQUc7Z0NBQzNDLElBQU1jLHlCQUF5QmpCLG9CQUN6QmtCLCtDQUErQ0QsdUJBQXVCRCx5QkFBeUI7Z0NBRXJHViw4QkFBOEJZOzRCQUNoQzs0QkFFQSxJQUFJUixRQUFRUCw0QkFBNEIsR0FBRztnQ0FDekNHLDhCQUE4Qks7Z0NBQzlCTCw4QkFBOEI7Z0NBRTlCQyw0QkFBNEI7NEJBQzlCOzRCQUVBQSw0QkFBNEJJOzRCQUM1QkgsMkJBQTJCVyxLQUFLQyxHQUFHLENBQUNaLDBCQUEwQks7d0JBQ2hFO3dCQUVBLElBQU1RLFFBQVFmLDZCQUE2QkQsOEJBQThCLEdBQ25FaUIsMEJBQTBCQyx1QkFBdUIsQ0FBQ0MsU0FBUyxDQUFDSCxRQUM1REksNEJBQTRCQyx5QkFBeUIsQ0FBQ0YsU0FBUyxDQUFDSCxRQUNoRU0sa0JBQWtCdEIsNkJBQ2xCdUIsbUJBQW1CckIsMkJBQTJCYyxRQUFRTTt3QkFFNURMLHdCQUF3Qk8sYUFBYSxDQUFDRjt3QkFDdENMLHdCQUF3QlEsY0FBYyxDQUFDRjt3QkFDdkNILDBCQUEwQkksYUFBYSxDQUFDRjt3QkFDeENGLDBCQUEwQkssY0FBYyxDQUFDRjt3QkFFekMsSUFBTUcseUJBQXlCVCx3QkFBd0JOLHlCQUF5QixJQUMxRWdCLFFBQVF4QiwwQkFBMEIsR0FBRzt3QkFFM0NkLHNCQUFzQjZCLHVCQUF1QixDQUFDVSxrQ0FBa0MsQ0FyRW5FNUMscUJBcUV5RjJDLE9BQU9EO3dCQUU3R2xDLG9CQUFvQlksT0FBTyxDQUFDLFNBQUNULG9CQUFvQlU7NEJBQy9DLElBQU1HLDBCQUEwQmIsbUJBQW1CYyxRQUFRLElBQ3JEb0IsMkJBQTJCbEMsbUJBQW1CbUMsS0FBSzs0QkFFekQsSUFBSXpCLFFBQVFQLDRCQUE0QixHQUFHO2dDQUN6QyxJQUFNeUIsbUJBQW1CO2dDQUV6Qk0seUJBQXlCSixjQUFjLENBQUNGOzRCQUMxQzs0QkFFQSxJQUFJZiwwQkFBMEJMLDBCQUEwQjtnQ0FDdEQsSUFBTTRCLG9CQUFvQjVCLDJCQUEyQks7Z0NBRXJEcUIseUJBQXlCRyxlQUFlLENBQUNEOzRCQUMzQzs0QkFFQTFDLG9CQUFvQjRDLGFBQWEsQ0FBQ0o7d0JBQ3BDO3dCQUVBeEMsb0JBQW9CNkMsV0FBVyxDQUFDZDt3QkFFaEMvQixvQkFBb0I2QyxXQUFXLENBQUNqQjtvQkFDbEM7Z0JBQ0Y7Z0JBRUEsT0FBTzVCO1lBQ1Q7OztXQWpHbUJMO0VBQTRCa0MsdUJBQXVCIn0=