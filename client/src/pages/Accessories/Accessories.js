import React from 'react';
import axios from 'axios';
import AccessoryList from '../../Components/Accessory/Accessory'

const API_URL = process.env.REACT_APP_API_URL;

class Accessories extends React.Component{
    state={
        accessories : {}
    }

    accessories(id){
        axios.get(`${API_URL}/phones/${id}`)
        .then(res=>{
            console.log(res.data.accessories);
            this.setState({
                accessories: res.data.accessories
            })
        })
        .catch(err=> {
            console.log("error" , err)
        })
    }

    

    accessoryItems(){
        const accessoryCard = this.state.accessories.map(accessory=>{
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
        return accessoryCard; 
    }

    componentDidMount(){
        this.accessories(this.props.match.params.id);  
    }
    
    render(){
        console.log(this.state.accessories)
        return(
            <>
            <h1>Here you go</h1>
            <div>
                {this.accessoryItems()}
            </div>
            </>
        )
    }
}

export default Accessories;