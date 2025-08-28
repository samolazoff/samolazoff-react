import { Outlet } from 'react-router';
import { useState } from 'react';

const Layout = () => {
    const [openMenu, setOpenMenu] = useState(true);
        
            const changeOpenMenu = () => {
                setOpenMenu(!openMenu);
            }
    
    return (
        <>
            
            <main className='app'>
                    <header className='app-header'>
                    <h1 className="logo">SAMOLAZOFF</h1>
                    <div className={openMenu?"social-list":"social-listd-none"}></div>
                    <div className="lang-panel"></div>
                    <div className={openMenu?"burger":"X"} onClick={changeOpenMenu}></div>
                    <nav className={openMenu?"app-nav d-none":"app-nav app-nav-animation"}>
                        <div className="social-list"></div>
                    </nav>
                </header>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;