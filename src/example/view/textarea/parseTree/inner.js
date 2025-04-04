"use strict";

import ParseTreeTextarea from "../../textarea/parseTree";

export default class InnerParseTreeTextarea extends ParseTreeTextarea {
  setParseTree(parseTree) {
    parseTree.shiftLine();  //
    parseTree.shiftLine();  //

    super.setParseTree(parseTree);
  }

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
