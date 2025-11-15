interface ButtonProps{
    text : string;
    onClick: () => void;
    color? : string;
}

const Button: React.FC<ButtonProps> = ({text, onClick,color}) => {
    return <button style = {{backgroundColor: color|| "white"}} onClick={onClick}>{text}</button>
};

export default Button;