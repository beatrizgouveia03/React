import { Link } from "react-router-dom"
import styles from '../styles/NavBar.css'

function NavBar() {
    return(
        <ul className="list">
            <li className='item'>
                <Link to="/">Home</Link>
            </li>
            <li className='item'>
                <Link to="/empresa">Empresa</Link>
            </li>
            <li className='item'>
                <Link to="/contato">Contato</Link>
            </li>
        </ul>
    )
}

export default NavBar