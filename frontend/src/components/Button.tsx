interface ButtonProps {
    onClick?: () => void;
    text: string;
    className?: string;
    type?: 'button' | 'submit';
}

function Button({ onClick, text, className, type }: ButtonProps) {
    return (
       <button className={className} onClick={onClick} type={type || 'button'}>
            {text}
        </button>
    );
}

export default Button;