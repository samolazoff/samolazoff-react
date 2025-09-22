import './Slogan.scss';

import { Link } from 'react-router-dom';

const Slogan = () => {
    return (
        <div className='slogan'>
            <span className="slogan__main">You have only one chance to become a full-fledged part of the Internet.</span>
            <Link to='/form' className='slogan__link'> Let’s make it an amazing one. </Link>
        </div>
    );
};

export default Slogan;