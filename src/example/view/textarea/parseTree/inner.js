"use strict";

import ParseTreeTextarea from "../../textarea/parseTree";

export default class InnerParseTreeTextarea extends ParseTreeTextarea {
  parentContext() {
    const setInnerParseTree = this.setParseTree.bind(this); ///

    return ({
      setInnerParseTree
    });
  }

  static defaultProperties = {
    className: "inner"
  };
}
