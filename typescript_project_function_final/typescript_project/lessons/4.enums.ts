// Enums, short for "enumerations", are a data type used in various programming languages to define a set of named constants.  JavaScript itself does not natively support enums, TypeScript does. 

// They are particularly useful for representing fixed sets of options, such as payment methods or days of the week, or in our case, Box Sizes

enum Direction {
    Up,        // 0
    Down,      // 1
    Left,      // 2
    Right      // 3
};

// Usage
let move: Direction = Direction.Up;
console.log(move); // Outputs: 0

// example from my WebSocket Server course
let GET_INFO = 1;
let GET_LENGTH = 2;
let GET_MASK = 3; 
let GET_PAYLOAD = 4; 

// using ENUMS
enum Task {
    GET_INFO = 1, // 1
    GET_LENGTH, // 2
    GET_MASK, // 3
    GET_PAYLOAD //4
};

// Enums can be used as types, allowing you to restrict the values that a variable can take. This enhances type safety in your code.
enum PaymentMethod {
    CreditCard = "CreditCard",
    PayPal = "PayPal",
    BankTransfer = "BankTransfer"
};

// type PaymentMethod = "CreditCard" | "PayPayl" | "BankTransfer"; // works also, but a little more clumsy as not intellisense

function processPayment(amount: number, method: PaymentMethod) {
    console.log(`Processing a ${amount} payment via ${method}`);
};

// works fine
processPayment(100, PaymentMethod.BankTransfer); 