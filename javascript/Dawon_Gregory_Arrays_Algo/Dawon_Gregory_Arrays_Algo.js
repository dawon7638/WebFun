//Challenge 1 Print Values and Sum

var testArr = [6,3,5,1,2,4]
sum = 0;


for (let i = 0; i < testArr.length; i++) {
    sum = testArr[i] + sum

    console.log("Num " +  testArr[i] + ", Sum " + sum )
}



//Challenge 2: Value * Position
var testArr = [6,3,5,1,2,4];


for (var i = 0; i < testArr.length; i++) {
 

    testArr[i] = testArr[i] * i

    
}

console.log(testArr);