export default function CustomAuthButton({ children, ...props }) {
  return (
    <button
      className="bg-amber-400 font-semibold uppercase text-stone-900  px-4 py-2 rounded-md focus:outline-none hover:bg-amber-500"
      {...props}
    >
      {children}
    </button>
  );
}
