import React from 'react';
import axios from 'axios';

const Accessory = (props) =>{
        return(
            <>
                <img className="phone__pic" src={props.image}></img>
                <h3 className="phone__name">{props.name}</h3>
            </>
        )
}

export default Accessory;