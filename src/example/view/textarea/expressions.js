"use strict";

import withStyle from "easy-with-style";  ///

import Textarea from "../textarea";

class ExpressionsTextarea extends Textarea {
  getExpressions() {
    const value = this.getValue(),
          expressionString = value, ///
          expressions = JSON.parse(expressionString); ///

    return expressions;
  }

  setExpressions(expressions) {
    const json = expressions, ///
          jsonString = JSON.stringify(json, null, 2),
          value = jsonString;  ///

    this.setValue(value);
  }

  parentContext() {
    const getExpressions = this.getExpressions.bind(this),
          setExpressions = this.setExpressions.bind(this); ///;

    return ({
      getExpressions,
      setExpressions
    });
  }

  static defaultProperties = {
    className: "expressions",
    spellCheck: "false"
  };
}

export default withStyle(ExpressionsTextarea)`
  
  height: 18rem;
  
`;
