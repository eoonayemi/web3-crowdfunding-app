/* eslint-disable react/prop-types */
const FormField = ({
  label,
  placeholder,
  styles,
  isTextArea,
  inputType,
  value,
  step,
  onChange,
}) => {
  return (
    <div className="flex_v_center gap-2 text-slate-500 flex-1">
      <label className="font-semibold">{label}</label>
      {isTextArea ? (
        <textarea
          required
          rows={10}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${styles} bg-transparent border border-slate-600 p-3 rounded-lg placeholder:text-slate-700 outline-none text-white`}
        ></textarea>
      ) : (
        <input
          required
          placeholder={placeholder}
          type={inputType}
          value={value}
          onChange={onChange}
          step={step && step}
          min={step && step}
          className={`${styles} bg-transparent border border-slate-600 p-3 rounded-lg placeholder:text-slate-700 outline-none text-white`}
        />
      )}
    </div>
  );
};

export default FormField;
