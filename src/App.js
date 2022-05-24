import './App.css';
import NavBar from '../src/components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {Routes, Route} from 'react-router-dom';
import CartContainer from './components/CartContainer/CartContainer';
import CheckOut from './components/CheckOut/CheckOut'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/cart' element={<CartContainer/>}/>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:id' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
      </Routes>
    </div>
  );
}

export default App;
