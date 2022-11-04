import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

export default function BookDetails (props) {
    console.log(props)

    // pass down data for the specified Book id(isbn#)
    // useParams grabs the value at the "id" param from our URL Location
    // with access to the "id" from params we can use it to find a specific from the books array that was passed down as props
    // Finally set the state of "book" to the book we've found to display when the component is mounted

    // useParams returns an object of key/value pairs of the dynamic params from the current URL

    const [selectedBook, setSelectedBook] = useState([])

    let { bookIsbn } = useParams()
    console.log(bookIsbn)

    useEffect(() => {
        let selectedBook = props.books[bookIsbn]
        setSelectedBook(selectedBook)
        console.log(selectedBook)
    }, [props.books, bookIsbn])




    // useEffect(() => {
    //     let selectedBook = props.books.find(
    //         (book) => bookIsbn === parseInt(bookIsbn)
    //     )
    //     setSelectedBook(selectedBook)
    //     console.log(selectedBook)
    // }, [props.books, bookIsbn])

    // useEffect(()=> {
    //     const getDetails = async () => {
    //         const response = await axios.get(`${BASE_URL}/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_NYT_KEY}`)
    //         console.log(response.data.results.books)
    //         setSelectedBook(response.data.results.books)
    //     }
    //     getDetails()
    // }, [])

    
    
    return selectedBook ? (
        <div className="detail">
        <div className="detail-header">
          <img src={selectedBook.book_image} alt={selectedBook.title} />
          <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1>{selectedBook.title}</h1>
          </div> 
        </div>
        <div className="info-wrapper">
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <h3>By {selectedBook.author}</h3>
          </div>
          <p>{selectedBook.description}</p>
        </div>
        <div>
            <p>Published by {selectedBook.publisher}</p>
            <p>Publication date: {selectedBook.published_date}</p>
            <p>ISBN: {selectedBook.primary_isbn13}</p>

        </div>
        <button>
          <Link to="/books"> Back to Books </Link>
        </button>
      </div>
    ) : null;

}