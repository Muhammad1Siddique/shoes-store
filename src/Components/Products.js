import React from 'react';
import {Link} from 'react-router-dom';
import Shoes from './shoes.json';

export const Products = ()=>{

    return(
        <div>
             <ul>
                {Object.entries(Shoes).map(([productID,{name, price, img}]) => 
                (
                    <li key={productID}>
                        <Link to={productID}>
                        <img src={img} alt={name} width="200" height="auto"/>
                        <h5>{name}</h5>
                        <h4>{price}</h4>
                        </Link>
                    </li>
                )
                )}
            </ul>
        </div>
    )
}