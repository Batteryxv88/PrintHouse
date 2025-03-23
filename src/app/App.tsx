import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Header from "../widgets/Header/Header";
import { MainPage } from "pages/MainPage";
import ProductDetail from "pages/ProductDetail/ui/ProductDetail";
import Contacts from "pages/Contacts/ui/Contacts";
import Delivery from "pages/Delivery/ui/Delivery";
import Footer from "../components/Footer/Footer";
import cls from './App.module.scss'

const App = () => {
    return (
        <div className={cls.app}>
            <Header></Header>
            <div className="container">
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<MainPage />} /> 
                        <Route path="/product/:id" element={<ProductDetail />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/delivery" element={<Delivery />} />
                        {/* <Route path={"/schedule"} element={<SchedulePage />} />
                        <Route path={"/"} element={<MainPage />} /> */}
                    </Routes>
                </Suspense>
            </div>
            <Footer />
        </div>
    );
};

export default App;
