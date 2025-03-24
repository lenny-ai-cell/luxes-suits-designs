import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import AddProducts from './Components/AddProducts';
import GetProducts from './Components/GetProducts';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import SingleProduct from './Components/SingleProduct';

function App() {
  return (
    <Router>
      <div className="container">
      <header className="App-header">
        <h1>LUXES SUITS DESIGNS</h1>
        <h5>"Elevating your style with expertly crafted, custom-fit suits designed for the modern professional."</h5>
      </header>

        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/addproducts" element={<AddProducts />} />
          <Route path="/" element={<GetProducts/>}/>
          <Route path="/singleproduct" element={<SingleProduct/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
