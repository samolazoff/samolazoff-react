import './Nav.scss';


import { useState } from 'react';

import Hamburger from 'hamburger-react';

const Nav = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <nav className='app-nav'>
            <Hamburger toggled={isOpen} toggle={setOpen} />
            <ul className="app-nav-items">
                <li className="app-nav-item">

                </li>
            </ul>
        </nav>
    );
};

export default Nav;