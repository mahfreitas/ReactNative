import React from 'react'
import { Button } from 'react-native'

//testar se colocar arrow function vai funcionar ou precisa ser props por causa dos atributos do button
export default props => {

    /**
        function executar ()}{
            return function(){
                console.warn("EXECUTADO")
            }
        }
     */

    function executar() {
        console.warn("EXECUTADO 01!!!")
    }
    // Maneiras de chamar uma função em um botão
    return (
        // estamos usando fragment porque estamos tirando multiplos elementos (3 botões ) do componente
        <> 
            <Button
                title="Executar #01"
                onPress={executar} // executar esta sendo passado como parametro para onPress
                // Primeira opção função sendo referenciada , me parece mais organizado
            />
            <Button
                title="Executar #02"
                onPress={function(){
                    console.warn("Executado 02")
                }} 
                // Segunda opção cria a função diretamente no botão ( no caso no atributo onPress do botão), essa função pode ser anonima
            />
            <Button 
                title="Executar #03"
                onPress={()=>{console.warn("Executado 03")}}
                // ou pode ser uma arrow function
            />

            
        </>
    )

    /*
    a função executar dentro da propriedade onPress não leva parentes porque ela não esta sendo executada, ela esta sendo referenciada.
    Isso quer dizer que quando o componente for acessado(carregado) ele não vai fazer a chamada da função, a chamada da função vai acontecer apenas quando o botão for pressionado.
    Se o onPress estivesse recebendo a chamada da função, ou seja , com (), ele iria executar a função ao carregar o componente e receber o que ela estivesse retornando.
    ????O professor disse que como não retorna uma função não serve, então só serve pra função que retorna função? Se a função retornar outras coisas como string ou number , a propriedades onPress não vai receber ?
    R: sim, pecisa ser uma função porque todo botão clicado vai ter alguma ação, se você executar a ação quando carregar o componente, essa acão precisará retornar outra ação pra ficar guardada no onPress para ser executada quando o botão for clicado, senão na hora que o botão for clicado o onPress estará sem nenhuma ação nele e não vai fazer nada.
    ENTENDIDO PORQUE PRECISA SER FUNÇÃO, mas não sei se não pode receber number ou string, (pensar sobre isso)
    ???? ok, faz sentido referenciar a função no botão ao invés de fazer uma função que retorna uma função, mas será útil em algum caso, uma função que retorna uma função?
    */
}

// Quando eu preciso usar return em um componente?
// VIEW - Não Precisa ?
// TEXT - Não Precisa?
// BUTTON - precisa?
// Melhorar esse entendimento de quando precisa de return