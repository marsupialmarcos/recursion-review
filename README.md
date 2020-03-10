### recursion-review
This is a project I completed as a student at [hackreactor](http://hackreactor.com). This project was worked on with a pair.

# RECURSION REVIEW

Recursion is a technique for solving problems wherein a function makes calls to itself. By doing so, it can complete a small amount of the processing, and delegate the rest of the problem to the recursive calls.

Consider the following function:

```javascript
var eat = function(meal){
  console.log('meal before bite:', meal);
  console.log('now eating', meal.pop());
  if(meal.length){
    eat(meal);
  } else {
    console.log('done with the meal!');
  }
}
```
Which produces this output:

```javascript
eat(['soup', 'potatoes', 'fish']);
// => meal before bite: ["soup", "potatoes", "fish"]
// => now eating fish
// => meal before bite: ["soup", "potatoes"]
// => now eating potatoes
// => meal before bite: ["soup"]
// => now eating soup
// => done with the meal!
```

You can use recursion on problems where smaller parts of the problem look the same as the larger problem as a whole.

In this sprint, you'll be reimplementing parts of the browser that involve recursion. In so doing, don't use the things you're reimplementing, or any other built-in shortcuts that make these problems trivial. (You'll probably know if you're cheating, but feel free to ask us if you're not sure.)

(Curious fact: many browsers don't have any of these functions in them, and people do need to reimplement them. When we reimplement new browser functionality in older browsers, it's called a "polyfill".)

# Review Sprint Repo

The repo you will be working out of will be a different repo from Precourse. Look on Github for recursion-review instead of recursion. Work on this from scratch and do not reference code from Precourse.

#### Pomander

To ensure your work is of the highest quality, we've created Pomander, a tool that checks your code for syntax errors and violations against the style guide before each commit.

Install it by navigating to this repository in Terminal and running the following command:

```javascript
curl -s https://raw.githubusercontent.com/reactorcore/pomander/master/bin/install | bash
```

Pomander uses a pre-commit hook to run staged files through eslint before each commit. eslint is a linter that will block your commit should you have any syntax errors, or, should you violate the Hack Reactor style guide. There are some preferred whitespace style rules that will give warnings but not block your commit. If the linter gives you any funny bugs, these bugs are not intentional, and you should feel free to skip using it during commits with the --no-verify option.

#### BROKEN TESTS

To help you familiarize yourself with our favorite testing tools, Mocha and Chai, we've broken the test suite.

Mocha is a test framework that provides the structure for test files, and is responsible for running tests and reporting their results. Mocha provides the it and describe global variables along with useful hooks like beforeEach.

Chai is an assertion library that makes your tests more expressive and your error messages more helpful. Chai provides the expect function and various methods that allow you to express your behavior in a human readable way.

Pay careful attention to the test files and fix them as necessary. Do not to refer back to the previous test suite, you would only be cheating yourself out of an important learning opportunity. Instead, use the Mocha and Chai documentation. You can do it!

# BARE MINIMUM REQUIREMENTS
* Replace stringifyJSON with your own function in src/stringifyJSON.js, and make the specs pass, fixing them as necessary.
* Implement getElementsByClassName with your own function in src/getElementsByClassName.js, and make the specs pass, fixing them as necessary.
  * You should use document.body, element.childNodes, and element.classList

# ADVANCED CONTENT
Our advanced content is intended to throw you in over your head, requiring you to solve problems with very little support or oversight, much like you would as a mid or senior level engineer. The following problem is no exception, and you may have to do a fair amount of work to get enough context to get started on the problem itself.

* Complete the New for the Review Sprint content above.
* Replace parseJSON with your own function in src/parseJSON.js, and make the specs pass, fixing them as necessary.
  * Use a recursive descent parser.
  
Resources:

  * One of Hack Reactor's amazing graduates, Ron Fenolio, wrote a fabulous [blog post](https://medium.com/@Mordoc/a-recursive-descent-parser-for-json-a6d68ab938ac) after wrestling with this very prompt
  * Note: This is a lot of work, and you should expect (and look forward) to bumping up against several conceptual hurdles

# Nightmare Mode
Using Test Driven Development and recursion, build a web crawler. It should:

* Accept a URL to begin its crawl
* Recursively follow links
* Output the URL of crawled pages
* Accept an optional configuration object as an argument that will effect the default behavior of the crawler. Consider configuring:
  * The ability to use getElementsByClassName on any of the pages you visit
  * The ability to output other kinds of information about the page such as number of script tags, distinct attributes, links to external sites, etc.
  * The option to crawl breadth first instead of depth first
  * Limit the depth or breadth of the crawl
  * Set a revisit or politeness policy
  * Refactor the crawler to use web workers
