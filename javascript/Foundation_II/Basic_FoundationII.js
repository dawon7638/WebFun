//  1. Biggie Size
function biggieSize() {
    var arr = [3, -5, 6, -1, 7, 10, -8]
    for (var i = 0; i <arr.length; i++) {
        if (arr[i]  > 0) {
        arr[i] = "big";
        } 
    }
        return arr;
}

    console.log(biggieSize());

// 2. Print Low, Return High
function printLowReturnHigh (arr) {
    var max = arr[0];
    var min = arr[0];
    
    for (var i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i]
            }
            if ( arr[i] < min) {
                min = arr[i]
            }   
    }
    
    console.log(min)
    return max;   
}

        console.log(printLowReturnHigh([1, 9, 300, 4, 67, 767575, 544544, 456]));

// 3.Print One, Return Another
function Prnt1Rtn(arr) {
    for ( var i = 0, )
    
}
