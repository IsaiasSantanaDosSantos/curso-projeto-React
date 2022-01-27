import Item from "./Item"

function List(){

    return(
        <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca="Ferrari" ano_lancamento={1985} />
            <Item marca="Chevrolet" ano_lancamento={1984}/>
            <Item marca="Renault" ano_lancamento={1981}/>
            <Item marca="Fiat" ano_lancamento={1989}/>
            <Item />
        </ul>
        </>
    )
}

export default List