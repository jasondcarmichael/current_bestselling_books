import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function NonfictionDetails (props) {
    console.log(props)

    let { isbn13 } = useParams()
    console.log(isbn13)

    const [book, setBook] = useState([])


    useEffect(() => {
        let selectedBook = props.nonfiction.find(
         (book) => book.primary_isbn13 === isbn13
         ) 
        setBook(selectedBook)
        console.log(setBook)
    }, [book, isbn13])

    
    return book ? (
        <div className="detail">
          <div className="detail-header">
            <img src={book.book_image} alt={book.title} />
          </div>
          
          <div className="info-wrapper">
            <h2><em>{book.title}</em></h2>
            <h3>By {book.author}</h3>
            <p>Ranked #{book.rank} this week</p>
            <p><b>Summary:</b> {book.description}</p>
         
            <div className="pub-info">
              <p><b>Rank Last Week:</b> {book.rank_last_week} </p>
              <p><b>Weeks on the List:</b> {book.weeks_on_list} </p>
              <p><b>Published by:</b> {book.publisher}</p>
              <p><b>ISBN #:</b> {book.primary_isbn13}</p>
              <Link to="/nonfiction" className="back-btn"> ◁ Back to Books </Link>
            </div>
          </div>
          


          
      </div>
    ) : null;

}