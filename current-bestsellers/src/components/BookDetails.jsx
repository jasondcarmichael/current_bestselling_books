import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function BookDetails (props) {

    // pass down data for the specified Book id(isbn#)

    let { id } = useParams()

    

    const [book, setBook] = useState('')

    useEffect(() => {
        let selectedBook = props.books.find(
            (book) => book.id === parseInt(id)
            
        )
        setBook(selectedBook)
        console.log(selectedBook)
    }, [props.books, id])

   


    // Render all data
    
    
    return book ? (
        <div className="detail">
        <div className="detail-header">
          <img src={book.book_image} alt={book.title} />
          <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1>{book.title}</h1>
          </div> 
        </div>
        <div className="info-wrapper">
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <h3>By {book.author}</h3>
          </div>
          <p>{book.description}</p>
        </div>
        <div>
            <p>Published by {book.publisher}</p>
            <p>Publication date: {book.published_date}</p>
            <p>ISBN: {book.primary_isbn13}</p>

        </div>
        <button>
          <Link to="/books"> Back to Books </Link>
        </button>
      </div>
    ) : null;

}