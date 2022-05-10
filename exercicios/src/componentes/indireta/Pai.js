import React, { useState } from 'react'
import { Text } from 'react-native'
import Son from './Filho'
import Estilo from '../estilo'

export default props  => {

     //para fazer a alteração na interface gráfica no momento certo useState
     // a função da segunda posição do array deve ser usada para fazer a alteração da primeira posição, dessa maneira a interface gráfica será notificada no momento certo de fazer a atualização.
    const [ texto, setTexto ] = useState('')// Idem num
    const [num, setNum] = useState(0)// num é a variável que recebe as atualizações, ela que deve ser exibida no componente textutal
   

    // quando o componente filho chamar essa função passando os valores como parametro, o função que esta na segunda posição do array que recebeu useState , é chamada e recebe um valor para alterar a primeira posição do array, que vai ser exibido na componente textual.

    function exibirNumero(numero , texto) {
        setNum(numero)
        setTexto(texto)
    }

    // para receber informações do filho, é usado o conceito de Callback???
    // o pai passa para o filho a referencia de uma função, e o filho vai chamar essa função passando como parametro a informação que ele quer devolver para o pai.
    return (
        <>
            <Text style={Estilo.txtG}>{num} {texto}</Text>

            <Son
                min={1}
                max={60}
                funcao={exibirNumero}

            />
        </>
    )
}



/**
 * Constants are block-scoped, much like variables declared using the let keyword. The value of a constant can't be changed through reassignment (i.e. by using the assignment operator), and it can't be redeclared (i.e. through a variable declaration). However, if a constant is an object or array its properties or items can be updated or removed.
 */