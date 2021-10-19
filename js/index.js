const savedBooks = localStorage.getItem("books");
class Books {
  constructor(savedBooks) {
    this.savedBooks = savedBooks;
    this.booksElement = document.querySelector("#books-list");
  }

  display() {
    this.booksElement.innerHTML = "";
    for (let bookId = 0; bookId < this.savedBooks.length; bookId += 1) {
      const book = this.savedBooks[bookId];
      this.booksElement.innerHTML += `
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

  add(bookTitle, bookAuthor) {
    this.savedBooks.push({
      title: bookTitle,
      author: bookAuthor,
    });
    localStorage.setItem("books", JSON.stringify(this.savedBooks));
    this.display();
  }

  remove(bookId) {
    if (bookId !== null && bookId !== undefined) {
      this.savedBooks.splice(bookId, 1);
      localStorage.setItem("books", JSON.stringify(this.savedBooks));
      this.display();
    }
  }
}

const books = new Books(JSON.parse(savedBooks));
books.display();
const removeBook = (bookId) => books.remove(bookId);
removeBook();

const submitForm = document.querySelector(".add-books-form");

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const bookAuthor = document.querySelector("#book-author").value;
  const bookTitle = document.querySelector("#book-title").value;
  books.add(bookAuthor, bookTitle);
  submitForm.reset();
});
