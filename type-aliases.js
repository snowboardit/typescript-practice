// Started with:
var employee = {
    id: 123,
    name: 'John Smith',
    retire: function (date) {
        console.log(date);
    }
};
// What we end up with after defining new Employee type:
var retireGeorge = function (date) {
    console.log("retired george at ".concat(date.toISOString()));
};
var newEmployee = {
    id: 1,
    name: 'George',
    retire: retireGeorge
};
// Let's make sure our new employee actually exhibits the properties we gave him!
console.log({ id: newEmployee.id });
console.log({ name: newEmployee.name });
newEmployee.retire(new Date);
