import React from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

class AdminPhones extends React.Component{
    state={
        id : "",
        name : "",
        company : "",
        images : "",
        selectedFile : null
    }

    changeHandler=event=>{
        this.setState({
        selectedFile : event.target.files[0],
        images : `http://localhost:8080/images/${event.target.files[0].name}`
        })
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
        const phoneData = this.state;
        console.log(phoneData);
        axios.post(`${API_URL}/phones` , phoneData)
            .then(()=>alert("posted phones data"))
            .catch((err)=>alert(err))
    }

    render(){
        return(
            <form className="form" >
                <label>Id :
                    <input name="id" onChange={this.changeInput}></input>
                </label>
                <label>Name :
                    <input onChange={this.changeInput} name="name"></input>
                </label>
                <label>Comapny :
                    <input onChange={this.changeInput} name="company"></input>
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