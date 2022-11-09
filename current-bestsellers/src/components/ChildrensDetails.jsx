import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function ChildrensDetails (props) {
    console.log(props)

    let { isbn13 } = useParams()
    console.log(isbn13)

    const [book, setBook] = useState([])

    useEffect(() => {
        let selectedBook = props.pictureBooks.find(
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
            <h3 className="detail-description">Ranked # {book.rank} on this week's bestsellers list is {book.author}'s latest book <em>{book.title}</em>. Last week, it was ranked # {book.rank_last_week} and has been on the list for {book.weeks_on_list} weeks straight.</h3>

            <h5>CONTRIBUTOR</h5>
            <p className="details">{book.contributor_note}</p>

            <h5>SUMMARY</h5>
            <p className="details">{book.description}</p>
        
            <div className="pub-info">
              <h5 >PUBLISHER</h5>
              <p className="details">{book.publisher}</p>

              <h5>ISBN #</h5>
              <p className="details">{book.primary_isbn13}</p>
              
              <h5>CURIOUS?</h5>
              <p className="details">Visit Amazon to purchase, read reviews, and learn more about  <a href={book.amazon_product_url} target="_blank" title={book.amazon_product_url}>{book.title}</a></p>

              <Link to="/childrensbooks" className="back-btn"> ◁ Back to Books </Link>
              </div>
          </div>
        </div>
    ) : null;
}