"use strict";

import withStyle from "easy-with-style";  ///

import Textarea from "../textarea";

class ParseTreeTextarea extends Textarea {
  setParseTree(parseTree) {
    if (parseTree !== null) {
      parseTree.shiftLine();  //

      const parseTreeString = parseTree.asString(),
            value = parseTreeString;  ///

      this.setValue(value);
    } else {
      this.clearParseTree();
    }
  }

  clearParseTree() {
    const value = "";

    this.setValue(value);
  }

  parentContext() {
    const setParseTree = this.setParseTree.bind(this),
          clearParseTree = this.clearParseTree.bind(this);

    return ({
      setParseTree,
      clearParseTree
    });
  }

  static defaultProperties = {
    className: "tokens",
    spellCheck: "false",
    readOnly: true
  };
}

export default withStyle(ParseTreeTextarea)`
  
  height: 32rem;
  
`;