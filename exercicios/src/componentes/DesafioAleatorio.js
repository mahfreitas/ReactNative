import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'


// MEU CÓDIGO DO DESAFIO - O QUE ESTÁ ERRADO?
/**
 * Se propriedades são somente para leitura, é errado eu usar ela diretamente na função math e retornar na tela?
 * Nesse caso eu também deveria ter criado uma nova variável para usar esses valores?
 */

export default (props)=>{
    // essa função veio da documentação do JS no site MDN 
    //Math.floor(Math.random()* (props.End - props.Start) + props.Start)
    console.warn(props)
    return(<Text style={Estilo.txtGG}>{Math.floor(Math.random()* (props.End - props.Start) + props.Start)}</Text>)

}

//PROPRIEADES SÃO SOMENTE LEITURA // PROPRIEDADES SÃO SOMENTE LEITURA
// você não consegue mexer nos atributos que você recebeu a partir de props

/*
    Não fazer alterações diretamente nas propriedades e nem em eventuais variáveis que receberem o valor de props.(pois essas aceitam alterações)
    Para fazer qualquer tipo de processamento crie novas variáveis, mas tenha em mente que essas variáveis não são REATIVAS, quer dizer que mesmo que você altere a váriável não vai acontecer nenhuma alteração no seu componente(na interface gráfica, no que nós vemos, no que é mostrado na tela)
    Para alterar o que é mostrado na View do seu componente , são outras soluções (Estado de um componente baseado em classe ou hooks- não estudado ainda)
 */

/** Resolução do professor 

export default props => {
    const delta = props.End - props.Start + 1
    const aleatorio = parseInt(Math.random() * delta ) + props.Start
    return (
        <Text>
            O valor aleatório é {aleatorio}
        </Text>
    )
}
*/

/**
 * Destructuring assignment
 * 
 * ({ a, b } = { a: 10, b: 20 });
    console.log(a); // 10
    console.log(b); // 20

// Stage 4(finished) proposal
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
    console.log(a); // 10
    console.log(b); // 20
    console.log(rest); // {c: 30, d: 40}
 */
// UHUUU



/**
 * Primeira Opção usando DESTRUCTURING
 * export default props => {

    // Precisa usar os mesmos nomes que vem de props, quando eu troquei recebeu undefined... pesquisar!
    
    const {Start , End } = props
     // agora eu passei os parametros de props para max e min  usando o conceito de destructuring não precisa mais usar props
     
    console.warn(Start ,End)
    const delta = End - Start + 1
    const aleatorio = parseInt(Math.random() * delta ) + Start
    return (
        <Text>
            O valor aleatório é {aleatorio}
        </Text>
    )
}
 */

/**
 * Segunda opção usando Destructuring
 * // No lugar de passar props como parâmetro , já pode passar direto os atributos entre {}
export default ({Start, End}) => {
    const delta = End - Start + 1
    const aleatorio = parseInt(Math.random() * delta ) + Start
    return (
        <Text>
            O valor aleatório é {aleatorio}
        </Text>
    )
}
 */

