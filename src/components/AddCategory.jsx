import { useState } from 'react'
import PropTypes from 'prop-types';

/**
 * AddCategory = ({value}) se recibe el valor de la categorias enviado desde
 * el compinente GitExpertApp
 * y se agrega el valor del imput d ela categoria
 * 
*/
export const AddCategory = ({onNewcategory}) => {

  
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {

        setInputValue(target.value);
    }

    const onSubmit = (event) =>{

        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        // agregamos el val+or a la nueva categoria 1 forma
        //setCategorias(categoria => [inputValue, ...categoria]);

        onNewcategory(inputValue.trim());
        //limpiamos la caja de texto
        setInputValue('');


    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar imagen gif"
                value={inputValue}
                onChange={onInputChange} // la version larga seria  onChange={(event) => onInputChangel(event)}
            />
        </form>

    )
}


