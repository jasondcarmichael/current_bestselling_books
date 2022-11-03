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
        return <h2> Loading please wait </h2>
    } else {
        return (
            books.map((book) => (
                <div key={book.isbn}>
                    <h3>Title: {book.title}</h3>
                    <h4>Author: {book.author}</h4>
                </div> ))
        )
    }
}