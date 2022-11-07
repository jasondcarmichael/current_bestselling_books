import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


export default function BookDetails (props) {
    console.log(props)

    let { isbn13 } = useParams()
    console.log(isbn13)

    const [book, setBook] = useState([])


    useEffect(() => {
        let selectedBook = props.books.find(
         (book) => book.primary_isbn13 === isbn13
         ) 
        setBook(selectedBook)
        console.log(setBook)
    }, [book, isbn13])

    
    return book ? (
        <div className="detail">
          <div className="detail-header">
            <img src={book.book_image} alt={book.title} />
            <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1><em>{book.title}</em></h1>
          </div> 
        </div>
          <div className="info-wrapper">
            <div style={{display: 'flex', flexDirection:'column', justifyContent: 'space-between'}}>
              <h3>By {book.author}</h3>
              <p>Ranked #{book.rank} this week</p>
          </div>
            <p>{book.description}</p>
          </div>
        <div>
          <p><b>Rank Last Week:</b> {book.rank_last_week} </p>
          <p><b>Weeks on the List:</b> {book.weeks_on_list} </p>
          <p><b>Published by:</b> {book.publisher}</p>
          <p><b>ISBN #:</b> {book.primary_isbn13}</p>
        </div>
        <button>
          <Link to="/books"> Back to Books </Link>
        </button>
      </div>
    ) : null;

}