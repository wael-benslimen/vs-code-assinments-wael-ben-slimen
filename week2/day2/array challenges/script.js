function alwaysHungry(arr) {
    var x = 0
    for ( i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy")
            x = x+1
        } 

    }
        if (x == 0) {
            console.log("i'm hungry")
        }
}
   
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


function highPass(arr, cutoff) {
    var filteredArr = [];
    var j = 0
        for ( i = 0; i < arr.length; i++) {
            if (arr[i]>cutoff) {
                filteredArr[j] = arr[i]
                j++
            }
            
        }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


function betterThanAverage(arr) {
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    sum = sum / arr.length
    var count = 0
    for ( i = 0; i < arr.length; i++) {
        if (arr[i]>sum) {
            count++
        }
        
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


function reverse(arr) {
    var j = arr.length
    
    for (i = 0; i < arr.length/2; i++) {
        var temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        j--
    }
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for ( i = 2; i < n; i++) {
        fibArr[i]= fibArr[i-2] + fibArr[i-1]    
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


