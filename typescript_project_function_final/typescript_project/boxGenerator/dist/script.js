// import our custom modules
import { BoxSizes, createBox } from "./modules/box.js";
// grab elements in our DOM using DOM Type Casting 
const inputField = document.getElementById('amount');
const button = document.getElementById('generate');
const output = document.getElementsByTagName('output')[0];
// add Event Types to our event listeners
button.addEventListener("click", (e) => {
    buildBoxes();
});
inputField.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        buildBoxes();
    }
});
let boxes = [];
// function to create boxes
function buildBoxes() {
    // grab our input value
    let boxAmount = Number(inputField.value);
    // input validation check
    if (!boxAmount || boxAmount < 0) {
        alert("Please insert a positive number");
        return;
    }
    ;
    // start box timer
    let i = 0;
    // start generating boxes
    boxGen();
    function boxGen() {
        // lag between each box generation
        setTimeout(() => {
            // create an array of all the allowed enum types for the box sizes
            const boxSizesArray = Object.values(BoxSizes).filter(value => typeof value === "number" || value === BoxSizes.BOMB);
            const boxSizesArrayLength = boxSizesArray.length;
            // randomly select one size
            let randomNum = Math.floor(Math.random() * boxSizesArrayLength);
            let oneBoxSize = boxSizesArray[randomNum];
            // check if the oneBoxSize is a bomb
            if (oneBoxSize === BoxSizes.BOMB) {
                // 💣
                // perform logic for BOMB
                boxes.forEach((box) => {
                    box.setColor("red");
                    box.element.addEventListener('click', () => {
                        box.setColor("blue");
                        console.log('The box ID is public: ', +box.id);
                    });
                });
                // css styling and display a dynamic message
                inputField.disabled = true;
                inputField.className = "lost";
                button.disabled = true;
                output.innerHTML = `You lost the game. You managed to produce ${boxes.length} box(s) before blowing up!`;
                return;
            }
            ; // end of BOMB check
            // create a box using the createBox method in our module file
            let box = createBox({
                id: i,
                size: oneBoxSize
            });
            // increase our counter
            i++;
            // push our newely created box into our global array
            boxes.push(box);
            // recursively call the loop if the counter is less than the desired box size generation
            if (i < boxAmount) {
                boxGen(); // generate the next box
            }
        }, 100);
    }
    ; // end boxGen function
}
; // end buildBoxes function
