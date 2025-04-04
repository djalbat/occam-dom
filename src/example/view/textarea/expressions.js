"use strict";

import Textarea from "../textarea";

import { SPACE } from "../../constants";

export default class ExpressionsTextarea extends Textarea {
  getExpressions() {
    const value = this.getValue(),
          expressionString = value, ///
          expressions = JSON.parse(expressionString); ///

    return expressions;
  }

  setExpressions(expressions) {
    const space = SPACE,
          replacer = null,
          expressionsString = JSON.stringify(expressions, replacer, space),
          value = expressionsString;  ///

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
