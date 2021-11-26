import './scss/app.scss'
import { Header } from './components/';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Route, Routes } from 'react-router';
import { useEffect,useState } from 'react';
import axios from "axios";



function App() {
  const [data, setData] = useState([])

  useEffect(()=>{
    // fetch('http://localhost:3000/db.json').then((res)=>res.json()).then(json=>{
    //   setData(json.pizzas)
    // })
    axios.get('http://localhost:3000/db.json').then((({data})=>setData(data.pizzas)))
  },[])


  return (
    <div className="wrapper">
    <Header/>
    <div className="content">
      <div className="container">
        <Routes>
          <Route exact path='/' element={<Home data={data}/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
        </Routes>
      </div>
    </div>
  </div>
  )
}


export default App;
