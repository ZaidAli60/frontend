import React,{ useState } from 'react';
// import './style.css';
// import logo from './logo.jpg';
import axios from 'axios';


function Login({ toggleForm }) { 
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');


    function handleUsernameChange(event) {
        setUserName(event.target.value);
      }

      function handlePasswordChange(event) {
        setPassword(event.target.value);
      }


    function handleSubmit(event) {
        event.preventDefault();
        const loginData = {
          username: username,
          password: password,
    
        };
        
      axios.get('http://localhost:5000/getUser', { params: loginData })
      .then((res) => {
        if (res.data) alert('Login Successful'); 
        else alert('Wrong Credentials');
      })
      .catch((err) => alert('Error in Login'));
  }


return(
<body>
    <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form action="" method="post" onSubmit={handleSubmit}> 

    {/* <img src={logo} alt="Login" class="logo-img" />  */}
        <h3>Login Page</h3>

        <label >User ID:</label>
        <input type="text" placeholder="Enter User ID" id="username1" name="username" value={username} onChange={handleUsernameChange}  />

        <label >Password:</label>
        <input type="password" placeholder="Password" id="password1" name="pass" value={password} onChange={handlePasswordChange}/>
        <br />
        <button type="submit">Submit</button>
      <p>Don't have an account? <span onClick={toggleForm}>Sign Up</span></p>
    </form>
</body>

);
}

export default Login;

