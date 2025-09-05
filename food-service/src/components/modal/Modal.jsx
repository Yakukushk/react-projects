import { use } from "react";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { UserContextCart } from "../../store/userCart.context";

export const Modal = forwardRef(function CartModal(
  { title, className = "", children },
  ref
) {
  const userCtx = use(UserContextCart);
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        if (userCtx.progress === "cart") {
          dialog.current.showModal();
        }
      },
      close: () => {
        dialog.current.close();
      },
    };
  });

  return createPortal(
    <>
      <dialog ref={dialog} className={`modal ${className}`}>
        <h2>{title}</h2>
        {children}
      </dialog>
    </>,
    document.getElementById("modal")
  );
});
