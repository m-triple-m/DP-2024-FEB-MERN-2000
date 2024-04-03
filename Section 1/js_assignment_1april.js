// 1. Create a function to take range as a parameter and return 
// sum of all number in that range

const findSum = (start, end) => {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}

console.log(findSum(25, 36));

// Create a function check if a number is palindrome

const checkPalindrome = (num) => {
    let reverse = 0;
    const temp = num;
    while (num > 0) {
        // console.log(reverse);
        let d = num % 10;
        reverse = reverse * 10 + d;
        num = parseInt(num / 10);
    }
    // console.log(num);
    if(reverse === temp) return true;
    return false;

}

console.log(checkPalindrome(273372));

// 3. Create an array of names and print all names with length greater than 5

const names = ['ramu', 'shamu', 'kaliya', 'pinki', 'raju'];

for(let n of names){
    if(n.length > 5)
        console.log(n);
}

// 5. Find cube of all elements in an array of numbers

const nums = [4, 8, 3, 1, 6, 9];

for(let n of nums){
    console.log(n ** 3);
}