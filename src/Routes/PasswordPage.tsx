import Button from "../Components/Button";
import { useChangeRoute } from "../Hooks/useChangeRoute";

const PasswordPage = () => {

    const changeRoute = useChangeRoute()

    return (
        <div >
            <Button text={'Voltar'} style='' onClick={() => changeRoute("")}></Button>
        </div>

    );
};

export default PasswordPage;