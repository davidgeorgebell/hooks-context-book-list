import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  function capitalise(str) {
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
    return ( 
        <li onClick={() => removeBook(book.id)}>
            <div className='title'>{ capitalise(book.title) }</div>
            <div className='author'>{ capitalise(book.author) }</div>
        </li>
     );
}
 
export default BookDetails;