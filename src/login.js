import './login.css'
import logo from "./images/logo.svg"

export function LogInScreen({ logIn }) {
    return (
        <div className="background">
            <div className="popup">
                <img src={logo} alt="Estágio Hoje" />
                <div className="loginForm">
                    <p>Usuário ou e-mail</p>
                    <input id="full-name" name="full-name" type="text"></input>
                    <p>Senha</p>
                    <input id="password" name="password" type="text"></input>
                    <button onClick={() => logIn(true)}>Login</button>
                </div>
                <div className="otherButtons">
                    <button>Esqueceu a senha?</button>
                    <button>Não possui cadastro?</button>
                </div>
            </div>
        </div>
    )
}