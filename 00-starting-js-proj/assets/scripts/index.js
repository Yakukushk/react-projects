import { apiKey } from "./utils.js";

const hobbies = ["coding", "reading", "traveling"];
const newHobbies = [...hobbies, "cooking"];
const index = newHobbies.findIndex((hobby) => hobby === "cooking");
const copyHobbies = newHobbies.map((hobby) => ({hobby: hobby}));
hobbies.push('programming');
const mergedHobbies = new Set([...hobbies, ...newHobbies]);
console.log(mergedHobbies);
// console.log(index);
// console.log(apiKey);
// console.log(copyHobbies[index].hobby);


const [firstName, age] = [["John", 20], ["Jane", 21], ["Jim", 22]];
const {name: userName, age: personAge} = {name: "John", age: 20};
const extendedUser = {
    role: "admin",
    ...{name: userName, age: personAge},
}

console.log(firstName, age);
console.log(userName, personAge);
console.log(extendedUser);

class Exchange {
    order = {
        id: 0,
        currency: "",
        amount: 0,
    }

    constructor({id, currency, amount}) {
        this.id = id;
        this.currency = currency;
        this.amount = amount;
    }
   
    getExchangeRate() {
        let totalAmount = 0;
        if (this.id === 0) {
            totalAmount = this.amount * 1.2;
        } else {
            totalAmount = this.amount * 1.5;
        }
        localStorage.setItem("totalAmount", JSON.stringify({id: this.id, currency: this.currency, totalAmount: totalAmount}));

        var result = localStorage.getItem("totalAmount");
        console.log(result);
    }

}

var exchange = new Exchange({id: 0, currency: "USD", amount: 100});
exchange.getExchangeRate();

function init() { // Closure
   return function getInitValues() {
        return {
            name: "John",
            age: 20,
        }
    }
}
["1", "2", "3"].map(parseInt);
const initValues = init();
console.log(initValues().name = 'Jane'.concat(' Doe'), initValues().age = 21);
console.log(initValues().name.concat(' Doe'), initValues().age);


const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb"); // start, deleteCount, items
months.splice(4, 1, "May", "June");
console.log(months);
months.splice(0, 4, "July", "August", "September", "October", "November", "December");
console.log(months);

const slicedMonths = months.slice(2, 3);
console.log(slicedMonths);

const newMonths = months.concat(slicedMonths);
console.log(newMonths);

const newMonths2 = [...months, ...slicedMonths];
console.log(newMonths2);