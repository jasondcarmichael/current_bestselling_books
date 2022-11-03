import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

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


    if (!books) {
        return <h2> Loading please wait... </h2>
    } else {
        return (
        
            books.map((book) => (
                <div className="book-grid">
                <div className="book-card" key={book.isbns[0].isbn10}>
                    <img src={book.book_image} alt="cover" className="cover-thumb"/>
                    <p>Ranked #{book.rank} this week </p>
                    <h3 className="book-title">{book.title}</h3>
                    <h4>by: {book.author}</h4>
                </div>
                </div>
                ))
            
        )
    }
}