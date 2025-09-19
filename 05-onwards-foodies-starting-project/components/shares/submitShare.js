import { useFormStatus } from "react-dom";

export default function SubmitShare({classes}) {
  const { pending } = useFormStatus();
  return (
    <>
      <p className={classes.actions}>
        <button disabled={pending} type="submit">
          {pending ? "Submitting..." : "Share Meal"}
        </button>
      </p>
    </>
  );
}
