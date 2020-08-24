//number,string, boolean
var name = "ramona";
var age = 34;
var isWomen = true;
//operatori
//sum
console.log(10 + 2)
console.log(10 * 2)
console.log(10 / 2)
console.log(10 % 2)//modul
//operatori string
console.log("test1" + "buzz")
console.log("test1" / "buzz")
console.log(10 == 10)
console.log(10 != 10)

var result = 11 + 24 + 56 + 100
console.log(result)

//object and array
//array

//object
var person = {
    name: name,
    age: "34",
    isWomen: true,
}
console.log(person)

//lista cumparaturi

var produs1 = {
    pret: 5,
    cantitate: 1,
    nume: "Faina"
}
var produs2 = {
    pret: 3,
    cantitate: 3,
    nume: "ciocolata"
}
var produs3 = {
    pret: 2,
    cantitate: 14,
    nume: "bere"
}
var produs4 = {
    pret: 13,
    cantitate: 2,
    nume: "piept de pui"
}
var produs5 = {
    pret: 4,
    cantitate: 5,
    nume: "apa"
}
var list = [produs1, produs2, produs3, produs4, produs5]
console.log(list)

// sa calculam totalul la fiecare produs
//suma totala
//cel mai scump produs
//sa le sortam dupa pret
var sumaTotala = 0;
for (var index = 0; index < list.length; index++) {
    var produs = list[index];
    var totalPerProdus = produs.pret * produs.cantitate;
    sumaTotala = sumaTotala + totalPerProdus;
}
console.log(sumaTotala)

//control
const isMen = true;
if (0 > 1 && 10 > 100 || !isMen) {
    console.log("nu intra in if")
} else {
    console.log("nu este adevarata conditia")
}
//switch
//while
/*var number=100;
while(number>1){
    if(number%2==0){
        console.log(number+"este par")
        number=number-1;
    }
    console.log(number)
}*/         //loop infinit

//for
//
/*var x = 2;
console.log(x);
x = 5;
console.log(x);

var firstName = "Chuck";
var lastName = "Norris";
var fullName = firstName + ' ' + lastName;
console.log(fullName)

var mix = [1, 'two', ['apple', 'orange']];
console.log(mix[2]);

var x = 10;
if (x > 0) {
 console.log('it is a positive number');
}
//
var weather= "cloudy";
switch (weather) {
    case 'rainy':
    console.log("Bring an umbrella.");
    break;
    case 'sunny':
    console.log("Dress lightly.");
    break;
    case 'cloudy':
    console.log("Go outside.");
    break;
    case '':
    console.log("Unknown weather type!");
    break;
   }

   var x = 0;
do {
 console.log(x);
 x++;
} while (x < 10 && x%2==1)

for (var i = 0; i < 10; i++) {
    console.log(i%3);
   }
   

   function numberGenerator() {
    // Local “free” variable that ends up within the closure
    var num = 1;
    function checkNumber() { 
      console.log(num);
    }
    num++;
    return checkNumber;
  }
  
  var number = numberGenerator();
  number(); // 2


  function whatDoesItDo() {

    return document.querySelectorAll('*').length;
  
  }
*//*
function whatDoesItDo(val) {

   return val ? 1:2;

}*/
/*function whatDoesItDo(color) {

    if (color !== 'blue' || color !== 'green') {
      color = 'red';
  
    }
  
    return color;
  
  }*/

  var scope = "global scope";
function checkscope() {
  var scope = "local scope"; 
  function f() 
  { 
     return scope; 
  }
  return f();
}