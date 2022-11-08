import { Route, Routes} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import Home from './Home'
import Books from './Books'
import BookDetails from './BookDetails'
import Nonfiction from './Nonfiction'
import NonfictionDetails from './NonfictionDetails'
import ChildrensBooks from './ChildrensBooks'
import ChildrensDetails from './ChildrensDetails'


export default function Main () {

    const [books, setBooks] = useState([])

    useEffect(()=> {
        const getData = async () => {
            const response = await axios.get(`${BASE_URL}/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_NYT_KEY}`)
            console.log(response.data.results.books)
            setBooks(response.data.results.books)
        }
        getData()
    }, [])
    console.log(books)

    const [nonfiction, setNonfiction] = useState([])

    useEffect(()=> {
        const getData = async () => {
            const response = await axios.get(`${BASE_URL}/lists/current/hardcover-nonfiction.json?api-key=${process.env.REACT_APP_NYT_KEY}`)
            console.log(response.data.results.books)
            setNonfiction(response.data.results.books)
        }
        getData()
    }, [])
    console.log(nonfiction)

    const [pictureBooks, setPictureBooks] = useState([])

    useEffect(()=> {
        const getData = async () => {
            const response = await axios.get(`${BASE_URL}/lists/current/picture-books.json?api-key=${process.env.REACT_APP_NYT_KEY}`)
            console.log(response.data.results.books)
            setPictureBooks(response.data.results.books)
        }
        getData()
    }, [])
    console.log(pictureBooks)
   
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home books={books}
                                                // nonfiction={nonfiction}
                                                // pictureBooks={pictureBooks}
                                                />}/>
                <Route path="/books" element={<Books books={books}/>} />
                <Route path="/books/:isbn13" element={ <BookDetails books={books[0]} />} />
                <Route path="/nonfiction" element={<Nonfiction nonfiction={nonfiction}/>} />
                <Route path="/nonfiction/:isbn13" element={ <NonfictionDetails nonfiction={nonfiction}/>} />
                <Route path="/childrensbooks" element={<ChildrensBooks pictureBooks={pictureBooks}/>} />
                <Route path="/childrensbooks/:isbn13" element={<ChildrensDetails pictureBooks={pictureBooks}/>} />
        


            </Routes>


        </div>
    )
}