export {};

type Objecttype = {
    name: string;
    age: number;
};

// let object: { name: string; age: number} = {
//     name: 'Ham-san',
//     age: 43
// }

interface ObjectInterface {
    name: string;
    age: number;
};

// let object: Objecttype = {
//     name: 'Hamu-san',
//     age: 43
// }

let object: ObjectInterface = {
    name: 'Hamu-san',
    age: 43
};

