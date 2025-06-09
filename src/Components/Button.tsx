
/*Componente do botão, recebe um texto e uma função que 
define o clique */ 

interface Button_Props {
    text: String
    style: string
    onClick: () => void
}

const Button = ({ text, style, onClick }: Button_Props) => {
    return (
      <button onClick={onClick} className={style}>
        {text}
      </button>
    );
  };
  
  export default Button;