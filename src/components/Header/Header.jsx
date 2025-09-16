import './Header.scss';

import Logo from '../Logo/Logo';
import SocialPanelMini from '../SocialPanelMini/SocialPanelMini';
import Nav from '../Nav/Nav';

const Header = () => {

    return (
        <header className='app-header container'>
            <div className="use-box">
                <Logo/>
                <SocialPanelMini/>
            </div>
            <Nav />
        </header>
    );
};

export default Header;