var a = ['apple', 'orange', 'grape', 'banana']
a.sort()
console.log(a)


const arr = [
    [1, 2],
    [3, 2],
    [2, 5]
];
var x1 = ((a, b) => a[0] - b[0])
arr.sort(x1)
console.log(arr)



var arr1 = [1, 2, 3, 4, 5, 6]
var x2 = arr1.reduce((a, b) => a + b)
console.log(x2)


var x3 = arr1.reduce((a, b) => a > b ? a : b)
console.log(x3)