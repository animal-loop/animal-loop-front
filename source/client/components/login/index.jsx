import React from 'react';
import '../../../../public/style/login.scss';

/*img */
import Logo from '../../../../public/images/logo-gauss.png';
import LogoDesert from '../../../../public/images/logo-desertpoint.png';

const LoginForm = props => (
  <div className="container_login">
    <div className="container_login_box">
      <div className="container_login_img">
        <img src={Logo} alt="Gauss control" />
      </div>
      <div className="container_login_form">
        <form onSubmit={props.handleLogin}>
          <h1>Log in </h1>
          <div className="box-form icon icon_user">
            <input type="text" className="login" id="user" placeholder="Email" autoComplete="username" />
          </div>
          <div className="box-form icon icon_pass top">
            <input type="password" className="login" id="password" placeholder="Password" autoComplete="new-password"/>
          </div>
          <div className="box-form top"> 
            {
              props.message &&
                <p className="message">{props.message}</p>
            }
          </div>
          <div className="box-form top topx2 center"> 
            <input type="submit" className="login" value="Inicia Sesión" />
          </div>
        </form>
      </div>
      <div className="container_login_img__bottom">
        <p>Developed by</p>
        <img src={LogoDesert} alt="Desert point" />
      </div>
    </div>
  </div>
);

export default LoginForm;
