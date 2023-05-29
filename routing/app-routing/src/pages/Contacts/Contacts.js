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
                            <Link className='contacts__email' to='mailto: dima030215@gmail.com'>Email: dima030215@gmail.com</Link>
                            <Link className='contacts__phone' to='tel:+123123123'>Phone: +123123123</Link>
                            <Link className='contacts__location' to='Ukraine,Odessa'>Location: Ukraine,Odessa</Link>
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