import logo from '../../assets/logo.png';

import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';


const cesta = {
    topo: {
        title: "Detalhes da cesta"
    },
    description: {
        subtitle: "Cesta de Verduras",
        imgproducer: logo,
        titleproducer: "Jenny Jack Farm",
        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
        price: "R$50,00",
        button: "Comprar"
    },
    itens: {
        title: "Itens da cesta",
        list: [
          {
            nome: "Tomate",
            imagem: tomate,
          },
          {
            nome: "Brócolis",
            imagem: brocolis,
          },
          {
            nome: "Batata",
            imagem: batata,
          },
          {
            nome: "Pepino",
            imagem: pepino,
          },
          {
            nome: "Abóbora",
            imagem: abobora,
          }
        ]
      }
}
export default cesta;