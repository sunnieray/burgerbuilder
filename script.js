//variables for dropdown select lists
let bun = document.getElementById('bun-select');
let patty = document.getElementById('patty-select');
let side = document.getElementById('side-choice');

//variables for vegetable checkboxes
let lettuce = document.getElementById('lettuce');
let tomato = document.getElementById('tomato');
let onion = document.getElementById('onion');
let spinach = document.getElementById('spinach');
let pickles = document.getElementById('pickle');

//variables for condiment checkboxes
let ketchup = document.getElementById('ketchup');
let mustard = document.getElementById('mustard');
let mayo = document.getElementById('mayo');
let relish = document.getElementById('relish');
let bbq = document.getElementById('bbq');

//variable for speccial request
let request = document.getElementById('request');

//variable for burger price
let burgerPrice = 3.25;

//variables for prices of options
const seasamePrice = 1.00;
const wheatPrice = 1.00;
const toastPrice = 1.25;

const lettucePrice = 0.25;
const tomatoPrice = 0.25;
const onionPrice = 0.25;
const spinachPrice = 0.25;
const picklePrice = 0.25;

const ketchupPrice = 0.25;
const mustardPrice = 0.25;
const mayoPrice = 0.25;
const relishPrice = 0.25;
const bbqPrice = 0.25;

const friesPrice = 1.50;
const chipsPrice = 1.50;
const saladPrice = 2.50;


let price = document.getElementById('price');
let form = document.getElementById('form');

form.onsubmit = submit;

function submit(event) {
    //burger price
    burgerPrice = 3.25;

    //add toppings price
    if (lettuce.checked) { burgerPrice += lettucePrice };
    if (tomato.checked) { burgerPrice += tomatoPrice };
    if (onion.checked) { burgerPrice += onionPrice };
    if (spinach.checked) { burgerPrice += spinachPrice };
    if (pickles.checked) { burgerPrice += picklePrice };

    //add condiment price
    if (ketchup.checked) { burgerPrice += ketchupPrice };
    if (mustard.checked) { burgerPrice += mustardPrice };
    if (mayo.checked) { burgerPrice += mayoPrice };
    if (relish.checked) { burgerPrice += relishPrice };
    if (bbq.checked) { burgerPrice += bbq };

    //add bun price
    if (bun.value == "seasame") { burgerPrice += seasamePrice }
    if (bun.value == "toast") { burgerPrice += toastPrice }
    if (bun.value == "wheat") { burgerPrice += wheatPrice }

    //add side price
    if (side.value == "fries") { burgerPrice += friesPrice };
    if (side.value == "chips") { burgerPrice += chipsPrice };
    if (side.value == "salad") { burgerPrice += saladPrice };
    
    //inserts price text
    price.innerHTML = `$${burgerPrice.toFixed(2)}`;

    event.preventDefault();
}