import './Btm.scss';

const Btm = (props) => {

    const {txt, type} = props;

    return (
        <button className="app-button" type={type}>
            {txt}
        </button>
    );
};

export default Btm;