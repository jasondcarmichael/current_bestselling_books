import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div className="nav">
            <Link to="/"> Home </Link>
            <Link to="/books"> Fiction </Link>
            <Link to="/nonfiction"> Nonfiction </Link>
            <Link to="/childrensbooks"> Children's Books </Link>

        </div>
    )
}