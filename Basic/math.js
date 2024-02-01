//// power exponential
var a = 2;
console.log(a**3)


var x = 10;
console.log(x ** (1/3)) /// Math.pow(x, y)


a = 8
console.log(a.toString(8))


a = 11
console.log(parseInt(a, 2))


//// left shift << is equivalent to Math.floor(a) * Math.pow(2, n)

/// right shift >> is equivalent to Math.floor(Math.floor(a) / Math.pow(2, n))


var dir = 0.79
var dis = 1.414

vec = {}

vec.x = dis * Math.cos(dir)
vec.y = dis * Math.sin(dir)
/* toExponential() & toFixed() & toPrecision() */

vec.x = vec.x.toPrecision(4)
vec.y = vec.y.toPrecision(4)
console.log(vec)


var v1 = {x : 10, y : 5}
var v2 = {x : 20, y : 10}
var x = v2.x - v1.x
var y = v2.y - v1.y
console.log(Math.hypot(x, y).toPrecision(4)) //// math.hypot





/* Random numbers */
function getnum(max, min){
    return Math.random()*(max - min + 1) + min;  /// to inclusive try Math.random() * (max - min + 1) + min;
}

console.log(Math.round(getnum(5, 10)));

