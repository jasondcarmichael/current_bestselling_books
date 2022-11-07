import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div className="nav">
            <Link to="/"> HOME </Link>
            <Link to="/books"> FICTION </Link>
            <Link to="/nonfiction"> NONFICTION </Link>
            <Link to="/childrensbooks"> CHILDREN'S BOOKS </Link>

        </div>
    )
}