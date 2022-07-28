import React from "react";




import {
    ContainerProducer,
    DescriptionP, 
    ImgProducer, 
    Price, 
    SubContainer, 
    SubTitle, 
    TitleProducer,
    Button,
    ButtonText
} from '../styles'

export default function Description ({subtitle, imgproducer, titleproducer, description, price, button}) {

    return (
        
        <>
        <SubContainer>
            <SubTitle>{subtitle}</SubTitle>
            <ContainerProducer>
                <ImgProducer source={imgproducer}></ImgProducer>
                <TitleProducer>{titleproducer}</TitleProducer>
            </ContainerProducer>
            <DescriptionP>{description}</DescriptionP>
            <Price>{price}</Price>
            <Button>
                <ButtonText>{button}</ButtonText>
            </Button>
        </SubContainer>
        
        </>
    )
}