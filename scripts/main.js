
window.addEventListener('load', start);

//window.onload = start; //equivalent

function start() {
    let theButton = document.querySelector('#btnGetTotal');
    //document.getElementbyId('btnGetTotal'); //older style
    theButton.addEventListener('click', calculateTotal);
}//end function

function calculateTotal() {



    let totalOutput = document.querySelector('#total');
    let pickedPizza = document.querySelector('#pizzaChoice').value;


    let pepperoni = document.querySelector('#pepperoni').checked;
    let ham = document.querySelector('#ham').checked;
    let pineapple = document.querySelector('#pineapple').checked;
    let onion = document.querySelector('#onion').checked;
    let greenPepper = document.querySelector('#greenPepper').checked;
    let blackOlives = document.querySelector('#blackOlives').checked;
    let garCrust = document.querySelector('#garCrust').checked;

    let total;

    let toppingCount = 0;

    if (pepperoni) {
        toppingCount += 1;
    }
    if (ham) {
        toppingCount += 1;
    }
    if (pineapple) {
        toppingCount += 1;
    }
    if (onion) {
        toppingCount += 1;
    }
    if (greenPepper) {
        toppingCount += 1;
    }
    if (blackOlives) {
        toppingCount += 1;
    }

    console.log(toppingCount);

    //Set base price
    if (pickedPizza === "personal") {

        total = 4;
        total += toppingCount * 0.5
    }
    else if (pickedPizza === "small") {
        total = 8;
        total += toppingCount * 1
    }
    else if (pickedPizza === "medium") {
        total = 12;
        total += toppingCount * 1.5
    }
    else { //if (pickedPizza === "large")
        total = 16;
        total += toppingCount * 2
    }

    if (garCrust) {
        total += 0.5;
    }



    //Output to the span
    totalOutput.innerHTML = "Total:  $" + total;


}
