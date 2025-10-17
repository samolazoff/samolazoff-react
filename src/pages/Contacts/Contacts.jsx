import './Contacts.scss';

import TitleBlock from '../../components/TitleBlock/TitleBlock';
import FormConect from '../../layouts/FormConect/FormConect';

const Contacts = () => {
    return (
        <section className='contacts'>
            <div className="contacts-wrap">
                <TitleBlock txt='Contacts With Me'/>
                <div className="contacts__title-txt">
                    <span>Let's Work</span>
                    <span>Together</span>
                </div>
                <FormConect/>
            </div>
        </section>
    );
};

export default Contacts;