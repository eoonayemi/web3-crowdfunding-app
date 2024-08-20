/* eslint-disable react/prop-types */
const CustomButton = ({ type, label, styles, onClick, disabled = false }) => {
  return (
    <button
      className={`${styles} text-white px-6 py-3 rounded-xl font-semibold`}
      onClick={onClick}
      disabled={disabled}
      type={type || "button"}
    >
      {label}
    </button>
  );
};

export default CustomButton;
