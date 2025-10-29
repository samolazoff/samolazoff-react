import { Link } from 'react-router-dom';

import './BLog.scss';

import TitleBlock from '../../components/TitleBlock/TitleBlock';

const BLog = () => {
    return (
        <section className='blog'>
            <TitleBlock txt='My Blog'/>
            <ul className="blog-items">
                <li className="blog-item">
                    <div className="blog-item-box">
                        <h4 className="blog-item__title">The first news</h4>
                        <data value="29-10-2025">29/10/2025</data>
                    </div>
                    <div className="blog-item-article">
                        <p className="blog-item-article__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore perferendis inventore distinctio aut, atque natus ullam modi voluptatibus libero iusto saepe possimus officiis. Error sequi totam quam ratione odio quas unde dolorum numquam temporibus quasi, delectus doloribus. Molestias vitae nulla, exercitationem autem consequatur saepe tenetur, recusandae porro quo odio voluptas assumenda sequi. Atque, neque a? Ducimus voluptates nesciunt sapiente dolorem non, autem obcaecati doloremque.</p>
                    </div>
                </li>
                <li className="blog-item">
                    <div className="blog-item-box">
                        <h4 className="blog-item__title">The first news</h4>
                        <data value="29-10-2025">29/10/2025</data>
                    </div>
                    <div className="blog-item-article">
                        <p className="blog-item-article__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore perferendis inventore distinctio aut, atque natus ullam modi voluptatibus libero iusto saepe possimus officiis. Error sequi totam quam ratione odio quas unde dolorum numquam temporibus quasi, delectus doloribus. Molestias vitae nulla, exercitationem autem consequatur saepe tenetur, recusandae porro quo odio voluptas assumenda sequi. Atque, neque a? Ducimus voluptates nesciunt sapiente dolorem non, autem obcaecati doloremque.</p>
                        <p className="blog-item-article__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore perferendis inventore distinctio aut, atque natus ullam modi voluptatibus libero iusto saepe possimus officiis. Error sequi totam quam ratione odio quas unde dolorum numquam temporibus quasi, delectus doloribus. Molestias vitae nulla, exercitationem autem consequatur saepe tenetur, recusandae porro quo odio voluptas assumenda sequi. Atque, neque a? Ducimus voluptates nesciunt sapiente dolorem non, autem obcaecati doloremque.</p>
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default BLog;