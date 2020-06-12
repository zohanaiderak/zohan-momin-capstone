import React from 'react';
import axios from 'axios';
import './PhonesList.scss';

const PhoneList =(props) =>{
    return(
        <div className={(props.hidden === 'show') ? 'show' : 'hidden'} >
            <img className="phone__pic" src={props.images}></img>
            <h3 className="phone__name">{props.name}</h3>
        </div>
    )
}

export default PhoneList;