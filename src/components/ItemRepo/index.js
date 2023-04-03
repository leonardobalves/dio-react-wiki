import React from 'react';
import { ItemContainer } from './styles.js';

function ItemRepo() {
    return (
        <ItemContainer>
            <h3>Leo</h3>
            <p>lelelele</p>
            <a href='#'>Ver repositório</a><br />
            <a href='#' className='remover'>Remover</a>
            <hr />
        </ItemContainer>
    )
}

export default ItemRepo;