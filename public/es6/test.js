'use strict';

const sentences = [
    { subject:'TypeScript', verb:'is', object:'great'},
    { subject:'Elephants', verb:'are', object:'super large'}
];

function say({ subject, verb, object}) {
    console.log('${subject} ${verb} ${object}');
}

for(let s of sentences){
    say(s);
}
