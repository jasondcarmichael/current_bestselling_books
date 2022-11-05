import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { useNavigate } from 'react-router-dom'
import BookDetails from './BookDetails'

export default function Books () {

    const [books, setBooks] = useState([])

    useEffect(()=> {
        const getData = async () => {
            const response = await axios.get(`${BASE_URL}/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_NYT_KEY}`)
            console.log(response.data.results.books)
            setBooks(response.data.results.books)
        }
        getData()
    }, [])

    console.log(books)

    let navigate = useNavigate()

    const showBook = (book) => {
       
        navigate(`${book.primary_isbn13}`)
        console.log(navigate)
    }
    

    if (!books) {
        return <h2> Loading please wait... </h2>
    } else {
        return (
            <div><h1> Fiction Bestsellers </h1>
            <div className="book-container">
                
                {
                    books.map((book) => (
                        <div>
                        <div className="book-card" onClick={() => showBook(book)} key={book.primary_isbn13}>
                            <p>Ranked #{book.rank} this week </p>
                            <img src={book.book_image} alt="cover" className="cover-thumb"/>
                            <h3 className="book-title">{book.title}</h3>
                            <p>by: {book.author}</p>
                            {/* <button onClick={() => showBook(book)} key={book.primary_isbn13} type="button"> Learn more </button> */}
                            
                        </div>
                            <BookDetails key={book.primary_isbn10} books={books} />
                        </div>
                    ))
                }

            </div>
            </div>
        )     
    }
}