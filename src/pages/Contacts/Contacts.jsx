import './Contacts.scss';

import TitleBlock from '../../components/TitleBlock/TitleBlock';

const Contacts = () => {
    return (
        <section className='contacts'>
            <div className="contacts-wrap">
                <TitleBlock txt='Contacts With Me'/>
            </div>
        </section>
    );
};

export default Contacts;