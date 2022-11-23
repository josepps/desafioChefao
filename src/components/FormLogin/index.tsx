import { ButtonLogin, Container, RecoverPassword } from "./FormLogin.style";
import LoginImage from "./../../../public/cat.png"
import FormInput from "../FormInput";

function Login() {

    return(
        <>
            <Container>
                <img src={LoginImage} alt="Login image" />
                <p>Olá, boas-vindas!</p>
                <FormInput label="E-mail" type="email"/>
                <FormInput label="Senha" type="password"/>
                <RecoverPassword href="#">Esqueci minha senha</RecoverPassword>
                <ButtonLogin>Login</ButtonLogin>
            </Container>
        </>
    )
}

export default Login;