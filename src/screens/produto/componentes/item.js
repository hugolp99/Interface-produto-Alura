import React from "react";

import { ContainerProducts, ImgProducer, ProductsText} from "../styles";


export default function Item({ item: { nome , imagem }}) {

    return <ContainerProducts>
    <ImgProducer source={imagem} />
    <ProductsText>{ nome }</ProductsText>
</ContainerProducts>

}