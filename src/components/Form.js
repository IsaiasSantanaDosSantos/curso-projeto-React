import {useState} from 'react'

function Form(){

    function cadastrarUsuario(e){
        var nome = document.getElementById("nomeUsuario")
        if (nome.value === "") {
            alert("ERRO! Digite um nome por favor.")
        } else {
            e.preventDefault()
            alert(`Usuário ${name} foi cadastrado com a senha ${password}`)
        }
       alert(`Usuário ${nome.value} cadastrado com sucesso!`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <>
        <h1>Meu cadastro</h1>
        <form onSubmit={cadastrarUsuario}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" id="nomeUsuario" name="name" placeholder="Digite seu nome..." onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div>
            <label htmlFor="paasword">Senha:</label>
                <input type="password" name="password" id="senhaUsuario" placeholder="Digite sua senha..." onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div>
                <input type="submit" value="Cadastrar"></input>
            </div>
        </form>
        </>
    )
}

export default Form