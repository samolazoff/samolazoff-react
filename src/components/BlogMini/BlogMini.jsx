import './BlogMini.scss';


import { Link } from 'react-router-dom';

import TitleBlock from '../TitleBlock/TitleBlock';
import Btm from '../Btm/Btm';

const BlogMini = () => {
    return (
        <section className='blog-mini'>
            <TitleBlock txt="What's the news"/>
            <div className="blog-mini__title-txt">
                <span>I'm constantly evolving and</span>
                <span>I have something to share with you.</span>
            </div>
            <ul className="blog-mini-items">
                <li className="blog-mini-item">
                    <Link to = "/" className='blog-mini-card'>
                        <data value="14-10-2025">14.10.2025</data>
                        <h3 className="blog-mini-card__title">Portfolio</h3>
                        <span className="blog-mini-card__sibtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus facilis a quas assumenda fuga vero velit possimus? Blanditiis quaerat maxime nam laborum tempore accusantium laboriosam, soluta id, iste aliquam corrupti? </span>
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
            <Link to="/blog"><Btm txt="Read More"/></Link>
        </section>
    );
};

export default BlogMini;