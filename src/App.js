import './App.scss';
import MainPage from "./components/main-page/MainPage";
import {Route, Routes} from "react-router-dom";
import Faq from "./components/faq/Faq";
import About from "./components/about/About";
import Basket from "./components/basket/Basket";
import Categories from "./components/categories/Categories";
import DetailPage from "./components/detail-page/DetailPage";

function App() {
  return (
    <>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/faq" element={<Faq/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/basket" element={<Basket/>}/>
                <Route path="/categories" element={<Categories/>}/>
                <Route path={"/detail-page/:id"} element={<DetailPage/>}/>

            </Routes>


    </>
  );
}

export default App;
