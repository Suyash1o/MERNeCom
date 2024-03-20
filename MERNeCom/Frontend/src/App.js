import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from "./Component/Navbar/Navbar";
import Shop from './Pages/Shop';
import Shopcategory from './Pages/Shopcategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Component/Footer/Footer';
import menbanner from './Component/Assets/banner_mens.png'
import womenbanner from './Component/Assets/banner_women.png'
import kidbanner from './Component/Assets/banner_kids.png'

function App() {
  return (
    <div >
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<Shopcategory banner={menbanner} category="men"/>}/>
        <Route path='/womens' element={<Shopcategory banner={womenbanner} category="women"/>}/>
        <Route path='/kids' element={<Shopcategory banner={kidbanner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}> 
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;




