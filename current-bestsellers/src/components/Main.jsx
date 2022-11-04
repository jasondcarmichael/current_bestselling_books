import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import Books from './Books'
import BookDetails from './BookDetails'

export default function Main (props) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/books" element={<Books/>}/>
                <Route path="/books/:id" element={ <BookDetails books={props.books} />} />


            </Routes>


        </div>
    )
}