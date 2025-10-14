import './BlogMini.scss';

import img from '../../static/img/mine/site.png';

import { Link } from 'react-router-dom';

import TitleBlock from '../TitleBlock/TitleBlock';
import Btm from '../Btm/Btm';

const BlogMini = () => {
    return (
        <section className='blog-mini'>
            <TitleBlock txt="What's the news"/>
            <ul className="blog-mini-items">
                <li className="blog-mini-item">
                    <Link to = "/" className='blog-mini-card'>
                        <data value="14-10-2025">14.10.2025</data>
                        <h3 className="blog-mini-card__title">Portfolio</h3>
                        <span className="blog-mini-card__sibtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quidem nobis nesciunt, repellat, numquam sapiente, </span>
                    </Link>
                </li>
                    <li className="blog-mini-item">
                    <Link to = "/" className='blog-mini-card'>
                        <data value="14-10-2025">14.10.2025</data>
                        <h3 className="blog-mini-card__title">Portfolio</h3>
                        <span className="blog-mini-card__sibtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quidem nobis nesciunt, repellat, numquam sapiente, </span>
                    </Link>
                </li>
            </ul>
        </section>
    );
};

export default BlogMini;