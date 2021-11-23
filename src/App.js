import './scss/app.scss'
import { Header } from './components/';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Route, Routes } from 'react-router';



function App() {
  return (
    <div className="wrapper">
    <Header/>
    <div className="content">
      <div className="container">
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
        </Routes>
      </div>
    </div>
  </div>
  )
}

export default App;
