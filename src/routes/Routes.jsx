import { Routes, Route, BrowserRouter } from "react-router";

import Layout from "../components/Layout/Layout";

import Home from "../pages/Home/Home";
import Contacts from '../pages/Contacts/Contacts';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element  = {<Layout/>}>
                    <Route index element = {<Home/>}/>
                    <Route path="contacts" element = {<Contacts/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;