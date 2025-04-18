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
function appendTokens(appendedTokens, parentNode, tokens) {
    var _tokens;
    var node = parentNode, lastSignificantTokenIndex = node.getLastSignificantTokenIndex(tokens), start = lastSignificantTokenIndex + 1, deleteCount = 0;
    (_tokens = tokens).splice.apply(_tokens, [
        start,
        deleteCount
    ].concat(_to_consumable_array(appendedTokens)));
}
function prependTokens(prependedTokens, parentNode, tokens) {
    var _tokens;
    var node = parentNode, firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens), start = firstSignificantTokenIndex, deleteCount = 0;
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
function overwriteClonedNodeTokens(clonedNode, clonedTokens, tokens) {
    var offset = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
    var node = clonedNode; ///
    overwriteNodeTokens(node, clonedTokens, tokens, offset);
}
function clonedTokensFromNodeAndTokens(node, tokens) {
    var firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens), lastSignificantTokenIndex = node.getLastSignificantTokenIndex(tokens), start = firstSignificantTokenIndex, end = lastSignificantTokenIndex + 1;
    tokens = tokens.slice(start, end); ///
    var clonedTokens = tokens.map(function(token) {
        var clonedToken = token.clone();
        return clonedToken;
    });
    return clonedTokens;
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kTm9kZShhcHBlbmRlZE5vZGUsIHBhcmVudE5vZGUpIHtcbiAgY29uc3QgYXBwZW5kZWRDaGlsZE5vZGUgPSBhcHBlbmRlZE5vZGU7ICAvLy9cblxuICBwYXJlbnROb2RlLmFwcGVuZENoaWxkTm9kZShhcHBlbmRlZENoaWxkTm9kZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwZW5kTm9kZShwcmVwZW5kZWROb2RlLCBwYXJlbnROb2RlKSB7XG4gIGNvbnN0IHByZXBlbmRlZENoaWxkTm9kZSA9IHByZXBlbmRlZE5vZGU7ICAvLy9cblxuICBwYXJlbnROb2RlLnByZXBlbmRDaGlsZE5vZGUocHJlcGVuZGVkQ2hpbGROb2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vZGUocmVtb3ZlZE5vZGUsIHBhcmVudE5vZGUpIHtcbiAgY29uc3QgcmVtb3ZlZENoaWxkTm9kZSA9IHJlbW92ZWROb2RlOyAvLy9cblxuICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkTm9kZShyZW1vdmVkQ2hpbGROb2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vZGVzKHJlbW92ZWROb2RlcywgcGFyZW50Tm9kZSkge1xuICBjb25zdCByZW1vdmVkQ2hpbGROb2RlcyA9IHJlbW92ZWROb2RlczsgLy8vXG5cbiAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZE5vZGVzKHJlbW92ZWRDaGlsZE5vZGVzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VOb2RlKHJlcGxhY2VtZW50Tm9kZSwgcmVwbGFjZWROb2RlLCBwYXJlbnROb2RlKSB7XG4gIGNvbnN0IHJlcGxhY2VkQ2hpbGROb2RlID0gcmVwbGFjZWROb2RlLCAgLy8vXG4gICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlID0gcmVwbGFjZW1lbnROb2RlLCAvLy9cbiAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGVzID0gW1xuICAgICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlXG4gICAgICAgIF07XG5cbiAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGROb2RlKHJlcGxhY2VkQ2hpbGROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZU5vZGVzKHJlcGxhY2VtZW50Tm9kZXMsIHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSkge1xuICBjb25zdCByZXBsYWNlZENoaWxkTm9kZSA9IHJlcGxhY2VkTm9kZSwgIC8vL1xuICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZXMgPSByZXBsYWNlbWVudE5vZGVzOyAvLy9cblxuICBwYXJlbnROb2RlLnJlcGxhY2VDaGlsZE5vZGVzKHJlcGxhY2VkQ2hpbGROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTm9kZUFmdGVyKGV4aXN0aW5nTm9kZSwgYWRkZWROb2RlLCBwYXJlbnROb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZSA9IGV4aXN0aW5nTm9kZSwgLy8vXG4gICAgICAgIGluZGV4ID0gcGFyZW50Tm9kZS5pbmRleE9mQ2hpbGROb2RlKGNoaWxkTm9kZSksXG4gICAgICAgIGFkZGVkQ2hpbGROb2RlID0gYWRkZWROb2RlLCAvLy9cbiAgICAgICAgc3RhcnRJbmRleCA9IGluZGV4ICsgMTtcblxuICBwYXJlbnROb2RlLmFkZENoaWxkTm9kZShhZGRlZENoaWxkTm9kZSwgc3RhcnRJbmRleCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGROb2Rlc0FmdGVyKGV4aXN0aW5nTm9kZSwgYWRkZWROb2RlcywgcGFyZW50Tm9kZSkge1xuICBjb25zdCBjaGlsZE5vZGUgPSBleGlzdGluZ05vZGUsIC8vL1xuICAgICAgICBpbmRleCA9IHBhcmVudE5vZGUuaW5kZXhPZkNoaWxkTm9kZShjaGlsZE5vZGUpLFxuICAgICAgICBhZGRlZENoaWxkTm9kZXMgPSBhZGRlZE5vZGVzLCAvLy9cbiAgICAgICAgc3RhcnRJbmRleCA9IGluZGV4ICsgMTtcblxuICBwYXJlbnROb2RlLmFkZENoaWxkTm9kZXMoYWRkZWRDaGlsZE5vZGVzLCBzdGFydEluZGV4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFRva2VucyhhcHBlbmRlZFRva2VucywgcGFyZW50Tm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IG5vZGUgPSBwYXJlbnROb2RlLCAvLy9cbiAgICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBzdGFydCA9IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggKyAxLFxuICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgdG9rZW5zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLmFwcGVuZGVkVG9rZW5zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBlbmRUb2tlbnMocHJlcGVuZGVkVG9rZW5zLCBwYXJlbnROb2RlLCB0b2tlbnMpIHtcbiAgY29uc3Qgbm9kZSA9IHBhcmVudE5vZGUsIC8vL1xuICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgc3RhcnQgPSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSAwO1xuXG4gIHRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5wcmVwZW5kZWRUb2tlbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVG9rZW5zKHJlbW92ZWROb2RlLCB0b2tlbnMpIHtcbiAgY29uc3Qgbm9kZSA9IHJlbW92ZWROb2RlLCAgLy8vXG4gICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIHN0YXJ0ID0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgsIC8vL1xuICAgICAgICBlbmQgPSBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICsgMSxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBlbmQgLSBzdGFydDtcblxuICB0b2tlbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlVG9rZW5zKHJlcGxhY2VtZW50VG9rZW5zLCByZXBsYWNlZE5vZGUsIHRva2Vucykge1xuICBjb25zdCBub2RlID0gcmVwbGFjZWROb2RlLCAgLy8vXG4gICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIHN0YXJ0ID0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgsIC8vL1xuICAgICAgICBlbmQgPSBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICsgMSxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBlbmQgLSBzdGFydDtcblxuICB0b2tlbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4ucmVwbGFjZW1lbnRUb2tlbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9rZW5zQWZ0ZXIoZXhpc3RpbmdOb2RlLCBhZGRlZFRva2VucywgdG9rZW5zKSB7XG4gIGNvbnN0IG5vZGUgPSBleGlzdGluZ05vZGUsICAvLy9cbiAgICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBzdGFydCA9IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggKyAxLFxuICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgdG9rZW5zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLmFkZGVkVG9rZW5zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG92ZXJ3cml0ZUNsb25lZE5vZGVUb2tlbnMoY2xvbmVkTm9kZSwgY2xvbmVkVG9rZW5zLCB0b2tlbnMsIG9mZnNldCA9IDApIHtcbiAgY29uc3Qgbm9kZSA9IGNsb25lZE5vZGU7ICAvLy9cblxuICBvdmVyd3JpdGVOb2RlVG9rZW5zKG5vZGUsIGNsb25lZFRva2VucywgdG9rZW5zLCBvZmZzZXQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVkVG9rZW5zRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIHN0YXJ0ID0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgsICAvLy9cbiAgICAgICAgZW5kID0gbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCArIDE7XG5cbiAgdG9rZW5zID0gdG9rZW5zLnNsaWNlKHN0YXJ0LCBlbmQpOyAgLy8vXG5cbiAgY29uc3QgY2xvbmVkVG9rZW5zID0gdG9rZW5zLm1hcCgodG9rZW4pID0+IHsgIC8vL1xuICAgIGNvbnN0IGNsb25lZFRva2VuID0gdG9rZW4uY2xvbmUoKTtcblxuICAgIHJldHVybiBjbG9uZWRUb2tlbjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNsb25lZFRva2Vucztcbn1cblxuZnVuY3Rpb24gb3ZlcndyaXRlTm9kZVRva2Vucyhub2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KSB7XG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICBvdmVyd3JpdGVUZXJtaW5hbE5vZGVUb2tlbnModGVybWluYWxOb2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICBvdmVyd3JpdGVOb25UZXJtaW5hbE5vZGVUb2tlbnMobm9uVGVybWluYWxOb2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvdmVyd3JpdGVUZXJtaW5hbE5vZGVUb2tlbnModGVybWluYWxOb2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KSB7XG4gIGxldCBpbmRleCxcbiAgICAgIHNpZ25pZmljYW50VG9rZW47XG5cbiAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICBpbmRleCA9IHRva2Vucy5pbmRleE9mKHNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgaW5kZXggLT0gb2Zmc2V0O1xuXG4gICAgY29uc3QgY2xvbmVkVG9rZW4gPSBjbG9uZWRUb2tlbnNbaW5kZXhdO1xuXG4gICAgc2lnbmlmaWNhbnRUb2tlbiA9IGNsb25lZFRva2VuOyAgLy8vXG5cbiAgICB0ZXJtaW5hbE5vZGUuc2V0U2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvdmVyd3JpdGVOb25UZXJtaW5hbE5vZGVUb2tlbnMobm9uVGVybWluYWxOb2RlLCBjbG9uZWRUb2tlbnMsIHRva2Vucywgb2Zmc2V0KSB7XG4gIG5vblRlcm1pbmFsTm9kZS5mb3JFYWNoQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjbG9uZWROb2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgIG92ZXJ3cml0ZU5vZGVUb2tlbnMoY2xvbmVkTm9kZSwgY2xvbmVkVG9rZW5zLCB0b2tlbnMsIG9mZnNldCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImFkZE5vZGVBZnRlciIsImFkZE5vZGVzQWZ0ZXIiLCJhZGRUb2tlbnNBZnRlciIsImFwcGVuZE5vZGUiLCJhcHBlbmRUb2tlbnMiLCJjbG9uZWRUb2tlbnNGcm9tTm9kZUFuZFRva2VucyIsIm92ZXJ3cml0ZUNsb25lZE5vZGVUb2tlbnMiLCJwcmVwZW5kTm9kZSIsInByZXBlbmRUb2tlbnMiLCJyZW1vdmVOb2RlIiwicmVtb3ZlTm9kZXMiLCJyZW1vdmVUb2tlbnMiLCJyZXBsYWNlTm9kZSIsInJlcGxhY2VOb2RlcyIsInJlcGxhY2VUb2tlbnMiLCJhcHBlbmRlZE5vZGUiLCJwYXJlbnROb2RlIiwiYXBwZW5kZWRDaGlsZE5vZGUiLCJhcHBlbmRDaGlsZE5vZGUiLCJwcmVwZW5kZWROb2RlIiwicHJlcGVuZGVkQ2hpbGROb2RlIiwicHJlcGVuZENoaWxkTm9kZSIsInJlbW92ZWROb2RlIiwicmVtb3ZlZENoaWxkTm9kZSIsInJlbW92ZUNoaWxkTm9kZSIsInJlbW92ZWROb2RlcyIsInJlbW92ZWRDaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGROb2RlcyIsInJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VkTm9kZSIsInJlcGxhY2VkQ2hpbGROb2RlIiwicmVwbGFjZW1lbnRDaGlsZE5vZGUiLCJyZXBsYWNlbWVudENoaWxkTm9kZXMiLCJyZXBsYWNlQ2hpbGROb2RlIiwicmVwbGFjZW1lbnROb2RlcyIsInJlcGxhY2VDaGlsZE5vZGVzIiwiZXhpc3RpbmdOb2RlIiwiYWRkZWROb2RlIiwiY2hpbGROb2RlIiwiaW5kZXgiLCJpbmRleE9mQ2hpbGROb2RlIiwiYWRkZWRDaGlsZE5vZGUiLCJzdGFydEluZGV4IiwiYWRkQ2hpbGROb2RlIiwiYWRkZWROb2RlcyIsImFkZGVkQ2hpbGROb2RlcyIsImFkZENoaWxkTm9kZXMiLCJhcHBlbmRlZFRva2VucyIsInRva2VucyIsIm5vZGUiLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJwcmVwZW5kZWRUb2tlbnMiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZW5kIiwicmVwbGFjZW1lbnRUb2tlbnMiLCJhZGRlZFRva2VucyIsImNsb25lZE5vZGUiLCJjbG9uZWRUb2tlbnMiLCJvZmZzZXQiLCJvdmVyd3JpdGVOb2RlVG9rZW5zIiwic2xpY2UiLCJtYXAiLCJ0b2tlbiIsImNsb25lZFRva2VuIiwiY2xvbmUiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJvdmVyd3JpdGVUZXJtaW5hbE5vZGVUb2tlbnMiLCJub25UZXJtaW5hbE5vZGUiLCJvdmVyd3JpdGVOb25UZXJtaW5hbE5vZGVUb2tlbnMiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsImluZGV4T2YiLCJzZXRTaWduaWZpY2FudFRva2VuIiwiZm9yRWFjaENoaWxkTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBMkNnQkEsWUFBWTtlQUFaQTs7SUFTQUMsYUFBYTtlQUFiQTs7SUFpREFDLGNBQWM7ZUFBZEE7O0lBbkdBQyxVQUFVO2VBQVZBOztJQTJEQUMsWUFBWTtlQUFaQTs7SUF1REFDLDZCQUE2QjtlQUE3QkE7O0lBTkFDLHlCQUF5QjtlQUF6QkE7O0lBdEdBQyxXQUFX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