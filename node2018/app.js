const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2) => {
    console.log('tutorial event has occurred');
    console.log(num1 + num2);
});

eventEmitter.emit('tutorial', 1, 2);

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let vlad = new Person('Vlad');
let  christina = new Person('Christina');

christina.on('name', () => {
    console.log('my name is ' + christina.name);
});

vlad.on('name', () => {
    console.log('my name is ' + vlad.name);
});

christina.emit('name');
vlad.emit('name');