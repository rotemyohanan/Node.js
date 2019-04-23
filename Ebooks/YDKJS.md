
### Closures and scopes


Despite the fact that Java‐
Script falls under the general category of “dynamic” or “interpreted”
languages, it is in fact a compiled language

### Tokenizing/Lexing
Breaking up a string of characters into meaningful (to the lan‐
guage) chunks, called tokens. 

### Parsing
taking a stream (array) of tokens and turning it into a tree of nested
elements, which collectively represent the grammatical structure
of the program. This tree is called an “AST” (abstract syntax tree).

### Code-Generation
The process of taking an AST and turning it into executable code

#### Engine
Responsible for start-to-finish compilation and **execution** of our
JavaScript program.
#### Compiler
One of Engine’s friends; handles all the dirty work of parsing and
code-generation (see previous section).

#### Scope
Another friend of Engine; collects and maintains a look-up list of
all the declared identifiers (variables), and enforces a strict set of
rules as to how these are accessible to currently executing code.
