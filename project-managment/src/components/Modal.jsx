import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { Dialog, ButtonDanger } from "../assets/tailwind-classes";

const Modal = forwardRef(function Modal({ children, buttonTitle }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <Dialog ref={dialog}>{children}
    <form method="dialog" className="mt-4 text-right">
        <ButtonDanger>{buttonTitle}</ButtonDanger>
    </form>
    </Dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
