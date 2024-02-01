var a = [1, 2, 3, 4, 5];

var d = a.map(a => a*2); /// mapping
console.log(d)


var e = a.filter(g => g % 2 == 0); /// filtering
console.log(e)


var ans = a.reduce((a, b) => a > b ? a:b)
console.log(ans)


console.log(Math.min(...a))
console.log(Math.min.apply(null, a))