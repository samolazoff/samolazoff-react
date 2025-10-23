import { Link } from 'react-router-dom';

import './Work.scss';

import TitleBlock from '../../components/TitleBlock/TitleBlock';

import imgSite from '../../static/img/mine/site.png';

const Work = () => {
    return (
        <section className='work'>
            <TitleBlock txt='My Work'/>
            <div className="work__title-txt" id='contacts'>
                <span>Look at My</span>
                <span>Products.</span>
            </div>
            <ul className="work-items">
                <li className="work-card">
                    <img src={imgSite} alt="img-site" className='work-card__img'/>
                    <div className="work-card-box">
                        <h3 className="work-card__title">Portfolio Samolazoff</h3>
                        <span className="work-card__discription">This is siteportfolio for my</span>
                    </div>
                </li>
                <li className="work-card">
                    <img src={imgSite} alt="img-site" className='work-card__img'/>
                    <div className="work-card-box">
                        <Link to='/'>
                            <h3 className="work-card__title">Portfolio Samolazoff</h3>
                        </Link>
                        <span className="work-card__discription">This is site-portfolio for my</span>
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default Work;