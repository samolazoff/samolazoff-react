import './FormConect.scss';

import { useForm } from "react-hook-form";

import ContactsMini from '../../components/ContactsMini/ContactsMini';

const FormConect = () => {
    return (
        <div className="form-conect-wrap">
            <ContactsMini/>
            <form className='form-conect' method='POST'>
                <label className='form-conect-label' htmlFor="userName" >
                    <input className='form-conect__input' type="text" name="userName" id="userName" placeholder="Your name"/>
                </label>
                
            </form>
        </div>
        
    );
};

export default FormConect;