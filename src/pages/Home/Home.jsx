import './Home.scss';

import About from '../../layouts/About/About';
import Present from '../../layouts/Present/Present';
import BlogMini from '../../components/BlogMini/BlogMini';

const Home = () => {
    return (
        <>
            <About/>
            <Present/>
            <BlogMini/>
        </>
    );
};

export default Home;