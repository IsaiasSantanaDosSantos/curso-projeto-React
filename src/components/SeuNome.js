function SeuNome({ setNome }){

    return(



        <>
        <p>Digite o seu nome:</p>
        <input type="text" placeholder="Qual é o seu nome?" onChange={(e) => setNome(e.target.value)} ></input>
        </>
    )
}

export default SeuNome