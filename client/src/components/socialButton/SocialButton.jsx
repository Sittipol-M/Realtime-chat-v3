import "./socialButton.scss";

const SocialButton = ({ icon, description, backgroundIcon, backgroundDescription }) => {
  return (
    <div className="social-container flex-center-row">
      <div className="social-icon flex-center-row" style={{ backgroundColor: backgroundIcon }}>
        <i className={icon}></i>
      </div>
      <button style={{ backgroundColor: backgroundDescription }} className="social-button social-description">
        {description}
      </button>
    </div>
  );
};

export default SocialButton;
