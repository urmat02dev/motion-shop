import './App.scss';
import MainPage from "./components/main-page/MainPage";
import {Route, Routes} from "react-router-dom";
import Faq from "./components/faq/Faq";
import About from "./components/about/About";
import Basket from "./components/basket/Basket";
import DetailPage from "./components/detail-page/DetailPage";
import Man from "./components/categories/Man";
import Woman from "./components/categories/Woman";
import Kids from "./components/categories/Kids";
import Shoes from "./components/categories/Shoes";
import SearchResult from "./components/header/SearchResult";
import BasketProducts from "./components/basket/BasketProducts";
import BasketBasket from "./components/basket/BasketBasket";

function App() {
  return (
    <>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/faq" element={<Faq/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/basket" element={<Basket/>}/>

                <Route path="/categories/man" element={<Man/>}/>
                <Route path="/categories/woman" element={<Woman/>}/>
                <Route path="/categories/kids" element={<Kids/>}/>
                <Route path="/categories/shoes" element={<Shoes/>}/>
                <Route path="/search/product" element={<SearchResult/>}/>
                <Route path="/basket/product" element={<BasketBasket/>}/>
                <Route path={"/detail-page/:id"} element={<DetailPage/>}/>
            </Routes>


    </>
  );
}

export default App;
