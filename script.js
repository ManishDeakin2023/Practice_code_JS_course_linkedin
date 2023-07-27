var date = new Date()
document.body.innerHTML = "<h1> Today is:-" + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + "</h1>" 

var a = 10;
var b = 10;
var yup = true;
var nope = false;

if (a == b)
{
    console.log(yup);
    
}
else
    {
        console.log(nope);
}
    
//arrays in JS
// var pen;
// pen = ["manish", 'pratik', 'pratiksha', 'dipti'];
// console.log(pen[2]);

// dish = new Array('rice', 'dal', 'sandiwch');
// console.log(dish[1]);

// var arr1 = new Array("cat", 'bat', 'mat');
// console.log(arr1)
// console.log(arr1.reverse());

// function findFract(a,b)
// {
//     a > b ? console.log("a:", a) : console.log("b:", b);
// }
// first = 4 / 7;
// second = 6 / 9;
// findFract(first, second);

// function findfract(a, b)
// {
//     var result;
//     a > b ? result = ["first fraction", a] : result = ["second fraction", b];
//     return result;

// }
// first = 6 / 4;
// second = 7 / 10;
// resultfract = findfract(first, second);
// console.log(findfract(first, second));
// console.log("THE BIGGEST FRACTION IS:", resultfract[0], "AND ITS VALUE IS:", resultfract[1]);

// anonymus function

// var a = 56 / 88;
// var b = 34 / 44;

// var biggestFract = function ()
// {
//     var result;
//     a > b ? result = ["a:", a] : result = ["b:", b];
//     console.log(result);
// }
// biggestFract();

//immediately invoked function 
var biggestFract = (function () {
    var result;
    a > b ? result = ["a:", a] : result = ["b:", b];
    console.log(result);
})(45/55,67/76);
console.log(biggestFract);