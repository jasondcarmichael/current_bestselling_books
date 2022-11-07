import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Nonfiction (props) {    

    let navigate = useNavigate()

    const showNonfiction = (book) => {
        navigate(`${book.primary_isbn13}`)
    }
    
    if (!props.nonfiction) {
        return <h2> Loading please wait... </h2>
    } else {
        return (
            <div>
                <Link to="/home" className="back-btn"> ◁ Home </Link>
                <h1> Nonfiction Bestsellers </h1>
            <div className="book-container">
                
                {
                    props.nonfiction.map((book, index) => (
                        <div className="book-card" onClick={() => showNonfiction(book)} key={index}>

                            <p>Ranked #{book.rank} this week </p>
                            <img src={book.book_image} alt="cover" className="cover-thumb"/>
                            <h3 className="book-title">{book.title}</h3>
                            <p>by: {book.author}</p>
                            <p>View details ▷ </p>
                        
                           
                        </div>
                          
                    ))
                }

            </div>
            </div>
        )     
    }
}