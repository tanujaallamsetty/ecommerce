// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, {useState} from 'react'
import Nav from './Components/nav';
import Rout from './rout';
import {BrowserRouter} from 'react-router-dom';
import Footer from './footer';
import Productdetail from './productdetail';
import Login from './login';
import Registration from './registration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




const App = () => {
  // add to cart
  const [cart, setCart] = useState([])
  //product Detail
  const [close, setClose] = useState(false)
  const [detail, setDetail] = useState([])
  //filter product
  const [product, setProduct] = useState(Productdetail)
  const searchbtn = (product) => 
  {
    const change = Productdetail.filter((x) => 
    {
      return x.Cat === product
    })
    setProduct(change)
  }
  //product detail
  const view = (product) => 
  {
    setDetail([{...product}])
    setClose(true)
  }

  // add to cart
  const addtocart = (product) => 
  {
    const exsit = cart.find((x) => 
    {
      return x.id === product.id
    })
    if(exsit)
    {
      alert("This Product is already added to cart")
    }
    else
    { 
      setCart([...cart, {...product, qty:1}])
      alert("product is added to cart")
    }
  } 
  console.log(cart)
  return (
    <>
    <BrowserRouter>
    
    <Nav searchbtn={searchbtn}/>
     <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart}/> 
     <Routes>
     <Route path="/Login" element={<Login/>}/>
     <Route path="/Registration" element={<Registration/>}/>

     </Routes>
     
     <Footer /> 
     
    </BrowserRouter>
    
    
    
    
    
    </>
  )
}


// export default App
//import { Routes, Route } from "react-router-dom";


export default App;
