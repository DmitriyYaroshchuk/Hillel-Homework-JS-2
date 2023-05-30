import Container from "../../containers/Container";
import './header.css'
import {Link} from "react-router-dom";
import {useEffect} from "react";

export default function Header(props) {
    const { handleError } = props;
    return (
        <header>
            <Container>
                <div className='header__container-inner'>
                    <div className='header__logo'>
                        <Link className='header__logo-link' to='/' type='nav'>Logo</Link>
                    </div>
                    <nav className='header__nav'>
                        <ul className='header__list'>
                            <li className='header__item'>
                                <Link className='header__item-link' to='/' type='nav'>Home</Link>
                            </li>
                            <li className='header__item'>
                                <Link className='header__item-link' to='/contacts' type='nav'>Contacts</Link>
                            </li>
                            <li className='header__item'>
                                <Link className='header__item-link' to='/about' type='nav'>About</Link>
                            </li>
                        </ul>
                    </nav>
                    <button onClick={handleError} className='header__button'>Call Error !</button>
                </div>
            </Container>
        </header>
    )
}