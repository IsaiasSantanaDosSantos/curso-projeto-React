function Form(){

    function cadastrarUsuario(e){
        var nome = document.getElementById("nomeUsuario")
        if (nome.value === "") {
            alert("ERRO! Digite um nome por favor.")
        } else {
            e.preventDefault()
       alert(`Usuário ${nome.value} cadastrado com sucesso!`)
        }
       
    }

    return(
        <>
        <h1>Meu cadastro</h1>
        <form onSubmit={cadastrarUsuario}>
            <div>
                <input type="text" id="nomeUsuario" placeholder="Digite seu nome..."></input>
            </div>
            <div>
                <input type="submit" value="Cadastrar"></input>
            </div>
        </form>
        </>
    )
}

export default Form