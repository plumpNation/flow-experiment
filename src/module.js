// @flow

exports.run = run;
exports.manyParams = manyParams;

function run(n: number): number {
    return 10 * n;
}

function manyParams(
    somethingStrange: string,
    inTheNeighbourhood: string,
    whoYouGonnaCall: string,
    ghostbusters: string,
    iAintAfraid: string,
    ofNoGhost: string
) {
    run(20);
}

function chain() {
    return chain;
}

chain()
    .chain()
    .chain()
    .chain()
    .chain()
    .chain()
    .chain()
    .chain()
    .chain()
    .chain()
    .chain()
    .chain()
    .chain();

function printme(s: string): void {
    console.log(s);
    return;
}

printme(
    'hpiashfp aishfpai shfpihaspifhapishfpiahspifhsa' +
        'pihfpiahsipfhipashfpha psihfpiashfpiahpifhaspihfpashf'
);
