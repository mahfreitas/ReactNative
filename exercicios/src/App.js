// importamos o REACT para o nosso componente pois ele faz com que possamos usar o JSX ( que é como se fosse o html do mobile)
import React from 'react'


/*
View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls
*/
//importamos a VIEW para usar a tag como um container
import { View  , StyleSheet} from 'react-native'

/*
Usado para usar componentes textuais
import { Text } from 'react-native'
*/

/*
Quando os componentes não foram exportados como padrão,(como em Multi os componentes 1 e 2) precisa usar o par de chaves para ler e o nome importa, precisa ser o mesmo nome do componente da função nomeada.
Quando é exportado como padrão (como o Componente Oficial), eu posso escolher como vou chamar a importação desse componente( no caso X)
*/
import  CompPadrao ,{ Comp1 , Comp2 } from './componentes/Multi'
import  Primeiro from './componentes/Primeiro'


/**
 * Algumas maneiras( sintaxes ) de fazer as declarações / 
 */
// export default () =><View> <Primeiro></Primeiro></View>

// export default () => <View><Primeiro/></View>

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

/*
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
    // <Text> { 1 + 1 } </Text> 
    <View style={style.App}>
        <CompPadrao></CompPadrao>
        <Comp1></Comp1>
        <Comp2></Comp2>
        <Primeiro />
    </View>
    
)

// Dentro dos parametros do create passar um objeto, por isso tem o par de chaves
const style = StyleSheet.create({
    App: {
        // backgroundColor: '#A00',
        flexGrow: 1,
        justifyContent: "center" ,// eixo principal - a coluna para mobile
        alignItems: "center" // eixo cruzado - a linha para 
    }
})
