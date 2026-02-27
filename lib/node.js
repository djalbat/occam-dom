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
const _occamparsers = require("occam-parsers");
const _node = /*#__PURE__*/ _interop_require_default(require("./parseTree/node"));
const _constants = require("./constants");
const _node1 = require("./utilities/node");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class Node {
    constructor(outerNode, parentNode, childNodes){
        this.outerNode = outerNode;
        this.parentNode = parentNode;
        this.childNodes = childNodes;
    }
    getOuterNode() {
        return this.outerNode;
    }
    getParentNode() {
        return this.parentNode;
    }
    getChildNodes() {
        return this.childNodes;
    }
    setOuterNode(outerNode) {
        this.outerNode = outerNode;
    }
    setParentNode(parentNode) {
        this.parentNode = parentNode;
    }
    setChildNodes(childNodes) {
        const startIndex = 0, deleteCount = Infinity, addedChildNodes = childNodes; ///
        this.spliceChildNodes(startIndex, deleteCount, addedChildNodes);
    }
    isLessThan(node) {
        const nodeA = this, nodeB = node, lessThan = (0, _node1.isLessThan)(nodeA, nodeB);
        return lessThan;
    }
    isGreaterThan(node) {
        const nodeA = this, nodeB = node, greaterThan = (0, _node1.isGreaterThan)(nodeA, nodeB);
        return greaterThan;
    }
    isLessThanOrEqualTo(node) {
        const nodeA = this, nodeB = node, lessThanOrEqualTo = (0, _node1.isLessThanOrEqualTo)(nodeA, nodeB);
        return lessThanOrEqualTo;
    }
    isGreaterThanOrEqualTo(node) {
        const nodeA = this, nodeB = node, greaterThanOrEqualTo = (0, _node1.isGreaterThanOrEqualTo)(nodeA, nodeB);
        return greaterThanOrEqualTo;
    }
    matchOuterNode(outerNode) {
        const outerNodeMatches = this.outerNode === outerNode;
        return outerNodeMatches;
    }
    destroy() {
        this.forEachChildNode((childNode)=>{
            childNode.destroy();
        });
        this.outerNode = null;
        this.parentNode = null;
        this.childNodes = null;
    }
    asString() {
        let string = _constants.EMPTY_STRING;
        if (this.outerNode !== null) {
            const nodeTerminalNode = this.outerNode.isTerminalNode();
            if (nodeTerminalNode) {
                const terminalNode = this.outerNode, type = terminalNode.getType(), content = terminalNode.getContent();
                string = `"${content}" [${type}]`;
            } else {
                const nonTerminalNode = this.outerNode, ruleName = nonTerminalNode.getRuleName();
                string = ruleName; ///
            }
        }
        return string;
    }
    asParseTree() {
        const node = this, nodeParseTree = _node.default.fromNode(node), parseTree = nodeParseTree; ///
        return parseTree;
    }
    clone(...remainingArguments) {
        const Class = this.constructor, outerNode = this.outerNode, parentNode = null, childNodes = cloneChildNodes(this.childNodes), node = new Class(outerNode, parentNode, childNodes, ...remainingArguments);
        node.setChildNodesParentNode();
        return node;
    }
    static fromNothing(Class, ...remainingArguments) {
        if (Class === undefined) {
            Class = Node; ///
        }
        const outerNode = null, parentNode = null, childNodes = [], node = new Class(outerNode, parentNode, childNodes, ...remainingArguments);
        return node;
    }
    static fromOuterNode(Class, outerNode, ...remainingArguments) {
        if (outerNode === undefined) {
            outerNode = Class; ///
            Class = Node; ///
        }
        const parentNode = null, childNodes = [], node = new Class(outerNode, parentNode, childNodes, ...remainingArguments);
        return node;
    }
    static fromChildNodes(Class, childNodes, ...remainingArguments) {
        if (childNodes === undefined) {
            childNodes = Class; ///
            Class = Node; ///
        }
        const outerNode = null, parentNode = null, node = new Class(outerNode, parentNode, childNodes, ...remainingArguments);
        node.setChildNodesParentNode();
        return node;
    }
}
Object.assign(Node.prototype, _occamparsers.nodeMixins);
function cloneChildNodes(childNodes) {
    childNodes = childNodes.map((childNode)=>{
        childNode = childNode.clone(); ///
        return childNode;
    });
    return childNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlTWl4aW5zIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IE5vZGVQYXJzZVRyZWUgZnJvbSBcIi4vcGFyc2VUcmVlL25vZGVcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBpc0xlc3NUaGFuLCBpc0dyZWF0ZXJUaGFuLCBpc0xlc3NUaGFuT3JFcXVhbFRvLCBpc0dyZWF0ZXJUaGFuT3JFcXVhbFRvIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2Rlcykge1xuICAgIHRoaXMub3V0ZXJOb2RlID0gb3V0ZXJOb2RlO1xuICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuXG4gIGdldE91dGVyTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5vdXRlck5vZGU7XG4gIH1cblxuICBnZXRQYXJlbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGU7XG4gIH1cblxuICBnZXRDaGlsZE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXM7XG4gIH1cblxuICBzZXRPdXRlck5vZGUob3V0ZXJOb2RlKSB7XG4gICAgdGhpcy5vdXRlck5vZGUgPSBvdXRlck5vZGU7XG4gIH1cblxuICBzZXRQYXJlbnROb2RlKHBhcmVudE5vZGUpIHtcbiAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuICB9XG5cbiAgc2V0Q2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IDAsXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSBJbmZpbml0eSxcbiAgICAgICAgICBhZGRlZENoaWxkTm9kZXMgPSBjaGlsZE5vZGVzOyAgLy8vXG5cbiAgICB0aGlzLnNwbGljZUNoaWxkTm9kZXMoc3RhcnRJbmRleCwgZGVsZXRlQ291bnQsIGFkZGVkQ2hpbGROb2Rlcyk7XG4gIH1cblxuICBpc0xlc3NUaGFuKG5vZGUpIHtcbiAgICBjb25zdCBub2RlQSA9IHRoaXMsIC8vL1xuICAgICAgICAgIG5vZGVCID0gbm9kZSwgLy8vXG4gICAgICAgICAgbGVzc1RoYW4gPSBpc0xlc3NUaGFuKG5vZGVBLCBub2RlQik7XG5cbiAgICByZXR1cm4gbGVzc1RoYW47XG4gIH1cblxuICBpc0dyZWF0ZXJUaGFuKG5vZGUpIHtcbiAgICBjb25zdCBub2RlQSA9IHRoaXMsIC8vL1xuICAgICAgICAgIG5vZGVCID0gbm9kZSwgLy8vXG4gICAgICAgICAgZ3JlYXRlclRoYW4gPSBpc0dyZWF0ZXJUaGFuKG5vZGVBLCBub2RlQik7XG5cbiAgICByZXR1cm4gZ3JlYXRlclRoYW47XG4gIH1cblxuICBpc0xlc3NUaGFuT3JFcXVhbFRvKG5vZGUpIHtcbiAgICBjb25zdCBub2RlQSA9IHRoaXMsIC8vL1xuICAgICAgICAgIG5vZGVCID0gbm9kZSwgLy8vXG4gICAgICAgICAgbGVzc1RoYW5PckVxdWFsVG8gPSBpc0xlc3NUaGFuT3JFcXVhbFRvKG5vZGVBLCBub2RlQik7XG5cbiAgICByZXR1cm4gbGVzc1RoYW5PckVxdWFsVG87XG4gIH1cblxuICBpc0dyZWF0ZXJUaGFuT3JFcXVhbFRvKG5vZGUpIHtcbiAgICBjb25zdCBub2RlQSA9IHRoaXMsIC8vL1xuICAgICAgICBub2RlQiA9IG5vZGUsIC8vL1xuICAgICAgICBncmVhdGVyVGhhbk9yRXF1YWxUbyA9IGlzR3JlYXRlclRoYW5PckVxdWFsVG8obm9kZUEsIG5vZGVCKTtcblxuICAgIHJldHVybiBncmVhdGVyVGhhbk9yRXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoT3V0ZXJOb2RlKG91dGVyTm9kZSkge1xuICAgIGNvbnN0IG91dGVyTm9kZU1hdGNoZXMgPSAodGhpcy5vdXRlck5vZGUgPT09IG91dGVyTm9kZSk7XG5cbiAgICByZXR1cm4gb3V0ZXJOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5mb3JFYWNoQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNoaWxkTm9kZS5kZXN0cm95KCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyTm9kZSA9IG51bGw7XG4gICAgdGhpcy5wYXJlbnROb2RlID0gbnVsbDtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBudWxsO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgbGV0IHN0cmluZyA9IEVNUFRZX1NUUklORztcblxuICAgIGlmICh0aGlzLm91dGVyTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IHRoaXMub3V0ZXJOb2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRoaXMub3V0ZXJOb2RlLFxuICAgICAgICAgICAgICB0eXBlID0gdGVybWluYWxOb2RlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgICAgc3RyaW5nID0gYFwiJHtjb250ZW50fVwiIFske3R5cGV9XWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0aGlzLm91dGVyTm9kZSxcbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgICBzdHJpbmcgPSBydWxlTmFtZTsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBhc1BhcnNlVHJlZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIG5vZGVQYXJzZVRyZWUgPSBOb2RlUGFyc2VUcmVlLmZyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IG5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBjbG9uZSguLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBDbGFzcyA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgb3V0ZXJOb2RlID0gdGhpcy5vdXRlck5vZGUsXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IGNsb25lQ2hpbGROb2Rlcyh0aGlzLmNoaWxkTm9kZXMpLFxuICAgICAgICAgIG5vZGUgPSBuZXcgQ2xhc3Mob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgbm9kZS5zZXRDaGlsZE5vZGVzUGFyZW50Tm9kZSgpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChDbGFzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBDbGFzcyA9IE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IG91dGVyTm9kZSA9IG51bGwsXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IFtdLFxuICAgICAgICAgIG5vZGUgPSBuZXcgQ2xhc3Mob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShDbGFzcywgb3V0ZXJOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAob3V0ZXJOb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG91dGVyTm9kZSA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IFtdLFxuICAgICAgICAgIG5vZGUgPSBuZXcgQ2xhc3Mob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNoaWxkTm9kZXMoQ2xhc3MsIGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChjaGlsZE5vZGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNoaWxkTm9kZXMgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IG91dGVyTm9kZSA9IG51bGwsXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgbm9kZSA9IG5ldyBDbGFzcyhvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBub2RlLnNldENoaWxkTm9kZXNQYXJlbnROb2RlKCk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKE5vZGUucHJvdG90eXBlLCBub2RlTWl4aW5zKTtcblxuZnVuY3Rpb24gY2xvbmVDaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXMubWFwKChjaGlsZE5vZGUpID0+IHsgIC8vL1xuICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZS5jbG9uZSgpOyAgLy8vXG5cbiAgICByZXR1cm4gY2hpbGROb2RlO1xuICB9KTtcblxuICByZXR1cm4gY2hpbGROb2Rlcztcbn1cbiJdLCJuYW1lcyI6WyJOb2RlIiwib3V0ZXJOb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJnZXRPdXRlck5vZGUiLCJnZXRQYXJlbnROb2RlIiwiZ2V0Q2hpbGROb2RlcyIsInNldE91dGVyTm9kZSIsInNldFBhcmVudE5vZGUiLCJzZXRDaGlsZE5vZGVzIiwic3RhcnRJbmRleCIsImRlbGV0ZUNvdW50IiwiSW5maW5pdHkiLCJhZGRlZENoaWxkTm9kZXMiLCJzcGxpY2VDaGlsZE5vZGVzIiwiaXNMZXNzVGhhbiIsIm5vZGUiLCJub2RlQSIsIm5vZGVCIiwibGVzc1RoYW4iLCJpc0dyZWF0ZXJUaGFuIiwiZ3JlYXRlclRoYW4iLCJpc0xlc3NUaGFuT3JFcXVhbFRvIiwibGVzc1RoYW5PckVxdWFsVG8iLCJpc0dyZWF0ZXJUaGFuT3JFcXVhbFRvIiwiZ3JlYXRlclRoYW5PckVxdWFsVG8iLCJtYXRjaE91dGVyTm9kZSIsIm91dGVyTm9kZU1hdGNoZXMiLCJkZXN0cm95IiwiZm9yRWFjaENoaWxkTm9kZSIsImNoaWxkTm9kZSIsImFzU3RyaW5nIiwic3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwidHlwZSIsImdldFR5cGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsIm5vblRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJhc1BhcnNlVHJlZSIsIm5vZGVQYXJzZVRyZWUiLCJOb2RlUGFyc2VUcmVlIiwiZnJvbU5vZGUiLCJwYXJzZVRyZWUiLCJjbG9uZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIkNsYXNzIiwiY2xvbmVDaGlsZE5vZGVzIiwic2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUiLCJmcm9tTm90aGluZyIsInVuZGVmaW5lZCIsImZyb21PdXRlck5vZGUiLCJmcm9tQ2hpbGROb2RlcyIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsIm5vZGVNaXhpbnMi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