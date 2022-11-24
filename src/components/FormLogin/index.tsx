import { ButtonLogin, Container, Input, Label } from "./FormLogin.style";
import LoginImage from "./../../../public/cat.png"
import { FormEvent, useState } from "react";
import { login } from "../../services/login";
import {useDispatch} from "react-redux"
import { setUser } from "../../store/modules/user";

function Login() {

  const[email, setEmail] = useState<string>("");
  const[password, setPassword] = useState<string>("");
  const dispatch = useDispatch();

  const submit = async (event:FormEvent)=>{
    event.preventDefault();

    console.log(password);
    console.log(email);

    const payload = {
      email,
      password
    }

    try {
      const response = await login(payload);
      console.log(response.data)

      dispatch(setUser({
        token: response.data,
        email
      }))

      alert ("LOGADO")
    } catch (error) {
      alert ("Algo Deu Errado")

      console.log("deu um erro", error)

    }
  }

    return(
        <>
            <Container>
                <img src={LoginImage} alt="Login image" />
                <p>Olá, boas-vindas!</p>
                <form onSubmit={submit}>
                    <div>
                        <Label>Email</Label>
                        <Input name="email" type="email" placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                    </div>
                    <div>
                        <Label>Senha</Label>
                        <Input  name="senha" type="password" placeholder="senha" value={password} onChange={(event) => setPassword(event.target.value)}/>
                    </div>
                    <ButtonLogin type="submit">Login</ButtonLogin>
                </form>
            </Container>
        </>
    )
}

export default Login;