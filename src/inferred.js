// @flow

exports.run = run;

// since this is a module 'boundary', we kind of have to annotate it
// old link -> https://github.com/facebook/flow/issues/157
function run(n: number) {
    privateFunction('boom');
}

// look, no annotation required
function privateFunction(n) {
    // but you get an error on the `n` here, which isn't great.
    // however, if you do want to debug, add the annotation and you have
    // all the power you would expect from static typing. then remove the
    // annotation if you want.
    return n * 5;
}

privateFunction('boom');

privateFunction('boom');
