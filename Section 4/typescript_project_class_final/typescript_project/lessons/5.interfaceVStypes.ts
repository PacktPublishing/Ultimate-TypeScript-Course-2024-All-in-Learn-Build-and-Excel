// Key Differences
// 1. Declaration Merging

// interface Superhero  {
//     name: string;
//     powers: string[];
//     introduce: () => void;
// };

// interface Superhero {
//     age: number;
// };

// // Merged interface
// const hero: Superhero = {
//     name: "Wonder Woman",
//     age: 28,
//     powers: ["super strength", "flight"],
//     introduce() {
//         console.log(`I am ${this.name}.`);
//     }
// };

// // Type Error on Duplicate Declaration
// type TSuperhero = {
//     age: 37;
// }

// type TSuperhero = {
//     favFood: string;
// };

// 2. Extending
interface ISuperhero  {
    name: string;
    powers: string[];
    introduce: () => void;
}

interface User {
    member: boolean;
}

// Defining the Superhero interface that extends User
// The extended interface (ISuperhero) is a subtype of User, which means it can be used wherever a User is expected.
interface ISuperhero extends User {
    foo: string;
}

// Implementing the Superhero interface
const superman: ISuperhero = {
    name: "Superman",
    foo: "bar",
    member: true,
    powers: ["flight", "super strength", "heat vision"],
    introduce() {
        console.log(`I am ${this.name}, and my powers are: ${this.powers.join(", ")}.`);
    }
};

// TYPES & INTERSECTIONS
// Defining a Hero type

type TSuperhero = {
    name: string;
    powers: string[];
    introduce: () => void;
}

type TUser = {
    member: boolean;
};

// Defining the Superhero type using INTERSECTION &
// more about composition than inheritance. The resulting type (Superhero) does not imply any relationship with TUser; it merely includes its properties.
type Superhero = TSuperhero & TUser & {
    foo: string
};

// Implementing the Superhero type
const superman2: Superhero = {
    name: "Superman",
    member: true,
    foo: "bar",
    powers: ["flight", "super strength", "heat vision"],
    introduce() {
        console.log(`I am ${this.name}, and my powers are: ${this.powers.join(", ")}.`);
    }
};








