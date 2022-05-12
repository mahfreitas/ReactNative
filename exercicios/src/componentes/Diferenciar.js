import React from 'react'
import { Text , Platform } from 'react-native'
import Estilo from './estilo'

export default props => {
    if (Platform.OS === 'android') {
        return (
            <Text style={Estilo.txtG}>ANDROID</Text>
        )
    } else if (Platform.OS === 'ios'){
        return <Text style={Estilo.txtG}>IOS</Text>
    } else {
        return (
            <Text style={Estilo.txtG}>EITA !!!!</Text>
        )
    }
}

/**
 * Essas renderizações condicionais estão sendo feita diretamenta no JS
 * e estão retornando trechos de JSX
 */