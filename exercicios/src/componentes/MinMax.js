import React from 'react' // jsx
import { Text } from 'react-native' // componente de texto
import Estilo from './estilo' // estilo global

// Os parametros da funcão são chamados de propriedades por convencão do react ou seja , use dessa maneira

// (props, são as propriedades da funcão estão vindo de onde eu instanciei MinMax
// para acessar o valor de props que esta em uma função JS eu uso {}
// Mas o valor não esta vindo de uma funcão JS, só que esta vindo de um componente funcioanal que é uma função JS, ( acorda menina )



export default (props) => {
    return (
        <Text style={[Estilo.txtG, Estilo.BGV]}>
            O valor {props.Max} é maior do que o valor {props.Min}
        </Text>
    )
}


/*
ASSIIMILADO
Função de apenas uma expressão não precisa de corpo
Funcão com mais de uma expressão precisa de corpo
O corpo de uma função pode ser escrito com (parenteses) ou {chaves}
Se usar parentes a sintaxe não comporta return
Se precisar de return é necessário usar chaves
*/
