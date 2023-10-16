// import React, { useState } from 'react';
// import './login.css';
// import axios from 'axios';
// import { useAuth0 } from "@auth0/auth0-react";

// function Login() {
// const [lastname, setlastname] = useState('');
// const [firstname,setfirstname] = useState('');
// // const [email, setemail] = useState('');
// // const [password, setpassword] = useState('');


// const handleRegister = async (event) => {
//     event.preventDefault();
  
//     try {
//         const response = await axios.post('http://localhost:8000/login', {
//             firstname,
//             lastname,
//             // email,
//             // password,
//           });
          
  
//       if (response.data.message === '1 document inserted') {
//         alert('Login successful');
//       } else {
//         alert('Login failed');
//       }
  
//       // Reset state after successful submission
//       setlastname('');
//       setfirstname('');
//       // setemail('');
//       // setpassword('');
//       //setsalary('');
//     } catch (error) {
//       console.error(error);
//     }
//   };
  


// return (
//     <div id='login'>

   
// <div className="login-form">
//     <h3>Login</h3>
// <form onSubmit={handleRegister}>
// <div className="form-group">
// <label htmlFor="name"> firstname:</label>
// <input
// type="text"
// id="firstname"
// value={firstname}
// placeholder='enter your firstname'
// onChange={(e) => setfirstname(e.target.value)}
// required
// style={{marginLeft:75}}
// /> 
// </div> <br></br> 

// <div className='form-group'>
// <label htmlFor='lastname'>lastname:</label>
// <input 
// type="lastname"
// id="lastname"
// placeholder='enter your lastname'
// value={lastname}
// onChange={(e) => setlastname(e.target.value)}
// required
// style={{marginLeft:75}}
// />

//     </div><br></br> 
//      {/* <div className="form-group">
// <label htmlFor="password"> Password:</label>
// <input
// type="password"
// id="password"
// value={password}
// placeholder='enter your password'
// onChange={(e) => setpassword(e.target.value)}
// required
// style={{marginLeft:75}}
// /> 
// </div> <br></br>
//  <div className="form-group">
// <label htmlFor="email">email:</label>
// <input
// id="email"
// placeholder='enter email'
// value={email}
// onChange={(e) => setemail(e.target.value)}
// required
// />
// </div> <br></br>   */}
// <div id='btn'>
// <button type="submit" className="btn btn-primary">
// {/* <button onClick={() => handlelogin(firstname,lastname)}>login</button> */}
// {/* <button onclick="Login()">submit</button> */}

// </button>
// </div>
// </form>
// </div>
// </div>
// );
// }


// export default Login;
import React, { useState } from 'react'; // Import the useState hook from React
import axios from 'axios';
import './login.css';

function Login() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get('http://localhost:8000/login', {
                email: email,
                password: password
            });

            if (response.data) {
                alert("Login Successful");
            } else {
                alert("Login failed");
            }
        } catch (error) {
            console.error(error);
            alert("Login failed. Please try again later.");
        }
    };

    return (
        <div id='login'>
            <div className="login-form">
                <h3>Login</h3>
                <form onSubmit={handleRegister}>
                    <div className='form-group'>
                        <label htmlFor='email'>Email:</label>
                        <input 
                            type="email"
                            id="email"
                            placeholder='enter your Email'
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            required
                            style={{marginLeft:75}}
                        />
                    </div><br></br> 
                    <div className="form-group">
                        <label htmlFor="password"> Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            placeholder='enter your password'
                            onChange={(e) => setpassword(e.target.value)}
                            required
                            style={{marginLeft:75}}
                        /> 
                    </div> <br></br>
                    <div id='btn'>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;