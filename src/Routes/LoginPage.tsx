import '../Styles/LoginPage.css'
import AppName from '../assets/AppName.png'
import AppLogo from '../assets/Logo.png'
import EyeClosed from '../assets/EyeClose.svg'
import Button from '../Components/Button';
import { useChangeRoute } from '../Hooks/useChangeRoute';

const LoginPage = () => {

  const changeRoute = useChangeRoute();

  return (
    <div className="login-container">
      <img src={AppName} />
      <img src={AppLogo} className='logo-container' />

      <div className="password-container">

        <div className='password-row'>
          <input type="password" placeholder="Informe a sua senha" />
          <img src={EyeClosed} className="password-icon" />
        </div>

        <div className="button-row">
          <Button text={'Login'} style='button-login' onClick={() => changeRoute("Password")}></Button>
          <Button text={'I'} style='button-info' onClick={() => changeRoute("About")}></Button>
        </div>

      </div>

    </div>

  );
};

export default LoginPage;