export default function Input({ label, id, defaultValue, onChange, onBlur, children, ...props }) {
  return (
    <p className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input
        {...props}
        id={id}
        name={id}
        onChange={onChange}
        onBlur={onBlur}
        defaultValue={defaultValue}
        required
      />
      {children}
    </p>
  );
}
