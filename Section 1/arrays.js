const myarr = ['xyz', 736547, true, undefined];

console.log(myarr);
console.log(typeof myarr);
console.log( Array.isArray(myarr) );

const movies = ['Godzilla', 'Deadpool', 'Dark Knight', 'Spiderman', 'Animal'];

console.log(movies.length);

// indexing

console.log(movies[3]);
console.log(movies.indexOf('Deadpool'));
// movies[50] = 'Flash'
console.log(movies[50]);
console.log( movies.at(-2) );
console.log(movies[movies.length - 1]);

// slicing
console.log( movies.slice(1, 4) );
console.log( movies.slice(1) );
console.log( movies.slice(0, 50) );
console.log( movies.slice(-4, -2) );

// adding and removing elements
movies.push('Jaani Dushman'); // adds element at the end of array
movies.unshift('Echo'); // adds element at the start of array
console.log(movies);

movies.pop(); // removes element from the end of array
movies.shift(); // removes element from the start of array
console.log(movies);

// movies.splice(3, 2); // removes 2 elements starting from index 3
// movies.splice(2); // removes all elements starting from index 2
// movies.splice(2, 2, 'Batman', 'Superman' ); // replaces elements on index 2 and 3
movies.splice(3, 0, 'Aquaman', 'Wonder Woman' ); // inserts 2 element after index 2
console.log(movies);

for(let i=0; i<movies.length; i++){
    console.log(movies[i]);
}

for(let mov of movies){
    console.log(mov);
}