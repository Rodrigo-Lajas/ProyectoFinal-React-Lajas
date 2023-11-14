import NavBar from "./components/NavBar/NavBar"
import "bulma/css/bulma.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";

function App() {
  return (
    <div className="App">
      <container className="container">
      <NavBar />
      {<ItemListContainer greeting={'Bienvenidos a mi E-commerce'}/>}
      </container>
    </div>
  );
}

export default App