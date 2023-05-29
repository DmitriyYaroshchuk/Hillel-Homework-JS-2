import Container from "../../containers/Container";
import people from './people.jpg'
import './about.css'

export default function About() {
    return (
        <div className='about'>
            <Container>
                <div className='about__container-inner'>
                    <div className='about__info'>
                        <h2 className='about__title'>A Digital Product Agency</h2>
                        <p className='about__text'>Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</p>
                        <button className='about__button'>Contact Now</button>
                    </div>
                    <div className='about__block-photo'>
                        <img src={people} alt='people' title='people'/>
                    </div>
                </div>
            </Container>
        </div>
    )
}