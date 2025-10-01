type Person = {
    name : string,
    age: number;
}

let person: Person = {
    name: "Test",
    age: 20
};

person.name = "test";


function insertArray<T>(array: T[], value: T) {
    return [value, ...array];
}

const demoArray = [2,45,1,5];
const value = "Test";
const value1 = 2;

insertArray(demoArray, value1);