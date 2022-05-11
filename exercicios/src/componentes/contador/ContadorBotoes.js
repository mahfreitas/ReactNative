import React from 'react'
import { View , Button , StyleSheet} from 'react-native'
import Estilo from '../estilo'

export default ({incfunc, decfunc}) => {

    return (
        <View style={estilo.botalig}>
            <Button title="Somar 1" onPress={incfunc}/>
            <Button title='Subtrair 1' onPress={decfunc} />
        </View>
    )
}

const estilo = StyleSheet.create({
    botalig:{
        flexDirection: "row",
        
    },

   
})