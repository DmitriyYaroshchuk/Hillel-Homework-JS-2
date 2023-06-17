import Wrapper from "../containers/Wrapper/Wrapper";
import Container from "../containers/Container/Container";
import SwapiForm from "../components/Form/SwapiForm";
import Result from "../components/Result/Result";
import Title from "../components/Title/Title";
import InnerContainer from "../containers/InnerContainer/InnerContainer";
import "../../fonts.css";
import "../../reset.css"
import {useRef, useState} from "react";


function App() {
    const formRef = useRef(null);
    const [ loader, setLoader ] = useState(false);
    const [ id, setId ] = useState(null);
    const [ content, setContent ] = useState(null);
    const [ response, setResponse ] = useState(null);
    const onSubmit = (event) => {
        const url = `${formRef.current.action}${event.urlInput}`
        const parseURL = url.split('/');
        const id = parseURL[5];
        const content = parseURL[4];
        setId(id);
        setContent(content);
        // console.log(parseURL);
        // console.log(event.urlInput)
        // console.log(formRef.current.action);
        // console.log(url)
        fetch(url)
            .then(response => {
                setLoader(true)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                console.log('response: ', response);
                return response.json();
            })
            .then(data => {
                console.log('data:',  data)
                setLoader(false);
                setResponse(JSON.stringify(data, null, 2))
            })
            .catch(error => {
                console.error('Error: ', error)
            })
    }
    return (
        <>
            <Wrapper>
                <Container>
                    <InnerContainer>
                        <Title text="SWAPI"></Title>
                        <SwapiForm formRef={formRef} onSubmit={onSubmit}/>
                        <Result
                            loader={loader}
                            id={id}
                            content={content}
                            response={response}
                        />
                    </InnerContainer>
                </Container>
            </Wrapper>
        </>

    );
}

export default App;
