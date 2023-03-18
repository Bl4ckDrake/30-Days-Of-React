const countries = require("./countries.js");
const web_techs = require("./web_techs.js") ;

console.log(countries);
console.log(web_techs);


let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

// remove punctuations
text = text.replace('.', '')

let words = text.split(' ')
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if(!shoppingCart.includes('Meat'))
    shoppingCart.unshift('Meat')

shoppingCart.push('Sugar')

// remove 'Honey' from the shoppingCart
shoppingCart.splice(shoppingCart.indexOf('Honey'), 1)
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'

console.log(shoppingCart)

countries.includes('Ethiopia') ? console.log('ETHIOPIA') : countries.push('Ethiopia')

web_techs.includes('Sass') ? console.log('Sass is a CSS preprocess') : temp();
function temp() {
    web_techs.push('Sass'); console.log(web_techs);
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)
