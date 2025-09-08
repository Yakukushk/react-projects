import { useFormStatus } from "react-dom";
import Button from "../UI/Button";

export default function ModalActionsCheckout({ hideCheckout, isSending }) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <span>Sending order data...</span>
      ) : (
        <p className="modal-actions">
          <Button onClick={hideCheckout} type="button" textOnly>
            Close
          </Button>
          <Button disabled={pending}>
            {pending ? "Submitting..." : "Submit Order"}
          </Button>
        </p>
      )}
    </>
  );
}
