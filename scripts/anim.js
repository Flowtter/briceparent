const value = 20;
const initx = 0;
const inity = 0;
const initrot = 0;

var lastx = initx;
var lasty = inity;
var lastrot = initrot;
var lastscale = 1;


function getRandom(max) {
    positive = Math.random();
    return positive < 0.5 ? Math.random() * max : -Math.random() * max;
}

function getRandomFloat() {
    positive = Math.random();
    return positive < 0.5 ? Math.random() : -Math.random();
}

function mean(v1, v2) {
    return (v1 + v2) / 2, v1;
}


const percentage = 100 / value;

let result = "@keyframes result {\n"

for (var i = 0; i < value; i++) {
    randy = (getRandom(2.5) + inity).toFixed(2);
    randx = (getRandom(2.5) + initx).toFixed(2);
    randrot = (getRandom(2.5) + initrot).toFixed(2);
    const scale = (getRandomFloat() / 30 + 1).toFixed(2);

    randx, lastx = mean(randx, lastx);
    randy, lasty = mean(randy, lasty);
    randrot, lastrot = mean(randrot, lastrot);
    scale, lastscale = mean(scale, lastscale);

    if (i === 0)
        result += "0%,100% {";
    else
        result += percentage * i + "% {";
    result += `transform: translate(${randx}%, ${randy}%) rotate(${randrot}deg) scale(${scale});}\n`;
}
result += "}";

console.log(result);