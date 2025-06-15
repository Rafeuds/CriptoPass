import '../Styles/AboutPage.css'
import Button from "../Components/Button";
import AboutName from '../assets/AboutName.png'
import { useChangeRoute } from "../Hooks/useChangeRoute";


const AboutPage = () => {

    const changeRoute = useChangeRoute()

    return (
        <div className='about-container'>

            <img src={AboutName} className='about-name' />

            <Button text={'Voltar'} style='about-button' onClick={() => changeRoute("")}></Button>

            <div className='about-body'>

                <p className='about-text'>
                    O Criptopass é um aplicativo desenvolvido para cadastrar e armazenar suas senhas pessoais.
                    <br /><br />
                    Ao fazer login no aplicativo, você informa uma senha principal, que será usada como chave para criptografar e descriptografar todas as suas outras senhas.
                    <br /><br />
                    Dentro do app, é possível cadastrar senhas de sites, redes sociais, aplicativos e outros serviços. Essas informações são armazenadas em um arquivo local, mas de forma totalmente segura — os dados são criptografados com base na senha principal informada no login.
                    <br /><br />
                    Quando o aplicativo é acessado novamente, ele lê o arquivo contendo as senhas criptografadas e tenta descriptografá-las usando a senha mestra informada.
                    <br />
                    Apenas com a senha correta será possível acessar suas informações. Isso garante que mesmo que alguém tenha acesso ao arquivo, não será capaz de visualizar seus dados sem a senha principal.
                    <br /><br />
                    Sendo assim uma solução simples, eficiente e segura para gerenciar suas credenciais com total privacidade.
                    <br />
                    Com armazenamento local, criptografia baseada em senha mestra e uma interface intuitiva, você tem controle total sobre seus dados, sem depender de serviços externos ou conexão com a internet.
                    <br /><br />
                    Lembrar de suas senhas nunca foi tão simples!
                </p>

            </div>

        </div>

    );
};

export default AboutPage;