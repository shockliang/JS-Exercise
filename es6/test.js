'use strict';

const sentences = [
    { subject:'JavaScript', verb:'is', object:'great'},
    { subject:'Elephants', verb:'are', object:'large'},
    { subject:'Rats', verb:'are', object:'small'}
];

function say({subject, verb, object}) {
    console.log(`result is ${subject} ${verb} ${object}`);
    //console.log(subject + ' ${verb} '+'${object}');
}

for(let s of sentences){
    say(s);
}
console.log(sentences[0].subject);

console.log('f(1) result:' + f(1));

function f (x, y = 7, z = 42) {
    return x + y + z;
}

var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);

// function f (x, y, z) {
//     if (y === undefined)
//         y = 7;
//     if (z === undefined)
//         z = 42;
//     return x + y + z;
// };
