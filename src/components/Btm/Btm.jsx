import './Btm.scss';

const Btm = (props) => {

    const {txt} = props;

    return (
        <button className="app-button" type="button">
            {txt}
        </button>
    );
};

export default Btm;