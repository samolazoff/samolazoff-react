import {Link} from 'react-router-dom'; 

const SocialpanelMiniItem = (props) => {

const {name, href, img} = props;

    return (
        <Link to = {href} className = 'social-panel-mini-item'>
            <img  className = 'social-panel-mini-item__img' src={img} alt={name} />
            <span className = 'social-panel-mini-item__title'>{name}</span>
        </Link>
    );
};

export default SocialpanelMiniItem;