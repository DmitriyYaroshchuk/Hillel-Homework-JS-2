import Container from "./Container";
import InnerContainer from "../InnerContainer/InnerContainer";
import Title from "../../components/Title/Title";
import SwapiForm from "../../components/Form/SwapiForm";
import Result from "../../components/Result/Result";
import Wrapper from "../Wrapper/Wrapper";
import {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {swapiActions, swapiSelectors} from "../../../engine/core/swapiSlice";

export default function SwapiContainer() {
    const dispatch = useDispatch();
    const urlSwapi = useSelector(swapiSelectors.link);

    const formRef = useRef(null);
    // const [ id, setId ] = useState(null);
    // const [ content, setContent ] = useState(null);
    const onSubmit = (event) => {
        const url = `${formRef.current.action}${event.urlInput}`;
        dispatch(swapiActions.getLink(url));


        // const parseURL = url.split('/');
        // const id = parseURL[5];
        // const content = parseURL[4];

        dispatch(swapiActions.getLoader(true))
        fetch(urlSwapi)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                console.log('response: ', response);
                return response.json();
            })
            .then(data => {
                console.log('data:',  data);
                // setId(id);
                // setContent(content);
                dispatch(swapiActions.getData(data));
                dispatch(swapiActions.getLoader(false))
            })
            .catch(error => {
                console.error('Error: ', error);
                dispatch(swapiActions.getLink(undefined));
                // setId(undefined);
                // setContent(undefined);
                dispatch(swapiActions.getData(undefined));
                dispatch(swapiActions.getLoader(false))
            })
    }
    return (
        <Wrapper>
            <Container>
                <InnerContainer>
                    <Title text="SWAPI"></Title>
                    <SwapiForm formRef={formRef} onSubmit={onSubmit}/>
                    <Result
                        // id={id}
                        // content={content}
                    />
                </InnerContainer>
            </Container>
        </Wrapper>
    )
}