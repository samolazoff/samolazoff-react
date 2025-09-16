import './Nav.scss';

import { useState } from 'react';

import Hamburger from 'hamburger-react';
import NavItem from './NavItem';
import ContactsMini from '../ContactsMini/ContactsMini';

const Nav = () => {

    const [isOpen, setOpen] = useState(false);

    const  dataNav = [
        'about',
        'work',
        'services',
        'contact',
        'blog'
    ];
   
    return (
        <nav className='app-nav'>
            <Hamburger toggled={isOpen} toggle={setOpen}/>
            <div className={(!isOpen)?'app-nav-box  d-none':'app-nav-box'}>
                <ContactsMini/>
                <ul className='app-nav-items'>
                    {                    
                        dataNav.map((itm, idx) => {
                        return <NavItem name = {itm} key = {idx}/>
                        })
                    }
                </ul>

            </div>
        </nav>
    );
};

export default Nav;