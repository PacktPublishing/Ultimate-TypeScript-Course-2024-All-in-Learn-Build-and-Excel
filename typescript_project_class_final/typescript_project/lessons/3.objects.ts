// let boxSizes = Object.freeze({
//     Small: 40,
//     Medium: 80,
//     Large: 120,
//     BOMB: "BOMB"
// });

// boxSizes.Large = 200; // will fail silently in non-strict mode in JS

// interface BoxSizes {
//     // by default, all properties of an interface are mutable
//     readonly Small: number;
//     readonly Medium: number;
//     readonly Large: number;
//     readonly BOMB: string
// };

// let boxSizes: BoxSizes = {
//     Small: 40,
//     Medium: 80,
//     Large: 120,
//     BOMB: "BOMB"
// };

// boxSizes.Small = 10; // WE DONT WANT THIS

// RECORD TYPE
type SuperheroAttributes = Record<'weakness' | 'powers', string | string[]>;
let superhero: SuperheroAttributes = {
    weakness: "pie",
    powers: ['fly', 'invisible']
};

type BoxSizes = Record<'Small' | 'Medium' | 'Large' | 'BOMB', number | number | number | string>;

let boxSizes: BoxSizes = {
    Small: 40,
    Medium: 80,
    Large: 120,
    BOMB: "BOMB"
};




