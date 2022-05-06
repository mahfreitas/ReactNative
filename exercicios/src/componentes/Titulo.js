import React from 'react'
import { View , Text } from 'react-native'
import Estilo from './estilo'

export default (props) => ( //usando parentes pq não vai ser necessário retorno , então eu tenho uma função com corpo porém sem retorno?
    <View>
        <Text style={Estilo.txtGG}>{props.principal}</Text>
        <Text style={Estilo.txtG}>{props.secundario}</Text>
    </View>
)

// ????? Quando eu uso a VIEW não preciso de return, ela já é um return implicito?

//  NÃO É POSSÍVEL RETORNAR MULTIPLOS ELEMENTOS  JSX A PARTIR DE UM COMPONENTE
//  COMO CONTORNAR ? UMA POSSIBILIDADE É FRAGMENT

/**
 * Essas duas tags de texto, não poderiam ir soltas no meu componente, porque gera um erro de ELEMENTOS ADJECENTES, por isso elas estão dentro de uma view
 * NA VERDADE QUER DIZER QUE ELAS SE ENQUADRAM NO CASO DE MULTIPLOS ELEMENTOS
 * Mas se eu quero usar somente essas tags de texto(como eu devo chamar essas tags de texto? R: as tags de texto são componentes textuais, mas nesse caso quero dizer multiplos elementos) posso usar uma tecnica de fragment
 
 */

// OPÇÕES DE USO DO FRAGMENT

/**
 * PRIMEIRA OPÇÃO: usar a tag <React.Fragment> envolvendo os multiplos elementos
 * 
 * SEGUNDA OPÇÃO : importar { Fragment } from 'react' e não precisa mais usar o React. na tag fica somente <Fragment>
 * 
 * TERCEIRA OPÇÃO : não importar nada , nem colocar nada dentro das tags, envolver os elementos com tags vazias <> elementos </> nota: essa opção não aceita uso de propriedades, apenas as outras duas opções.
 */

// LEMBRAR QUE quando não usamos view  e usamos fragment ao conversar com o android e ios ele não usa seus respectivos elementos , ele vai deixar como texto mesmo.