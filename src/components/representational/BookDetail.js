import React from 'react';

const BookDetail = props => {
    console.log(props);
    if (props.book === null) {
        return <div> </div>
    }
    return (
        <div className="container">
            <h1>{props.book.bookName}</h1>
            <h1>Writer Name : {props.book.writer}</h1>
            <p>{props.book.description}</p>

        </div>
    );
};

export default BookDetail;