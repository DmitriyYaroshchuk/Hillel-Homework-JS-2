import Container from "./Container";
import InnerContainer from "../InnerContainer/InnerContainer";
import Title from "../../components/Title/Title";
import SwapiForm from "../../components/Form/SwapiForm";
import Result from "../../components/Result/Result";
import Wrapper from "../Wrapper/Wrapper";

export default function SwapiContainer() {
    return (
        <Wrapper>
            <Container>
                <InnerContainer>
                    <Title text="SWAPI"></Title>
                    <SwapiForm/>
                    <Result/>
                </InnerContainer>
            </Container>
        </Wrapper>
    )
}