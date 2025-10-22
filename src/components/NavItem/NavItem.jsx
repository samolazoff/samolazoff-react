import './NavItem.scss';

import {NavLink} from 'react-router-dom';

const NavItem = (props) => {
    const {title, link, isDark} = props;
    console.log(title, link, isDark);
    return (
        <li className={(!isDark)?"nav-item":"nav-item nav-item_dark"}>
            <NavLink to={link}>{title}</NavLink>
        </li>
    );
};

export default NavItem;