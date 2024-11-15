// **** IMPLICIT TYPES
let review = 5; // inferred as a number
let greeting = "Hello"; // inferred as string
let flag = false; // inferred as boolean
let num = [1, 2, 3]; // inferred as an array that can only take numbers
let obj = {}; // inferred as object
let foo; // inferred as ANY

// **** EXPLICIT TYPES
// 1) type decalartion. 
// Explicitly define the type of a variable, parameter, or return value
let age:number; 

function greet(name:string):string {
    return `Hi ${name}, are you ${age} years old?`;
};

// 2) type assertion. 
// Explicitly tell the TypeScript compiler that you know more about the type of a variable than it does.
let someValue: any = "Hello"; // inferred as a string
let stringLength = (someValue as string).length;

// 3. custom types
// TYPE alias
// type Favorites = "eating" | "mudBathing" | 3; 
// type Animal = {
//     fname: string;
//     hobby: Favorites;
// };
// let warthog: Animal = {
//     fname: "Wally",
//     hobby: "eating"
// };

// INTERFACES alias
// interfaces are defined using the interface keyword followed by the interface name and an optional set of properties enclosed in curly braces. 
interface Favorites {
    hobbies: "eating" | "mudBathing" | 3;
};

interface Animal {
    fname: string;
    hobby: Favorites['hobbies'];
};

let warthog: Animal = {
    fname: "Wally",
    hobby: "eating"
};

// conditional types => T extends U ? X : Y
// T: The type to be evaluated.
// U: The condition against which T is checked.
// X: The type returned if the condition is true (i.e., if T extends U).
// Y: The type returned if the condition is false.

type ValueType<T> = T extends string ? string[] : number[];

function processValue<T>(value: T):ValueType<T> {
    if (typeof value === "string") {
        return value.split("") as ValueType<T>; // Returns an array of characters
    } else {
        return [value] as ValueType<T>; // Returns an array containing the number
    }
  };

  const result1 = processValue("hello");
  const result2 = processValue(42);   


