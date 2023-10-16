// import React, { useState } from 'react';
// import axios from 'axios';
// import './registration.css';


// function Registration() {
// const [firstname,setfirstname]=useState('');
// const [lastname,setlastname]=useState('');
// //  const [salary, setsalary] = useState('');
// const [email, setemail] = useState('');
//  const [password, setpassword] = useState('');



// const handleRegister = async (event) => {
// event.preventDefault();
// setfirstname("");
// // setsalary("")
// setlastname("")
// setemail("")
// setpassword("")
// try {
// const response = await axios.post('http://localhost:8000/register', {
// firstname,
// lastname,
// // salary,
// });
// console.log(response.data);
// if(response.data.message === 'true'){
//     alert("ok")
// }else{
//     alert("no")
// }

// } catch (error) {
// console.error(error);
// }
// };


// return (
//     <div id='registration'>

   
// <div className="registration-form">
//     <h3>Sign-up</h3>
// <form onSubmit={handleRegister}>
// <div className="form-group">
// <label htmlFor="  firstname">  firstname:</label>
// <input
// type="text"
// id="firstname"
// value={firstname}
// placeholder='enter your  firstname'
// onChange={(e) => setfirstname(e.target.value)}
// required
// style={{marginLeft:75}}
// /> 
// </div> <br></br>
//  <div className='form-group'>
// <label htmlFor='lastname'>lastname:</label>
// <input 
// type="text"
// id="lastname"
// placeholder='enter your lastname'
// value={lastname}
// onChange={(e) => setlastname(e.target.value)}
// required
// style={{marginLeft:75}}
//  /> </div> <br></br> 
//   <div className='form-group'>
// <label htmlFor='email'>email:</label>
// <input 
// type="text"
// id="email"
// placeholder='enter your email'
// value={email}
// onChange={(e) => setemail(e.target.value)}
// required
// style={{marginLeft:75}}
// />

//     </div><br></br>  
//     <div className="form-group">
// <label htmlFor=" password"> Password:</label>
// <input
// type="text"
// id="password"
// value={password}
// placeholder='enter your password'
// onChange={(e) => setpassword(e.target.value)}
// required
// style={{marginLeft:75}}
// /> 
// </div> <br></br> 
// {/* <div className="form-group">
// <label htmlFor="salary"> salary:</label>
// <input
// id="salary"
// value={salary}
// onChange={(e) => setsalary(e.target.value)}
// required
// />
// </div> <br></br>  */}
// <div id='btn'>
// <button type="submit" className="btn btn-primary">
// Submit
// </button>
// </div>
// </form>
// </div>
// </div>
// );
// }


// export default Registration
import React, { useState } from 'react';
import axios from 'axios';
import './registration.css';


function RegistrationForm() {
const [firstname,setfirstname]=useState('');
const [lastname,setlastname]=useState('');
 //const [salary, setsalary] = useState('');
const [email, setemail] = useState('');
 const [password, setpassword] = useState('');



const handleRegister = async (event) => {
event.preventDefault();
setfirstname("");
//setsalary("")
setlastname("")
setemail("")
setpassword("")
try {
const response = await axios.post('http://localhost:8000/register', {
firstname,
lastname,
//salary,
});
console.log(response.data);
if(response.data.message === 'true'){
    alert("ok")
}else{
    alert("no")
}

} catch (error) {
console.error(error);
}
};


return (
    <div id='registration'>

   
<div className="registration-form">
    <h3>Sign-up</h3>
<form onSubmit={handleRegister}>
<div className="form-group">
<label htmlFor="  firstname">  firstname:</label>
<input
type="text"
id="firstname"
value={firstname}
placeholder='enter your  firstname'
onChange={(e) => setfirstname(e.target.value)}
required
style={{marginLeft:75}}
/> 
</div> <br></br>
 <div className='form-group'>
<label htmlFor='lastname'>lastname:</label>
<input 
type="text"
id="lastname"
placeholder='enter your lastname'
value={lastname}
onChange={(e) => setlastname(e.target.value)}
required
style={{marginLeft:75}}
 /> </div> <br></br> 
  <div className='form-group'>
<label htmlFor='email'>email:</label>
<input 
type="text"
id="email"
placeholder='enter your email'
value={email}
onChange={(e) => setemail(e.target.value)}
required
style={{marginLeft:75}}
/>

    </div><br></br>  
    <div className="form-group">
<label htmlFor=" password"> Password:</label>
<input
type="text"
id="password"
value={password}
placeholder='enter your password'
onChange={(e) => setpassword(e.target.value)}
required
style={{marginLeft:75}}
/> 
</div> <br></br> 
{/* <div className="form-group">
<label htmlFor="salary"> salary:</label>
<input
id="salary"
value={salary}
onChange={(e) => setsalary(e.target.value)}
required
/>
</div> <br></br>  */}
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


export default RegistrationForm