"use strict";

import { arrayUtilities } from "necessary";
import { queryUtilities } from "occam-query";

const { push } = arrayUtilities,
      { queryByExpressionString } = queryUtilities;

export function queryByExpressions(node, expressions) {
  const nodes = expressions.reduce((nodes, expression) => {
    const expressionString = expression,  ///
          expressionNodes = queryByExpressionString(node, expressionString);

    push(nodes, expressionNodes);

    return nodes;
  }, []);

  return nodes;
}

