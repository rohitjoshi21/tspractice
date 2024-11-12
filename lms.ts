const enum genres {
    history,
    fiction,
    love,
    selfhelp,
    philosophy
}

interface Book{
    id:number,
    title:string,
    author:string,
    genre:genres,
    isAvailable:boolean
}

interface User{
    id:number,
    name:string,
    borrowedBooks:number[]
}


class Library{
    private books:Book[]=[];
    private users:User[]=[];

    addUser(name:string):void{
        const newuser:User = {
            id:this.users.length+1,
            name,
            borrowedBooks:[]
        };
        this.users.push(newuser);
    }

    addBook(title:string,author:string,genre:genres):void{
        const newbook:Book = {
            id:this.books.length+1,
            title,
            author,
            genre,
            isAvailable:true
        };
        this.books.push(newbook);
    }

    getBooks():Book[]{
        return this.books;
    }

    getUsers():User[]{
        return this.users;
    }

    lendBook(userid:number,bookid:number):void{
        const bookfilter = this.books.filter(book => book.id == bookid);
        const userfilter = this.users.filter(user => user.id == userid);
        if ((bookfilter) && (userfilter)) {
            if (bookfilter[0].isAvailable){
                bookfilter[0].isAvailable = false;
                userfilter[0].borrowedBooks.push(bookid);
            }
            else{
                console.log("This book is not available currently");
            }
        }
        else{
            console.log("Book or User not found");
        }
    }

    returnBook(userid:number, bookid:number):void{
        
        const userfilter = this.users.filter(user => user.id == userid);
        if (userfilter){
            if (userfilter[0].borrowedBooks.indexOf(bookid)>= 0){
                userfilter[0].borrowedBooks = userfilter[0].borrowedBooks.filter(id => id != bookid);
                const bookfilter = this.books.filter(book => book.id == bookid);
                bookfilter[0].isAvailable = true;
            }
            else console.log("this book is not issued by given user");
        }
        else console.log("userid not matched with any available users");
    }
}

const library = new Library();
library.addBook("Harry Potter and the Philosophers Stone","JK Rowling",genres.fiction);
library.addBook("Harry Potter and the Chamber of Secrets","JK Rowling",genres.fiction);
library.addBook("Harry Potter and the Prisoners of Azbakan","JK Rowling",genres.fiction);
library.addBook("The Symposium","Plato",genres.philosophy);

library.addUser("Rohit");
library.addUser("Aasutosh");

library.lendBook(1,3);
library.lendBook(1,4);
library.returnBook(1,3);

console.log(library.getBooks());
console.log(library.getUsers());