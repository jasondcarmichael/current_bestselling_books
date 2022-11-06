import { useState, useEffect } from 'react'
// import axios from 'axios'
// import { BASE_URL } from '../globals'
import { useNavigate } from 'react-router-dom'
// import BookDetails from './BookDetails'
import { Link } from 'react-router-dom'

export default function Books (props) {

    // const [selectedBook, setSelectedBook] = useState(null)

    // useEffect(() => {
    //     let bookId = book.primary_isbn13
    //     let selectedBook = bookId
    //     setSelectedBook(selectedBook)
    // }, [])



    // let navigate = useNavigate()
    // let isbn13 = 
    // const showBook = (book) => {
    //      navigate(`${book.primary_isbn13}`)
    // } 
    
    
    if (!props.books) {
        return <h2> Loading please wait... </h2>
    } else {
        return (
            <div><h1> Fiction Bestsellers </h1>
            <div className="book-container">
                
                {
                    props.books.map((book,index) => (
                        
                        // <div className="book-card" onClick={() => showBook(book)} key={index}>
                        <div className="book-card" key={index}>
                            <p>Ranked #{book.rank} this week </p>
                            <img src={book.book_image} alt="cover" className="cover-thumb"/>
                            <h3 className="book-title">{book.title}</h3>
                            <p>by: {book.author}</p>
                            <Link to={`/books/${book.primary_isbn13}`}>View details</Link>
                        </div>
                          
                    ))
                }

            </div>
            </div>
        )     
    }
}