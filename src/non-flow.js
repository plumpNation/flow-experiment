// @flow

exports.run = run;

// since this is a module 'boundary', we kind of have to annotate it
// old link -> https://github.com/facebook/flow/issues/157
function run(n: number) {
    privateFunction('boom');
}

// look, no annotation required
function privateFunction(n) {
    // but you get a
    return n * 5;
}

privateFunction('boom');

privateFunction('boom');
