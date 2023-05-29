import Container from "../../containers/Container";
import './footer.css'
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <Container>
                <div className='footer__container-inner'>
                    <div className='footer__info'>
                        <div className='footer__logo'>
                            <Link className='footer__logo-link' to='/' type='nav'>+!+Logo/</Link>
                        </div>
                        <p className='footer__text'>Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</p>
                    </div>
                    <div className='footer__content'>
                        <div className='footer__box footer__box-do'>
                            <h3 className='footer__subtitle'>What We Do</h3>
                            <ul className='footer__list'>
                                <li className='footer__item'>
                                    <Link className='footer__link' to='#'>Web Design</Link>
                                </li>
                                <li className='footer__item'>
                                    <Link className='footer__link' to='#'>App Design</Link>
                                </li>
                                <li className='footer__item'>
                                    <Link className='footer__link' to='#'>Social Media</Link>
                                </li>
                                <li className='footer__item'>
                                    <Link className='footer__link' to='#'>Manage Market Analysis Project</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='footer__box footer__box-company'>
                            <h3 className='footer__subtitle'>Company</h3>
                            <ul className='footer__list'>
                                <li className='footer__item'>
                                    <Link className='footer__link' to='#'>About Us</Link>
                                </li>
                                <li className='footer__item'>
                                    <Link className='footer__link' to='#'>Career</Link>
                                </li>
                                <li className='footer__item'>
                                    <Link className='footer__link' to='#'>Become Investor</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='footer__box footer__box-support'>
                            <h3 className='footer__subtitle'>Support</h3>
                            <ul className='footer__list'>
                                <li className='footer__item'>
                                    <Link className='footer__link' to='#'>FAQ</Link>
                                </li>
                                <li className='footer__item'>
                                    <Link className='footer__link' to='#'>Policy</Link>
                                </li>
                                <li className='footer__item'>
                                    <Link className='footer__link' to='#'>Business</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='footer__box footer__box-contact'>
                            <h3 className='footer__subtitle'>Contact</h3>
                            <ul className='footer__list'>
                                <li className='footer__item'>
                                    <Link className='footer__link' to='#'>WhatsApp</Link>
                                </li>
                                <li className='footer__item'>
                                    <Link className='footer__link' to='#'>Support 24</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </Container>
        </footer>
    )
}