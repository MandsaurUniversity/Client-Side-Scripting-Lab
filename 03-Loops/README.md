# Client-Side-Scripting-Lab

## Loops
Below mentioned are some of the programs which we will create in this class:

1. while loop
1. Break statement
1. Continue statement
1. do-while loop
1. Simple for loop
1. for loop with Array
2. Enhanced for loop
3. Loop through HTML Headers

## while loop
Task: 

Consider the HTML code below. Using while loop, print this:

> number = 1
>
> number = 2
> 
> number = 3
> 
> number = 4
> 
> number = 5

HTML code:

```HTML
<!DOCTYPE html>
<html>
    <body>

        <p id="data"></p>

        <script>
            var x = "", i = 0;

            // while loop code goes here...

            document.getElementById("data").innerHTML = x;
        </script>

    </body>
</html>
```

## Break statement
Task:

Consider below HTML code. on click of the button, the JavaScript code currently prints 10 lines (from 1 through 10). Using break statement, break the flow of for loop after third line.


```HTML
<!DOCTYPE html>
<html>
    <body>

        <p>Click the button to do a loop with a break.</p>
        <button onclick="myFunction()">Click me</button>
        <p id="data"></p>

        <script>
            function myFunction() {
                
                var x = "", i = 1;
                
                for (i = 1; i <= 10; i++) {
                    
                    // break statement logic shall go here...
                    
                    x = x + "number = " + i + "<br>";
                    
                }
                
                document.getElementById("data").innerHTML = x;
            }
        </script>

    </body>
</html>
```

## Continue statement
Task:

Consider below HTML code. on click of the button, the JavaScript code currently prints 10 lines (from 1 through 10). Click the button to do a loop which will skip the step where i = 3.

```HTML
<!DOCTYPE html>
<html>
    <body>

        <p>Click the button to do a loop which will skip the step where i = 3.</p>
        <button onclick="myFunction()">Click me</button>
        <p id="data"></p>

        <script>
            function myFunction() {
                
                var x = "", i = 1;
                
                for (i = 1; i <= 10; i++) {
                    
                    // continue statement logic shall go here...
                    
                    x = x + "number = " + i + "<br>";
                }
                
                document.getElementById("data").innerHTML = x;
            }
        </script>

    </body>
</html>
```

## do-while loop
Task:

Consider the HTML code given below. Using do...while loop, loop through a block of code as long as `i` is less than 5. Iterate the loop 5 times by incrementing the value of i by 1 in each iteration. 

```HTML
<!DOCTYPE html>
<html>
    <body>

        <p>
            Click the button to loop through a block of as long as <em>i</em> is less than 5.
        </p>
        <button onclick="myFunction()">Click me</button>
        <p id="data"></p>

        <script>
            function myFunction() {
                
                var x = "", i = 0;
                
                // do-while code shall go here...
                    
                document.getElementById("data").innerHTML = x;
            }
        </script>

    </body>
</html>
```

## Simple for loop
Task:

Using `for` loop, iterate a line of code 5 times and output should be as below:

> number = 0
> 
> number = 1
>
> number = 2
> 
> number = 3
> 
> number = 4

HTML code:

```HTML
<!DOCTYPE html>
<html>
    <body>

        <p id="data"></p>

        <script>
            var x = "";
            
            // for loop code goes here...
            
            document.getElementById("data").innerHTML = x;
        </script>

    </body>
</html>
```

## for loop with Array
Task:

Consider the HTML and JavaScript code mentioned below. There is a `fruits` array created which have some items in it. Iterate through the length of this whole array, print all of the items in it, one line at a time.

Note:

User `document.write()` to print the items and you can use `array.length` property to find the length of array

```HTML
<!DOCTYPE html>
<html>
    <body>

        <script>
            fruits = [ "Apple", "Mango", "Banana", "Grapes" ];
            
            // for loop code goes here...

        </script>

    </body>
</html>
```

## Enhanced for loop (for-in loop)
Task:

Given below is an HTML code having some inline JavaScript. The JS code contains an object named `person` which has some key-value pairs. Using for-in loop, print all the values of `person` object.

```HTML
<!DOCTYPE html>
<html>
    <body>

        <p id="data"></p>

        <script>
            var txt = "";
            var person = {
                fname : "Virat",
                lname : "Kohli",
                age : 20
            };

            // for-in loop goes here...

            document.getElementById("data").innerHTML = txt;
        </script>
    </body>
</html>
```

## Loop through HTML Headers
Task:

Click the button to loop from 1 to 6, to make HTML headings.
> Example: 
> 
> <h1> Heading 1</h1>
>
> <h2> Heading 2</h2>
>
> <h3> Heading 3</h3>
>
> <h4> Heading 4</h4>
>
> <h5> Heading 5</h5>
>
> <h6> Heading 6</h6>

HTML code:

```HTML
<!DOCTYPE html>
<html>
    <body>

        <p>Click the button to loop from 1 to 6, to make HTML headings.</p>
        <button onclick="myFunction()">Click me</button>
        <div id="data"></div>

        <script>
            function myFunction() {
                
                var x = "", i;
                
                // loop logic goes here...
                
                document.getElementById("data").innerHTML = x;
            }
        </script>

    </body>
</html>
```
