let num = 68863574;
let reverse = 0;

while(num > 0){
    // console.log(reverse);
    let d = num%10;
    reverse = reverse * 10 + d;
    num = parseInt(num/10);
}

console.log(reverse);


// sum of odd numbers
let sum = 0;
for(let i=130; i<=490; i++){
    if(i%2 !== 0){
        // console.log(i);
        sum+=i;
    }
}

console.log(sum);

let a = 10;
let f = 1;
for(let i=2; i<=a; i++){
    // f = f * i;
    f *=i;
}

console.log(f);