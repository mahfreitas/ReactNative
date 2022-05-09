import React from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'

export default props => {

    // o componente filho esta esperando receber duas propriedades para usar nos dois componentes textuais jsx que estão dentro das tags de frangment
    // quem vai passar essas propriedades? qualquer componente que fizer uso do componente filho (o componente que importar ele)
    return (
        <> 
            <Text style={Estilo.txtG}>{props.a}</Text>
            <Text style={Estilo.txtG}>{props.b}</Text>
        </>
    )
}

// Comunicação direta é passar parametros de um componente pai para um componente filho a partir de propriedades

/**
 * Componente Pai é aquele que importa (o que esta acima), 
 * Componente filho é aquele que é importado(que esta abaixo)
 */