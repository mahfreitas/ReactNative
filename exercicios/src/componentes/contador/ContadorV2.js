import React , { useState } from 'react'
import { Text , View } from 'react-native'
import Estilo from '../estilo'
import Display from './ContadorDisplay'
import Botoes from './ContadorBotoes'

export default () => {

    const [num, setNum] = useState(0)
    // se eu usar a view ainda preciso do return?

    const inc = () => {setNum(num + 1 )}
    const dec = () => {setNum (num - 1)}
    return (
        <View>
        <Text style={Estilo.txtGG}>
            CONTADOR
        </Text>
        <Display num= {num}></Display>
        <Botoes incfunc={inc} decfunc = {dec}/>
        </View>
    )
}