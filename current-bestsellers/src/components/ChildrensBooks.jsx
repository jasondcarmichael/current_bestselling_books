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
            <div>
                <Link to="/" className="back-btn" id="home-btn"> ◁ Home </Link>
                <h1> Top 10 Children's Picture Books </h1>
            
                <div className="book-container">
                
                    {
                        props.pictureBooks.map((book, index) => (
                            <div className="book-card" onClick={() => showPictureBooks (book)} key={index}>

                            <h4 className="ranking">Ranked #{book.rank} this week </h4>

                            <img src={book.book_image} alt="cover" className="cover-thumb"/>

                            <h3 className="book-title">{book.title}</h3>

                            <p>{book.contributor}</p>
                            
                            <p className="view-details"> View details ▻ </p>
                        
                            </div>    
                        ))
                    }
                </div>
            </div>
        )     
    }
}