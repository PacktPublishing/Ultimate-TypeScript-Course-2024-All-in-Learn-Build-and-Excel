let fruits: string[] = ["Apple", "Banana", "Cherry"]; // regular array declaration that can contain only strings (any length)
let numbers: Array<number> = [1, 2, 3, 4, 5]; // generic array
let mixedArray: (string | number)[] = ["Apple", 19, "Orange"];

// TUPLES
// A tuple is a typed array with a pre-defined length and types for each index.
// let tupleName: [type1, type2, ..., typeN];
// Define a tuple type for a superhero
type Hero = [string, number, string[]];
// create a tuple wiht a specific superhero
let supermanNew: Hero = ["Superman", 38, ["flight", "x-ray vision"]];
