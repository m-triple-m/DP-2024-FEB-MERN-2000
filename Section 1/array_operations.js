const smartphoneList = [
    { brand: 'Samsung', model: 's24', price: 120000, colors: ['white', 'black', 'blue'] },
    { brand: 'Apple', model: 'iphone 15', price: 150000, colors: ['black', 'blue'] },
    { brand: 'Oneplus', model: 'nord ce 3', price: 20000, colors: ['grey', 'white'] },
    { brand: 'Redmi', model: 'note 8 pro', price: 16000, colors: ['blue', 'white'] },
    { brand: 'Samsung', model: 'z fold', price: 164000, colors: ['white'] },
];

// find phones with price less than 50000

const budgetPhones = smartphoneList.filter( ( phone ) => { return phone.price < 50000 } );
console.log(budgetPhones);
// filter all samsung phones
// filter all phones with blue color
console.log([1, 2, 3].includes(5));
const samsungPhones = smartphoneList.filter( ( phone ) => { return phone.brand === 'Samsung' } );
console.log(samsungPhones);
const bluePhones = smartphoneList.filter( ( phone ) => { return phone.colors.includes('blue') } );
console.log(bluePhones);

// create an array of phone models
// create an array of phone brands
// ['s24', 'iphone 15', 'nord ce 3', 'note 8 pro', 'z fold']
const models = smartphoneList.map( ( phone ) => { return phone.model } );
console.log(models);
const brands =  smartphoneList.map( ( phone ) => { return phone.brand } );
console.log(new Set(brands));