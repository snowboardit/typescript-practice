// Started with:
let employee: {
    readonly id: number,
    name: string,
    isActive: boolean,
    retire: (date: Date) => void,
} = {
    id: 123,
    name: 'John Smith',
    isActive: false,
    retire: (date: Date) => {
        console.log(date);
    }
};


// Define new `Employee` type
type Employee = {
    readonly id: number,
    name: string,
    isActive: boolean,
    retire: (date: Date) => void,
}

// What we end up with after defining new `Employee` type:
const retireGeorge = (date: Date): void => {
    console.log(`retired george at ${date.toISOString()}`)
}

let newEmployee: Employee = {
    id: 1,
    name: 'George',
    isActive: true,
    retire: retireGeorge,
}

// Let's make sure our new employee actually exhibits the properties we gave him!
console.log({id: newEmployee.id})
console.log({name: newEmployee.name})
newEmployee.retire(new Date);