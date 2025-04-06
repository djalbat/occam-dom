"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Node;
    }
});
var _node = /*#__PURE__*/ _interop_require_default(require("./parseTree/node"));
var _constants = require("./constants");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
var Node = /*#__PURE__*/ function() {
    function Node(outerNode, parentNode, childNodes) {
        _class_call_check(this, Node);
        this.outerNode = outerNode;
        this.parentNode = parentNode;
        this.childNodes = childNodes;
    }
    _create_class(Node, [
        {
            key: "getOuterNode",
            value: function getOuterNode() {
                return this.outerNode;
            }
        },
        {
            key: "getParentNode",
            value: function getParentNode() {
                return this.parentNode;
            }
        },
        {
            key: "getChildNodes",
            value: function getChildNodes() {
                return this.childNodes;
            }
        },
        {
            key: "setOuterNode",
            value: function setOuterNode(outerNode) {
                this.outerNode = outerNode;
            }
        },
        {
            key: "setParentNode",
            value: function setParentNode(parentNode) {
                this.parentNode = parentNode;
            }
        },
        {
            key: "setChildNodes",
            value: function setChildNodes(childNodes) {
                var startIndex = 0, deleteCount = Infinity, addedChildNodes = childNodes; ///
                this.spliceChildNodes(startIndex, deleteCount, addedChildNodes);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this.outerNode = null;
                _get(_get_prototype_of(Node.prototype), "destroy", this).call(this);
            }
        },
        {
            key: "asString",
            value: function asString() {
                var string = _constants.EMPTY_STRING;
                if (this.outerNode !== null) {
                    var nodeTerminalNode = this.outerNode.isTerminalNode();
                    if (nodeTerminalNode) {
                        var terminalNode = this.outerNode, type = terminalNode.getType(), content = terminalNode.getContent();
                        string = '"'.concat(content, '" [').concat(type, "]");
                    } else {
                        var nonTerminalNode = this.outerNode, ruleName = nonTerminalNode.getRuleName();
                        string = ruleName; ///
                    }
                }
                return string;
            }
        },
        {
            key: "asParseTree",
            value: function asParseTree() {
                var node = this, nodeParseTree = _node.default.fromNode(node), parseTree = nodeParseTree; ///
                return parseTree;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                if (Class === undefined) {
                    Class = Node; ///
                }
                var outerNode = null, parentNode = null, childNodes = [], node = new Class(outerNode, parentNode, childNodes);
                return node;
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(Class, outerNode) {
                if (outerNode === undefined) {
                    outerNode = Class; ///
                    Class = Node; ///
                }
                var parentNode = null, childNodes = [], node = new Class(outerNode, parentNode, childNodes);
                return node;
            }
        }
    ]);
    return Node;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9kZVBhcnNlVHJlZSBmcm9tIFwiLi9wYXJzZVRyZWUvbm9kZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2Rlcykge1xuICAgIHRoaXMub3V0ZXJOb2RlID0gb3V0ZXJOb2RlO1xuICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuXG4gIGdldE91dGVyTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5vdXRlck5vZGU7XG4gIH1cblxuICBnZXRQYXJlbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGU7XG4gIH1cblxuICBnZXRDaGlsZE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXM7XG4gIH1cblxuICBzZXRPdXRlck5vZGUob3V0ZXJOb2RlKSB7XG4gICAgdGhpcy5vdXRlck5vZGUgPSBvdXRlck5vZGU7XG4gIH1cblxuICBzZXRQYXJlbnROb2RlKHBhcmVudE5vZGUpIHtcbiAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuICB9XG5cbiAgc2V0Q2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IDAsXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSBJbmZpbml0eSxcbiAgICAgICAgICBhZGRlZENoaWxkTm9kZXMgPSBjaGlsZE5vZGVzOyAgLy8vXG5cbiAgICB0aGlzLnNwbGljZUNoaWxkTm9kZXMoc3RhcnRJbmRleCwgZGVsZXRlQ291bnQsIGFkZGVkQ2hpbGROb2Rlcyk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMub3V0ZXJOb2RlID0gbnVsbDtcblxuICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGxldCBzdHJpbmcgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBpZiAodGhpcy5vdXRlck5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSB0aGlzLm91dGVyTm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSB0aGlzLm91dGVyTm9kZSxcbiAgICAgICAgICAgICAgdHlwZSA9IHRlcm1pbmFsTm9kZS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICAgIHN0cmluZyA9IGBcIiR7Y29udGVudH1cIiBbJHt0eXBlfV1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGhpcy5vdXRlck5vZGUsXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICAgICAgc3RyaW5nID0gcnVsZU5hbWU7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgYXNQYXJzZVRyZWUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBub2RlUGFyc2VUcmVlID0gTm9kZVBhcnNlVHJlZS5mcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSBub2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XG4gICAgaWYgKENsYXNzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIENsYXNzID0gTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3Qgb3V0ZXJOb2RlID0gbnVsbCxcbiAgICAgICAgICBwYXJlbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gW10sXG4gICAgICAgICAgbm9kZSA9IG5ldyBDbGFzcyhvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShDbGFzcywgb3V0ZXJOb2RlKSB7XG4gICAgaWYgKG91dGVyTm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvdXRlck5vZGUgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBbXSxcbiAgICAgICAgICBub2RlID0gbmV3IENsYXNzKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5vZGUiLCJvdXRlck5vZGUiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsImdldE91dGVyTm9kZSIsImdldFBhcmVudE5vZGUiLCJnZXRDaGlsZE5vZGVzIiwic2V0T3V0ZXJOb2RlIiwic2V0UGFyZW50Tm9kZSIsInNldENoaWxkTm9kZXMiLCJzdGFydEluZGV4IiwiZGVsZXRlQ291bnQiLCJJbmZpbml0eSIsImFkZGVkQ2hpbGROb2RlcyIsInNwbGljZUNoaWxkTm9kZXMiLCJkZXN0cm95IiwiYXNTdHJpbmciLCJzdHJpbmciLCJFTVBUWV9TVFJJTkciLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0eXBlIiwiZ2V0VHlwZSIsImNvbnRlbnQiLCJnZXRDb250ZW50Iiwibm9uVGVybWluYWxOb2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImFzUGFyc2VUcmVlIiwibm9kZSIsIm5vZGVQYXJzZVRyZWUiLCJOb2RlUGFyc2VUcmVlIiwiZnJvbU5vZGUiLCJwYXJzZVRyZWUiLCJmcm9tTm90aGluZyIsIkNsYXNzIiwidW5kZWZpbmVkIiwiZnJvbU91dGVyTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7MkRBSks7eUJBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEscUJBQU47YUFBTUEsS0FDUEMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLFVBQVU7Z0NBRDFCSDtRQUVqQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7a0JBSkRIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxTQUFTO1lBQ3ZCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxVQUFVO1lBQ3hCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxVQUFVO1lBQ3hCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFOLFNBQVM7Z0JBQ3BCLElBQUksQ0FBQ0EsU0FBUyxHQUFHQTtZQUNuQjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjTixVQUFVO2dCQUN0QixJQUFJLENBQUNBLFVBQVUsR0FBR0E7WUFDcEI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY04sVUFBVTtnQkFDdEIsSUFBTU8sYUFBYSxHQUNiQyxjQUFjQyxVQUNkQyxrQkFBa0JWLFlBQWEsR0FBRztnQkFFeEMsSUFBSSxDQUFDVyxnQkFBZ0IsQ0FBQ0osWUFBWUMsYUFBYUU7WUFDakQ7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDZCxTQUFTLEdBQUc7Z0JBRWpCLHVCQXRDaUJELGlCQXNDWGUsV0FBTixJQUFLO1lBQ1A7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsU0FBU0MsdUJBQVk7Z0JBRXpCLElBQUksSUFBSSxDQUFDakIsU0FBUyxLQUFLLE1BQU07b0JBQzNCLElBQU1rQixtQkFBbUIsSUFBSSxDQUFDbEIsU0FBUyxDQUFDbUIsY0FBYztvQkFFdEQsSUFBSUQsa0JBQWtCO3dCQUNwQixJQUFNRSxlQUFlLElBQUksQ0FBQ3BCLFNBQVMsRUFDN0JxQixPQUFPRCxhQUFhRSxPQUFPLElBQzNCQyxVQUFVSCxhQUFhSSxVQUFVO3dCQUV2Q1IsU0FBUyxBQUFDLElBQWdCSyxPQUFiRSxTQUFRLE9BQVUsT0FBTEYsTUFBSztvQkFDakMsT0FBTzt3QkFDTCxJQUFNSSxrQkFBa0IsSUFBSSxDQUFDekIsU0FBUyxFQUNoQzBCLFdBQVdELGdCQUFnQkUsV0FBVzt3QkFFNUNYLFNBQVNVLFVBQVcsR0FBRztvQkFDekI7Z0JBQ0Y7Z0JBRUEsT0FBT1Y7WUFDVDs7O1lBRUFZLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxPQUFPLElBQUksRUFDWEMsZ0JBQWdCQyxhQUFhLENBQUNDLFFBQVEsQ0FBQ0gsT0FDdkNJLFlBQVlILGVBQWdCLEdBQUc7Z0JBRXJDLE9BQU9HO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsWUFBWUMsS0FBSztnQkFDdEIsSUFBSUEsVUFBVUMsV0FBVztvQkFDdkJELFFBMUVlcEMsTUEwRUQsR0FBRztnQkFDbkI7Z0JBRUEsSUFBTUMsWUFBWSxNQUNaQyxhQUFhLE1BQ2JDLGFBQWEsRUFBRSxFQUNmMkIsT0FBTyxJQUFJTSxNQUFNbkMsV0FBV0MsWUFBWUM7Z0JBRTlDLE9BQU8yQjtZQUNUOzs7WUFFT1EsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0YsS0FBSyxFQUFFbkMsU0FBUztnQkFDbkMsSUFBSUEsY0FBY29DLFdBQVc7b0JBQzNCcEMsWUFBWW1DLE9BQVEsR0FBRztvQkFFdkJBLFFBekZlcEMsTUF5RkQsR0FBRztnQkFDbkI7Z0JBRUEsSUFBTUUsYUFBYSxNQUNiQyxhQUFhLEVBQUUsRUFDZjJCLE9BQU8sSUFBSU0sTUFBTW5DLFdBQVdDLFlBQVlDO2dCQUU5QyxPQUFPMkI7WUFDVDs7O1dBakdtQjlCIn0=