<h1>Beyond The Blocks</h1>
<h2>Custom Reporter Blocks</h2>
<h3>Create Functions That Return Values to MakeCode</h3>
<h3>by David Sparks</h3>
<p>Originated September 2019</p>
<p>This article will explain how to add custom blocks that execute a function and return a value to a MakeCode project. </p>
<p>Functions that return values become "reporter" blocks in MakeCode. They are shaped to fit the openings in the puzzle-piece blocks. You can use them like variable names. It will be easiest to introduce reporter blocks with the example in Figure 1.</p>
<h5><img alt="Figure 1"  src="https://raw.githubusercontent.com/IowaDave/pxt-reporter-blocks/gh-pages/images/Figure%201.png">
<br>Figure 1<br>
A custom reporter block</h5>

<p>How did we get this custom block? By writing specially-formatted code.</p>
<p>I made some assumptions about the knowledge level and the goals of people most likely to read this article. I imagine you:</p>
<ul>
<li>have created some functions using the standard blocks in MakeCode.</li>
<li>are willing and able to look things up in references and to learn by trial and error.</li>
<li>are familiar with writing code as text and with using functions in a programming language.</li>
<li>wonder where the "return" statement is because you would like to write a MakeCode function that will return a value.</li>
</ul>
<p>Readers having some experience with coding may get the most value from this article. However, every reader is welcome and I hope this article will at least help you see that MakeCode can take you far beyond the standard blocks.</p>
<p>The topic of Functions is far too large to teach or to explain in a short article like this. The W3Schools web site offers a good introduction at the following link: <a href="https://www.w3schools.com/js/js_functions.asp">JavaScript Functions</a>.</p>
<p>The introductory articles in this series illustrated in detail the steps to create custom blocks using the MakeCode editor. Please refer to the articles listed below if you have a question about the steps. "Top Ten Tricks" also lists the references that I go to often when I need to look something up.</p>
<ul>
<li><a href="https://iowadave.github.io/Custom-Blocks-Top-Ten-Tricks/">Top Ten Secret Tricks: How to Create Custom Blocks in MakeCode</a></li>
<li><a href="https://iowadave.github.io/pxt-constants/">Custom Constant Blocks for MakeCode: An Illustrated Tutorial</a></li>
</ul>
<p>Open the custom.ts file in a new project. Quick reminder &mdash; click links in the MakeCode editor in the sequence listed below to open the custom.ts file in a new project.</p>
<ol>
    <li>JavaScript button</li>
    <li>Explorer button</li>
    <li>plus sign ("+")</li>
    <li>"Go ahead!" button</li>
</ol>

<p>Replace the default code in custom.ts with the listing in Exhibit 1, below. The syntax is important and this example will be discussed in detail later in the article. For now, it might be best simply to copy the code and paste it into the file, replacing what was there.</p>
<h5>Exhibit 1
<br>Code for a custom reporter block</h5>

<pre><code>/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon="\uf0c3"
namespace custom {
    /**
     * convert a temperature 
     * given in degrees Celsius (°C)
     * into its equivalent 
     * in degrees Farhenheit (°F)
     */
    //% block="fahrenheit|%celsius"
    export function fahrenheit(celsius: number): number {
        return (celsius * 1.8) + 32;
    }
}</code></pre>

<p>Click the Blocks button to compile the code. Then refresh the browser to activate the new block. It will be in the "Custom" group that appears in the main blocks list. Use the block to convert negative 13.3333 degrees (below zero) Celsius into its equivalent: 8 degrees (above zero) Fahrenheit. (Figure 2)</p>
<h5><img alt="Figure 2" width="540" height="156" src="https://raw.githubusercontent.com/IowaDave/pxt-reporter-blocks/gh-pages/images/Figure%202.png">
<br>Figure 2<br>
Showing the Custom group and the fahrenheit reporter block being used.</h5>

<p>Reporter blocks are oval-shaped for numbers and strings. For bookean values they are six-sided with pointed ends, like the true and false blocks in the Logic group. </p>
<p>Their shape gives a clue how to use them. They fit into openings in the stackable blocks that look like puzzle pieces. </p>
<p>MakeCode responds to the values returned by reporter blocks as if it were reading the value of a variable.</p>
<p><hr>
<h4>Exercise #1</h4>
<pre>Look through the standard blocks. 
Count the reporter blocks you find. 
Each one has code similar to Exhibit 1.
Now you have seen how create your own.</pre>
<hr></p>
<h3>The Syntax of a Reporter Block</h3>

<p>Every line of code listed in Exhibit 1 can teach something about writing custom reporter blocks.</p>
<h4>The Comments</h4>

<p>MakeCode examines the contents of comments. Sometimes it uses information from the comments when it builds a custom block from your code. </p>
<p>This feature of the MakeCode editor is important to understand for writing custom blocks. We will explain in the sections that follow.</p>
<p>It remains a good coding practice to include regular comments in your code.</p>
<h5>A quick review of JavaScript comment syntax</h5>

<p>Regular comments provide helpful documentation for humans to read but generally do not participate in the execution of your code at run-time.</p>
<p>JavaScript offers two ways to encode comments.</p>
<ul>
    <li>Multi-line comments begin with the character pair, <code>/*</code> and end with the mirror-image pair, <code>*/</code>. All the lines between these two pairs will be included in the comment. As a visual clue to humans reading the code, it is helpful to place an asterisk at the start of the lines in-between, and to align the initial asterisks vertically. The following segment from Exhibit 1 is a multi-line comment.
    <pre><code>/**
 * Custom blocks
 */</code></pre></li>
    <li>A single-line comment can be wrapped with the multi-line pairs, <code>/* like this */</code>, or it can begin with a pair of slant characters, <code>// like this</code>.</li>
</ul>

<h4>The Custom Group Metacode</h4>

<p>MakeCode extends the idea of the single-line comment by adding a <code>%</code> character to define a special kind of comment, called metacode. These special comments give instructions for how to prepare your code.</p>
<p>The distinction between regular comments and metacode comments deserves some emphasis.</p>
<ul>
    <li>Regular comments have no effect on how your code, neither how it compiles nor how it runs.</li>
    <li>Metacode comments convey actual instructions to MakeCode. They affect how your code compiles, but not how it runs.</li>
</ul>

<p>Metacode comments begin with <code>//%</code>, followed by definitions. A definition is a name=value pair.</p>
<p>The Custom group metacode precedes the namespace (discussed next) and tells MakeCode how to set up the Custom group.</p>
<pre><code>//% weight=100 color=#0fbc11 icon="\uf0c3"</code></pre>

<p>A metacode comment line can contain more than one instruction. This example has three:</p>
<ul>
    <li><code>weight=100</code> affects where the Custom group will be placed in the list of available groups of blocks.</li>
    <li><code>color=#0fbc11</code> specifies the color, in rgb format, of the Custom group and any blocks it will contain.</li>
    <li><code>icon="\uf0c3"</code> specifies the flask-shaped icon associated with the Custom group.</li>
</ul>

<h4>The Namespace</h4>

<p>Custom blocks must be coded inside a JavaScript namespace. The following lines selected from Exhibit 1 declare and enclose the namespace. </p>
<p>Notice the curly brackets that must be present both before and after the actual custom block code.</p>
<pre><code>namespace custom {

    // your code goes here
    // between the curly brackets

}</code></pre>

<h4>The Pre-Block Comment</h4>

<p>Make a habit of providing a pre-block comment for each of your custom blocks. The format resembles a JavaScript multi-line comment, with some special detail.</p>
<p>The first line will have a slant followed by two asterisks: <code>/**</code>.</p>
<p>Lines that begin with an asterisk followed by plain text will become the "help" text for your custom block. You can see this illustrated in Figure 1, above. </p>
<p>Use tabs and space characters to line up the asterisks carefully. Follow the pattern presented in the listing below, and in Exhibit 1.</p>
<p>The final line will have an asterisk followed by a slant:<code>*/</code></p>
<p>Here is the complete listing for the pre-block comment of the fahrenheit block:</p>
<pre><code>    /**
     * convert a temperature 
     * given in degrees Celsius (°C)
     * into its equivalent 
     * in degrees Farhenheit (°F)
     */</code></pre>

<h4>The Essential <code>//% block</code> Metacode</h4>

<p>The official documentation for custom blocks states, "Any exported JavaScript function can be turned into a block by simply adding a //% block comment."</p>
<p>In other words, you must precede the code for your block with this metacode: </p>
<pre><code>//% block</code></pre>

<p>It tells MakeCode to prepare the code that follows as a block.</p>
<p>The <code>//% block</code> metacode is an exception to the usual name=value format for other metacodes. <code>//% block</code> does not require a value. </p>
<p>If no value is supplied, MakeCode will by default use the name of the function as the name of the custom block. However, if you want to include a parameter in the block then you need to supply a formatting string as the value for the <code>//% block</code> metacode. The string determines the visual presentation of the custom block.</p>
<p>The fahrenheit block in our example incorporates a parameter. It must tell MakeCode where to place the parameter in the block. The fahrenheit block's formatting string places the parameter at the end:</p>
<pre><code>    //% block="fahrenheit|%celsius"</code></pre>

<p>The formatting string specifies:</p>
<ul>
    <li>the name of the block, "fahrenheit"</li>
    <li>a vertical bar, indicating where to place a space character</li>
    <li>a <code>%</code> character, indicating where to place a parameter</li>
    <li>the name of the parameter to include in the block (leaving no space between the % character and the parameter name)</li>
</ul>

<p>Parameters can be placed between words in a //%&nbsp;block formatting string. An example of this will be provided later in the article.</p>
<h4>Declare and Export the Function</h4>

<p>As stated by the documentation quoted above, your function must be exported to become a custom block. What does it mean?</p>
<p>Simply place the keyword, <code>export</code>, at the start of the line that declares the function.</p>
<pre><code>    <b>export</b> function fahrenheit(celsius: number): number {
</code></pre>

<p>There is a lot going on in this declaration:</p>
<ul>
    <li>The function receives a name. JavaScript will access it by the declared name, not by the name given in the <code>//% block</code> comment.<br><br>The two names can be different, though in this example I chose to keep them the same.<br></li>
    <li>The parameter is declared to be a specific type: number. This is different from JavaScript, which allows values to be of any type.<br><br>MakeCode is based on Static TypeScript, an enhanced version of JavaScript that does restrict values to having only one type.<br><br>Declaring the celsius parameter to be of type: number, means that it will only accept numbers as arguments.<br></li>
    <li>The function, also, is declared to be of type: number. The type declaration of a function comes after the closing parenthesis <code>)</code> of the parameter list, and goes before the opening <code>{</code> curly bracket of the function's code body<br><br>Giving the function a type is a key part of turning it into a reporter block. It promises MakeCode that the value returned (that is, reported) by the function will be of that type.<br><br>For example, the fahrenheit funtion must ensure that it returns a number.<br></li>
    <li>Finally, it should go without saying, the declaration provides the opening curly bracket that precedes the actual function code.<br><br>This bracket must be matched by a closing bracket at the end of the function.</li>
</ul>

<h4>The <code>return</code> Statement</h4>

<p>A reporter block must include a <code>return</code> statement. In this example, it is the only line of code in the function. The statement performs the conversion calculation and returns the result.</p>
<pre><code>        return (celsius * 1.8) + 32;
</code></pre>

<h4>Semicolons!</h4>

<p>The code you write for custom blocks must conform to JavaScript syntax. This means that semicolons are <em>required</em> at the ends of statements. </p>
<p>This behavior is more strict compared to the way MakeCode deals with the JavaScript for the main code of the editor, where semicolons are optional.</p>
<p>A bit of deliberate trial and error with semicolons will help you come to grips with the nature of coding custom blocks.</p>
<h3>Frequently-asked Questions</h3>

<h4>What types of values can be returned by a reporter block?</h4>

<p>Custom blocks like our fahrenheit example can return any one of the so-called primitive types: numbers, strings, and boolean (true/false) values. </p>
<p>Simply declare the function to be of the corresponding type.</p>
<p>More advanced types of JavaScript values can be returned also, including arrays and objects. These types are outside the scope of this article. I intend to cover them elsewhere in this series.</p>
<h4>What else can I do with custom reporter blocks?</h4>

<p>Functions can do many things. Study examples provided in the documentation. Use your imagination. Try things; find out what works. A partial list might include:</p>
<ul>
    <li>Return a constant value. See the examples in another article of this series: <a href="https://iowadave.github.io/pxt-constants/">Custom Constant Blocks</a><br></li>
    <li>Expose a JavaScript function that got left out of the standard blocks. For example:<pre><code>//% block="log10|%arg"
    export function log10(arg: number): number {
        // report the base-10 logarithm of arg
        return Math.log(10) * Math.LOG10E;
    }</code></pre></li>
    <li>Perform a calculation based on a parameter and return its result. For example, the following code creates a block that takes a number of dice as a parameter and returns the sum of rolling that number of six-sided dice by simulation.<br><br>Notice that the formatting string places the count parameter between the words. Also, there is a new metacode in this example: <code>//%&nbsp;count.defl=2</code>. It establishes a default value for the count parameter. (Figure 3)<pre><code>    /**
     * simulate rolling a given number of
     * six-sided dice and return the total
     */
    //% block="roll|%count|dice"
    //% count.defl=2
    export function rollDice(count: number): number {
        // initialize total
        let total = 0;
        // simulate rolling some dice
        for (let x = 0; x &lt; count; x++) {
            total += Math.randomRange(1,6);
        }
        return total;
    }</code></pre></li>
    <li>Obtain and process a value from a sensor attached to the micro:bit. For example, modify the fahrenheit block so that the code inside the function obtains the value of the micro:bit's temperature sensor and converts it to fahrenheit.<br><br>The block would not need a parameter because it directly fetches the value it needs. Hint: the JavaScript function you will need, "temperature", is located in the input group of built-in blocks.<br><br>I leave it as an exercise for the reader.<br></li>
    <li>I intend to build a collection of reporter-block examples in <a href="https://github.com/iowadave/pxt-reporter-blocks/">the companion repository for this article</a>, located in the IowaDave area of GitHub.</li>
</ul>
/!-- width="540" height="185" -->
<h5><img alt="Figure 3" src="https://raw.githubusercontent.com/IowaDave/pxt-reporter-blocks/gh-pages/images/Figure%203.png">
<br>Figure 3<br>
Showing the rollDice custom block in use with a result in the micro:bit display</h5>

<h4>Where can I learn more about defining functions and parameters for reporter blocks?</h4>

<p>There are many metacode instructions for custom blocks. Extensive information, with examples, is provided at the following link: <a href="https://makecode.com/defining-blocks">https://makecode.com/defining-blocks</a>. </p>
<p>The author especially appreciates all of the "playground" examples this resource provides. Very, very helpful.</p>

