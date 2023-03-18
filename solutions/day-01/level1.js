/*

    Declare an empty array;
    Declare an array with more than 5 number of elements
    Find the length of your array
    Get the first item, the middle item and the last item of the array
    Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
    Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
    Print the array using console.log()
    Print the number of companies in the array
    Print the first company, middle and last company
    Print out each company
    Change each company name to uppercase one by one and print them out
    Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
    Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
    Filter out companies which have more than one 'o' without the filter method
    Sort the array using sort() method
    Reverse the array using reverse() method
    Slice out the first 3 companies from the array
    Slice out the last 3 companies from the array
    Slice out the middle IT company or companies from the array
    Remove the first IT company from the array
    Remove the middle IT company or companies from the array
    Remove the last IT company from the array
    Remove all IT companies

*/

// declare an empty array
let emptyArray = Array();
// declare an array with more than 5 number of elements
let arrayFive = Array(5);
arrayFive = [1, 2, 3, 4, 5];

// find the length of your array
console.log(arrayFive.length);

// get the first item, the middle item and the last item of the array
console.log(arrayFive[0]);
console.log(arrayFive[arrayFive.length / 2]);
console.log(arrayFive[arrayFive.length - 1]);

// declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = Array(6);
mixedDataTypes = [1, "2", 3, "4", 5, "6"];
console.log(mixedDataTypes.length);

// declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = Array(7);
itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon",
];

// print the array using console.log()
console.log(itCompanies);

// print the number of companies in the array
console.log(itCompanies.length);

// print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[itCompanies.length / 2]);
console.log(itCompanies[itCompanies.length - 1]);

// print out each company
console.log(itCompanies.join(',\n'));

// change each company name to uppercase one by one and print them out
itCompanies.toString().toUpperCase();
console.log(itCompanies);

// print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(', ') + ' are big IT companies.');

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let index = itCompanies.indexOf('Google');
if (index != -1) {
    console.log(itCompanies[index]);
}
else {
    console.log('Company is not found');
}

// filter out companies which have more than one 'o' without the filter method
let filteredCompanies = Array();
for (let i = 0; i < itCompanies.length; i++) {
    let count = 0;
    for (let j = 0; j < itCompanies[i].length; j++) {
        if (itCompanies[i][j] == 'o') {
            count++;
        }
    }
    if (count > 1) {
        filteredCompanies.push(itCompanies[i]);
    }
}
console.log(filteredCompanies);

// sort the array using sort() method
console.log(itCompanies.sort());

// reverse the array using reverse() method
console.log(itCompanies.reverse());

// slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

// slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length - 4, itCompanies.length-1));

// slice out the middle IT company or companies from the array
console.log(itCompanies.slice(itCompanies.length / 2 - 1, itCompanies.length / 2 + 1));

// remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);

// remove the middle IT company or companies from the array
itCompanies.splice(itCompanies.length / 2 - 1, 2);
console.log(itCompanies);

// remove the last IT company from the array
itCompanies.pop();

// remove all IT companies
itCompanies.splice(0, itCompanies.length);

console.log(itCompanies);

