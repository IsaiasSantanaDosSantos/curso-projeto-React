import {useState} from 'react'

function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email) //Ao digitar o e-mail ativa o método setUserEmail


        alert(`O e-mail foi enviado com sucesso!`)
    }

    function limparEmail(){
        setUserEmail('') //Ao clicar no botão "Limpar e-mail" o método "setUserEmail" irá limpar o campo como está aqui.


    }

    return(
        <div>
            <h2>Cadastre seu e-mail:</h2>
            <form>
                <input type="email" id='email' placeholder="Digite seu e-mail..." onChange={(e) => setEmail(e.target.value)} ></input>
                <button type='submit' onClick={enviarEmail} >Enviar e-mail</button>
                {userEmail && ( //Outra forma de usar o if no React (diz: se userEmail === true)
                    <div>
                        <p>O e-mail do usuário é: {userEmail}</p>
                        <button onClick={limparEmail} >Limpar e-mail</button>
                    </div>
                )}
            </form>
            
        </div>
    )
}

export default Condicional