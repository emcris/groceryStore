const storeName = 'Pandas';

document.title = `${storeName} Grocery Store`;

console.log('what is in document:',document.all);

console.log('tag element:',document.getElementsByTagName('p'));

let h1_OfHeader = document.getElementById('mainIntro');
// console.log(h1_OfHeader); checking
h1_OfHeader.innerHTML = 'Welcome!';

const getAllNavListClasses = document.querySelectorAll('.nav_list_item');
console.log(getAllNavListClasses);