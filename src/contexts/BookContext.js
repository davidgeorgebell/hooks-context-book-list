import React, { createContext, useState, useEffect } from 'react';

import uuid from 'uuid/v1'

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([]);
    const addBook = (title, author) => {
        setBooks([...books, { title, author, id: uuid() }])
    }
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }
    useEffect(() => {
        const data = localStorage.getItem('books');
        if (data) {
            setBooks(JSON.parse(data));
        }
    }, []);
    
    useEffect(() => {
       localStorage.setItem('books', JSON.stringify(books))
    }, [books]);

    return(
        <BookContext.Provider value={{books, addBook, removeBook}}>
            { props.children }
        </BookContext.Provider>
    )
}

export default BookContextProvider;