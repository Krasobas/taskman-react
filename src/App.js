import React from 'react';
import {Routes, Route} from 'react-router-dom'
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Header from "./componets/views/global/Header";
import Footer from "./componets/views/global/Footer";

export default function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} Component={MainPage}/>
                <Route path={'/login'} Component={LoginPage}/>
                <Route path={'/signup'} Component={SignupPage}/>
                <Route path={'*'} Component={MainPage}/>
            </Routes>
            <Footer/>
        </>

    );
}
