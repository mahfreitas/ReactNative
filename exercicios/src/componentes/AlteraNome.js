import React , { useState }  from 'react'
import { Text , Button } from 'react-native'
import Estilo from './estilo'

// useState é um hook , existem vários hooks
// ele detecta quando há uma mudança no estado da variável e informa para a interface gráfica no momento certo.
export default ({name1= "Mary",name2 = "Anne"})=>{

    const [nome, setNome]= useState(name1)
    // Nao altero diretamente o nome, eu chamo a função para fazer essa alteração
    const altera1 = ()=>{setNome(name2)}
    const altera2 = () =>{setNome(name1)}

    return (
        <>
        <Text style={[Estilo.BGV, Estilo.txtGG]}>{nome}</Text>
        <Button
        title='Alterar'
        onPress={altera1}
        />
        <Button
        title='Alterar'
        onPress={altera2}
        />
        </>
    )
}