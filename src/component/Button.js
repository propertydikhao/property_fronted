const Button = ({ type, icon, label }) => {
  return (
    <button type={type} className="search-btn">
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default Button;
