import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import Item from './components/Item/Item';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer card={<Item contador={<ItemCount stock={5} initial={0} onAdd={handlerAgregarCarrito}/>}/>}/>
    </div>
  );
}

function handlerAgregarCarrito(count){
  alert('Se agregaron los ' + count + " items al carrito");
}

export default App;
