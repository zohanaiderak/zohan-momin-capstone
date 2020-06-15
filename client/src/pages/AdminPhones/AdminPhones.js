import React from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

class AdminPhones extends React.Component{
    state={
        "phones":{
            "id" : "",
            "name" : "",
            "company" : "",
            "images" : "",
        },
        selectedFile : null
    }

    changeHandler=event=>{
        this.setState({
        selectedFile : event.target.files[0],
        "phones":{
            "images" : `http://localhost:8080/images/${event.target.files[0].name}`
        }
        })
    }

    changeInput=(e)=>{
        const{name,value} = e.target;
        this.setState({
            "phones":{
                [name] : value
            }
        })
    }

    submit =(e) =>{
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        axios.post(`${API_URL}/upload", data, this.state.phones`)
        .then(()=>alert("posted"))
        .catch((err)=>alert(err));
    }

    render(){
        return(
            <form className="form" >
                <label>Id :
                    <input onChange={this.ChangeInput} name="id"></input>
                </label>
                <label>Name :
                    <input onChange={this.ChangeInput} name="name"></input>
                </label>
                <label>Comapny :
                    <input onChange={this.ChangeInput} name="company"></input>
                </label>
                <label> Upload Image :
                <input type="file" name="images" onChange={this.changeHandler}/>
                </label> 
                <button type="submit" onClick={this.submit}>Submit</button>
            </form>
        )
    }
}

export default AdminPhones;