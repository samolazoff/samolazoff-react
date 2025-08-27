import { Routes, Route, BrowserRouter } from "react-router";

import Layout from "../components/Layout/Layout";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element  = {<Layout/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;