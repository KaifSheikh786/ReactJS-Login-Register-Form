import React, {useState} from "react"
import axios from "axios"
// import { useHistory } from "react-router-dom"



export default function Login() {

    // const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,  
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:3002/login", user)
        .then(res => {
            alert(res.data.message)
            setUser(res.data.user)
            // history.push("/")
            console.log("Login Successful")
        })
    }


  return ( <>
    <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form className='form'>
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input name="email" value={user.email} type="text" placeholder="Email or Phone" id="username" onChange={handleChange}/>

        <label for="password">Password</label>
        <input name="password" value={user.password} type="password" placeholder="Password" id="password" onChange={handleChange}/>

        <button onClick={login}>Log In</button>
        <button>Register</button>

    </form>
    </>
  )
}
