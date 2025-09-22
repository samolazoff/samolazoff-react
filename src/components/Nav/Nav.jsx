import './Nav.scss';

import { useState } from 'react';

import Hamburger from 'hamburger-react';
import NavItem from '../NavItem/NavItem';
import ContactsMini from '../ContactsMini/ContactsMini';

import {navigation} from '../../data/data.json';

const Nav = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <nav className='app-nav'>
            <Hamburger toggled={isOpen} toggle={setOpen}/>
            <div className={(!isOpen)?'app-nav-box  d-none':'app-nav-box'}>
                <ContactsMini/>
                <ul className='app-nav-items'>
                    {                    
                        navigation.map((itm, idx) => {
                            return <NavItem name = {itm} key = {idx} isDark = {false}/>
                        })
                    }
                </ul>

            </div>
        </nav>
    );
};

export default Nav;