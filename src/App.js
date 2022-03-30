import './App.css';
import Banner from './Components/Banner/Banner';
import Categories from './Components/Categories/Categories';
import Footer from './Components/Footer/Footer';
import NavBar from "./Components/NavBar/NavBar"
import RowProduct from './Components/RowProduct/RowProduct';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Categories/>
      <RowProduct name="Shoes"/>
      <RowProduct name="Backpack"/>
      <Footer/>
    </div>
  );
}

export default App;
