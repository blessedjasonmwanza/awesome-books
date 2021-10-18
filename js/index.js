const booksElement = document.querySelector('#books-list');
const savedBooks = localStorage.getItem('books');
let books = [];
if (savedBooks && savedBooks !== null) {
  books = JSON.parse(savedBooks);
}

const displayBooks = () => {
  booksElement.innerHTML = '';
  for (let bookId = 0; bookId < books.length; bookId += 1) {
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
};

const addBook = (bookTitle, bookAuthor) => {
  books.push({
    title: bookTitle,
    author: bookAuthor,
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
  const bookAuthor = document.querySelector('#book-author').value;
  const bookTitle = document.querySelector('#book-title').value;
  addBook(bookAuthor, bookTitle);
  submitForm.reset();
});
