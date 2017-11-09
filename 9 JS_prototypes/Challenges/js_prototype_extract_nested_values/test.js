/* jshint esversion:6 */
require('./solution.js');

const obj = {
    person : {
        name : 'joe',
        history : {
            hometown : 'bratislava',
            bio : {
                funFact : 'I like fishing.',
            },
        },
    },
};

console.log('obj:', obj);

let keys = [
    'person.history.bio', // { funFact: 'I like fishing.' }
    // 'person.name.key', // undefined
    // 'person.history.homeStreet', // undefined
    // 'person.animal.pet.needNoseAntEater', // undefined
];

keys.map(k => {
    let hash = obj.hash(k);
    console.log(k, '=>', hash);
});
