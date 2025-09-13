const Dropdown = ({ label, id, name, required, option, value, icon, onChange }) => {
  return (
    <div className="search-field">
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      <select id={id} name={name} required={required} onChange={onChange}>
        {option?.map((item, i) => {
          return (
            <option key={i} value={item?.value} selected={item?.value === value ? true : false}>
              {item?.label}
            </option>
          );
        })}
      </select>
      {icon}
    </div>
  );
};

export default Dropdown;
