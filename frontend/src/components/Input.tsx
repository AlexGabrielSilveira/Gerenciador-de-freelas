interface InputProps {
    id?: string;
    placeholder?: string;
    type?: string;
    className?: string;
}

function Input({ id, placeholder, type, className}: InputProps) {
    return (
        <input 
            type={type || "text"} 
            id={id} 
            className={className}
            placeholder={placeholder || "Digite aqui..."} 
        />
    )
}
export default Input;