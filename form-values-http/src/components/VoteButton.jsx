import { useFormStatus } from "react-dom";

export default function VoteButton({ children, vote, ...props }) {
  const { pending } = useFormStatus();

  return (
    <button {...props} disabled={pending} formAction={vote}>
      {children}
    </button>
  );
}
