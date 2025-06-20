import '../Styles/PasswordPage.css'
import { useChangeRoute } from "../Hooks/useChangeRoute";
import Button from "../Components/Button";
import PasswordName from '../assets/PasswordName.png'

const PasswordPage = () => {

    const changeRoute = useChangeRoute()

    return (

        <div className="password-container">

            <img src={PasswordName} className='password-name' />

            <div className='button-password-row'>
                <Button text={'Criar uma nova senha'} style='password-create-button' onClick={() => changeRoute("")}></Button>
                <Button text={'Voltar'} style='password-return-button' onClick={() => changeRoute("")}></Button>
            </div>
            <div className='password-body'></div>


        </div>

    );
};

export default PasswordPage;