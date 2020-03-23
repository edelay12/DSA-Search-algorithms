/* 
3. Find a book
Imagine you are looking for a book in a library with a Dewey Decimal index.
 How would you go about it? Can you express this process as a search algorithm? 
 Implement your algorithm to find a book whose Dewey and book title is provided.

To find a book using the dewey decimal index you would 
locate the books dewey deceimal index(this would be the input for the function). 
Then you would locate the section that matches the index to find, for example section 20 if the index is 24.72.
Then you would  searchthrough the section to find the index.
*/

findABook = (dewey) => {
let library = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1 ,6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40 ,14, 5];
library = library.sort((a,b) => {
    return b-a;
});

let top = dewey + 10;
let bottom = dewey - 10;
let counter = 0;

library = library.filter((v,i) =>{
    return v >= bottom && v <= top;
})
console.log(library);

for(let i in library){
    counter++;
    if(library[i] == dewey){
        return console.log(`You found the book with dewey number ${library[i]} after filtering through ${counter} others.`)
    }
}
}

findABook(30);