function OutraListra({ itens }) {

    return(
        <>
        <h3>Lista de Tecnologias:</h3>
        {
            itens.length > 0 ? (
                
            itens.map((item, index) => ( //Para mapear cada um dos itens
                <p key={index}>{item}</p> //Para mostrar os itens o key é para indexar a lista apenas para o React
            ))) : (  //Esse ":" representa o else que é preciso fazer para o React não reclamar
                <p>Não há itens na lista</p>
            )}
        </>
    )
}

export default OutraListra

//Link para próxima vídeo aula:
// https://www.youtube.com/watch?v=01Gj6i2wlS4&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&index=14