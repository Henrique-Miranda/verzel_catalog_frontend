import React, {useState} from "react";
import { Input } from "../components/Input";
import {callApi} from '../api'

export const Login = ()=>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')
    
    const checkLogin = async event =>{
        try{
            event.preventDefault();
            const body = {
                username,
                password
            }
        const data = await callApi('api-token-auth/', 'POST', body)
        console.log(username)
        setToken(data)
        }catch(error){
            console.log(error)
        }
        
    }

    return(
        <div className="login-frame">
            <form className="login-form">  
                <div className="login-container">
                    <h1 className="login-title">Acessar Painel</h1>   
                    <Input type="text" placeholder="Usuário" name="username" onChange={()=>setUsername(document.getElementsByName('username').value)}/>  
                    <Input type="password" placeholder="Senha" name="password"  onChange={()=>setPassword(document.getElementsByName('password').value)}/>  
                    <button className="btn btn-primary" onClick={checkLogin}>Login</button>
                </div>   
            </form>
        </div>
    )
}
