import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Books () {

    // we need to create a state for our data
    const [books, setBooks] = useState({})


    useEffect(()=> {
        const getData = async () => {
            const response = await axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=J7nIpJdXUz0qOYrBVbZGKKBzQAN0Y7dQ')
            console.log(response.data)
            setBooks(response.data)
        }

        getData()

    }, [])

    console.log(books)



    // wee need to set the state of our data

    /// wee need to see our data

    // we need to make a guard operator
    // so if data takes a few seconds
    // our site doesnt break

    if (!books) {
        return <h2> Loading please wait </h2>
    } else {
        return (
            <div>
                <h3>Title: {books.title}</h3>
                <h4>Author: {books.author}</h4>
            </div>
        )
    }
}