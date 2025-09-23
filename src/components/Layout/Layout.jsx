import { Outlet } from 'react-router';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {

    return (
        <>
            <Header/>
            <main className='app container'>
                <Outlet />
            </main>
            <Footer/>
        </>
        
    );
};

export default Layout;