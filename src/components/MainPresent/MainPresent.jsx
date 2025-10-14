import './MainPresent.scss';

import img from '../../static/img/mine/site.png';

import { Link } from 'react-router-dom';

import TitleBlock from '../../components/TitleBlock/TitleBlock';
import Btm from '../../components/Btm/Btm';

const MainPresent = () => {
    return (
        <section className='main-present'>
            <div className="my-product-mini">
                <TitleBlock txt="My product"/>
                <Link to="/work" className="my-product-mini__slogan">Look at My Products.</Link>
                <ul className="my-product-mini-items">
                    <li className="my-product-mini-item">
                        <Link to="/" className='my-product-mini-card'>
                            <img className="my-product-mini-card__img" src={img} alt="site" />
                            <div className="my-product-mini-card-description">
                                <h3 className="my-product-mini-card__title">Samolazoff</h3>
                                <span className="my-product-mini-card__subtitle">website, portfolio</span>
                            </div>
                        </Link>
                    </li>
                    <li className="my-product-mini-item">
                        <Link to="/" className='my-product-mini-card'>
                            <img className="my-product-mini-card__img" src={img} alt="site" />
                            <div className="my-product-mini-card-description">
                                <h3 className="my-product-mini-card__title">Samolazoff</h3>
                                <span className="my-product-mini-card__subtitle">website, portfolio</span>
                            </div>
                        </Link>
                    </li>
                    <li className="my-product-mini-item">
                        <Link to="/" className='my-product-mini-card'>
                            <img className="my-product-mini-card__img" src={img} alt="site" />
                            <div className="my-product-mini-card-description">
                                <h3 className="my-product-mini-card__title">Samolazoff</h3>
                                <span className="my-product-mini-card__subtitle">website, portfolio</span>
                            </div>
                        </Link>
                    </li>
                    <li className="my-product-mini-item">
                        <Link to="/" className='my-product-mini-card'>
                            <img className="my-product-mini-card__img" src={img} alt="site" />
                            <div className="my-product-mini-card-description">
                                <h3 className="my-product-mini-card__title">Samolazoff</h3>
                                <span className="my-product-mini-card__subtitle">website, portfolio</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="blog-mini">
                <TitleBlock txt="What's the news"/>
            </div>
            
        </section>
    );
};

export default MainPresent;