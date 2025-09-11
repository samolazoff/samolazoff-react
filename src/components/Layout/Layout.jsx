import { Outlet } from 'react-router';
import { useState } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
    const [openMenu, setOpenMenu] = useState(true);
        
            const changeOpenMenu = () => {
                setOpenMenu(!openMenu);
            }
    
    return (
        <>
            <Header/>
            <main className='app container'>
                {/* <Header/> */}
                <Outlet />
            </main>
            <Footer/>
        </>
        
    );
};

export default Layout;