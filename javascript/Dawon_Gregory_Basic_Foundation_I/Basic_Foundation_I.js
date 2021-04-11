// 1. Get 1 to 255
function get_array() {
    var arr = [];
for (var i = 1; i < 256; i++) {
     arr.push(i);
} 
    return arr; 
}
  
  // 2. Get even 1000
  function sum_even_numbers(){
    var sum = 0;
    for(var i = 1; i < 1001; i++){
        if(i % 2 === 0){
        sum += i;
    }
    }
    return sum; 
}

  // 3. Sum odd 5000.
  function sum_odd_5000() {
    var sum = 0;
    for(var i = 1; i < 5001; i++){
        if(i % 2 === 1){
            sum += i;
        }
    }
    return sum; 
}

// 4. Iterate an array.
function iterArr(arr) {
    var sum = 0;

for (var i = 0; i < arr.length; i++) {
    sum  = sum + arr[i];
}
    return sum; 
}
console.log(iterArr([1,5,7,10,34]));

// 5. Find Max.
function findMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max; 
}

// 6.Find Avg.
function findAvg(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum / arr.length; 
}

// 7. Array Odd.
function oddNumbers() {
    var arr = [];
    for (var i = 1; i < 50; i++) {
        if (i % 2 !== 0) {
            arr.push(i);
        }
    }
    return arr; 
}

//8. Greater than Y.
function greaterY(arr, Y) {
    var count = 0;
    for ( var i = 0; i < arr.length; i++) {
        if (arr[i] > Y) {
            count++
            
        }
    }
    return count; 
}

// 9. Squares.
function squareVal(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr; 
}

// 10. Negatives.
function noNeg(arr) {
    for (var i = 0;  i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0
        }
    }
    
    return arr; 
}

// 11. Min/Max Avg. 
function maxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    
    
    for (var i = 1; i < arr.length; i ++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i]
        }
        sum = sum + arr[i];
     }
     var avg = sum / arr.length;
     var arrnew = [max, min, avg];
    
        return arrnew; 
    }

// 12. Swap Values.
function swap(arr) {
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr; 
}


// 13. Number to String.
function numToStr(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] ="Dojo";
        }
    }
    return arr; 
}




    
  

   