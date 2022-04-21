import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemCard from './components/ItemCard/ItemCard';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer card={<ItemCard contador={<ItemCount stock={5} initial={0} onAdd={handlerAgregarCarrito}/>}/>}/>
    </div>
  );
}

function handlerAgregarCarrito(count){
  if(count > 0)
  alert('Se agregaron los ' + count + " items al carrito");
  else
  alert("Por favor, sume al menos 1 elemento antes de agregar al carrito");
}

export default App;
