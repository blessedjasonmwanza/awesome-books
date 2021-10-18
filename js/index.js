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