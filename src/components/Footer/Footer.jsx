import './Footer.scss';

import NavItem from '../NavItem/NavItem';

import {navigation} from '../../data/data.json';

const Footer = () => {
    return (
        <footer className='app-footer container'>
            <div className="app-footer-content">
                <span className="app-footer__slogan">
        
                </span>
                <ul className="app-footer-nav">
                    {                    
                        navigation.map((itm, idx) => {
                            return <NavItem name = {itm} key = {idx} isDark = {true}/>
                        })
                    }
                </ul>
            </div>
            
        </footer>
    );
};

export default Footer;