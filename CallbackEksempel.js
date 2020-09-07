function calc(num1, num2, callback) {
    return callback(num1, num2)
}

function plus(a, b) {
    console.log("Kører plus")
    return a+b;
}

function gange(a,b) {
    return a*b;
}

function kompliceret(a,b,c) {
    return a*b*c;
}
console.log(calc(2, 3, plus));
console.log(calc(2, 3, gange));
console.log(calc(2, 3, kompliceret));
