const Input = ({
  label,
  id,
  type,
  name,
  placeholder,
  required,
  icon,
  value,
  onChange,
}) => {
  return (
    <div className="search-field">
      {label && (
        <label htmlFor={id} className="field-label">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
      {icon}
    </div>
  );
};

export default Input;
