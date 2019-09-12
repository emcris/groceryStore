/* 
* TODO:
* [√] - Create a Schema; an Object with defined properties and types of what will be needed for each inventory item. REF: inventorySchema
* [√] - Create a few methods that can help with values based on data given. REF: discount, discountPrice
* [√] - Create a prototype (a copy from origin) that is based off the Inventory schema that way I can reuse it to make more than one produce. REF: addProduce
* [√] - Create a few variables that will use the prototype above to execute. do at least three; after provide an array that will hold them all. REF: cherry, lemon, corn; inventoryList - for the array
* [√] - Create a global createElement function that will do just that and add some params that i know will be useful.

* [] - CLASS WILL DO: Create Form function that will append to HTML to create the inventory that way(commented out the HTML in the index to help give you an idea)
* [] - CLASS WILL DO: Create an alert that they succesfully stored that info into the inventory
*/  

//hardcode inventory list. I will provide three for you, add the rest
const inventorySchema = [
    {
        organic: Boolean,
        img: String,
        produce: String,
        price: Number,
        sale: [ Boolean, {
            discountPercent: Number,
            salePrice: Number,
            savings: Number
        }],
        quantity: Number
    }
];

//This function provides the discount amount based off price and percent
const discount = function (price, percent) {
    return ((percent / 100) * price).toFixed(2);
}
//This functiont takes the discount amount and takes away from price to give you the discount price
const discountPrice = function (price, discountAmt) {
    const discountAmount = discount(price, discountAmt)
    return (price - discountAmount).toFixed(2) ;
}
//Created a prototype from the Schema so I can make new produce using those properties. super cool right!?
function addProduce(organic, image, produce, price, percent, quantity) {
    const newProduce = Object.create(inventorySchema);
    newProduce.organic = organic;
    newProduce.image = image;
    newProduce.produce = produce;
    newProduce.price = price.toFixed(2);
    newProduce.quantity = quantity;
    if(percent !== '') {
        newProduce.sale = true;
        newProduce.discountPercent = percent;
        newProduce.salePrice = discountPrice(price, percent);
        newProduce.savings = discount(price, percent);
    }
    return newProduce;
}
//I will make a few produce
const cherry = addProduce(true, '../img/001-cherry.png', 'Cherry', 2.90, 10, 5);
const bamboo = addProduce(true, '../img/002-bamboo.png', 'Bamboo', 1.99, '', 10);
const peanut = addProduce(true, '../img/003-peanut.png', 'Peanut', 2.90, 10, 5);
const pitaya = addProduce(true, '../img/004-pitaya.png', 'Pitaya', 1.99, '', 10);
const onion = addProduce(true, '../img/005-onion.png', 'Onion', 2.90, 10, 5);
const tomato = addProduce(true, '../img/006-tomato.png', 'Tomato', 1.99, '', 10);
const durian = addProduce(true, '../img/007-durian.png', 'Durian', 2.90, 10, 5);
const lettuce = addProduce(true, '../img/008-lettuce.png', 'Lettuce', 1.99, 50, 10);
const broccoli = addProduce(true, '../img/009-broccoli.png', 'Broccoli', 2.90, 10, 5);
const corn = addProduce(true, '../img/010-corn.png', 'Corn', 1.99, '', 10);
const breastMilkFruit = addProduce(true, '../img/011-breast-milk-fruit.png', 'Breast-Milk Fruit', 2.90, 10, 5);
const blueberry = addProduce(true, '../img/012-blueberry.png', 'Blueberry', 1.99, '', 10);
const potato = addProduce(true, '../img/013-potato.png', 'Potato', 2.90, 25, 5);
const mango = addProduce(false, '../img/014-mango.png', 'Mango', 1.08, '', 20);
const bellPepper = addProduce(false, '../img/015-bell-pepper.png', 'Bell Pepper', .55, '', 20);
const avocado = addProduce(true, '../img/016-avocado.png', 'Avocado', 2.90, 10, 5);
const strawberry = addProduce(true, '../img/017-strawberry.png', 'Strawberry', 1.99, '', 10);
const peas = addProduce(true, '../img/018-peas.png', 'Peas', 2.90, 30, 5);
const kiwi = addProduce(true, '../img/019-kiwi.png', 'Kiwi', 1.99, '', 10);
const grape= addProduce(true, '../img/020-grape.png', 'Grapes', 2.90, 10, 5);
const parsley = addProduce(true, '../img/021-parsley.png', 'Parsley', 1.99, '', 10);
const cucumber = addProduce(true, '../img/022-cucumber.png', 'Cucumber', 2.90, 10, 5);
const ginger = addProduce(true, '../img/023-ginger.png', 'Ginger', 1.99, '', 10);
const springOnion = addProduce(true, '../img/024-spring-onion.png', 'Spring Onion', 2.90, 5, 5);
const pomegranate = addProduce(true, '../img/025-pomegranate.png', 'Pomegranate', 1.99, '', 10);
const banana = addProduce(true, '../img/026-bananas.png', 'Banana', 2.99, '', 6);
const watermelon = addProduce(false, '../img/027-watermelon.png', 'Watermelon', 4.99, '', 10);
const artichoke = addProduce(true, '../img/028-artichoke.png', 'Artichoke', 2.90, 10, 5);
const carrot = addProduce(true, '../img/029-carrot.png', 'Carrot', 1.99, '', 10);
const roseApple = addProduce(true, '../img/030-rose-apple.png', 'Rose Apple', 2.90, 12, 5);
const rambutan = addProduce(true, '../img/031-rambutan.png', 'Rambutan', 1.99, '', 10);
const salad = addProduce(true, '../img/032-salad.png', 'Salad', 2.90, 10, 5);
const peach = addProduce(true, '../img/033-peach.png', 'Peach', 1.99, '', 10);
const olive = addProduce(true, '../img/034-olive.png', 'Olive', 2.90, 20, 5);
const mangosteen = addProduce(true, '../img/035-mangosteen.png', 'Mangosteen', 1.99, '', 10);
const radish = addProduce(true, '../img/036-radish.png', 'Radish', 2.90, 10, 5);
const mushroom = addProduce(true, '../img/037-mushroom.png', 'Mushroom', 1.99, '', 10);
const chili = addProduce(true, '../img/038-chili.png', 'Chili', 2.90, 25, 5);
const lemon = addProduce(true, '../img/039-lemon.png', 'Lemon', 1.99, '', 10);
const apple = addProduce(true, '../img/040-apple.png', 'Apple', 2.90, 10, 5);
const cabbage = addProduce(true, '../img/041-cabbage.png', 'Cabbage', 2.90, 15, 5);
const orange = addProduce(true, '../img/042-orange.png', 'Orange', 1.99, '', 10);
const tamarind = addProduce(true, '../img/043-tamarind.png', 'Tamarind', 2.90, 5, 5);
const coconut = addProduce(true, '../img/044-coconut.png', 'Coconut', 1.99, '', 10);
const eggplant= addProduce(true, '../img/045-eggplant.png', 'Eggplant', 2.90, 10, 5);
const pumpkin = addProduce(true, '../img/046-pumpkin.png', 'Pumpkin', 1.99, '', 10);
const acorn = addProduce(true, '../img/047-acorn.png', 'Acorn', 2.90, 20, 5);
const papaya = addProduce(true, '../img/048-papaya.png', 'Papaya', 1.99, '', 10);
const asparagus = addProduce(true, '../img/049-asparagus.png', 'Asparagus', 2.90, 25, 5);
const pineapple = addProduce(true, '../img/050-pineapple.png', 'Pineapple', 1.99, '', 10);
//Throw all my produce into an array for a list
const inventoryList = [cherry, bamboo, peanut, pitaya, onion, tomato, durian, lettuce, broccoli, corn, breastMilkFruit, blueberry, potato, mango, bellPepper, avocado, strawberry, peas, kiwi, grape, parsley, cucumber, ginger, springOnion, pomegranate, banana, watermelon, artichoke, carrot, roseApple, rambutan, salad, peach, olive, mangosteen, radish, mushroom, chili, lemon, apple, cabbage, orange, tamarind, coconut, eggplant, pumpkin, acorn, papaya, asparagus, pineapple];

// Make two methods, one responsible of making an element- REF: makeElement(), the other to create multiple attributes at my will - REF: makeAttributes()
function makeElement(element, elementId, elementClass, text) {
    const newElement = document.createElement(element);
    newElement.id = elementId;
    newElement.className = elementClass;
    newElement.innerText = text;
    return newElement;
}

const makeAttributes = function (element, ...attributes) {
    attributes.forEach(key => {
        element.setAttribute(key[0], key[1]);
    })
    return element;
}

//create a function that will create the layout for each list, but before I can do that, I should make a glabl createElement w/ needed info for repeated use

/*
Visualize:
a box that will have a heading tag for the Produce name, price, if its on sale or if not, box for the picture, and maybe a description?
ex:
|--------------------|
| |--| <-image       |
| |__| h4 - produce  |
| h5- price h5-org   |
|h5-sale?t:disc price|
| - savings          |
| - count/quant      |
| - description?     |
|____________________|
    
*/

function makeProduceCard(produce) {
    let discountPrice;
    let savings;

    const box = makeElement('div', '', 'col-md-8 col-md-offset-2 text-center box', '');
    const wrapper = makeElement('div', '', 'row', '');
    const li = makeElement('li', `produceItem${produce.produce}`, '', '');
    const image = makeElement('img', `${produce.produce.toLowerCase()}`, 'img-responsive col-md-5', '');
    makeAttributes(image, ['src', `${produce.image}`], ['alt', `An image of a ${produce.produce}`]);
    const produceName = makeElement('span', '', 'lead', produce.produce);
    const price = makeElement('h5', '', '', `Price: $${produce.price}`);
    if(produce.sale) {
        discountPrice = makeElement('h5', '', '', `Sale Price: $ ${produce.salePrice}`);
        savings = makeElement('h5', '', '', `Savings: $ ${produce.savings}`);
    } else {
        discountPrice = '';
        savings = '';
    }
    
    wrapper.append(image, produceName, price, discountPrice, savings);
    li.append(wrapper);
    box.appendChild(li);
    return box;
}

const addInventoryToDOM = function (list) {
    const container = document.getElementById('inventoryList');
    for($i = 0; $i < list.length; $i++) {
        
        container.appendChild(makeProduceCard(list[$i]));
    }
}
//Remember that array full of the produce I, you created? Well, now it serves here to loop through and append to the container. Done.
addInventoryToDOM(inventoryList);

//Inventory Form
//create landscape;
// const container = document.createElement('main');
// container.className = 'container content';
//attach to the HTML body - i didnt make it into a variable because this is the only thing that will stay outside. you will see...
// document.body.appendChild(container);


/* 
This label anon method is in charge of making labels on call. it takes two params, 1: is the id that will match the form input id, 2: the text i want for the inner text of the label
*/
let label = (forId, text) => {
    const label = document.createElement('label');
    label.setAttribute('for', forId);
    label.innerText = text;
    return label;
}
/*
The formInput job is to create form elements that will exist in a form. it takes five params, 1: the element input you want, 2: the type of form input this will be 3: the name of the element, 4: any classes I may add, 5: the id that will match with my label and any other needs
*/
let formInput = (element, type, name, classes, id) => {
    const newFormElement = document.createElement(element);
    newFormElement.setAttribute('type', type);
    newFormElement.setAttribute('name', name);
    newFormElement.className = classes;
    newFormElement.id = id;
    return newFormElement;
}

//Now, let's create a function that will handle the form 

function form() {
    const basicForm = document.createElement('form');
    basicForm.setAttribute('method', 'GET');
    basicForm.setAttribute('action', 'index.html');
    basicForm.setAttribute('name', 'myForm');

    //now lets call in the input functions
    const inputEmail = formInput('input', 'email', 'email', 'form-control', 'email');
    const labelEmail = label(inputEmail.name, 'Email');
    const inputSubject = formInput('input', 'text', 'subject', 'form-control', 'subject');
    const labelSubject = label('subject', 'Subject');
    const labelTextArea = label('message', 'Message');
    const textArea = formInput('textarea', 'text', 'message', 'form-control', 'message');
    // textArea.setAttribute('cols', 4);
    textArea.setAttribute('rows', 5);
    const button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.innerText = 'Submit';

    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';
    //append the inputs and labels to the form. I do it in order from top to bottom and use append() to combine the label and input together.
    formGroup.append(labelEmail, inputEmail);
    formGroup.append(labelSubject, inputSubject);
    formGroup.append(labelTextArea, textArea);
    formGroup.appendChild(button);
    /* since i am trying to append a parent to child relationship i use the appendChild *if you used appendChild for each that is okay too, i just wanted to share another way* */
    basicForm.appendChild(formGroup);
    const container = document.getElementById('inventoryForm');
    container.appendChild(basicForm);

}

form();

let formz = document.forms.myForm;
console.log(formz.elements.message);


