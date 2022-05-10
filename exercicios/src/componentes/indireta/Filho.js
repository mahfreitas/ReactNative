import React from 'react'
import { Button } from 'react-native'

// o componente filho vai receber as propriedades para calcular o valor aleatório e  também a referencia de uma função , depois vai devolver  para o componente pai (comunicação indireta) usando o parametro da função que ele recebeu 

export default ({ min , max , funcao } ) => {



    
    function gerarNumero(min,max) {
        const fator = max - min +1

        return (parseInt(Math.random() * fator) + min)
    }

    return (
        <>
            <Button
                title="Executar"
                onPress={function () {
                    const n = gerarNumero(min, max)
                    funcao(n, " é o valor aleatório. ") 
                    console.warn(min, max)

                }
                    
                }
            />
        </>
    )
}

/* onpress esta recebendo uma função anonima que colona numa const n o valor recebido da função que gera um número aleatório e depois ele passa o valor n como parametro na chamada da função que recebeu por meio da comunicação direta do pai
*/