class Books {
  constructor(savedBooks) {
    this.savedBooks = savedBooks;
    this.booksElement = document.querySelector('#books-list');
  }

  display() {
    this.booksElement.innerHTML = "";
    for (let bookId = 0; bookId < this.savedBooks.length; bookId += 1) {
      const book = this.savedBooks[bookId];
      this.booksElement.innerHTML += `
          <div class="book" >
          <span id="book-details">
          <span>${book.author}</span>
            <span class="separator">by</span>
            <span>${book.title}</span>
          </span>
            <button onclick="removeBook(${bookId});">Remove</button>
          </div>
        `;
    }
  }

  add(bookTitle, bookAuthor) {
    this.savedBooks.push({
      title: bookTitle,
      author: bookAuthor,
    });
    localStorage.setItem('books', JSON.stringify(this.savedBooks));
    this.display();
  }

  remove(bookId) {
    if (bookId !== null && bookId !== undefined) {
      this.savedBooks.splice(bookId, 1);
      localStorage.setItem('books', JSON.stringify(this.savedBooks));
      this.display();
    }
  }
}
let savedBooks = localStorage.getItem('books');
if (savedBooks) {
  savedBooks = JSON.parse(savedBooks);
} else {
  savedBooks = [];
}
const books = new Books(savedBooks);
books.display();
const removeBook = (bookId) => books.remove(bookId);
removeBook();

const submitForm = document.querySelector('.add-books-form');

submitForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const bookAuthor = document.querySelector('#book-author').value;
  const bookTitle = document.querySelector('#book-title').value;
  books.add(bookAuthor, bookTitle);
  submitForm.reset();
});

const booksLink = document.querySelector('#navBook');
const addLink = document.querySelector('#navAdd');
const contactLink = document.querySelector('#navContact');
const links = [booksLink, addLink, contactLink];

const booksPage = document.querySelector('#books');
const addPage = document.querySelector('#add');
const contactPage = document.querySelector('#contact');
const pages = [booksPage, addPage, contactPage];

links.forEach((link, i) => {
  link.addEventListener('click', () => {
    const target = pages.filter((id) => i === pages.indexOf(id));
    const nonTarget = pages.filter((id) => i !== pages.indexOf(id));
    target[0].classList.remove('hidden');
    for (let index = 0; index < nonTarget.length; index += 1) {
      const navItem = nonTarget[index];
      navItem.classList.add('hidden');
    }
  });
});
