import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


export default function BookDetails (props) {
    console.log(props)

    const [bookInfo, setBookInfo] = useState([])
    
    // let { index } = useParams()
    // useEffect(() => {
    //     let selectedBookInfo = props.books[index]
    //     setBookInfo(selectedBookInfo)
    //     console.log(setBookInfo)
    // }, [props.books, index])




    let { primary_isbn13 } = useParams()
    console.log(primary_isbn13)

    

    useEffect(() => {
        let selectedBookInfo = props.books.get(
         (bookInfo) => bookInfo.primary_isbn13 === parseInt(primary_isbn13)
         ) 

        setBookInfo(selectedBookInfo)
        console.log(setBookInfo)
    }, [props.books, primary_isbn13])

    
    return bookInfo ? (
        <div className="detail">
        <div className="detail-header">
          <img src={bookInfo.book_image} alt={bookInfo.title} />
          <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1>{bookInfo.title}</h1>
          </div> 
        </div>
        <div className="info-wrapper">
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <h3>By {bookInfo.author}</h3>
          </div>
          <p>{bookInfo.description}</p>
        </div>
        <div>
            <p>Published by {bookInfo.publisher}</p>
            <p>Publication date: {bookInfo.published_date}</p>
            <p>ISBN: {bookInfo.primary_isbn13}</p>

        </div>
        <button>
          <Link to="/books"> Back to Books </Link>
        </button>
      </div>
    ) : null;

}