import '../Styles/AboutPage.css'
import Button from "../Components/Button";
import AboutName from '../assets/AboutName.png'
import { useChangeRoute } from "../Hooks/useChangeRoute";


const AboutPage = () => {

    const changeRoute = useChangeRoute()

    return (
        <div className='about-container'>
            <img src={AboutName} className='about-name'/>
            <Button text={'Voltar'} style='' onClick={() => changeRoute("")}></Button>
        </div>

    );
};

export default AboutPage;