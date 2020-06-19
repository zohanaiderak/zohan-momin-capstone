import React from 'react';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid'
import Switch from 'react-switch';

const API_URL = process.env.REACT_APP_API_URL;

class AdminAccessories extends React.Component{
    state={
        id : uuidv4() ,
        phoneid : "",
        name : "", 
        description : "",
        quantity : "",
        image : "",
        isInstock: false,
        selectedFile : null
    }

    changeHandler=event=>{
        this.setState({
        selectedFile : event.target.files[0],
        image : `http://localhost:8080/images/${event.target.files[0].name}`
        })
    }

    handleChange = this.handleChange.bind(this);

    handleChange(isInstock){
        this.setState({
            isInstock
        });
    }

    changeInput=(e)=>{
        const{name,value} = e.target;
        this.setState({
                [name] : value
        })
    }

    submit =(e) =>{
        e.preventDefault();
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        console.log(this.state.selectedFile);
        axios.post(`${API_URL}/upload`, data)
        .then(()=>alert("posted"))
        .catch((err)=>alert(err));
        const accessoryData = this.state;
        console.log(accessoryData);
        axios.post(`${API_URL}/accessories` , accessoryData)
            .then(()=>alert("posted accessory data"))
            .catch((err)=>alert(err))
    }

    render(){
        return(
            <form className="form" >
                <label>Id :
                    <input name="phoneid" onChange={this.changeInput}></input>
                </label>
                <label>Name :
                    <input onChange={this.changeInput} name="name"></input>
                </label>
                <label>Description:
                    <textarea onChange={this.changeInput} name="description"></textarea>
                </label>
                <label>Quantity :
                    <input onChange={this.changeInput} name="quantity"></input>
                </label>
                <label>In Stock :
                <Switch height={24} width={40} onChange={this.handleChange} checked={this.state.isInstock} />
                </label>
                <label> Upload Image :
                <input type="file" name="image" onChange={this.changeHandler}/>
                </label> 
                <button type="submit" onClick={this.submit}>Submit</button>
            </form>
        )
    }
}

export default AdminAccessories;