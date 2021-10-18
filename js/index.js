const booksElement = document.querySelector('#books-list');
let books = [
  {
    title: 'Human Species',
    author: 'Blessed Jason Mwanza',
  },
];
const displayBooks = () =>{
  booksElement.innerHTML = '';
  for (const bookId in books) {
    if (Object.hasOwnProperty.call(books, bookId)) {
      const book = books[bookId];
      booksElement.innerHTML += `
        <span class="book" >
          <span>${book.title}</span>
          <br>
          <span>${book.author}</span>
          <br>
          <button onclick="removeBook(${bookId});">Remove</button>
          <hr>
        </span>
      `;
    }
  }
}
const addBook = (title, author) =>{
  books.push({
    title: title,
    author: author,
  });
  displayBooks();
}
const removeBook = (bookId) =>{
  if(bookId !== null && bookId !== undefined){
    books.splice(bookId, 1);
    displayBooks();
  }
}
displayBooks();
addBook('Title here', 'blessed');
removeBook(1);