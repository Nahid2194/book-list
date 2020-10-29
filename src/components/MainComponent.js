import React, { Component } from 'react';
import BookList from './lists/BookList';
import bookList from '../assets/books';
import NewBook from './representational/NewBook';
import { NavLink, Route, Switch } from 'react-router-dom';
import BookDetail from './representational/BookDetail';


class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: bookList,
            selectedBook: null
        }

    }
    selectedBookHandler = bookId => {
        const book = this.state.books.filter(book => book.id === bookId)[0];
        this.setState({
            selectedBook: book
        })
    }

    // changeWithInputState = (event, index) => {
    //     const book = {
    //         ...this.state.books[index]
    //     }
    //     book.bookName = event.target.value;
    //     const books = [...this.state.books];
    //     books[index] = book;
    //     this.setState({ books: books });
    // }

    // deleteBookState = index => {
    //     //const books = this.state.books.slice();
    //     //const books = this.state.books.map(item => item);
    //     const books = [...this.state.books];
    //     books.splice(index, 1);
    //     this.setState({
    //         books: books
    //     });
    // };



    render() {




        const books = <BookList
            books={this.state.books}
            selectedBookHandler={this.selectedBookHandler}
        />


        return (
            <div className="App">
                <nav className="nav-bar">
                    <ul>
                        <NavLink to='/' exact>Home</NavLink>
                        <NavLink to='/new' exact>New Book</NavLink>
                    </ul>
                </nav>

                <Switch>
                    <Route path='/' exact render={() => books} />
                    <Route path='/new' component={NewBook} />
                    <Route path='/:id' render={() => <BookDetail book={this.state.selectedBook}></BookDetail>} />
                </Switch>

            </div>
        );
    }
}

export default MainComponent;