import React from 'react'
import { Text , StyleSheet } from 'react-native'
import Estilo from '../estilo'

export default ({num}) =><Text style={[Estilo.txtG,estilo.display]}>{num}</Text>

const estilo = StyleSheet.create({
    display:{
            backgroundColor: '#000000',
            width: 165,
            color:'#ffffff'
        
    }
})