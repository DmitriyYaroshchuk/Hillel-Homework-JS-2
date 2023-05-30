import React from "react";
import Container from "../Container";
import error from './error.png'
import './errorBoundary.css'

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError() {
        return {
            hasError: true,
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo)
    }

    render() {
        const {children} = this.props;
        const {hasError} = this.state;
        return hasError ?
            <body>
                <div className='error'>
                    <Container>
                        <div className='error__container-inner'>
                            <div className='error__box-photo'>
                                <img src={error} alt='error' title='error'/>
                            </div>
                            <h1 className='error__title'>Fatal Error</h1>
                            <p className='error__text'>A fatal error has occurred, please contact support</p>
                        </div>
                    </Container>
                </div>
            </body>

            : children
    }
}