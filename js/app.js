const storeName = 'Pandas';

document.title = `${storeName} Grocery Store`;

console.log('what is in document:',document.all);

console.log('tag element:',document.getElementsByTagName('p'));

let h1_OfHeader = document.getElementById('mainIntro');
// console.log(h1_OfHeader); checking
h1_OfHeader.innerHTML = 'Welcome!';

const getAllNavListClasses = document.querySelectorAll('.nav_list_item');
console.log(getAllNavListClasses);

const getIconCredit = document.querySelector('#iconsCredit');
const testDifference = document.getElementById('iconsCredit');
console.log('get the id:',getIconCredit);
console.log('get the id:',testDifference);

const example = document.querySelector('.nav_list_item');
console.log(example);

const getClasses = document.getElementsByClassName('nav_list_item');
console.log('get the class:',getClasses);