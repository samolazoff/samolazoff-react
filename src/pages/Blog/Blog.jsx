import { Link } from 'react-router-dom';

import './BLog.scss';

import TitleBlock from '../../components/TitleBlock/TitleBlock';

const BLog = () => {
    return (
        <section className='blog'>
            <TitleBlock txt='My Blog'/>
            <div className="blog__title-txt" id='contacts'>
                <span>This is</span>
                <span>My way.</span>
            </div>
        </section>
    );
};

export default BLog;