import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from '../representational/Book';

class BookList extends Component {
    constructor(props) {
        super(props);
        console.log("Booklist Constructor");
    }
    render() {
        return (
            this.props.books.map((book, index) => {
                return (
                    <Link to={"/" + book.id} key={book.id} style={{ color: "black", textDecoration: "none" }}>
                        <Book
                            bookName={book.bookName}
                            writer={book.writer}
                            delete={() => this.props.deleteBookState(index)}
                            selectedBookHandler={() => this.props.selectedBookHandler(book.id)}
                        // inputName={(event) => this.props.changeWithInputState(event, index)}
                        />
                    </Link>

                );
            })
        );
    }

}

export default BookList;