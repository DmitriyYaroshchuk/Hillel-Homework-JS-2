import Container from "../../containers/Container";
import './contacts.css'
import google from './images/google.svg'
import airbnb from './images/airbnb.svg'
import uberEats from './images/uber-eats.svg'
import amazon from './images/amazon.svg'
import meeting from './images/meeting.jpg'
import {Link} from "react-router-dom";

export default function Contacts() {
    return  (
        <div className='contacts'>
            <Container>
                <div className='contacts__container-inner'>
                    <div className='contacts__top-content'>
                        <div className='contacts__info'>
                            <h2 className='contacts__title'>Our Client</h2>
                            <p className='contacts__text'>Several selected clients, who already believe in our service.</p>
                        </div>
                        <div className='contacts__sponsors'>
                            <img src={google} alt='google' title='google'/>
                            <img src={airbnb} alt='airbnb' title='airbnb'/>
                            <img src={uberEats} alt='uberEats' title='uberEats'/>
                            <img src={amazon} alt='amazon' title='amazon'/>
                        </div>
                    </div>
                    <div className='contacts__bottom-content'>
                        <div className='contacts__data'>
                            <Link className='contacts__email' to='mailto: dima030215@gmail.com' target='_blank'>Email: dima030215@gmail.com</Link>
                            <Link className='contacts__phone' to='tel:+123123123' target='_blank'>Phone: +123123123</Link>
                            <Link className='contacts__location' to='https://www.google.com.ua/maps/place/%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C/@46.6913804,27.1197864,7z/data=!3m1!4b1!4m6!3m5!1s0x40c631819a8e1469:0x1f6bf068b57ed7c5!8m2!3d46.484583!4d30.7326!16zL20vMDVjMHJw?hl=ru&entry=ttu' target='_blank'>Location: Ukraine,Odessa</Link>
                        </div>
                        <div className='contacts__block-photo'>
                            <img src={meeting} alt='meeting' title='meeting'/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}