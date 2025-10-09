import './About.scss';

import MyImg from '../../static/img/mine/5373046436129799659.png';

const About = () => {
    return (
        <section className='about'>
            <img  className='about__img' src={MyImg} alt="MY_IMG" />
            <div className="about-content">
                <h2 className="title-block">
                    Raman Samalazau
                </h2>
                <span className="about__txt">Hello, my name's Raman. I'm a Web Developer.</span>
            </div>
        </section>
    );
};

export default About;