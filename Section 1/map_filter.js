const nums = [4, 8, 3, 1, 6, 9];

const newNums = [];
for(let n of nums){
    // console.log(n ** 3);
    newNums.push(n ** 3);
}
console.log(newNums);

const newArr = nums.map( (a) => { return a**3 } );
console.log(newArr);

const names = ['ramu', 'shamu', 'kaliya', 'pinki', 'raju'];

console.log( 'abc'.toUpperCase() );
const upperCaseName = names.map( (n) => { return n.toUpperCase() } );

console.log(upperCaseName);