var acertados=20;
var clickCounter=0;
let cronoCo=0;
const CliCo= document.getElementById("click")
const acert= document.getElementById("fig")
const crono= document.getElementById("crono")

var root = document.querySelector(':root');
var rootStyles= getComputedStyle(root);
var time= rootStyles.getPropertyValue("--time");

var ranger= document.getElementById('customRange1')
function logRangeValue() {
        var rangeValue = 41-(ranger.value);
        var timing= rangeValue+'s'
        root.style.setProperty('--time',timing)
        console.log(timing)
}

ranger.addEventListener('input', logRangeValue);

const buttons = document.querySelectorAll('.inner-circle button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const listItem = button.parentElement;
        console.log("Selected list item:", listItem);
        listItem.style.display='none';
        acertados= acertados-1;
        acert.innerText= acertados
    });
});

const buttonsmid = document.querySelectorAll('.middle-circle button');

buttonsmid.forEach((button) => {
    button.addEventListener('click', () => {
        // Find the parent li of the clicked button
        const listItem = button.parentElement;
        console.log("Selected list item:", listItem);
        // Hide the list item by setting its display property to 'none'
        listItem.style.display = 'none'; 
        acertados= acertados-1;
        acert.innerText= acertados
    });
});

const buttonsout = document.querySelectorAll('.outside-circle button');

buttonsout.forEach((button) => {
    button.addEventListener('click', () => {
        // Find the parent li of the clicked button
        const listItem = button.parentElement;
        console.log("Selected list item:", listItem);
        // Hide the list item by setting its display property to 'none'
        listItem.style.display = 'none'; 
        acertados= acertados-1;
        acert.innerText= acertados
    });
});

const circle = document.querySelector('.circle');

// Add a click event listener to the circle

circle.addEventListener('click', () => {
    // Increment the counter
    clickCounter++;
    // Display the updated counter value
    CliCo.innerText=clickCounter
});

const reiniciar =document.getElementById("fs")

reiniciar.addEventListener('click',() => {
    acertados=20;
    clickCounter=0
    cronoCo=0
    CliCo.innerText= clickCounter;
    acert.innerText=acertados;
    crono.innerText=cronoCo ;
    buttons.forEach((button) => {
        // Find the parent li of the clicked button
        const listItem = button.parentElement;
        // Hide the list item by setting its display property to 'none'
        console.log(listItem)
        listItem.style.setProperty('display','flex');
    });
    buttonsmid.forEach((button) => {
        // Find the parent li of the clicked button
        const listItem = button.parentElement;
        // Hide the list item by setting its display property to 'none'
        console.log(listItem)
        listItem.style.setProperty('display','flex');
    });
    buttonsout.forEach((button) => {
        // Find the parent li of the clicked button
        const listItem = button.parentElement;
        // Hide the list item by setting its display property to 'none'
        console.log(listItem)
        listItem.style.setProperty('display','flex');
    });
});


// Initialize counter variable

// Function to update the counter and display the elapsed time
function updateTimeCounter() {
    // Increment the counter
    cronoCo++;
    // Display the updated counter value
    console.log(cronoCo)
    crono.innerText= cronoCo 
}

// Update the counter every second
setInterval(updateTimeCounter, 1000);



