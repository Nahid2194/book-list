import React from 'react';
import '../../stylesheets/Book.css';

const Book = props => {
    return (
        <div onClick={props.selectedBookHandler} className="Book">
            <h2>Book: {props.bookName}</h2>
            <h4>Writer: {props.writer}</h4>
            {/* <input type="text" onChange={props.inputName} value={props.bookName} /> */}
        </div>

    );
}

export default Book;