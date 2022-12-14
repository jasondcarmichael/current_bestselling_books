import { Link } from 'react-router-dom'

export default function Books (props) {

    if (!props.books) {
        return <h2> Loading please wait... </h2>
    } else {
        return (
            <div>
                <Link to="/" className="back-btn" id="home-btn"> ◁ Home </Link>
                <h1> Top 15 Fiction </h1>
            
                <div className="book-container">
                
                {
                    props.books.map((book,index) => (
                        <div className="book-card" key={index}>

                            <h4 className="ranking">Ranked #{book.rank} this week </h4>

                            <img src={book.book_image} alt="cover" className="cover-thumb"/>

                            <h3 className="book-title">{book.title}</h3>

                            <p className="author">{book.author}</p>

                            <Link to={`/books/${book.primary_isbn13}`} className="view-details">View details ▻</Link>
                        </div>      
                    ))
                }
                </div>
            </div>
        )     
    }
}