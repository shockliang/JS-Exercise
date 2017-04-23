'use strict';

var sentences = [{ subject: 'JavaScript', verb: 'is', object: 'great' }, { subject: 'Elephants', verb: 'are', object: 'large' }, { subject: 'Rats', verb: 'are', object: 'small' }];

function say(_ref) {
    var subject = _ref.subject,
        verb = _ref.verb,
        object = _ref.object;

    console.log('result is ' + subject + ' ' + verb + ' ' + object);
    //console.log(subject + ' ${verb} '+'${object}');
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = sentences[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var s = _step.value;

        say(s);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

console.log(sentences[0].subject);

console.log('f(1) result:' + f(1));

function f(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 42;

    return x + y + z;
}

var a = 5;
var b = 10;
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');

// function f (x, y, z) {
//     if (y === undefined)
//         y = 7;
//     if (z === undefined)
//         z = 42;
//     return x + y + z;
// };