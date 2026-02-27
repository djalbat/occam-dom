"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Transform;
    }
});
const _necessary = require("necessary");
const _transform = require("./utilities/transform");
const { push } = _necessary.arrayUtilities;
class Transform {
    constructor(node, tokens){
        this.node = node;
        this.tokens = tokens;
    }
    getNode() {
        return this.node;
    }
    getTokens(tokens = []) {
        push(tokens, this.tokens);
        return this.tokens;
    }
    appendTo(parentNode, context) {
        const { tokens } = context, appendedNode = this.node, appendedTokens = this.tokens; ///
        (0, _transform.appendNode)(appendedNode, parentNode);
        (0, _transform.appendTokens)(appendedTokens, tokens);
    }
    prependTo(parentNode, context) {
        const { tokens } = context, prependedNode = this.node, prependedTokens = this.tokens; ///
        (0, _transform.prependNode)(prependedNode, parentNode);
        (0, _transform.prependTokens)(prependedTokens, tokens);
    }
    addAfter(existingNode, context) {
        const { tokens } = context, addedNode = this.node, parentNode = existingNode.getParentNode(), addedTokens = this.tokens; ///
        (0, _transform.addNodeAfter)(existingNode, addedNode, parentNode);
        (0, _transform.addTokensAfter)(existingNode, addedTokens, tokens);
    }
    replace(replacedNode, context) {
        const { tokens } = context, parentNode = replacedNode.getParentNode(), replacementNode = this.node, replacementTokens = this.tokens; ///
        (0, _transform.replaceNode)(replacementNode, replacedNode, parentNode);
        (0, _transform.replaceTokens)(replacementTokens, replacedNode, tokens);
    }
    remove(context) {
        const { tokens } = context, parentNode = this.node.getParentNode(), removedNode = this.node; ///
        (0, _transform.removeNode)(removedNode, parentNode);
        (0, _transform.removeTokens)(removedNode, tokens);
    }
    clone(...remainingArguments) {
        const clonedNode = this.node.clone(), clonedTokens = (0, _transform.clonedTokensFromNodeAndTokens)(this.node, this.tokens);
        (0, _transform.overwriteClonedNodeTokens)(clonedNode, clonedTokens, this.tokens);
        const Class = this.constructor, node = clonedNode, tokens = clonedTokens, transform = new Class(node, tokens, ...remainingArguments);
        return transform;
    }
    static fromNode(Class, node, ...remainingArguments) {
        let context = remainingArguments.pop();
        if (context === undefined) {
            context = node; ///
            node = Class; ///
            Class = Transform; ///
        }
        let { tokens } = context;
        const firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens), clonedNode = node.clone();
        let clonedTokens;
        if (firstSignificantTokenIndex === null) {
            clonedTokens = [];
        } else {
            const offset = firstSignificantTokenIndex; ///
            clonedTokens = (0, _transform.clonedTokensFromNodeAndTokens)(node, tokens);
            (0, _transform.overwriteClonedNodeTokens)(clonedNode, clonedTokens, tokens, offset);
        }
        node = clonedNode; ///
        tokens = clonedTokens; ///
        const transform = new Class(node, tokens, ...remainingArguments);
        return transform;
    }
    static fromNodeAndTokens(Class, node, tokens, ...remainingArguments) {
        if (tokens === undefined) {
            tokens = node; ///
            node = Class; ///
            Class = Transform; ///
        }
        const transform = new Class(node, tokens, ...remainingArguments);
        return transform;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBhcHBlbmROb2RlLFxuICAgICAgICAgcmVtb3ZlTm9kZSxcbiAgICAgICAgIHByZXBlbmROb2RlLFxuICAgICAgICAgcmVwbGFjZU5vZGUsXG4gICAgICAgICBhZGROb2RlQWZ0ZXIsXG4gICAgICAgICBhcHBlbmRUb2tlbnMsXG4gICAgICAgICByZW1vdmVUb2tlbnMsXG4gICAgICAgICByZXBsYWNlVG9rZW5zLFxuICAgICAgICAgcHJlcGVuZFRva2VucyxcbiAgICAgICAgIGFkZFRva2Vuc0FmdGVyLFxuICAgICAgICAgb3ZlcndyaXRlQ2xvbmVkTm9kZVRva2VucyxcbiAgICAgICAgIGNsb25lZFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zLCB9IGZyb20gXCIuL3V0aWxpdGllcy90cmFuc2Zvcm1cIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgdG9rZW5zKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2Vucyh0b2tlbnMgPSBbXSkge1xuICAgIHB1c2godG9rZW5zLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBhcHBlbmRUbyhwYXJlbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgYXBwZW5kZWROb2RlID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgYXBwZW5kZWRUb2tlbnMgPSB0aGlzLnRva2VuczsgIC8vL1xuXG4gICAgYXBwZW5kTm9kZShhcHBlbmRlZE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgYXBwZW5kVG9rZW5zKGFwcGVuZGVkVG9rZW5zLCB0b2tlbnMpO1xuICB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBwcmVwZW5kZWROb2RlID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgcHJlcGVuZGVkVG9rZW5zID0gdGhpcy50b2tlbnM7ICAvLy9cblxuICAgIHByZXBlbmROb2RlKHByZXBlbmRlZE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgcHJlcGVuZFRva2VucyhwcmVwZW5kZWRUb2tlbnMsIHRva2Vucyk7XG4gIH1cblxuICBhZGRBZnRlcihleGlzdGluZ05vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBhZGRlZE5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBleGlzdGluZ05vZGUuZ2V0UGFyZW50Tm9kZSgpLFxuICAgICAgICAgIGFkZGVkVG9rZW5zID0gdGhpcy50b2tlbnM7ICAvLy9cblxuICAgIGFkZE5vZGVBZnRlcihleGlzdGluZ05vZGUsIGFkZGVkTm9kZSwgcGFyZW50Tm9kZSk7XG5cbiAgICBhZGRUb2tlbnNBZnRlcihleGlzdGluZ05vZGUsIGFkZGVkVG9rZW5zLCB0b2tlbnMpO1xuICB9XG5cbiAgcmVwbGFjZShyZXBsYWNlZE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBwYXJlbnROb2RlID0gcmVwbGFjZWROb2RlLmdldFBhcmVudE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50VG9rZW5zID0gdGhpcy50b2tlbnM7IC8vL1xuXG4gICAgcmVwbGFjZU5vZGUocmVwbGFjZW1lbnROb2RlLCByZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgcmVwbGFjZVRva2VucyhyZXBsYWNlbWVudFRva2VucywgcmVwbGFjZWROb2RlLCB0b2tlbnMpO1xuICB9XG5cbiAgcmVtb3ZlKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBwYXJlbnROb2RlID0gdGhpcy5ub2RlLmdldFBhcmVudE5vZGUoKSxcbiAgICAgICAgICByZW1vdmVkTm9kZSA9IHRoaXMubm9kZTsgIC8vL1xuXG4gICAgcmVtb3ZlTm9kZShyZW1vdmVkTm9kZSwgcGFyZW50Tm9kZSk7XG5cbiAgICByZW1vdmVUb2tlbnMocmVtb3ZlZE5vZGUsIHRva2Vucyk7XG4gIH1cblxuICBjbG9uZSguLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBjbG9uZWROb2RlID0gdGhpcy5ub2RlLmNsb25lKCksXG4gICAgICAgICAgY2xvbmVkVG9rZW5zID0gY2xvbmVkVG9rZW5zRnJvbU5vZGVBbmRUb2tlbnModGhpcy5ub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICBvdmVyd3JpdGVDbG9uZWROb2RlVG9rZW5zKGNsb25lZE5vZGUsIGNsb25lZFRva2VucywgdGhpcy50b2tlbnMpO1xuXG4gICAgY29uc3QgQ2xhc3MgPSB0aGlzLmNvbnN0cnVjdG9yLCAvLy9cbiAgICAgICAgICBub2RlID0gY2xvbmVkTm9kZSwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IGNsb25lZFRva2VucywgLy8vXG4gICAgICAgICAgdHJhbnNmb3JtID0gbmV3IENsYXNzKG5vZGUsIHRva2VucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB0cmFuc2Zvcm1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZShDbGFzcywgbm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGNvbnRleHQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCk7XG5cbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0ID0gbm9kZTsgLy8vXG5cbiAgICAgIG5vZGUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gVHJhbnNmb3JtOyAgLy8vXG4gICAgfVxuXG4gICAgbGV0IHsgdG9rZW5zIH0gPSBjb250ZXh0O1xuXG4gICAgY29uc3QgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgICAgY2xvbmVkTm9kZSA9IG5vZGUuY2xvbmUoKTtcblxuICAgIGxldCBjbG9uZWRUb2tlbnM7XG5cbiAgICBpZiAoZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGNsb25lZFRva2VucyA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleDsgIC8vL1xuXG4gICAgICBjbG9uZWRUb2tlbnMgPSBjbG9uZWRUb2tlbnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgICBvdmVyd3JpdGVDbG9uZWROb2RlVG9rZW5zKGNsb25lZE5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQpO1xuICAgIH1cblxuICAgIG5vZGUgPSBjbG9uZWROb2RlOyAgLy8vXG5cbiAgICB0b2tlbnMgPSBjbG9uZWRUb2tlbnM7IC8vL1xuXG4gICAgY29uc3QgdHJhbnNmb3JtID0gbmV3IENsYXNzKG5vZGUsIHRva2VucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB0cmFuc2Zvcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMoQ2xhc3MsIG5vZGUsIHRva2VucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKHRva2VucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0b2tlbnMgPSBub2RlOyAgLy8vXG5cbiAgICAgIG5vZGUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gVHJhbnNmb3JtOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgdHJhbnNmb3JtID0gbmV3IENsYXNzKG5vZGUsIHRva2VucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB0cmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUcmFuc2Zvcm0iLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJub2RlIiwidG9rZW5zIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImFwcGVuZFRvIiwicGFyZW50Tm9kZSIsImNvbnRleHQiLCJhcHBlbmRlZE5vZGUiLCJhcHBlbmRlZFRva2VucyIsImFwcGVuZE5vZGUiLCJhcHBlbmRUb2tlbnMiLCJwcmVwZW5kVG8iLCJwcmVwZW5kZWROb2RlIiwicHJlcGVuZGVkVG9rZW5zIiwicHJlcGVuZE5vZGUiLCJwcmVwZW5kVG9rZW5zIiwiYWRkQWZ0ZXIiLCJleGlzdGluZ05vZGUiLCJhZGRlZE5vZGUiLCJnZXRQYXJlbnROb2RlIiwiYWRkZWRUb2tlbnMiLCJhZGROb2RlQWZ0ZXIiLCJhZGRUb2tlbnNBZnRlciIsInJlcGxhY2UiLCJyZXBsYWNlZE5vZGUiLCJyZXBsYWNlbWVudE5vZGUiLCJyZXBsYWNlbWVudFRva2VucyIsInJlcGxhY2VOb2RlIiwicmVwbGFjZVRva2VucyIsInJlbW92ZSIsInJlbW92ZWROb2RlIiwicmVtb3ZlTm9kZSIsInJlbW92ZVRva2VucyIsImNsb25lIiwicmVtYWluaW5nQXJndW1lbnRzIiwiY2xvbmVkTm9kZSIsImNsb25lZFRva2VucyIsImNsb25lZFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zIiwib3ZlcndyaXRlQ2xvbmVkTm9kZVRva2VucyIsIkNsYXNzIiwidHJhbnNmb3JtIiwiZnJvbU5vZGUiLCJwb3AiLCJ1bmRlZmluZWQiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Iiwib2Zmc2V0IiwiZnJvbU5vZGVBbmRUb2tlbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW1CQTs7O2VBQXFCQTs7OzJCQWpCVTsyQkFhZ0I7QUFFL0MsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0MseUJBQWM7QUFFaEIsTUFBTUY7SUFDbkIsWUFBWUcsSUFBSSxFQUFFQyxNQUFNLENBQUU7UUFDeEIsSUFBSSxDQUFDRCxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBO0lBQ2hCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJQUNsQjtJQUVBRyxVQUFVRixTQUFTLEVBQUUsRUFBRTtRQUNyQkgsS0FBS0csUUFBUSxJQUFJLENBQUNBLE1BQU07UUFFeEIsT0FBTyxJQUFJLENBQUNBLE1BQU07SUFDcEI7SUFFQUcsU0FBU0MsVUFBVSxFQUFFQyxPQUFPLEVBQUU7UUFDNUIsTUFBTSxFQUFFTCxNQUFNLEVBQUUsR0FBR0ssU0FDYkMsZUFBZSxJQUFJLENBQUNQLElBQUksRUFDeEJRLGlCQUFpQixJQUFJLENBQUNQLE1BQU0sRUFBRyxHQUFHO1FBRXhDUSxJQUFBQSxxQkFBVSxFQUFDRixjQUFjRjtRQUV6QkssSUFBQUEsdUJBQVksRUFBQ0YsZ0JBQWdCUDtJQUMvQjtJQUVBVSxVQUFVTixVQUFVLEVBQUVDLE9BQU8sRUFBRTtRQUM3QixNQUFNLEVBQUVMLE1BQU0sRUFBRSxHQUFHSyxTQUNiTSxnQkFBZ0IsSUFBSSxDQUFDWixJQUFJLEVBQ3pCYSxrQkFBa0IsSUFBSSxDQUFDWixNQUFNLEVBQUcsR0FBRztRQUV6Q2EsSUFBQUEsc0JBQVcsRUFBQ0YsZUFBZVA7UUFFM0JVLElBQUFBLHdCQUFhLEVBQUNGLGlCQUFpQlo7SUFDakM7SUFFQWUsU0FBU0MsWUFBWSxFQUFFWCxPQUFPLEVBQUU7UUFDOUIsTUFBTSxFQUFFTCxN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