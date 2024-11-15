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

interface PublicBoxProperties {
    id: number;
    element: HTMLDivElement; 
    setColor: (color: string) => void; 
};

export function createBox<T extends string | number>(boxInfo:BoxStructure<T>): PublicBoxProperties {
    // all properties inside of this function will auto be private
    const id: number = boxInfo.id; 
    const size: T = boxInfo.size; 
    // create box element in HTML
    let element: HTMLDivElement = document.createElement("div");
    // DOM Work
    element.classList.add("box");
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.backgroundColor = getRandomColor(); 
    element.setAttribute('id', `box-${id}`);
    element.style.display = "inline-block";
    // append our div to the DOM
    document.querySelector(".wrapper")?.appendChild(element);

    function getRandomColor():string {
        let red: number = Math.floor(Math.random() * 256);
        let blue: number = Math.floor(Math.random() * 256);
        let green: number = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    };

    function setColor(color: string):void {
        element.style.backgroundColor = color; 
    };

    // return an object exposing public properties
    return {
        id, 
        element,
        setColor
    };

};