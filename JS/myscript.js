/*alert("Hola Mundo");*/
//console.log("chavaleria");
/*
var table ="Normal Table";
let chair="One chair";
console.log(table);
console.log(chair);

let testBoolean=true;
console.log(testBoolean);

let testNumber=10;
console.log(testNumber);

let testString='text';
console.log(testString);

let testBooleanObject=new Boolean(true);
console.log(testBooleanObject);

let testNumberObject=new Number(10);
console.log(testNumberObject);
//Concatenar variables
/*
let name="John";
let surname="Doe";
let question="How are you "+name+" "+surname+"?";
console.log(question);

let name ="John";
let surname ="Doe";
let age = 23;
let question =`How old is ${name} ${surname}?`;
let answer ="He is "+age+" years old";
console.log(question);
console.log(answer);

let name ="John";
let surname="Doe";
let question ="How are you ".concat(name)+" ".concat(surname)+"?";
console.log(question);


let operator_a =12;
let operator_b=6;
let sum=operator_a + operator_b;
let rest=operator_a - operator_b;
let mult=operator_a * operator_b;
let division=operator_a / operator_b;
console.log(sum);
console.log(rest);
console.log(mult);
console.log(division);

let operator_c=3;
let operator_d=3;
let expo = operator_c ** operator_d;
let incr=++operator_c;
let decr=--operator_c;
console.log(expo);
console.log(incr);
console.log(decr);
//Asignar Operador

let x=5;
let y=6;
console.log(x+=5);
console.log(x-=5);
console.log(x*=3);

let testBoolean=true;
let testNumber=12;
let testString= "Hello";
let testBooleanObject=new Boolean(true);
console.log(typeof(testBoolean));
console.log(typeof(testNumber));
console.log(typeof(testString));
console.log(typeof(testBooleanObject));

let testNull = null;
console.log(typeof(testNull));

let testUndefined;
console.log(testUndefined);

var first_array=[];
var second_array =new Array(3);
var third_array =new Array(3,5);
var fourth_array =new Array(3,5,"Seville",true,third_array);
console.log(first_array);
console.log(second_array);
console.log(third_array);
console.log(fourth_array);

console.log(third_array[1]);
console.log(fourth_array[4][0]);
console.log(fourth_array.length);

console.log(fourth_array.push("Spain"));
fourth_array.push("Spain");
console.log(fourth_array);

fourth_array.unshift(1);
console.log(fourth_array);

//For

for(var i=0;i<fourth_array.length; i++){
    console.log("Entramos en la iteracion de "+fourth_array[i]);
}

for(var i=fourth_array.length;i>=0;i--){
    console.log
}

fourth_array.forEach(function(element){
    console.log("Fourth iteration "+element);
});
//if/else/elseif

let aux =3;
if(aux>0){
    console.log("This number is positive");
}else if(aux<0){
    console.log("This number is negative");
}else{
    console.log("this number is 0");
}

var DNI_REGEX= /^(\d{8})([A-Z])$/;
let dni ="12345678K";
if(dni.match(DNI_REGEX)){
    console.log("Correct DNI");
}else{
    console.log("Incorrect DNI");
}

console.log(8==8);
console.log(8=="8");
console.log(8===8);
console.log(8==="8");

console.log(5>8);
console.log(5<8);
console.log(5>=8);
console.log(5<=8);

console.log(8!=8);
console.log(8!="8");
console.log(8!==8);
console.log(8!=="8");

//Loop while

var i=1;

while(i<10){
    console.log("The number is "+i);
    i++;
}
 let today=new Date();
 let first_octuber=new Date(2022, 9,1);
 console.log(today);
 console.log(first_octuber);
 console.log(today.getDate());

 if(today>first_octuber){
    console.log("Today is after yo first octuber");
 }else{
    console.log("Today is before to first octuber");
 }

function myFirstFunction(){
    console.log("Thank you for you click");
}
function mySecondFunction(){
    console.log("Thank you for you interest.");
}

var div =document.getElementById("my_div");
div.classList.add("my_class");
console.log(div);

var div= document.getElementsByTagName("div");
console.log(div);

var second_div =document.querySelector("#my_second_div");
console.log(second_div);

function $(selector){
    return document.querySelectorAll(selector);
}
console.log($("#my_third_div"));

var numbers =[1,2,3,4];
var n_elevator_2 = numbers.map(function(n){ return n*n; });
console.log(n_elevator_2);

var n_elevator_2=numbers.map((n) => {return n*n; });
console.log(n_elevator_2);

var n_elevator_2= numbers.map((n) => {console.log(n); return n*n;});
console.log(n_elevator_2);

var n_elevator_2=numbers.map(n => n*n);
console.log(n_elevator_2);

let numbers=[[1,2],[2,3],[3,4],[4,5]];
let itself = numbers.map(([x,y]) => x*y);
console.log(itself);
**/
$("#btn2").addEventListener("click", function () {
    var input = document.createElement("input");
    input.setAttribute("type","email");
    input.setAttribute("placeholder","E-mail");
    input.setAttribute("name","emails[]");
    $("#form").appendChild(input);
    myAlert("Add new email input")
});
function bind_close(){
    let elements = document.querySelectorAll(".close");
    for(var i=elements.length-1;i>=0;i--){
        let el=elements[i];
        el.addEventListener("click", function(){
            this.parentNode.style.display ="none";
        });
    }
}
function myAlert(msg){
    //console.log($("body").children[1]);
    var div=document.createElement("div");
    div.classList.add("alert");
    div.innerHTML = msg;
    var close = document.createElement("span");
    close.style.float="right";
    close.classList.add("close");
    close.innerHTML="x";
    div.appendChild(close);
    $("body").insertBefore(div,$("body").firstChild);
    bind_close();
}
    
    
function $(selector){
    return document.querySelector(selector);
}
