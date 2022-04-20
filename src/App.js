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
      <ItemListContainer greetings='Aún estamos trabajando en esto...' card={<ItemCard contador={<ItemCount/>}/>}/>
    </div>
  );
}

export default App;
