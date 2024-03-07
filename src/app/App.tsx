import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Header from "../widgets/Header/Header";
import { MainPage } from "pages/MainPage";
import cls from './App.module.scss'

const App = () => {
    return (
        <div className={cls.app}>
        <Header></Header>
            <div className="container">
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                    <Route path={"/"} element={<MainPage />} /> 
                        {/* <Route path={"/schedule"} element={<SchedulePage />} />
                        <Route path={"/"} element={<MainPage />} /> */}
                    </Routes>
                </Suspense>
            </div>
        </div>
    );
};

export default App;
