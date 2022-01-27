import Button from './evento/Button'

function Evento() {

    function meuEvento(){
        alert(`Ativando primeiro evento!`)
    }

    function segundoEvento() {
        alert(`Ativando o segundo evento!`)
    }

    function terceiroEvento() {
        alert(`Ativando o terceiro evento!`)
    }

    return(
        <>
        <p>Clique para disparar um evento:</p>
        <Button event={meuEvento} text="Primeiro Evento" />
        <Button event={segundoEvento} text="Segundo Evento" />
        <Button event={terceiroEvento} text="Terceiro Evento" />
        </>
    )
}

export default Evento