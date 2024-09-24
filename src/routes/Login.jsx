import React from 'react';
import { LoginStyle } from '../css/LoginStyle'

const Login=()=>{
    return (
    <LoginStyle>
    <header className='body'>
        <div className="login-container">
            <div className="login-box">
            <h1>Login</h1>
            <form>
                <div className="input-container">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Digite seu email" />
                </div>
                <div className="input-container">
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" placeholder="Digite sua senha" />
                </div>
                <button className="login-button" type="submit">Entrar</button>
            </form>
            <div className="forgot-password">
                <a href="#">Esqueceu sua senha?</a>
            </div>
            <div className="signup-link">
                <p>Não tem uma conta? <a href="#">Cadastre-se</a></p>
            </div>
            </div>
        </div>
      </header>
      </LoginStyle>
    );
  };
  
  export default Login;