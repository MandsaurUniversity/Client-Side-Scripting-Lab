# Client-Side-Scripting-Lab

## Basic
Below mentioned are some of the programs which you need to create:

1. Hello World
1. Writing some HTML to the Document
1. Using a Variable
1. Change HTML Elements
1. Calling a Function

## Hello World
Use JavaScript to print a sentence "Hello World" on a web page.
Use the code template mentioned below:

```HTML
<html>

    <body>

        <script>  

            // your code goes here...

        </script>

    </body>

</html>
```

## Writing some HTML to the Document
Usign JavaScript, add `<p>This is a paragraph</p>` HTML code to the browser window.

Hint: You can use document.write() function to achieve this.

```HTML
<!DOCTYPE html>
<html>
    <body>

        <h1>JavaScript Example</h1>

        <script>

            // your code goes here...
            
        </script>

    </body>
</html>
```

## Using a Variable
We can also create variables inside the `<script>` tag and use them to show some output the the browser window. Conside the HTML code below and follow the instructions given in the comments portion.

```HTML
<!DOCTYPE html>
<html>
    <body>

        <script>
        
            // Create a variable named firstName and assign it a value (your first name)
            // here...

            // use document.write method to print this variable on screen
            // here...
            
            document.write("<br>");
            
            var lastName = "Sharma";

            // change the value of variable 'lastNeame' and replace it with your last name
            // here...

            document.write(lastName);
            
        </script>

    </body>
</html>
```

## Change HTML Elements
Notes:
> The `getElementById()` is a JavaScript function that lets you grab an HTML element, by its id and perform an action on it. The name of the id is passed as a parameter and ​the corresponding element is the return value.

> The `innerHTML` property sets or returns the HTML content (inner HTML) of an element.

Given below is an HTML code inside which, you can see a paragraph with `id="p1"`. Using the method mentioned above, change its content to: "Content is changed."

```HTML
<!DOCTYPE html>
<html>
    <body>

        <h1>Change HTML using JavaScript</h1>

        <p id="p1">This is a paragraph.</p>

        <script>
            // your code goes here...
        </script>

    </body>
</html>
```

## Calling a function
Consider the code mentioned below. Write a function named `myFunction()` and call it on the click of button to change the values of `para1` and `div1` to "Hello!" and "Good Morning!"

```HTML
<!DOCTYPE html>
<html>
    <body>

        <h1>Calling a function</h1>

        <p id="para1">This is a paragraph.</p>
        <div id="div1">This is a div.</div>

        <p>
            <button type="button">Change</button>
        </p>

        <script>

            // your code goes here...

        </script>

        <p>When you click on "Change", the two elements will change.</p>

    </body>
</html>
```
