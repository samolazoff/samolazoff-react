import { Outlet } from 'react-router';

const Layout = () => {

    return (
        <>
            <main className='app'>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;