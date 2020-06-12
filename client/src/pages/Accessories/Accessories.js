import React from 'react';
import axios from 'axios';
import AccessoryList from '../../Components/Accessory/Accessory';
import './Accessory.scss';

const API_URL = process.env.REACT_APP_API_URL;

class Accessories extends React.Component{
    state={
        phone: {},
        accessories : []
    }

    componentDidMount(){
        this.accessories(this.props.match.params.id);  
    }

    accessories(id){
        axios.get(`${API_URL}/phones/${id}`)
        .then(res=>{
            this.setState({
                phone: res.data,
                accessories: res.data.accessory
            })
        })
        .catch(err=> {
            console.log("error" , err)
        })
    }

    

    accessoryItems(){
        this.state.accessories.map(accessory=>{
            return (
                    <AccessoryList
                        id= {accessory.id}
                        phoneid = {accessory.phoneid}
                        name = {accessory.name}
                        description = {accessory.description}
                        quantity = {accessory.quantity}
                        image = {accessory.image}
                        isInstock = {accessory.isInstock} 
                            />
            )
        })
    }

    
    
    render(){
        console.log(this.state.accessories)
        return(
            <>
            <h1 className="accessory__title">Accessories for {this.state.phone.name}</h1>
            <div>
                {this.accessoryItems()}
            </div>
            </>
        )
    }
}

export default Accessories;