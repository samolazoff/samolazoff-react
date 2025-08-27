import './MainSlide.scss';

const MainSlide = () => {
    return (
        <section className='main-slide'>
            <header className='app-header'>
                <h1 className="logo">SAMOLAZOFF</h1>
                <div className="social-list"></div>
                <div className="lang-panel"></div>
                <div className="burger"></div>
                <nav className="app-nav d-none">
                    <div className="social-list"></div>
                </nav>
            </header>
            <section className='main-slide-content'>
                <div className="main-slide-content-txt"></div>
                <div className="main-slide-content-img"></div>
                
            </section>
        </section>
    );
};

export default MainSlide;