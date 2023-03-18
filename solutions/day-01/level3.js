/*


    The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method

    1.Slice the first ten countries from the countries array

    Find the middle country(ies) in the countries array

    Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

min = Math.min(...ages);
max = Math.max(...ages);

console.log(min, max);
median = ages.sort((a, b) => a - b)[Math.floor(ages.length / 2)];
console.log(median);

average = ages.reduce((a, b) => a + b) / ages.length;
console.log(average);

range = max - min;
console.log(range);

console.log(Math.abs(min - average), Math.abs(max - average));




const countries = require("./countries.js");
console.log(countries.slice(0, 10));

function middle(arr) {
    if (arr.length % 2 == 0) {
        return arr.slice(arr.length / 2 - 1, arr.length / 2 + 1);
    } else {
        return arr[Math.floor(arr.length / 2)];
    }
}
console.log(middle(countries));

function divide(arr) {
    if (arr.length % 2 == 0) {
        return [arr.slice(0, arr.length / 2), arr.slice(arr.length / 2)];
    } else {
        return [arr.slice(0, arr.length / 2), arr.slice(arr.length / 2 + 1)];
    }
}

console.log(divide(countries));

