import React from 'react'

export default function Login() {
  return ( <>
     <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form className='form'>
        <h3>Register</h3>

        <label for="username">Name</label>
        <input type="text" placeholder="Email or Phone" id="username"/>
        <label for="username">Email</label>
        <input type="text" placeholder="Email or Phone" id="username"/>

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password"/>
        <label for="password">Re-enter Password</label>
        <input type="password" placeholder="Password" id="password"/>

        <button>Register</button>
        <button>Log In</button>
    </form>
    </>
  )
}
