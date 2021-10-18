const booksElement = document.querySelector('#books-list');
const savedBooks = localStorage.getItem('books');
let books = [];
if (savedBooks && savedBooks !== null) {
  books = JSON.parse(savedBooks);
}

const displayBooks = () => {
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
};
const addBook = (title, author) => {
  books.push({
    title: title,
    author: author,
  });
  localStorage.setItem('books', JSON.stringify(books));
  displayBooks();
};
const removeBook = (bookId) => {
  if (bookId !== null && bookId !== undefined) {
    books.splice(bookId, 1);
    localStorage.setItem('books', JSON.stringify(books));
    displayBooks();
  }
};
displayBooks();

const submitForm = document.querySelector('.add-books-form');
submitForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let bookAuthor = document.querySelector('#book-author').value;
  let bookTitle = document.querySelector('#book-title').value;
  addBook(bookAuthor, bookTitle);
  submitForm.reset();
});
