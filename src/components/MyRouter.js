import React from "react";
import { BrowserRouter,Routes,Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import News from './News';
import Product from './Product';
import Header from "./Header";




const  MyRouter=(props)=>{
    return(
       <BrowserRouter>
        <nav>
            <div className="link-div">
                <Link to="/" className="link-to">Home</Link>
                <Link to="/About" className="link-to">About</Link>
                <Link to="/News" className="link-to">News</Link>
                <Link to={`/Product/${props.fruit}`} className="link-to">Product</Link>
            </div>
        </nav>

        <Header />
  

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/News" element={<News />} />
            <Route path="/Product/:fruitName" element={<Product />} />
        </Routes>       
       </BrowserRouter>
    );
}

export default MyRouter;