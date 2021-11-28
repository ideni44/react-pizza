import './scss/app.scss'
import { Header } from './components/';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Route, Routes } from 'react-router';
import { useEffect } from 'react';
import axios from "axios";
import store from './redux/store';
import setPizzas from './redux/actions/pizzas';
import { connect } from 'react-redux';


function App({items}) {

  useEffect(()=>{
    axios.get('http://localhost:3000/db.json').then((({data})=>{store.dispatch(setPizzas(data.pizzas))}))
  },[])


  return (
    <div className="wrapper">
    <Header/>
    <div className="content">
      <div className="container">
        <Routes>
          <Route exact path='/' element={<Home data={items}/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
        </Routes>
      </div>
    </div>
  </div>
  )
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items
  }
}

export default connect(mapStateToProps)(App);
