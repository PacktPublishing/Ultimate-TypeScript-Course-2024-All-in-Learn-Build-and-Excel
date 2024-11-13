// define a set of named box sizes using TS's enum
// By default, all enum members are public and you can't change this.
export enum BoxSizes {
    Small = 40,
    Medium = 80,
    Large = 120, 
    BOMB = "BOMB"
};

interface BoxStructure<T> {
    id: number;
    size: T
};
// use the syntactic sugar "class" to create a box
export class CreateBox<T extends string | number> {
    // private properties
    private size: T; // Private property: only accessible within this class
    // public properties (mutable by default)
    public readonly id: number; // Public property: accessible from anywhere
    public readonly element: HTMLDivElement; 

    constructor(boxInfo: BoxStructure<T>) {
        this.id = boxInfo.id; 
        this.size = boxInfo.size; 
        // create box element in HTML
        this.element = document.createElement("div");
        this.initializeBox();
    };

    private initializeBox():void {
        // DOM Work
        this.element.classList.add("box");
        this.element.style.width = `${this.size}px`;
        this.element.style.height = `${this.size}px`;
        this.element.style.backgroundColor = this.getRandomColor(); 
        this.element.setAttribute('id', `box-${this.id}`);
        this.element.style.display = "inline-block";
        // append our div to the DOM
        document.querySelector(".wrapper")?.appendChild(this.element);
    };  

    // Private method to generate a random color
    private getRandomColor():string {
        let red: number = Math.floor(Math.random() * 256);
        let blue: number = Math.floor(Math.random() * 256);
        let green: number = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    };

    // Public method to set the color of the box
    public setColor(color: string):void {
        this.element.style.backgroundColor = color; 
    };
}; // end class