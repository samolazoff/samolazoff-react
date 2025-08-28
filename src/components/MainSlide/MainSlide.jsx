import './MainSlide.scss';

import { useState } from 'react';

const MainSlide = () => {

    const [openMenu, setOpenMenu] = useState(true);

    const changeOpenMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <section className='main-slide'>
            
            <section className='main-slide-content'>
                <div className={openMenu?"main-slide-content-txt":"main-slide-content-txt-animation"}>
                </div>
                <div className="main-slide-content-img"></div>
            </section>
        </section>
         
        
    );
};

export default MainSlide;