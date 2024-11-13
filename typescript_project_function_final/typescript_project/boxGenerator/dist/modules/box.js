// define a set of named box sizes using TS's enum
// By default, all enum members are public and you can't change this.
export var BoxSizes;
(function (BoxSizes) {
    BoxSizes[BoxSizes["Small"] = 40] = "Small";
    BoxSizes[BoxSizes["Medium"] = 80] = "Medium";
    BoxSizes[BoxSizes["Large"] = 120] = "Large";
    BoxSizes["BOMB"] = "BOMB";
})(BoxSizes || (BoxSizes = {}));
;
;
;
export function createBox(boxInfo) {
    // all properties inside of this function will auto be private
    const id = boxInfo.id;
    const size = boxInfo.size;
    // create box element in HTML
    let element = document.createElement("div");
    // DOM Work
    element.classList.add("box");
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.backgroundColor = getRandomColor();
    element.setAttribute('id', `box-${id}`);
    element.style.display = "inline-block";
    // append our div to the DOM
    document.querySelector(".wrapper")?.appendChild(element);
    function getRandomColor() {
        let red = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    }
    ;
    function setColor(color) {
        element.style.backgroundColor = color;
    }
    ;
    // return an object exposing public properties
    return {
        id,
        element,
        setColor
    };
}
;
