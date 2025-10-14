import './Home.scss';

import About from '../../layouts/About/About';
import Present from '../../layouts/Present/Present';
import MainPresent from '../../components/MainPresent/MainPresent';

const Home = () => {
    return (
        <>
            <About/>
            <Present/>
            <MainPresent/>
        </>
    );
};

export default Home;