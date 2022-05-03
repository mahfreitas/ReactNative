import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

// quando o export é padrão, a função pode ser arrow function
export default function Comp() {
    return <Text style={Estilo.txtG}>Comp #Oficial</Text>
}

export function Comp1() {
    return <Text style={Estilo.txtG}>Comp #01</Text>
}

// se usar export diretamente ao lado da função se ela não é um defalt , obrigatóriamente ela tem que ser nomeada ou uma constante

export function Comp2() {
    return <Text style={Estilo.txtG}>Comp #02</Text>
}

// export { Comp , Comp1 }
