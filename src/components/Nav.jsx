import {Link} from 'react-router-dom'
import { NavStyle } from "../css/NavStyle"
import FormulaE from '../assets/FormulaE.png'
import { RxAvatar } from 'react-icons/rx'

const Nav =()=>{
    return(
        <>
        <NavStyle>
        <header className="nav">
            <div className="container">
                <img src={FormulaE} className="logo" alt="Logo Formula E" />
                <RxAvatar className='avatar'/>
            </div>  
        </header>
        <section className='links'>
            <ul>
                <Link to="/" className="navLink">Home</Link>
                <Link to="/sobre" className="navLink">Sobre</Link>
                <Link to="/pilotos" className="navLink">Pilotos</Link>
                <Link to='/login' className="navLink">Login</Link>
            </ul>   
        </section>
        </NavStyle>
        </>
    )
}
export default Nav