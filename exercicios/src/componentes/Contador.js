import React, { useState }from 'react' 
// UseState altera e notifica a interface gráfica sobre a alteração no momento certo
import { Text, Button } from 'react-native'
import Estilo from './estilo'

export default ({valorInicial= 0, passo= 4 }) => { // usando destructuring para extrair os valores de props e passando valores padrão para o caso de não ser passado nenhum atributo da instancia do componente.

    // const { valorInicial , passo } = props - opção de utilização de destructuring

    //Este código faz o incremento, mas não altera a interface gráfica
    /*
    let numero = props.valorInicial
    const inc = () => numero++
    const dec = () => {
        numero--
        console.warn(numero)
    }
    */

    //Alterando a interface gráfica a partir do estado atual da variável

    const [valor,setValor] = useState(valorInicial)
    // de acordo com o destructturing valor esta recebendo o valor inicial e setvalor
    

    const inc = () => setValor(valor + passo)
    const dec = () => setValor(valor - passo)

    return (
        <>
            <Text style={Estilo.txtG}>{valor}</Text>
            <Button title="SOMAR 1" onPress={inc} />
            <Button title="SUBTRAIR 1" onPress={dec} />
        </>
    )
}

// ABOUT useState

/**
 * começou usando o destructuring de um array, porque?
 * 
 * function useState(inicial){
 *      return [inicial,function(){console.log("just a test")}]
 * }
 * 
 *  porque useState é uma função que retorna um array, onde na primeira posicão temos uma variável e na segunda posição temos uma função que altera a primeira posição.
 *         
 * uma const vai receber a função useState, que vai retornar um array
 * 
 * const array = useState(10)
 * 
 * então na posicão inicial teremos o valor passado como parametro para a função e na segunda posicão teremos a função.
 * 
 * se chamar a segunda posicão do array que é uma funcão ela vai retornar o console.
 * 
 * const array[1]()
 * 
 * nesse caso, se eu tiver um array com duas posições que vai receber o useState
 * 
 * const [valor , setValor] = useState("teste")
 * valor vai receber teste e set valor vai receber just a test
 * porque a primeira posição recebe o valor da variável que eu passei como parametro e a segunda posição recebe o retorno da função da segunda posição, que neste caso é um console, mas na verdade vai ser uma funcão que altera o valor da variável que esta na primeira posição.
 */