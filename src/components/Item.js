import PropsTypes from 'prop-types'

function Item({marca, ano_lancamento}){

    return(
        <>
        <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

Item.propTypes ={  //Aquino nome deve iníciar com minúscula
    marca: PropsTypes.string.isRequired, //Aqui passar como parâmentro o tipo de dado, nesse caso será uma "string" e "isRequired" para ser obrigatório
    ano_lancamento: PropsTypes.number.isRequired,
}

Item.defaultProps ={
    marca: 'Faltou a marca',
    ano_lancamento: 0
}

export default Item