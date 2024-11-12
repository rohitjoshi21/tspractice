var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
        this.users = [];
    }
    Library.prototype.addUser = function (name) {
        var newuser = {
            id: this.users.length + 1,
            name: name,
            borrowedBooks: []
        };
        this.users.push(newuser);
    };
    Library.prototype.addBook = function (title, author, genre) {
        var newbook = {
            id: this.books.length + 1,
            title: title,
            author: author,
            genre: genre,
            isAvailable: true
        };
        this.books.push(newbook);
    };
    Library.prototype.getBooks = function () {
        return this.books;
    };
    Library.prototype.getUsers = function () {
        return this.users;
    };
    Library.prototype.lendBook = function (userid, bookid) {
        var bookfilter = this.books.filter(function (book) { return book.id == bookid; });
        var userfilter = this.users.filter(function (user) { return user.id == userid; });
        if ((bookfilter) && (userfilter)) {
            if (bookfilter[0].isAvailable) {
                bookfilter[0].isAvailable = false;
                userfilter[0].borrowedBooks.push(bookid);
            }
            else {
                console.log("This book is not available currently");
            }
        }
        else {
            console.log("Book or User not found");
        }
    };
    Library.prototype.returnBook = function (userid, bookid) {
        var userfilter = this.users.filter(function (user) { return user.id == userid; });
        if (userfilter) {
            if (userfilter[0].borrowedBooks.indexOf(bookid) >= 0) {
                userfilter[0].borrowedBooks = userfilter[0].borrowedBooks.filter(function (id) { return id != bookid; });
                var bookfilter = this.books.filter(function (book) { return book.id == bookid; });
                bookfilter[0].isAvailable = true;
            }
            else
                console.log("this book is not issued by given user");
        }
        else
            console.log("userid not matched with any available users");
    };
    return Library;
}());
var library = new Library();
library.addBook("Harry Potter and the Philosophers Stone", "JK Rowling", 1 /* genres.fiction */);
library.addBook("Harry Potter and the Chamber of Secrets", "JK Rowling", 1 /* genres.fiction */);
library.addBook("Harry Potter and the Prisoners of Azbakan", "JK Rowling", 1 /* genres.fiction */);
library.addBook("The Symposium", "Plato", 4 /* genres.philosophy */);
library.addUser("Rohit");
library.addUser("Aasutosh");
library.lendBook(1, 3);
library.lendBook(1, 4);
library.returnBook(1, 3);
console.log(library.getBooks());
console.log(library.getUsers());
