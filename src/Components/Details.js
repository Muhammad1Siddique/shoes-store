import React from 'react';
import {useParams} from 'react-router-dom';
import Shoes from './shoes.json';

export const Details = ()=>{

    const {productID} = useParams();
    const product = Shoes[productID];
    const {name, price, descrips, img} = product;

    return(
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name} width="500" height="auto"/>
            <h4>Rs {price}</h4>
            <p>{descrips}</p>
        </div>
    )
}