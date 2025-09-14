import {NavLink} from 'react-router-dom';

const NavItem = (props) => {
    return (
        <li className="app-nav-item">
            <NavLink to={'/'+props.name}>{props.name}</NavLink>
        </li>
    );
};

export default NavItem;