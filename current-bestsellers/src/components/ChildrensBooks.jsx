import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function ChildrensBooks (props) {
    let navigate = useNavigate()

    const showPictureBooks = (book) => {
        navigate(`${book.primary_isbn13}`)
    }
    
    if (!props.pictureBooks) {
        return <h2> Loading please wait... </h2>
    } else {
        return (
            <div><h1> Children's Picture Book Bestsellers </h1>
            <div className="book-container">
                
                {
                    props.pictureBooks.map((book, index) => (
                        <div className="book-card" onClick={() => showPictureBooks (book)} key={index}>

                            <p>Ranked #{book.rank} this week </p>
                            <img src={book.book_image} alt="cover" className="cover-thumb"/>
                            <h3 className="book-title">{book.title}</h3>
                            <p>by: {book.author}</p>
                            <Link to={`/nonfiction/${book.primary_isbn13}`}>View details</Link>
                        
                           
                        </div>
                          
                    ))
                }

            </div>
            </div>
        )     
    }
}