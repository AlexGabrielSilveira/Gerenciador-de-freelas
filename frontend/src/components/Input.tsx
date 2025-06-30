interface InputProps {
  placeholder?: string;
  type?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  name?: string;
}

function Input({ placeholder, type, className, onChange, value, name }: InputProps) {
  return (
    <input
      type={type || "text"}
      name={name}
      className={className}
      placeholder={placeholder || "Digite aqui..."}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
