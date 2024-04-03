// const user = ['raju', 'raju@mail.com', '8t3fgyu'];

const user = { name: 'Raju', email: 'raju@mail.com', password: '1234' };
console.log(user);
console.log(user.email);
console.log(user['password']);
let key = 'name';

console.log(user[key]);

user.password = "abrakadabra";
console.log(user);
user.address = 'Lucknow';
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));


const smartphone = {
    brand: 'Samsung',
    model: 's24',
    price: 120000,
    colors: ['white', 'black', 'blue']
};

console.log(smartphone.price);
console.log(smartphone.colors[0]);

const smartphoneList = [
    { brand: 'Samsung', model: 's24', price: 120000, colors: ['white', 'black', 'blue'] },
    { brand: 'Apple', model: 'iphone 15', price: 150000, colors: ['black', 'blue'] },
    { brand: 'Oneplus', model: 'nord ce 3', price: 20000, colors: ['grey', 'white'] },
    { brand: 'Redmi', model: 'note 8 pro', price: 16000, colors: ['blue', 'white'] },
    { brand: 'Samsung', model: 'z fold', price: 164000, colors: ['white'] },
]

console.log(smartphoneList.length);
console.log(smartphoneList[0].model);
console.log(smartphoneList[3].price);
console.log(smartphoneList[2].colors[1]);

smartphoneList[4].colors.push('red');
console.log(smartphoneList[4]);