a = "Hello world";
d = a.substr(0, 5);
console.log(d)

console.log(a.substring(0, 5))

// string representation
var d = 10
console.log(d.toString(2)) // convert binary

var e = 1010
f = 10
console.log(parseInt(e, 2))
console.log(parseInt(d, 8))
console.log(parseInt(d, 16))


// parseInt(d, their format)


//// splice method
a = [1, 2, 3, 4]
a.splice(1, 1)  /// [1, 3, 4]
a.splice(1, 0, 7, 98) 
console.log(a) // [1, 7, 98, 3, 4]