import { LoginComponent } from './login-component';
import svg from '../../asset/svg/family.svg';
import './login.scss';

function LoginContainer() {
  return (
    <div className="login__container__wrapper">
      <LoginComponent />
      <div className="svg__icon">
        <img src={svg} alt="" />
      </div>
      <div className="typical__wrapper">
        <p className="typical">Good Health Management &copy; copyright 2022</p>
      </div>
    </div>
  );
}

export default LoginContainer;
