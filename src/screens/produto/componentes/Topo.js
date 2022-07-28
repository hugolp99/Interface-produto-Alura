import React from "react";
import { Container, Title , ImgTopo} from "../styles";


import topo from '../../../../assets/topo.png'

export default function Topo({title}) {

    return (
        <>
            <Container>
                <ImgTopo source={topo} />
                <Title>{title}</Title>
            </Container>
        </>
    )
}