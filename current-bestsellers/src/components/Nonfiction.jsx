export default function Nonfiction (props) {    
    
    if (!props.nonfiction) {
        return <h2> Loading please wait... </h2>
    } else {
        return (
            <div><h1> Nonfiction Bestsellers </h1>
            <div className="book-container">
                
                {
                    props.nonfiction.map((book, index) => (
                        <div className="book-card" key={index}>

                            <p>Ranked #{book.rank} this week </p>
                            <img src={book.book_image} alt="cover" className="cover-thumb"/>
                            <h3 className="book-title">{book.title}</h3>
                            <p>by: {book.author}</p>
                            {/* <Link to={`/books/${book.primary_isbn13}`}>View details</Link> */}
                        
                           
                        </div>
                          
                    ))
                }

            </div>
            </div>
        )     
    }
}