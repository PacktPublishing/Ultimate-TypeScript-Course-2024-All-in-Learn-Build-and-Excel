// ESNext: you can use latest features of js

// JS optional chaining // ECMAScript 2020
const superheroes = [
    {
        // 🕷
        name: "Spider-Man",
        alterEgo: "Peter Parker",
        powers: {
            webSlinging: true,
            superStrength: true,
            gadgets: {
                webShooter: {
                    type: "mechanical",
                    range: "long"
                }
            }
        },
        sidekick: null
    },
    {
        // 🦇
        name: "Batman",
        alterEgo: "Bruce Wayne",
        powers: {
            martialArts: true,
            gadgets: {
                batmobile: {
                    type: "vehicle",
                    range: "long"
                }
            }
        },
        sidekick: {
            name: "Robin"
        }
    }
];


    // Using optional chaining to access properties safely
    const webShooterType = superheroes[0].powers?.gadgets?.webShooter?.type;
    console.log(webShooterType); // Output: "mechanical"

    // Accessing a property that may not exist
    // let sidekickName = superheroes[0].sidekick?.name;
    // console.log(sidekickName); // Output: undefined

    // nullish coalescing operator (??) // ECMAScript 2020
    let sidekickName = superheroes[0].sidekick?.name ?? "No sidekick";
    
    // ECMAScript 2024 (June 2024)
    // Group superheroes by the presence of superStrength
    const groupedByStrength = Object.groupBy(superheroes, (hero) => 
        // ternary or conditiona operator
        hero.powers.superStrength ? "Has Super Strength" : "No Super Strength"
    );

    




