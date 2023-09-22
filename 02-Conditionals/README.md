# Client-Side-Scripting-Lab

## Conditional
Below mentioned are some of the programs which we will create in this class:

1. If Example
1. If Else - Example
1. Switch Statement

## If Example
Task:

On the click of the button, the paragraphe with id = `message` should get a "Have a nice day" greeting if the time is less than 21:00.
If the time is greater than 21:00 the greeting will not be displayed.

```HTML
<!DOCTYPE html>
<html>
    <body>

        <p>
            Click the button to get a "Have a nice day" greeting if the time is
            less than 21:00. 
            <br /> 
            If the time is greater than 21:00 the greeting
            will not be displayed.
        </p>

        <button onclick="myFunction()">Click me</button>

        <p id="message"></p>

        <script>
            function myFunction() {
                
                var x = "";
                
                var time = new Date().getHours();
                
                // your code goes here...
                
                document.getElementById("message").innerHTML = x;
            }
        </script>

    </body>
</html>
```

## If Else - Example
Task:

If time is less than 16 the paragraphe with id = `message` will show "Have a nice day", else it should show "Good night".

```HTML
<!DOCTYPE html>
<html>
    <body>

        <p>
            If time is less than 16 it will show "Have a nice day". 
            <br /> 
            else it will show "Good night".
        </p>

        <button onclick="myFunction()">Click me</button>

        <p id="message"></p>

        <script>
            function myFunction() {
                
                var x = "";
                var time = new Date().getHours();
                
                // your code goes here...
                
                document.getElementById("message").innerHTML = x;
            }
        </script>

    </body>
</html>
```

## Switch Statement
Task:

On the click of button, paragraph having id = `message` should display what day it is today.

```HTML
<!DOCTYPE html>
<html>
    <body>

        <p>Click the button to display what day it is today.</p>

        <button onclick="myFunction()">Click me</button>

        <p id="message"></p>

        <script>
            function myFunction() {
                
                var x;
                var d = new Date().getDay();
                
                // your code goes here...
                
                document.getElementById("message").innerHTML = x;
            }
        </script>

    </body>
</html>
```
