import './FormConect.scss';

import { useForm } from "react-hook-form";

import ContactsMini from '../../components/ContactsMini/ContactsMini';
import Btm from '../../components/Btm/Btm';

const FormConect = () => {
    return (
        <div className="form-conect-wrap">
            <ContactsMini/>
            <form className='form-conect' method='POST'>
                <label className='form-conect-label' htmlFor="userName" >
                    <input className='form-conect__input' type="text" name="userName" id="userName" placeholder="Your name"/>
                </label>
                <label className='form-conect-label' htmlFor="userEmail" >
                    <input className='form-conect__input' type='mail' name="userEmail" id="userEmail" placeholder="Your email"/>
                </label>
                <label className='form-conect-label' htmlFor="userTxt" >
                    <textarea className='form-conect__input form-conect__input_textarea' name="userTxt" id="userTxt" placeholder="Message"/>
                </label>
                <Btm txt="Let's Talk" type="submit"/>
            </form>
        </div>
        
    );
};

export default FormConect;