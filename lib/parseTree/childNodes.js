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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvY2hpbGROb2Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSBmcm9tIFwiLi92ZXJ0aWNhbEJyYW5jaFwiO1xuaW1wb3J0IEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUgZnJvbSBcIi4vaG9yaXpvbnRhbEJyYW5jaFwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hpbGROb2Rlc1BhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgICBsZXQgY2hpbGROb2Rlc1BhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZXMgPSBjaGlsZE5vZGVzLnJlZHVjZSgoY2hpbGROb2RlUGFyc2VUcmVlcywgY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZS5hc1BhcnNlVHJlZSgpO1xuXG4gICAgICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXMucHVzaChjaGlsZE5vZGVQYXJzZVRyZWUpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGVQYXJzZVRyZWVzO1xuICAgICAgICAgICAgfSwgW10pLFxuICAgICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZSA9IGZpcnN0KGNoaWxkTm9kZVBhcnNlVHJlZXMpO1xuXG4gICAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUgPSBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZTsgIC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbixcbiAgICAgICAgICAgIGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gMCxcbiAgICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNXaWR0aCA9IDAsXG4gICAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGggPSAwO1xuXG4gICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXMuZm9yRWFjaCgoY2hpbGROb2RlUGFyc2VUcmVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZVdpZHRoID0gY2hpbGROb2RlUGFyc2VUcmVlLmdldFdpZHRoKCksXG4gICAgICAgICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlRGVwdGggPSBjaGlsZE5vZGVQYXJzZVRyZWUuZ2V0RGVwdGgoKTtcblxuICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWUgPSBjaGlsZE5vZGVQYXJzZVRyZWUsXG4gICAgICAgICAgICAgICAgICBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCk7XG5cbiAgICAgICAgICAgIGZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW5kZXggPT09IGNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBjb25zdCBsYXN0Q2hpbGROb2RlUGFyc2VUcmVlID0gY2hpbGROb2RlUGFyc2VUcmVlLFxuICAgICAgICAgICAgICAgICAgbGFzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBsYXN0Q2hpbGROb2RlUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKTtcblxuICAgICAgICAgICAgbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKz0gbGFzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb247XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGluZGV4IDwgY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uICs9IGNoaWxkTm9kZVBhcnNlVHJlZVdpZHRoO1xuICAgICAgICAgICAgbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKz0gMTtcblxuICAgICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoICs9IDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoICs9IGNoaWxkTm9kZVBhcnNlVHJlZVdpZHRoO1xuICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCA9IE1hdGgubWF4KGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCwgY2hpbGROb2RlUGFyc2VUcmVlRGVwdGgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB3aWR0aCA9IGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIC0gZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uICsgMSxcbiAgICAgICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgod2lkdGgpLFxuICAgICAgICAgICAgICBob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlID0gSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgod2lkdGgpLFxuICAgICAgICAgICAgICBsZWZ0TWFyZ2luV2lkdGggPSBmaXJzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24sXG4gICAgICAgICAgICAgIHJpZ2h0TWFyZ2luV2lkdGggPSBjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGggLSB3aWR0aCAtIGxlZnRNYXJnaW5XaWR0aDtcblxuICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG4gICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuICAgICAgICBob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcbiAgICAgICAgaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcblxuICAgICAgICBjb25zdCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLFxuICAgICAgICAgICAgICBkZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aDsgLy8vXG5cbiAgICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21EZXB0aEFuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oQ2hpbGROb2Rlc1BhcnNlVHJlZSwgZGVwdGgsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuXG4gICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXMuZm9yRWFjaCgoY2hpbGROb2RlUGFyc2VUcmVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoID0gY2hpbGROb2RlUGFyc2VUcmVlLmdldERlcHRoKCksXG4gICAgICAgICAgICAgICAgY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlID0gY2hpbGROb2RlUGFyc2VUcmVlLmNsb25lKCk7XG5cbiAgICAgICAgICBpZiAoaW5kZXggPCBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgY29uc3QgcmlnaHRNYXJnaW5XaWR0aCA9IDE7XG5cbiAgICAgICAgICAgIGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY2hpbGROb2RlUGFyc2VUcmVlRGVwdGggPCBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbU1hcmdpbkRlcHRoID0gY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoIC0gY2hpbGROb2RlUGFyc2VUcmVlRGVwdGg7XG5cbiAgICAgICAgICAgIGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZS5hZGRCb3R0b21NYXJnaW4oYm90dG9tTWFyZ2luRGVwdGgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUuYXBwZW5kVG9SaWdodChjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlLmFwcGVuZFRvVG9wKGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjaGlsZE5vZGVzUGFyc2VUcmVlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ2hpbGROb2Rlc1BhcnNlVHJlZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJmcm9tQ2hpbGROb2RlcyIsImNoaWxkTm9kZXMiLCJjaGlsZE5vZGVzUGFyc2VUcmVlIiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImNoaWxkTm9kZVBhcnNlVHJlZXMiLCJyZWR1Y2UiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVQYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsInB1c2giLCJjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoIiwiZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWUiLCJmaXJzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImNoaWxkTm9kZVBhcnNlVHJlZXNXaWR0aCIsImNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCIsImZvckVhY2giLCJpbmRleCIsImNoaWxkTm9kZVBhcnNlVHJlZVdpZHRoIiwiZ2V0V2lkdGgiLCJjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCIsImdldERlcHRoIiwiZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImxhc3RDaGlsZE5vZGVQYXJzZVRyZWUiLCJsYXN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsIk1hdGgiLCJtYXgiLCJ3aWR0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiVmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJmcm9tV2lkdGgiLCJob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlIiwiSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSIsImxlZnRNYXJnaW5XaWR0aCIsInJpZ2h0TWFyZ2luV2lkdGgiLCJhZGRMZWZ0TWFyZ2luIiwiYWRkUmlnaHRNYXJnaW4iLCJ2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiZGVwdGgiLCJmcm9tRGVwdGhBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlIiwiY2xvbmUiLCJib3R0b21NYXJnaW5EZXB0aCIsImFkZEJvdHRvbU1hcmdpbiIsImFwcGVuZFRvUmlnaHQiLCJhcHBlbmRUb1RvcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7eUJBUFU7cUVBRUs7dUVBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFTyxJQUFBLEFBQU1ELG9DQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNaRyxLQUFBQTttQkFBUCxTQUFPQSxlQUFlQyxVQUFVO2dCQUM5QixJQUFJQyxzQkFBc0I7Z0JBRTFCLElBQU1DLG1CQUFtQkYsV0FBV0csTUFBTTtnQkFFMUMsSUFBSUQsbUJBQW1CLEdBQUc7b0JBQ3hCLElBQU1FLHNCQUFzQkosV0FBV0ssTUFBTSxDQUFDLFNBQUNELHFCQUFxQkU7d0JBQzVELElBQU1DLHFCQUFxQkQsVUFBVUUsV0FBVzt3QkFFaERKLG9CQUFvQkssSUFBSSxDQUFDRjt3QkFFekIsT0FBT0g7b0JBQ1QsR0FBRyxFQUFFLEdBQ0xNLDRCQUE0Qk4sb0JBQW9CRCxNQUFNO29CQUU1RCxJQUFJTyw4QkFBOEIsR0FBRzt3QkFDbkMsSUFBTUMsMEJBQTBCZCxNQUFNTzt3QkFFdENILHNCQUFzQlUseUJBQTBCLEdBQUc7b0JBQ3JELE9BQU87d0JBQ0wsSUFBSUMsNkJBQ0FDLDZCQUE2QixHQUM3QkMsMkJBQTJCLEdBQzNCQywyQkFBMkI7d0JBRS9CWCxvQkFBb0JZLE9BQU8sQ0FBQyxTQUFDVCxvQkFBb0JVOzRCQUMvQyxJQUFNQywwQkFBMEJYLG1CQUFtQlksUUFBUSxJQUNyREMsMEJBQTBCYixtQkFBbUJjLFFBQVE7NEJBRTNELElBQUlKLFVBQVUsR0FBRztnQ0FDZixJQUFNTiwwQkFBMEJKLG9CQUMxQmUsZ0RBQWdEWCx3QkFBd0JZLHlCQUF5QjtnQ0FFdkdYLDhCQUE4QlU7NEJBQ2hDOzRCQUVBLElBQUlMLFVBQVVQLDRCQUE0QixHQUFHO2dDQUMzQyxJQUFNYyx5QkFBeUJqQixvQkFDekJrQiwrQ0FBK0NELHVCQUF1QkQseUJBQXlCO2dDQUVyR1YsOEJBQThCWTs0QkFDaEM7NEJBRUEsSUFBSVIsUUFBUVAsNEJBQTRCLEdBQUc7Z0NBQ3pDRyw4QkFBOEJLO2dDQUM5QkwsOEJBQThCO2dDQUU5QkMsNEJBQTRCOzRCQUM5Qjs0QkFFQUEsNEJBQTRCSTs0QkFDNUJILDJCQUEyQlcsS0FBS0MsR0FBRyxDQUFDWiwwQkFBMEJLO3dCQUNoRTt3QkFFQSxJQUFNUSxRQUFRZiw2QkFBNkJELDhCQUE4QixHQUNuRWlCLDBCQUEwQkMsdUJBQXVCLENBQUNDLFNBQVMsQ0FBQ0gsUUFDNURJLDRCQUE0QkMseUJBQXlCLENBQUNGLFNBQVMsQ0FBQ0gsUUFDaEVNLGtCQUFrQnRCLDZCQUNsQnVCLG1CQUFtQnJCLDJCQUEyQmMsUUFBUU07d0JBRTVETCx3QkFBd0JPLGFBQWEsQ0FBQ0Y7d0JBQ3RDTCx3QkFBd0JRLGNBQWMsQ0FBQ0Y7d0JBQ3ZDSCwwQkFBMEJJLGFBQWEsQ0FBQ0Y7d0JBQ3hDRiwwQkFBMEJLLGNBQWMsQ0FBQ0Y7d0JBRXpDLElBQU1HLHlCQUF5QlQsd0JBQXdCTix5QkFBeUIsSUFDMUVnQixRQUFReEIsMEJBQTBCLEdBQUc7d0JBRTNDZCxzQkFBc0I2Qix1QkFBdUIsQ0FBQ1Usa0NBQWtDLENBckVuRTVDLHFCQXFFeUYyQyxPQUFPRDt3QkFFN0dsQyxvQkFBb0JZLE9BQU8sQ0FBQyxTQUFDVCxvQkFBb0JVOzRCQUMvQyxJQUFNRywwQkFBMEJiLG1CQUFtQmMsUUFBUSxJQUNyRG9CLDJCQUEyQmxDLG1CQUFtQm1DLEtBQUs7NEJBRXpELElBQUl6QixRQUFRUCw0QkFBNEIsR0FBRztnQ0FDekMsSUFBTXlCLG1CQUFtQjtnQ0FFekJNLHlCQUF5QkosY0FBYyxDQUFDRjs0QkFDMUM7NEJBRUEsSUFBSWYsMEJBQTBCTCwwQkFBMEI7Z0NBQ3RELElBQU00QixvQkFBb0I1QiwyQkFBMkJLO2dDQUVyRHFCLHlCQUF5QkcsZUFBZSxDQUFDRDs0QkFDM0M7NEJBRUExQyxvQkFBb0I0QyxhQUFhLENBQUNKO3dCQUNwQzt3QkFFQXhDLG9CQUFvQjZDLFdBQVcsQ0FBQ2Q7d0JBRWhDL0Isb0JBQW9CNkMsV0FBVyxDQUFDakI7b0JBQ2xDO2dCQUNGO2dCQUVBLE9BQU81QjtZQUNUOzs7V0FqR21CTDtFQUE0QmtDLHVCQUF1QiJ9