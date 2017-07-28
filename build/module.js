// 

exports.run = run;
exports.manyParams = manyParams;

function run(n) {
    return 10 * n;
}

function manyParams(
    somethingStrange,
    inTheNeighbourhood,
    whoYouGonnaCall,
    ghostbusters,
    iAintAfraid,
    ofNoGhost
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

function printme(s) {
    console.log(s);
    return;
}

printme(
    'hpiashfp aishfpai shfpihaspifhapishfpiahspifhsa' +
        'pihfpiahsipfhipashfpha psihfpiashfpiahpifhaspihfpashf'
);
