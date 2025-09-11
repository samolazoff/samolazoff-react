import './Header.scss';

import Logo from '../Logo/Logo';

const Header = () => {
    return (
        <header className='app-header container'>
            <div className="use-box">
                <Logo/>
            </div>
            
        </header>
    );
};

export default Header;