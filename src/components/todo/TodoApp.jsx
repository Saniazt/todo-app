import { useState } from 'react'
import './ToDoApp.css'


export default function ToDoApp(){


    return (
        <div className="TodoApp">
            <LoginComponent />
            {/* <WelcomeComponent /> */}
        </div>
    )
}


function LoginComponent(){

    const[username, setUsername] = useState('saniazt')
    const[password,setPassword] = useState('')
    const[showSuccessMessage,setShowSuccessMessage] = useState(false)
    const[showErrorMessage,setShowErrorMessage] = useState(false)

    function handleUsernameChange(event){
        setUsername(event.target.value);
    }
    function handlePasswordChange(event){
        setPassword(event.target.value);
    }
    function handleSubmit(){
        if(username==='saniazt' && password==='dummy'){
            console.log('Success')
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
        } else {console.log('Failed')
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }


    return(
        <div className="Login">
            {showSuccessMessage && <div className='successMessage'>Authenticated successfully</div>}
            {showErrorMessage && <div className='errorMessage'>Authentication failed. 
                                Please check credentials</div>}
            <div className="LoginForm">
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}></input>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
            </div>
            button
        </div>
    )
}





function WelcomeComponent(){
    return(
        <div className="Welcome">
            Welcome Component
        </div>
    )
}