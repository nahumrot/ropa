import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailConteiner'
import Cart from './components/Cart'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
// import CartContext from './context/CartContext';

function App() {
  return (
    <>
    <BrowserRouter>
      {/* <CartContext> */}
        <NavBar/>
        <Routes>
          <Route path='/' element = { <ItemListContainer/>} />
          <Route path='/categoria/:categoriaId' element = { <ItemListContainer/>} />
          <Route path='/cart' element = { <Cart/>} />
          <Route path='/detalle/:detalleId' element = { <ItemDetailConteiner/>} />
        </Routes>
      {/* </CartContext> */}
    </BrowserRouter>
    </>
  );
}

export default App;
