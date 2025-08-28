import './MainSlide.scss';

import { useState } from 'react';

const MainSlide = () => {

    const [openMenu, setOpenMenu] = useState(true);

    const changeOpenMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <section className='main-slide'>
            <header className='app-header'>
                <h1 className="logo">SAMOLAZOFF</h1>
                <div className={openMenu?"social-list":"social-listd-none"}></div>
                <div className="lang-panel"></div>
                <div className={openMenu?"burger":"X"} onClick={changeOpenMenu}></div>
                <nav className={openMenu?"app-nav d-none":"app-nav"}>
                    <div className="social-list"></div>
                </nav>
            </header>
            <section className='main-slide-content'>
                <div className="main-slide-content-txt"></div>
                <div className="main-slide-content-img"></div>
                
            </section>
        </section>
    );
};

export default MainSlide;