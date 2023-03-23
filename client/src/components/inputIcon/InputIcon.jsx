import "./inputIcon.scss";

const InputIcon = ({ icon, handleTypeInput, placeholder, type }) => {
  return (
    <div className="input-icon-container ">
      <div className="input-icon flex-center-column">
        <i className={icon}></i>
      </div>
      <input type={type} placeholder={placeholder} onChange={(event) => handleTypeInput({ input: event.target.value })} />
    </div>
  );
};

export default InputIcon;
