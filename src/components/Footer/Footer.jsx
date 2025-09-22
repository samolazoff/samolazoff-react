import './Footer.scss';

import NavItem from '../NavItem/NavItem';
import Slogan from '../Slogan/Slogan';

import { Link } from 'react-router-dom';

import {navigation} from '../../data/data.json';

const Footer = () => {

    const today = new Date();

    return (
        <footer className='app-footer container'>
            <div className="app-footer-content">
                <Slogan/>
                <ul className="app-footer-nav">
                    {                    
                        navigation.map((itm, idx) => {
                            return <NavItem name = {itm} key = {idx} isDark = {true}/>
                        })
                    }
                </ul>
            </div>
            <div className="app-footer-box-bottom">
                <span>© {today.getFullYear()}</span>
                <Link className='app-footer-box-bottom__link' to='/'>@Samolazoff</Link>
            </div>
        </footer>
    );
};

export default Footer;