# Occam DOM

[Occam](https://github.com/djalbat/occam)'s DOM related functionality.

Specifically, "outer" token arrays and node trees resulting from the user of Occam's [lexers](https://github.com/djalbat/occam-lexers) and [parsers](https://github.com/djalbat/occam-parsers), respectively, can be refined into "inner" token arrays and node trees for convenience. 

An example is helpful. Consider the following outer node tree that results from parsing some simple Markdown.

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

This contains far more information than is needed to render the markdown as HTML. The following inner node tree will in fact suffice:

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

Locating the outer nodes that contribute to this inner node tree is straightforward enough using Occam's [queries](https://github.com/djalbat/occam-query). However the arrays of nodes that result are not in the above form. This package provides the means to form such node trees by way of a simple utility function.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Example](#example)
- [Usage](#usage)
- [Building](#building)
- [Contact](#contact)

## Introduction

...

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

The source for the example can be found in the `src/example.js` file and corresponding `src/example` folder. You are encouraged to try the example whilst reading what follows. You can rebuild it on the fly with the following command:

    npm run watch-debug

The development server will reload the page whenever you make changes.

One last thing to bear in mind is that this package is included by way of a relative rather than a package import. If you are importing it into your own application, however, you should use the standard package import.

## Usage

...

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@djalbat.com

