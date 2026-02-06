# Occam DOM

[Occam](https://github.com/djalbat/occam)'s DOM related functionality.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Example](#example)
- [Usage](#usage)
- [Building](#building)
- [Contact](#contact)

## Introduction

Specifically, "outer" token arrays and parse trees result from the use of Occam's [lexers](https://github.com/djalbat/occam-lexers) and [parsers](https://github.com/djalbat/occam-parsers), respectively.
These can be distilled into "inner" token arrays and parse trees for a variety of tasks. 

An example is helpful. 
Consider the following outer parse tree that results from parsing some simple Markdown.

```
                                                  |                                                   
                                           markdown [0-2]                                             
                                                  |                                                   
                                           division [0-2]                                             
                                                  |                                                   
                ---------------------------------------------------------------------                 
                |                                |                                  |                 
        subDivision.. [0]               verticalSpace [0-1]                 subDivision.. [2]         
                |                                |                                  |                 
       primaryHeading [0]                 ---------------                     paragraph [2]           
                |                         |             |                           |                 
       -------------------          <END_OF_LINE> <END_OF_LINE>                 line [2]              
       |                 |                                                          |                 
"#"[hashes] [0]      line [0]                                             ---------------------       
                         |                                                |                   |       
                  plainText. [0]                                   plainText. [2]      plainText. [2] 
                         |                                                |                   |       
                "Heading"[word] [0]                             "Paragraph"[word] [2] "."[special] [2]
```

This contains far more information than is needed to render the Markdown as HTML. 
The following inner parse tree will in fact suffice:

```
                                                |                 
                                            division              
                                                |                 
                                       ------------------         
                                       |                |         
                                primaryHeading      paragraph     
                                       |                |         
                                     line             line        
                                       |                |         
                                   plainText       -----------    
                                                   |         |    
                                               plainText plainText
```

Locating the outer nodes that contribute to this inner parse tree is straightforward enough using Occam's [queries](https://github.com/djalbat/occam-query). 
However, the arrays of nodes that result are not in the above form. 
This package provides the means to form such parse trees.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-dom

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/occam-dom.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

You can also run a development server, see the section on building later on.

## Example

There is a small development server that can be run from within the project's directory with the following command:

    npm start

The example will then be available at the following URL:

http://localhost:8888

The source for the example can be found in the `src/example.js` file and corresponding `src/example` folder. 
You are encouraged to try the example whilst reading what follows. 
You can rebuild it on the fly with the following command:

    npm run watch-debug

The development server will reload the page whenever you make changes.

One last thing to bear in mind is that this package is included by way of a relative rather than a package import. 
If you are importing it into your own application, however, you should use the standard package import.

## Usage

Suppose that a Markdown document is being processed by way of [Highmark](https://github.com/djalbat/highmark-markdown)'s lexer and parser:

```
const markdownLexer = MarkdownLexer.fromNothing(),
      markdownParser = MarkdownParser.fromNothing();
      
...

const content = markdown, ///
      tokens = markdownLexer.tokenise(content),
      node = markdownParser.parse(tokens);

...
```

A number of arrays of nodes can be created from the "outer" document node using queries:

```
export function nodesFromNodeAndQueries(node, queries, nodes = []) {
  queries.forEach((query) => {
    const queryNodes = query.execute(node);

    push(nodes, queryNodes);
  });

  return nodes;
}
```

These can then be formed into an "inner" node tree using the `topmostNodeFromOuterNodes()` function:

```
import { nodeUtilities } from "occam-dom";

const { topmostNodeFromOuterNodes } = nodeUtilities;

import ClassFromOuterNode from "./classFromOuterNode";

...

const outerNodes = nodes,   ///
      topmostNode = topmostNodeFromOuterNodes(ClassFromOuterNode, outerNode);
      
...
```

The first argument is a callback that maps outer node classes to inner node ones:

```
import htmlNodeMap from "../map/node/html";
import TopmostHTMLNOde from "../node/html/topmost";

function ClassFromOuterNode(outerNode) {
  let Class;

  if (outerNode === null) {
    Class = TopmostHTMLNode;  ///
  } else {
    const nonTerminalNode = outerNode,  ///
          ruleName = nonTerminalNode.getRuleName();

    Class = htmlNodeMap[ruleName] || HTMLNode;
  }

  return Class;
}
```

Note that the topmost inner node has no corresponding outer node and that a default of `HTMLNode` has been provided. 
There is no need to provide a unique class for every type of outer node that the algorithm may come across, by the way. 

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@djalbat.com

