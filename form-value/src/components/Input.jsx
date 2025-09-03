export default function Input({
  value,
  id,
  name,
  onBlur,
  onChange,
  children,
  ...props
}) {
  return (
    <>
      <div className="control no-margin">
        <label htmlFor={id}>{name}</label>
        <input
          id={id}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          {...props}
        />
        <div className="control-error">{children}</div>
      </div>
    </>
  );
}
