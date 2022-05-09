// importamos o REACT para o nosso componente pois ele faz com que possamos usar o JSX ( que é como se fosse o html do mobile)
import React from 'react'


/*
View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls
*/

//importamos a VIEW para usar a tag como um container
import { View, StyleSheet } from 'react-native'

/*
Usado para usar componentes textuais em jsx
import { Text } from 'react-native'
*/

/*
Quando os componentes não foram exportados como padrão,(como em Multi os componentes 1 e 2) precisa usar o par de chaves para ler e o nome importa, precisa ser o mesmo nome do componente da função nomeada.
Quando é exportado como padrão (como o Componente Oficial), eu posso escolher como vou chamar a importação desse componente( no caso Primeiro)
*/

//import CompPadrao, { Comp1, Comp2 } from './componentes/Multi'
//import Primeiro from './componentes/Primeiro'
//import MaiorMenor from './componentes/MinMax'
//import Desafio from './componentes/DesafioAleatorio'
//import Title from './componentes/Titulo'
//import PrimeiroBotao from './componentes/Botao'
//import Contador from './componentes/Contador'
//import Nome from './componentes/AlteraNome'
import Dad from './componentes/direta/Pai'



// Algumas maneiras( sintaxes ) de fazer as declarações / 

/* Usando Arrow Function
    export default () =><View> <Primeiro></Primeiro></View>
*/

/* Em um componente vazio pode abrir e fechar na mesma tag
export default () => <View><Primeiro/></View>
*/

/* Function Declaration
function App(){
    return <Text>Primeiro Componente</Text>
}
export default App
*/

/* Function Expression
 const App = function(){
    return <Text>Primeiro Componente!</Text>
}
export default App
*/

/* Função não nomeada?
export default function () {
    return <Text>Primeiro Componente!!</Text>
}
*/

/*Arrow Function
export default() => {
    return <Text>Primeiro Componente !!!</Text>
}
*/

// export default () => <Text>Primeiro Componente !!!!!</Text>

// Todos as opcões são componentes funcionais (baseados em função)
// Também existem componetes baseados em classes ( que em JS também são funções)
// Componentes são representados por tags
// 

/* Pode colocar dentro de parentes para fazer uma expressão */
// CORPO DA FUNÇÃO - só precisa de corpo funções com mais de uma expressao
// Se a função for precisar de retorno tem que usar {chaves} 
// export default () => (<View><Primeiro/></View>)

export default () => (
    // par de chaves dentro de componentes textual é interpretado como JS
    // <Text> { 1 + 1 } </Text> - pelo visto isso serve para view tb?
    <View style={style.App}>


        {/**Importei e estou instanciando o componente pai, e ele vai ter acesso ao componente filho */}
        <Dad></Dad>

        

        {/* testando useStates (Não userStates)
        <Nome name1="Maria" name2="João"></Nome>
        <Nome/>
        */}

        {/** chaves se não for string é porque quando são valores tipos primitivos , mas eu pesquisei e string também é um tipo primitivo?*/}

        {/** 
        <Contador valorInicial= {100} passo={2}></Contador>
        <Contador/>
        */}

        {/* <Title principal="Cadastro de Produtos" secundario="Tela de casdastro"></Title>

        <PrimeiroBotao/> */}



        {/**Tudo que esta dentro de chaves é lido como um comentário JS
         * Tudo isso dentro da view são instancias de componentes
         * Se eu quiser passar parâmetros números uso as chaves , que entende como JS.
         * passar parametros é como passar atributos em HTML, mas não esquece de usar chaves se não for string.
         */}

        {/*
        <MaiorMenor Max="3" Min="1"/>
        <MaiorMenor Max={12} Min={6}/>
        <CompPadrao></CompPadrao>
        <Comp1></Comp1>
        <Comp2></Comp2>
        <Primeiro />
        */}

        {/**
         * Cada componente criado pode ser instanciado em vários lugares diferentes. Nesta View por exempo eu tenho a instância de vários componentes diferentes e também componentes repetidos.
         */}

        {
            //   <Desafio Start={100} End={200}></Desafio>
        }


    </View>

)

// Dentro dos parametros do create passar um objeto, por isso tem o par de chaves
// CRIAÇÃO de ESTILO LOCAL? Porque criar estilo local e não criar tudo global?
// se é uma const , que não pode ser alterada porque eu consegui alterar várias vezes essas coisas aqui dentro, R: Ela só não pode deixar de ser StyleSheet?
const style = StyleSheet.create({
    App: {
        // backgroundColor: '#A00',
        flexGrow: 1,
        justifyContent: "center",// eixo principal - a coluna para mobile
        alignItems: "center", // eixo cruzado - a linha para 
        padding: 20
    }
})
