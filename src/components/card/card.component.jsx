import React from 'react'

import './card.styles.css'

export const Card = props => (
    <div className='card-container'>
        <img src={`https://via.placeholder.com/150`} alt='images' />
        <h2> {props.product.name} </h2>
        <p>{props.product.email}</p>
    </div>
)