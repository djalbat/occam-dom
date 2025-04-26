"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    addNodeAfter: function() {
        return addNodeAfter;
    },
    addNodesAfter: function() {
        return addNodesAfter;
    },
    addTokensAfter: function() {
        return addTokensAfter;
    },
    appendNode: function() {
        return appendNode;
    },
    appendTokens: function() {
        return appendTokens;
    },
    clonedTokensFromNodeAndTokens: function() {
        return clonedTokensFromNodeAndTokens;
    },
    default: function() {
        return _default;
    },
    overwriteClonedNodeTokens: function() {
        return overwriteClonedNodeTokens;
    },
    prependNode: function() {
        return prependNode;
    },
    prependTokens: function() {
        return prependTokens;
    },
    removeNode: function() {
        return removeNode;
    },
    removeNodes: function() {
        return removeNodes;
    },
    removeTokens: function() {
        return removeTokens;
    },
    replaceNode: function() {
        return replaceNode;
    },
    replaceNodes: function() {
        return replaceNodes;
    },
    replaceTokens: function() {
        return replaceTokens;
    },
    tokensFromNodeAndTokens: function() {
        return tokensFromNodeAndTokens;
    }
});
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function appendNode(appendedNode, parentNode) {
    var appendedChildNode = appendedNode; ///
    parentNode.appendChildNode(appendedChildNode);
}
function prependNode(prependedNode, parentNode) {
    var prependedChildNode = prependedNode; ///
    parentNode.prependChildNode(prependedChildNode);
}
function removeNode(removedNode, parentNode) {
    var removedChildNode = removedNode; ///
    parentNode.removeChildNode(removedChildNode);
}
function removeNodes(removedNodes, parentNode) {
    var removedChildNodes = removedNodes; ///
    parentNode.removeChildNodes(removedChildNodes);
}
function replaceNode(replacementNode, replacedNode, parentNode) {
    var replacedChildNode = replacedNode, replacementChildNode = replacementNode, replacementChildNodes = [
        replacementChildNode
    ];
    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);
}
function replaceNodes(replacementNodes, replacedNode, parentNode) {
    var replacedChildNode = replacedNode, replacementChildNodes = replacementNodes; ///
    parentNode.replaceChildNodes(replacedChildNode, replacementChildNodes);
}
function addNodeAfter(existingNode, addedNode, parentNode) {
    var childNode = existingNode, index = parentNode.indexOfChildNode(childNode), addedChildNode = addedNode, startIndex = index + 1;
    parentNode.addChildNode(addedChildNode, startIndex);
}
function addNodesAfter(existingNode, addedNodes, parentNode) {
    var childNode = existingNode, index = parentNode.indexOfChildNode(childNode), addedChildNodes = addedNodes, startIndex = index + 1;
    parentNode.addChildNodes(addedChildNodes, startIndex);
}
function appendTokens(appendedTokens, tokens) {
    var _tokens;
    var length = tokens.length, start = length, deleteCount = 0;
    (_tokens = tokens).splice.apply(_tokens, [
        start,
        deleteCount
    ].concat(_to_consumable_array(appendedTokens)));
}
function prependTokens(prependedTokens, parentNode, tokens) {
    var _tokens;
    var start = 0, deleteCount = 0;
    (_tokens = tokens).splice.apply(_tokens, [
        start,
        deleteCount
    ].concat(_to_consumable_array(prependedTokens)));
}
function removeTokens(removedNode, tokens) {
    var node = removedNode, firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens), lastSignificantTokenIndex = node.getLastSignificantTokenIndex(tokens), start = firstSignificantTokenIndex, end = lastSignificantTokenIndex + 1, deleteCount = end - start;
    tokens.splice(start, deleteCount);
}
function replaceTokens(replacementTokens, replacedNode, tokens) {
    var _tokens;
    var node = replacedNode, firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens), lastSignificantTokenIndex = node.getLastSignificantTokenIndex(tokens), start = firstSignificantTokenIndex, end = lastSignificantTokenIndex + 1, deleteCount = end - start;
    (_tokens = tokens).splice.apply(_tokens, [
        start,
        deleteCount
    ].concat(_to_consumable_array(replacementTokens)));
}
function addTokensAfter(existingNode, addedTokens, tokens) {
    var _tokens;
    var node = existingNode, lastSignificantTokenIndex = node.getLastSignificantTokenIndex(tokens), start = lastSignificantTokenIndex + 1, deleteCount = 0;
    (_tokens = tokens).splice.apply(_tokens, [
        start,
        deleteCount
    ].concat(_to_consumable_array(addedTokens)));
}
function tokensFromNodeAndTokens(node, tokens) {
    var firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens), lastSignificantTokenIndex = node.getLastSignificantTokenIndex(tokens), start = firstSignificantTokenIndex, end = lastSignificantTokenIndex + 1;
    tokens = tokens.slice(start, end); ///
    return tokens;
}
function overwriteClonedNodeTokens(clonedNode, clonedTokens, tokens) {
    var offset = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
    var node = clonedNode; ///
    overwriteNodeTokens(node, clonedTokens, tokens, offset);
}
function clonedTokensFromNodeAndTokens(node, tokens) {
    tokens = tokensFromNodeAndTokens(node, tokens);
    var clonedTokens = tokens.map(function(token) {
        var clonedToken = token.clone();
        return clonedToken;
    });
    return clonedTokens;
}
var _default = {
    appendNode: appendNode,
    prependNode: prependNode,
    removeNode: removeNode,
    removeNodes: removeNodes,
    replaceNode: replaceNode,
    replaceNodes: replaceNodes,
    addNodeAfter: addNodeAfter,
    addNodesAfter: addNodesAfter,
    appendTokens: appendTokens,
    prependTokens: prependTokens,
    removeTokens: removeTokens,
    replaceTokens: replaceTokens,
    addTokensAfter: addTokensAfter,
    tokensFromNodeAndTokens: tokensFromNodeAndTokens,
    overwriteClonedNodeTokens: overwriteClonedNodeTokens,
    clonedTokensFromNodeAndTokens: clonedTokensFromNodeAndTokens
};
function overwriteNodeTokens(node, clonedTokens, tokens, offset) {
    var nodeTerminalNode = node.isTerminalNode();
    if (nodeTerminalNode) {
        var terminalNode = node; ///
        overwriteTerminalNodeTokens(terminalNode, clonedTokens, tokens, offset);
    } else {
        var nonTerminalNode = node; ///
        overwriteNonTerminalNodeTokens(nonTerminalNode, clonedTokens, tokens, offset);
    }
}
function overwriteTerminalNodeTokens(terminalNode, clonedTokens, tokens, offset) {
    var index, significantToken;
    significantToken = terminalNode.getSignificantToken();
    if (significantToken !== null) {
        index = tokens.indexOf(significantToken);
        index -= offset;
        var clonedToken = clonedTokens[index];
        significantToken = clonedToken; ///
        terminalNode.setSignificantToken(significantToken);
    }
}
function overwriteNonTerminalNodeTokens(nonTerminalNode, clonedTokens, tokens, offset) {
    nonTerminalNode.forEachChildNode(function(childNode) {
        var clonedNode = childNode; ///
        overwriteNodeTokens(clonedNode, clonedTokens, tokens, offset);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kTm9kZShhcHBlbmRlZE5vZGUsIHBhcmVudE5vZGUpIHtcbiAgY29uc3QgYXBwZW5kZWRDaGlsZE5vZGUgPSBhcHBlbmRlZE5vZGU7ICAvLy9cblxuICBwYXJlbnROb2RlLmFwcGVuZENoaWxkTm9kZShhcHBlbmRlZENoaWxkTm9kZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwZW5kTm9kZShwcmVwZW5kZWROb2RlLCBwYXJlbnROb2RlKSB7XG4gIGNvbnN0IHByZXBlbmRlZENoaWxkTm9kZSA9IHByZXBlbmRlZE5vZGU7ICAvLy9cblxuICBwYXJlbnROb2RlLnByZXBlbmRDaGlsZE5vZGUocHJlcGVuZGVkQ2hpbGROb2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vZGUocmVtb3ZlZE5vZGUsIHBhcmVudE5vZGUpIHtcbiAgY29uc3QgcmVtb3ZlZENoaWxkTm9kZSA9IHJlbW92ZWROb2RlOyAvLy9cblxuICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkTm9kZShyZW1vdmVkQ2hpbGROb2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vZGVzKHJlbW92ZWROb2RlcywgcGFyZW50Tm9kZSkge1xuICBjb25zdCByZW1vdmVkQ2hpbGROb2RlcyA9IHJlbW92ZWROb2RlczsgLy8vXG5cbiAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZE5vZGVzKHJlbW92ZWRDaGlsZE5vZGVzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VOb2RlKHJlcGxhY2VtZW50Tm9kZSwgcmVwbGFjZWROb2RlLCBwYXJlbnROb2RlKSB7XG4gIGNvbnN0IHJlcGxhY2VkQ2hpbGROb2RlID0gcmVwbGFjZWROb2RlLCAgLy8vXG4gICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlID0gcmVwbGFjZW1lbnROb2RlLCAvLy9cbiAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGVzID0gW1xuICAgICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlXG4gICAgICAgIF07XG5cbiAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGROb2RlKHJlcGxhY2VkQ2hpbGROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZU5vZGVzKHJlcGxhY2VtZW50Tm9kZXMsIHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSkge1xuICBjb25zdCByZXBsYWNlZENoaWxkTm9kZSA9IHJlcGxhY2VkTm9kZSwgIC8vL1xuICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZXMgPSByZXBsYWNlbWVudE5vZGVzOyAvLy9cblxuICBwYXJlbnROb2RlLnJlcGxhY2VDaGlsZE5vZGVzKHJlcGxhY2VkQ2hpbGROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTm9kZUFmdGVyKGV4aXN0aW5nTm9kZSwgYWRkZWROb2RlLCBwYXJlbnROb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZSA9IGV4aXN0aW5nTm9kZSwgLy8vXG4gICAgICAgIGluZGV4ID0gcGFyZW50Tm9kZS5pbmRleE9mQ2hpbGROb2RlKGNoaWxkTm9kZSksXG4gICAgICAgIGFkZGVkQ2hpbGROb2RlID0gYWRkZWROb2RlLCAvLy9cbiAgICAgICAgc3RhcnRJbmRleCA9IGluZGV4ICsgMTtcblxuICBwYXJlbnROb2RlLmFkZENoaWxkTm9kZShhZGRlZENoaWxkTm9kZSwgc3RhcnRJbmRleCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGROb2Rlc0FmdGVyKGV4aXN0aW5nTm9kZSwgYWRkZWROb2RlcywgcGFyZW50Tm9kZSkge1xuICBjb25zdCBjaGlsZE5vZGUgPSBleGlzdGluZ05vZGUsIC8vL1xuICAgICAgICBpbmRleCA9IHBhcmVudE5vZGUuaW5kZXhPZkNoaWxkTm9kZShjaGlsZE5vZGUpLFxuICAgICAgICBhZGRlZENoaWxkTm9kZXMgPSBhZGRlZE5vZGVzLCAvLy9cbiAgICAgICAgc3RhcnRJbmRleCA9IGluZGV4ICsgMTtcblxuICBwYXJlbnROb2RlLmFkZENoaWxkTm9kZXMoYWRkZWRDaGlsZE5vZGVzLCBzdGFydEluZGV4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFRva2VucyhhcHBlbmRlZFRva2VucywgdG9rZW5zKSB7XG4gIGNvbnN0IGxlbmd0aCA9IHRva2Vucy5sZW5ndGgsXG4gICAgICAgIHN0YXJ0ID0gbGVuZ3RoLCAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSAwO1xuXG4gIHRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5hcHBlbmRlZFRva2Vucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwZW5kVG9rZW5zKHByZXBlbmRlZFRva2VucywgcGFyZW50Tm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSAwO1xuXG4gIHRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5wcmVwZW5kZWRUb2tlbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVG9rZW5zKHJlbW92ZWROb2RlLCB0b2tlbnMpIHtcbiAgY29uc3Qgbm9kZSA9IHJlbW92ZWROb2RlLCAgLy8vXG4gICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIHN0YXJ0ID0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgsIC8vL1xuICAgICAgICBlbmQgPSBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICsgMSxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBlbmQgLSBzdGFydDtcblxuICB0b2tlbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlVG9rZW5zKHJlcGxhY2VtZW50VG9rZW5zLCByZXBsYWNlZE5vZGUsIHRva2Vucykge1xuICBjb25zdCBub2RlID0gcmVwbGFjZWROb2RlLCAgLy8vXG4gICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIHN0YXJ0ID0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgsIC8vL1xuICAgICAgICBlbmQgPSBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICsgMSxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBlbmQgLSBzdGFydDtcblxuICB0b2tlbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4ucmVwbGFjZW1lbnRUb2tlbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9rZW5zQWZ0ZXIoZXhpc3RpbmdOb2RlLCBhZGRlZFRva2VucywgdG9rZW5zKSB7XG4gIGNvbnN0IG5vZGUgPSBleGlzdGluZ05vZGUsICAvLy9cbiAgICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBzdGFydCA9IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggKyAxLFxuICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgdG9rZW5zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLmFkZGVkVG9rZW5zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBjb25zdCBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBzdGFydCA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4LCAgLy8vXG4gICAgICAgIGVuZCA9IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggKyAxO1xuXG4gIHRva2VucyA9IHRva2Vucy5zbGljZShzdGFydCwgZW5kKTsgIC8vL1xuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvdmVyd3JpdGVDbG9uZWROb2RlVG9rZW5zKGNsb25lZE5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IG5vZGUgPSBjbG9uZWROb2RlOyAgLy8vXG5cbiAgb3ZlcndyaXRlTm9kZVRva2Vucyhub2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lZFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICB0b2tlbnMgPSB0b2tlbnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gIGNvbnN0IGNsb25lZFRva2VucyA9IHRva2Vucy5tYXAoKHRva2VuKSA9PiB7ICAvLy9cbiAgICBjb25zdCBjbG9uZWRUb2tlbiA9IHRva2VuLmNsb25lKCk7XG5cbiAgICByZXR1cm4gY2xvbmVkVG9rZW47XG4gIH0pO1xuXG4gIHJldHVybiBjbG9uZWRUb2tlbnM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYXBwZW5kTm9kZSxcbiAgcHJlcGVuZE5vZGUsXG4gIHJlbW92ZU5vZGUsXG4gIHJlbW92ZU5vZGVzLFxuICByZXBsYWNlTm9kZSxcbiAgcmVwbGFjZU5vZGVzLFxuICBhZGROb2RlQWZ0ZXIsXG4gIGFkZE5vZGVzQWZ0ZXIsXG4gIGFwcGVuZFRva2VucyxcbiAgcHJlcGVuZFRva2VucyxcbiAgcmVtb3ZlVG9rZW5zLFxuICByZXBsYWNlVG9rZW5zLFxuICBhZGRUb2tlbnNBZnRlcixcbiAgdG9rZW5zRnJvbU5vZGVBbmRUb2tlbnMsXG4gIG92ZXJ3cml0ZUNsb25lZE5vZGVUb2tlbnMsXG4gIGNsb25lZFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zXG59O1xuXG5mdW5jdGlvbiBvdmVyd3JpdGVOb2RlVG9rZW5zKG5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQpIHtcbiAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIG92ZXJ3cml0ZVRlcm1pbmFsTm9kZVRva2Vucyh0ZXJtaW5hbE5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIG92ZXJ3cml0ZU5vblRlcm1pbmFsTm9kZVRva2Vucyhub25UZXJtaW5hbE5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG92ZXJ3cml0ZVRlcm1pbmFsTm9kZVRva2Vucyh0ZXJtaW5hbE5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQpIHtcbiAgbGV0IGluZGV4LFxuICAgICAgc2lnbmlmaWNhbnRUb2tlbjtcblxuICBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKTtcblxuICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgIGluZGV4ID0gdG9rZW5zLmluZGV4T2Yoc2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICBpbmRleCAtPSBvZmZzZXQ7XG5cbiAgICBjb25zdCBjbG9uZWRUb2tlbiA9IGNsb25lZFRva2Vuc1tpbmRleF07XG5cbiAgICBzaWduaWZpY2FudFRva2VuID0gY2xvbmVkVG9rZW47ICAvLy9cblxuICAgIHRlcm1pbmFsTm9kZS5zZXRTaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICB9XG59XG5cbmZ1bmN0aW9uIG92ZXJ3cml0ZU5vblRlcm1pbmFsTm9kZVRva2Vucyhub25UZXJtaW5hbE5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQpIHtcbiAgbm9uVGVybWluYWxOb2RlLmZvckVhY2hDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNsb25lZE5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgb3ZlcndyaXRlTm9kZVRva2VucyhjbG9uZWROb2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiYWRkTm9kZUFmdGVyIiwiYWRkTm9kZXNBZnRlciIsImFkZFRva2Vuc0FmdGVyIiwiYXBwZW5kTm9kZSIsImFwcGVuZFRva2VucyIsImNsb25lZFRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zIiwib3ZlcndyaXRlQ2xvbmVkTm9kZVRva2VucyIsInByZXBlbmROb2RlIiwicHJlcGVuZFRva2VucyIsInJlbW92ZU5vZGUiLCJyZW1vdmVOb2RlcyIsInJlbW92ZVRva2VucyIsInJlcGxhY2VOb2RlIiwicmVwbGFjZU5vZGVzIiwicmVwbGFjZVRva2VucyIsInRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zIiwiYXBwZW5kZWROb2RlIiwicGFyZW50Tm9kZSIsImFwcGVuZGVkQ2hpbGROb2RlIiwiYXBwZW5kQ2hpbGROb2RlIiwicHJlcGVuZGVkTm9kZSIsInByZXBlbmRlZENoaWxkTm9kZSIsInByZXBlbmRDaGlsZE5vZGUiLCJyZW1vdmVkTm9kZSIsInJlbW92ZWRDaGlsZE5vZGUiLCJyZW1vdmVDaGlsZE5vZGUiLCJyZW1vdmVkTm9kZXMiLCJyZW1vdmVkQ2hpbGROb2RlcyIsInJlbW92ZUNoaWxkTm9kZXMiLCJyZXBsYWNlbWVudE5vZGUiLCJyZXBsYWNlZE5vZGUiLCJyZXBsYWNlZENoaWxkTm9kZSIsInJlcGxhY2VtZW50Q2hpbGROb2RlIiwicmVwbGFjZW1lbnRDaGlsZE5vZGVzIiwicmVwbGFjZUNoaWxkTm9kZSIsInJlcGxhY2VtZW50Tm9kZXMiLCJyZXBsYWNlQ2hpbGROb2RlcyIsImV4aXN0aW5nTm9kZSIsImFkZGVkTm9kZSIsImNoaWxkTm9kZSIsImluZGV4IiwiaW5kZXhPZkNoaWxkTm9kZSIsImFkZGVkQ2hpbGROb2RlIiwic3RhcnRJbmRleCIsImFkZENoaWxkTm9kZSIsImFkZGVkTm9kZXMiLCJhZGRlZENoaWxkTm9kZXMiLCJhZGRDaGlsZE5vZGVzIiwiYXBwZW5kZWRUb2tlbnMiLCJ0b2tlbnMiLCJsZW5ndGgiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwicHJlcGVuZGVkVG9rZW5zIiwibm9kZSIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImVuZCIsInJlcGxhY2VtZW50VG9rZW5zIiwiYWRkZWRUb2tlbnMiLCJzbGljZSIsImNsb25lZE5vZGUiLCJjbG9uZWRUb2tlbnMiLCJvZmZzZXQiLCJvdmVyd3JpdGVOb2RlVG9rZW5zIiwibWFwIiwidG9rZW4iLCJjbG9uZWRUb2tlbiIsImNsb25lIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwib3ZlcndyaXRlVGVybWluYWxOb2RlVG9rZW5zIiwibm9uVGVybWluYWxOb2RlIiwib3ZlcndyaXRlTm9uVGVybWluYWxOb2RlVG9rZW5zIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJpbmRleE9mIiwic2V0U2lnbmlmaWNhbnRUb2tlbiIsImZvckVhY2hDaGlsZE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQTJDZ0JBLFlBQVk7ZUFBWkE7O0lBU0FDLGFBQWE7ZUFBYkE7O0lBOENBQyxjQUFjO2VBQWRBOztJQWhHQUMsVUFBVTtlQUFWQTs7SUEyREFDLFlBQVk7ZUFBWkE7O0lBK0RBQyw2QkFBNkI7ZUFBN0JBOztJQVloQixPQWlCRTtlQWpCRjs7SUFsQmdCQyx5QkFBeUI7ZUFBekJBOztJQTlHQUMsV0FBVztlQUFYQTs7SUE2REFDLGFBQWE7ZUFBYkE7O0lBdkRBQyxVQUFVO2VBQVZBOztJQU1BQyxXQUFXO2VBQVhBOztJQXdEQUMsWUFBWTtlQUFaQTs7SUFsREFDLFdBQVc7ZUFBWEE7O0lBVUFDLFlBQVk7ZUFBWkE7O0lBbURBQyxhQUFhO2VBQWJBOztJQW9CQUMsdUJBQXVCO2VBQXZCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXpHVCxTQUFTWixXQUFXYSxZQUFZLEVBQUVDLFVBQVU7SUFDakQsSUFBTUMsb0JBQW9CRixjQUFlLEdBQUc7SUFFNUNDLFdBQVdFLGVBQWUsQ0FBQ0Q7QUFDN0I7QUFFTyxTQUFTWCxZQUFZYSxhQUFhLEVBQUVILFVBQVU7SUFDbkQsSUFBTUkscUJBQXFCRCxlQUFnQixHQUFHO0lBRTlDSCxXQUFXSyxnQkFBZ0IsQ0FBQ0Q7QUFDOUI7QUFFTyxTQUFTWixXQUFXYyxXQUFXLEVBQUVOLFVBQVU7SUFDaEQsSUFBTU8sbUJBQW1CRCxhQUFhLEdBQUc7SUFFekNOLFdBQVdRLGVBQWUsQ0FBQ0Q7QUFDN0I7QUFFTyxTQUFTZCxZQUFZZ0IsWUFBWSxFQUFFVCxVQUFVO0lBQ2xELElBQU1VLG9CQUFvQkQsY0FBYyxHQUFHO0lBRTNDVCxXQUFXVyxnQkFBZ0IsQ0FBQ0Q7QUFDOUI7QUFFTyxTQUFTZixZQUFZaUIsZUFBZSxFQUFFQyxZQUFZLEVBQUViLFVBQVU7SUFDbkUsSUFBTWMsb0JB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