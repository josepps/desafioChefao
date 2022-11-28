import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import {SectionCadastro, DivInputLabel, DivForm, InputMedio, InputPequeno, DivImagemCadastro, DivFormulario1, DivValores, TextArea, SpanErro, DivTeleconsulta} from "./FormularioCadastro.style"
import CachorroCadastro from "./../../public/CachorroCadastro.png"
import axios from "axios";
import {useForm, SubmitHandler} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import api from "../services/api";

type ValidationProps = {
    name: string;
    email: string;
    crmv: string;
    phoneNumber: string;
    password: string;
    avatar: string;
    specialty: string;
    queryValue: number;
    queryDutyValue: number;
    teleconsultation: boolean;
    aboutMe: string;
    formation: string;
    experience: string;
    code: string;
}

const validationPost = yup.object().shape({
    name: yup.string().required("Campo obrigatório").min(3, "No mínimo 3 caracteres"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    crmv: yup.string().required("Campo obrigatório").min(6, "CRMV inválido"), 
    phoneNumber: yup.string().required("Campo obrigatório").min(10, "Número inválido").max(11, "Numero inválido"),
    password: yup.string().required("Campo obrigatório").min(8, "No mínimo 8 caracteres").max(15, "No máximo 15 caracteres"),
    avatar: yup.string().required("Campo obrigatório").min(5, "Link inválido"),
    specialty: yup.string().required("Campo obrigatório").min(5, "No mínimo 5 caracteres"),
    queryValue: yup.string().required("Campo obrigatório").max(7, "Deve ser um valor abaixo"),
    queryDutyValue: yup.string().required("Campo obrigatório").max(7, "Deve ser um valor abaixo"),
    aboutMe: yup.string().required("Campo obrigatório").min(50, "No mínimo 50 caracteres").max(300,"No máximo 300 caracteres"),
    formation: yup.string().required("Campo obrigatório").min(50, "No mínimo 50 caracteres").max(300,"No máximo 300 caracteres"),
    experience: yup.string().required("Campo obrigatório").min(50, "No mínimo 50 caracteres").max(300,"No máximo 300 caracteres"),
    code: yup.string().required("Campo obrigatório").min(8, "CEP inválido"), 
})

function Cadastro(){

    const {register, handleSubmit, formState:{errors}} = useForm<ValidationProps>({
        resolver:yupResolver(validationPost)
    })

    const addPost = (data: any) => api.post("/vets", data)

    return(
        <>
            <NavBar/>
            <SectionCadastro>
                <DivForm>
                    <form onSubmit={handleSubmit(addPost)}>
                        <DivFormulario1>
                            <DivInputLabel>
                                <label>Nome Completo</label>
                                <InputMedio placeholder="Ex: Valdemar Almeida" type="text" 
                                // @ts-ignore
                                name="name" 
                                {...register("name") }></InputMedio>
                                <SpanErro>{errors.name?.message}</SpanErro>
                            </DivInputLabel>
                            <DivInputLabel>
                                <label>CRMV</label>
                                <InputMedio placeholder="Ex: 63537-97" type="text" 
                                // @ts-ignore
                                name="crmv" 
                                {...register("crmv")}></InputMedio>
                                <SpanErro>{errors.crmv?.message}</SpanErro>
                            </DivInputLabel>
                        </DivFormulario1>
                        <DivFormulario1>
                            <DivInputLabel>
                                <label>WhatsApp</label>
                                <InputMedio placeholder="Ex: 11930992123" type="number" 
                                // @ts-ignore
                                name="phoneNumber" 
                                {...register("phoneNumber")}></InputMedio>
                                <SpanErro>{errors.phoneNumber?.message}</SpanErro>
                            </DivInputLabel>
                            <DivInputLabel>
                                <label>Email profissional</label>
                                <InputMedio placeholder="Ex: valdemardas23@gmail.com" type="email" 
                                // @ts-ignore
                                name="email" 
                                {...register("email")}></InputMedio>
                                <SpanErro>{errors.email?.message}</SpanErro>
                            </DivInputLabel>
                        </DivFormulario1>
                        <DivFormulario1>
                            <DivFormulario1>
                                <DivInputLabel>
                                    <label>CEP</label>
                                    <InputPequeno placeholder= "13230-222" type="number" 
                                    // @ts-ignore
                                    name="code" 
                                    {...register("code")}></InputPequeno>
                                    <SpanErro>{errors.code?.message}</SpanErro>
                                </DivInputLabel>
                            </DivFormulario1>      
                        </DivFormulario1>
                        <DivFormulario1>
                            <DivInputLabel>
                                <label>Senha</label>
                                <InputMedio placeholder="" type="password" 
                                // @ts-ignore
                                name="password" 
                                {...register("password")}></InputMedio>
                                <SpanErro>{errors.password?.message}</SpanErro>
                            </DivInputLabel>
                            <DivInputLabel>
                                <label>Confirme sua senha</label>
                                <InputMedio placeholder="" type="password" name="confirmPassword"></InputMedio>
                            </DivInputLabel>
                        </DivFormulario1>
                        
                        <DivFormulario1>
                            < DivInputLabel>
                                <label>Link de imagem para o perfil</label>
                                <InputMedio type="text"
                                // @ts-ignore 
                                name="avatar" 
                                {...register("avatar")}/>
                                <SpanErro>{errors.avatar?.message}</SpanErro>
                            </ DivInputLabel>
                            < DivInputLabel>
                                <label>Especialidade</label>
                                <InputMedio type="text" 
                                // @ts-ignore
                                name="specialty" 
                                {...register("specialty")}/>
                                <SpanErro>{errors.specialty?.message}</SpanErro>
                            </ DivInputLabel>
                        </DivFormulario1>
                        
                            <DivValores>
                                < DivInputLabel>
                                    <label>Valor consulta Comercial</label>
                                    <InputPequeno type="text"  
                                    // @ts-ignore
                                    name="queryValue" 
                                    {...register("queryValue")}/>
                                    <SpanErro>{errors.queryValue?.message}</SpanErro> 
                                </ DivInputLabel>
                                < DivInputLabel>
                                    <label>Valor consulta Plantão 24h</label>
                                    <InputPequeno type="text" 
                                    // @ts-ignore
                                    name="queryDutyValue" 
                                    {...register("queryDutyValue")}/>
                                    <SpanErro>{errors.queryDutyValue?.message}</SpanErro> 
                                </ DivInputLabel>
                                < DivInputLabel> 
                                    <label>Atende remotamente?</label>
                                    <DivTeleconsulta>
                                        <InputPequeno type="checkbox" 
                                        // @ts-ignore
                                        name="teleconsultation" 
                                        {...register("teleconsultation")} /> 
                                        <label>Remoto</label>
                                    </DivTeleconsulta>
                                    
                                </ DivInputLabel> 
                                </DivValores>
                        {/* </DivFormulario1> */}
                            <div>
                                <DivInputLabel>
                                    <label>Sobre mim</label>
                                    <TextArea 
                                    // @ts-ignore
                                    name="aboutMe" 
                                    {...register("aboutMe")}></TextArea>
                                    <SpanErro>{errors.aboutMe?.message}</SpanErro> 
                                </DivInputLabel>
                                <DivInputLabel>
                                    <label>Formação</label>
                                    <TextArea 
                                    // @ts-ignore
                                    name="formation" 
                                    {...register("formation")}></TextArea>
                                    <SpanErro>{errors.formation?.message}</SpanErro> 
                                </DivInputLabel>
                                <DivInputLabel>
                                    <label>Experiência</label>
                                    <TextArea 
                                    // @ts-ignore
                                    name="experience" 
                                    {...register("experience")}></TextArea>
                                    <SpanErro>{errors.experience?.message}</SpanErro> 
                                </DivInputLabel>
                            </div>
                            
                        
                        <button type="submit">Enviar</button>
                    </form>
                </DivForm>
                <DivImagemCadastro>
                    <img src={CachorroCadastro} alt="Cachorro cadastrando seu usuário" />
                    <p>Fique visível para milhares de pessoas.</p>  
                    <p>Cadastre-se agora e conquiste mais clientes!</p>    
                </DivImagemCadastro>
            </SectionCadastro>
            <Footer/>
        </>
        
    )
}

export default Cadastro;