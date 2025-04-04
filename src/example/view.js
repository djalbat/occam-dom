"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { nodeUtilities } from "../index" ///
import { CSSLexer, CSSParser } from "with-style";
import { RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv } from "easy-layout";

import SubHeading from "./view/subHeading";
import SizeableDiv from "./view/div/sizeable";
import ContentTextarea from "./view/textarea/content";
import MaximumDepthInput from "./view/input/maximumDepth";
import OuterNodesTextarea from "./view/textarea/outerNodes";
import ExpressionsTextarea from "./view/textarea/expressions";
import OuterParseTreeTextarea from "./view/textarea/parseTree/outer";
import InnerParseTreeTextarea from "./view/textarea/parseTree/inner";

import { queryByExpressions } from "./utilities/query";

const { topmostNodeFromOuterNodes: topmostInnerNodeFromOuterNodes } = nodeUtilities;

const cssLexer = CSSLexer.fromNothing(),
      cssParser = CSSParser.fromNothing();

class View extends Element {
  keyUpHandler = (event, element) => {
    const content = this.getContent(),
          tokens = cssLexer.tokenise(content),
          node = cssParser.parse(tokens);

    if (node === null) {
      return;
    }

    const outerNode = node, ///
          expressions = this.getExpressions(),
          maximumDepth = this.getMaximumDepth(),
          outerNodes = queryByExpressions(outerNode, expressions, maximumDepth),
          topmostInnerNode = topmostInnerNodeFromOuterNodes(outerNodes),
          innerNode = topmostInnerNode, ///
          outerParseTree = outerNode.asParseTree(tokens),
          innerParseTree = innerNode.asParseTree(tokens);

    this.setOuterNodes(outerNodes, tokens); ///

    this.setOuterParseTree(outerParseTree);

    this.setInnerParseTree(innerParseTree);
  }

  childElements() {
    return ([

      <ColumnsDiv>
        <SizeableDiv>
          <RowsDiv>
            <SubHeading>
              Content
            </SubHeading>
            <ContentTextarea onKeyUp={this.keyUpHandler} />
            <SubHeading>
              Expressions
            </SubHeading>
            <ExpressionsTextarea onKeyUp={this.keyUpHandler} />
            <SubHeading>
              Maximum depth
            </SubHeading>
            <MaximumDepthInput onKeyUp={this.keyUpHandler} />
            <SubHeading>
              Outer nodes
            </SubHeading>
            <OuterNodesTextarea/>
          </RowsDiv>
        </SizeableDiv>
        <VerticalSplitterDiv />
        <ColumnDiv>
          <RowsDiv>
            <SubHeading>
              Outer parse tree
            </SubHeading>
            <OuterParseTreeTextarea/>
            <SubHeading>
              Inner parse tree
            </SubHeading>
            <InnerParseTreeTextarea/>
          </RowsDiv>
        </ColumnDiv>
      </ColumnsDiv>

    ]);
  }

  initialise() {
    this.assignContext();

    const { initialContent, initialExpressions, initialMaximumDepth } = this.constructor,
          content = initialContent,  ///
          maximumDepth = initialMaximumDepth,  ///
          expressions = initialExpressions;  ///

    this.setContent(content);

    this.setMaximumDepth(maximumDepth);

    this.setExpressions(expressions);

    this.keyUpHandler();  ///
  }

  static initialContent = `.view {
  background: red;
}
`;

  static initialExpressions = [
    "//term",
    "//ruleSet",
    "//selectors",
    "//propertyName",
    "//@identifier"
  ];

  static initialMaximumDepth = 5;

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  padding: 1rem;
  
`;
