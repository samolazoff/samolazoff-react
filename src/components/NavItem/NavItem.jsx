import './NavItem.scss';

import {NavLink} from 'react-router-dom';

const NavItem = (props) => {
    return (
        <li className={(!props.isDark)?"nav-item":"nav-item nav-item_dark"}>
            <NavLink to={'/'+props.name}>{props.name}</NavLink>
        </li>
    );
};

export default NavItem;