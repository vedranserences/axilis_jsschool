# JavaScript Basics

### ASSIGNMENT 1 
  1. Define function `numReverse`
+ Function takes number as argument and returns its mirror value (as a number)
+ example: `numReverse(1234) == 4321`
  2.  Define function `fact`
+ Function takes number as argument and returns its factoriel value

### ASSIGNMENT 2
  1. Define function `cloneArray`
+ Function takes array as argument and returns its copy
+ If arguments isn't an array throw an error
  2. Define function `sortArray`
+ Function takes array and compare function as arguments and returnes new array sorted by passed compare function
+ Use any sort algorithm (Used bubble sort)
+ Usage of method `sort` IS prohibited
+ Don't change initial (passed array) -> use function from TASK 1
  3. Define function `removeSmallest`
+ Function removes smallest value from passed array without chaning the order of others elements in it

### ASSIGNMENT 3
  1. Define function `printObject`
+ Function takes any object as argument and prints all of its elements using for loop
  2. Create JS implementation of object Person
+ *Constructor*: name, surname, date of birth
+ method *`getName`*: returns persons name + surname
+ method *`getAge`*: return persons age
+ 

### ASSIGNMENT 4
Use this html code to complete the task:
``` html
<html>
    <body>
        <input id="first" type="text" />
        <input id="second" type="text" />
        <input id="addButton" type="button" value="+" />
        <input id="subtractButton" type="button" value="-" />

        <div id="result"></div>
    </body>
</html>
```

Task:
On button click (+/-) take value from first and second input boxes, do corresponding operation and save result back to `div` with `id = result`
