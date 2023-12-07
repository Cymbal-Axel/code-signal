//Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

//Example
//For inputArray = [3, 6, -2, -5, 7, 3], the output should be adjacentElementsProduct(inputArray) = 21 . 
// 7 and 3 produce the largest product.


var products = [3, 6, -2, -5, 7, 3];
function adjacentElementsProduct(inputArray){
    let largestProduct = inputArray[0] * inputArray[1];

    for(let i = 1; i < inputArray.length -1; i++){
        var actualProduct = inputArray[i] * inputArray[i + 1];
        if(actualProduct > largestProduct){
            largestProduct = actualProduct;
        }
    }
    return largestProduct;
}

console.log(adjacentElementsProduct(products))