import React from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'
import Son from './Filho'

// O componente pai passa valores para o componente filho fazendo uma comunicação direta
// Quem são os componentes filhos? os componentes que estão sendo importados pelo componente 
export default props => { 

    // digamos que o componente pai tem valores que quer passar para o filho
    // como ele tem acesso direto ao componente filho, porque ele tem instancia do componente, onde ele pode passar via propriedades parametros que pertence ao componente.
    //passando dados para componentes que estão abaixo

    let x = 10
    let y = 100
      return ( 
          <>
         <Son a={x} b={y}/>
         <Son a={x+10} b={y+100}/>
         </>
       )
}