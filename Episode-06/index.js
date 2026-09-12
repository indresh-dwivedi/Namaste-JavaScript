"use strict";

//..... this in global space .....

console.log(this); // globalObject - window, global (empty object{} in node js)

//..... this inside a function .....

function x() {
    // the value depends on strict / non strict mode
    console.log(this);
}

x(); // window (in strict mode - value of "this" is undefined )
window.x(); // window

//..... this inside a object's method .....

const student = {
    name: "Indresh",
    printName: function () {
        console.log(this.name);
    },
};

student.printName(); // object

const student2 = {
    name: "Isha",
};

student.printName.call(student2); // value of this = student2


//..... this inside arrow function .....

const obj = {
    a: 10,
    x: () => {
        console.log(this);
    },
};

obj.x(); // window

//..... this inside nested arrow function .....

const obj2 = {
    a: 20,
    x: function () {
        const y = () => {
            console.log(this);
        }
        y();
    },
};

obj2.x(); // object

//..... this inside DOM elements => refrence to HTMLelement
