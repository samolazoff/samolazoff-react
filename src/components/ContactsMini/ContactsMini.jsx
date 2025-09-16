import './ContactsMini.scss';

import iconTelegram from '../../static/svg/contacts/telegram-fill-svgrepo-com.svg';
import iconWhatsapp from '../../static/svg/contacts/whatsapp-svgrepo-com.svg';
import iconMail from '../../static/svg/contacts/mail-alt-2-svgrepo-com.svg';

import SocialPanelMini from '../SocialPanelMini/SocialPanelMini';

const ContactsMini = () => {
    return (
        <ul className='contacts-mini'>
            <li className="contacts-mini-item">
                <img className="contacts-mini__svg" src={iconMail} alt="iconMail" />
                <span className="contacts-mini__txt">samolazov.roman.alex@gmail.com</span>
            </li>
            <li className="contacts-mini-item">
                <img className="contacts-mini__svg" src={iconTelegram} alt="iconTelegram" />
                <span className="contacts-mini__txt">@Roman_Samolazoff</span>
            </li>
            <li className="contacts-mini-item">
                <img className="contacts-mini__svg" src={iconWhatsapp} alt="iconWhatsapp" />
                <span className="contacts-mini__txt">+375445576259</span>
            </li>
            <SocialPanelMini flexDirection='column'></SocialPanelMini >
        </ul>
    );
};

export default ContactsMini;