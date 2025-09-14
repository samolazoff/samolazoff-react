import './Header.scss';

import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';

const Header = () => {
    return (
        <header className='app-header container'>
            <div className="use-box">
                <Logo/>
            </div>
            <Nav/>
        </header>
    );
};

export default Header;