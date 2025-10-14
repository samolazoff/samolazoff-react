import './Present.scss';

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
                    <Btm txt="Contact Me"></Btm>
                    <Btm txt="My Works"></Btm>
                </div>
                
            </div>
        </section>
    );
};

export default Present;