import './Present.scss';

import {Link} from 'react-router-dom';

import TitleBlock from '../../components/TitleBlock/TitleBlock';
import Btm from '../../components/Btm/Btm';

const Present = () => {
    return (
        <section className='present'>
            <TitleBlock txt='What I Do'/>
            <div className="present__title-txt">
                <span>I enjoy creating delightful,</span>
                <span>human-centered digital experiences.</span>
            </div>
            <div className="present-box-focus">
                <h3 className="present-box-focus__title">Think. Make. Solve. </h3>
                <div className="present-box-focus-box-btn">
                    <Link to='/contacts#contacts'><Btm txt="Contact Me" type="button"></Btm></Link>
                    <Link to='/work'><Btm txt="My Works" type="button"></Btm></Link>
                </div>
                
            </div>
        </section>
    );
};

export default Present;