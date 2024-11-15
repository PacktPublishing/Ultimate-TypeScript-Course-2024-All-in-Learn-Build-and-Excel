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
export class CreateBox {
    // private properties
    size; // Private property: only accessible within this class
    // public properties (mutable by default)
    id; // Public property: accessible from anywhere
    element;
    constructor(boxInfo) {
        this.id = boxInfo.id;
        this.size = boxInfo.size;
        // create box element in HTML
        this.element = document.createElement("div");
        this.initializeBox();
    }
    ;
    initializeBox() {
        // DOM Work
        this.element.classList.add("box");
        this.element.style.width = `${this.size}px`;
        this.element.style.height = `${this.size}px`;
        this.element.style.backgroundColor = this.getRandomColor();
        this.element.setAttribute('id', `box-${this.id}`);
        this.element.style.display = "inline-block";
        // append our div to the DOM
        document.querySelector(".wrapper")?.appendChild(this.element);
    }
    ;
    // Private method to generate a random color
    getRandomColor() {
        let red = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    }
    ;
    // Public method to set the color of the box
    setColor(color) {
        this.element.style.backgroundColor = color;
    }
    ;
}
;
