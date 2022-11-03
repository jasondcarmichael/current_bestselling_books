import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import Books from './Books'

export default function Main () {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/books" element={<Books/>}/>


            </Routes>


        </div>
    )
}