'use strict'

//ZADATAK 1
function numReverse(num) {
    var reverseNum = parseInt(num.toString().split('').reverse().join(''));
    return reverseNum;
}

function fact(x) {
    if (x < 0) {
        return NaN;
    }
    if (x == 0 || x == 1) {
        return 1;
    }
    return fact(x - 1) * x;
}

// ZADATAK 2
function cloneArray(array) {
    if (!(array instanceof Array)) {
        throw "Not array";
    }
    var newArray = [];
    for (var index in array) {
        newArray.push(array[index]);
    }
    return newArray;
}


function sortArray(x, y) {
    var newArray = cloneArray(x)
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < newArray.length - 1; i++) {
            if (y(newArray[i], newArray[i + 1]) > 0) {
                var temp = newArray[i];
                newArray[i] = newArray[i + 1];
                newArray[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return newArray;
}


function removeSmallest(array) {
    var newArray = cloneArray(array);
    var index = 0;
    var value = array[0];
    for (var i = 1; i < newArray.length; i++) {
        if (newArray[i] < value) {
            value = newArray[i];
            index = i;
        }
    }
    newArray.splice(index, 1);
    return newArray;
}


// ZADATAK 3
function printObject(obj) {
    for (var index in obj) {
        console.log(obj[index]);
    }
}

var Person = function(ime, prezime, datum) {
    this.ime = ime;
    this.prezime = prezime;
    this.datum = datum;
}

Person.prototype.getName = function() {
    return this.ime;
}

Person.prototype.getAge = function() {
    var d = new Date;
    return Math.floor((d - this.datum) / (365 * 24 * 3600 * 1000));
}

var ivan = new Person("Ivan", "Horvat", new Date(91, 9, 15));

// ZADATAK 4
var addBtn = document.getElementById("addButton");
addBtn.addEventListener("click", function() {
    var numbers = getValues();
    var flag = checkValues(numbers);
    if(flag == true && isNumber(numbers)){
      numbers = toNumber(numbers);
    }
    printResult(numbers[0]+numbers[1]);
});

var subBtn = document.getElementById("subtractButton");
subBtn.addEventListener("click", function() {
    var numbers = getValues();
    var flag = checkValues(numbers);
    if(flag == true && isNumber(numbers)){
      numbers = toNumber(numbers);
      printResult(numbers[0]-numbers[1]);
    }
    else {
      printResult("");
      alert("Only numbers can be substracted");
    }
});


function getValues() {
    return [document.getElementById("first").value, document.getElementById("second").value];
}

function checkValues(x) {
    if (x[0].length == 0 || x[1].length == 0) {
        alert("Fill both inputs");
    }
    else {
      return true;
    }
}

function printResult(x) {
    if (!(x === undefined)) {
        document.getElementById("result").innerHTML = x;
    }
}

function isNumber(x) {
    if (!isNaN(x[0]) && !isNaN(x[1])) {
        return true;
    } else {
        return false;
    }
}

function toNumber(x) {
    var num1 = parseInt(x[0]);
    var num2 = parseInt(x[1]);
    return [num1, num2];
}
