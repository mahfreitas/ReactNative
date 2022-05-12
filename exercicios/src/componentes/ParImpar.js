import React from 'react'
import { View, Text } from 'react-native'
import Estilo from './estilo'

export default ({numero=0}) => {
    return(
        <View>
            <Text style={Estilo.txtG}>O número {numero} é :</Text>
            {numero % 2 === 0 
                ? <Text style={Estilo.txtGG}>Par</Text> 
                : <Text style={Estilo.txtGG}>Impar</Text>}
        </View>
    )
}

/**
 * Na renderização condicional acima estou usando o operador ternário de JS aplicado diretamente no JSX
 * Estou retornando uma view, pois é mais usado do que o conceito de fragment
 * e estou usando o destructuring para extrair o valor das propriedades pois é muito usado , tem que fazer bastante uso dele pra ficar gravado o conceito de extrair valores de um objetos, quando eu quero todos e quando eu quero apenas um só, acessar ele diretamente.
 * 
 * Na renderização abaixo estou aplicando a condicional de renderização no JS e retornando JS, foi feita esta demonstração propositalmente para deixar claro quando estamos duplicando código a toa.
 */

{/** 
export default props => {
    if (props.numero % 2 === 0)
        return (
            <View>
            <Text>{props.numero} é :</Text>
            <Text>PAR</Text>
            </View>
        )
    else {
        return (
            <View>
            <Text>{props.numero} é :</Text>
            <Text>IMPAR</Text>
            </View>
        )
    }
}
*/}