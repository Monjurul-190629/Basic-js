var mySet = new Set()
console.log(mySet)


var d = [1, 2, 3, 4, 10]
mySet = new Set(d)
console.log(mySet)


console.log(mySet.size)

/// adding
mySet.add(5)
console.log(mySet)


/// del
mySet.delete(5);
console.log(mySet)


/// clear all values
mySet.clear()


//// converting set to array


var set1 = new Set([1, 2, 3, 4]);
var set2 = new Set([4, 5, 6, 8]);


var arr = Array.from(set1);
console.log(arr)
var fil = arr.filter(x => x%2 == 0);
console.log(fil)



var intersec = Array.from(set1).filter(x => set2.has(x))
console.log(intersec)


var dif = Array.from(set1).filter(x => !set2.has(x))
console.log(dif)

var uni = [...intersec, ...dif] /// another way concat intersec.dif
console.log(uni)


