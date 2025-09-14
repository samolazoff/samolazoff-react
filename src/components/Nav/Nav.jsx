import './Nav.scss';

import { useState } from 'react';

import Hamburger from 'hamburger-react';
import NavItem from './NavItem';

const Nav = () => {

    const [isOpen, setOpen] = useState(false);

    const  dataNav = [
        'about',
        'work',
        'services',
        'contact',
        'blog'
    ]
        console.log(isOpen);
        
    return (
        <nav className='app-nav'>
            <Hamburger toggled={isOpen} toggle={setOpen} />
            <ul className={(!isOpen)?'app-nav-items  d-none':'app-nav-items'}>
                {                    
                    dataNav.map((itm, idx) => {
                       return <NavItem name = {itm} key = {idx}/>
                    })
                }
            </ul>
        </nav>
    );
};

export default Nav;