"use strict";

import { nodeUtilities } from "../../index" ///
import { arrayUtilities } from "necessary";
import { queryUtilities } from "occam-query";

const { push } = arrayUtilities,
      { isLessThan } = nodeUtilities,
      { queryByExpressionString } = queryUtilities;

export function queryByExpressions(node, expressions, maximumDepth) {
  const nodes = expressions.reduce((nodes, expression) => {
    const expressionString = expression,  ///
          expressionNodes = queryByExpressionString(node, expressionString, maximumDepth);

    push(nodes, expressionNodes);

    return nodes;
  }, []);

  nodes.sort((nodeA, nodeB) => {
    const nodeALessThanNodeB = isLessThan(nodeA, nodeB),
          result = nodeALessThanNodeB ?
                    -1 :
                      +1;

    return result;
  });

  return nodes;
}

