import React from 'react';
import { FlatList } from 'react-native';
import Description from './componentes/Description';
import Item from './componentes/item';
import Topo from './componentes/Topo';
import { TitleProducts } from './styles';



const Produto = ({topo, description, itens}) => {
    return (
        <>
            <FlatList
                data={itens.list}
                renderItem={Item}
                keyExtractor={({ nome }) => nome}
                ListHeaderComponent={() => {
                    return <>
                    <Topo {...topo} />
                    <Description {...description} />
                    <TitleProducts>{itens.title}</TitleProducts>
                    </>
                }}
            />
            
            
        </>
    )
};

export default Produto;