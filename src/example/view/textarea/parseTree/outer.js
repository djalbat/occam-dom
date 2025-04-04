"use strict";

import ParseTreeTextarea from "../../textarea/parseTree";

export default class OuterParseTreeTextarea extends ParseTreeTextarea {
  parentContext() {
    const setOuterParseTree = this.setParseTree.bind(this); ///

    return ({
      setOuterParseTree
    });
  }

  static defaultProperties = {
    className: "outer"
  };
}
