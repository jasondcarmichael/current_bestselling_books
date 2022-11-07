import { Route, Routes} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import Home from './Home'
import Books from './Books'
import BookDetails from './BookDetails'
import Nonfiction from './Nonfiction'


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
   
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/books" element={<Books books={books}/>} />
                <Route path="/books/:isbn13" element={ <BookDetails books={books}/>} />
                <Route path="/nonfiction" element={<Nonfiction nonfiction={nonfiction}/>} />
        


            </Routes>


        </div>
    )
}