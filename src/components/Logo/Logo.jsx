import {NavLink} from 'react-router-dom';

import './Logo.scss';

const Logo = () => {
    return (
        <NavLink to='/'>
            <h1 className='logo'>SamolazOff</h1>
        </NavLink>
    );
};

export default Logo;