import { use, useState } from "react";
import { Modal } from "./Modal";
import { CartContext } from "../../store/cart.context";
import { formatCurrency } from "../../util/formatting";
import Input from "../UI/Input";
import ModalActionsCheckout from "./ModalActions";
import { UserContextCart } from "../../store/userCart.context";
import { useInput } from "../../hook/useInput";
import { isEmail, isNotEmpty } from "../../util/validation";
import { useActionState } from "react";

export default function Checkout({ modal }) {
  const { totalCartItems, postOrder, cartItems, orderFetching } =
    use(CartContext);
  const { progress, hideCheckout } = use(UserContextCart);

  const {
    value: fullNameValue,
    handleBlur: handleBlurFullName,
    handleChange: handleChangeFullName,
    hasError: fullNameHasError,
  } = useInput("", (value) => isNotEmpty(value));
  const {
    value: emailValue,
    handleBlur: handleBlurEmail,
    handleChange: handleChangeEmail,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));
  const {
    value: addressValue,
    handleBlur: handleBlurAddress,
    handleChange: handleChangeAddress,
    hasError: addressHasError,
  } = useInput("", (value) => isNotEmpty(value));
  const {
    value: postalCodeValue,
    handleBlur: handleBlurPostalCode,
    handleChange: handleChangePostalCode,
    hasError: postalCodeHasError,
  } = useInput("", (value) => isNotEmpty(value));

  const {
    value: cityValue,
    handleBlur: handleBlurCity,
    handleChange: handleChangeCity,
    hasError: cityHasError,
  } = useInput("", (value) => isNotEmpty(value));

  async function handleSubmit(prevState) {
    let errors = [];
    if (cityHasError) {
      errors.push({ field: "city", message: "Provide correct city" });
    }
    if (fullNameHasError) {
      errors.push({ field: "name", message: "Provide full name" });
    }
    if (emailHasError) {
      errors.push({ field: "email", message: "Provide correct email" });
    }
    if (addressHasError) {
      errors.push({ field: "street", message: "Provide correct address" });
    }
    if (postalCodeHasError) {
      errors.push({ field: "postal-code", message: "Provide postal code" });
    }

    if (errors.length > 0) {
      return {
        errors,
        enterValues: {
          fullNameValue,
          emailValue,
          addressValue,
          postalCodeValue,
          cityValue,
        },
      };
    }

    const customerData = {
      name: fullNameValue,
      email: emailValue,
      street: addressValue,
      "postal-code": postalCodeValue,
      city: cityValue,
    };

    console.log("Customer Data:", customerData);

    await postOrder({
      order: {
        items: cartItems.items,
        customer: customerData,
      },
    });

    return { errors: null, enterValues: null };
  }

  const [formState, formAction, isSending] = useActionState(handleSubmit, {
    errors: null,
    enterValues: null,
  });

  function handleClose() {
    hideCheckout();
    modal.current.close();
  }

  if (progress !== "checkout") {
    return null;
  }

//   console.log("Form State:", formState);
//   console.log("Field Errors:", {
//     fullNameHasError,
//     emailHasError,
//     addressHasError,
//     postalCodeHasError,
//     cityHasError,
//   });

  return (
    <Modal title="Checkout" className="checkout" ref={modal}>
      <form action={formAction}>
        <p>Total amount: {formatCurrency.format(totalCartItems)}</p>
        {formState.errors?.find((e) => e.field === "general") && (
          <div style={{ color: "red", marginBottom: "1rem" }}>
            {formState.errors.find((e) => e.field === "general").message}
          </div>
        )}
        <div>
          <Input
            onBlur={handleBlurFullName}
            onChange={handleChangeFullName}
            label="Full Name"
            type="text"
            id="name"
            defaultValue={formState.enterValues?.fullNameValue || fullNameValue}
          >
            {(fullNameHasError ||
              formState.errors?.find((e) => e.field === "name")) &&
              (formState.errors?.find((e) => e.field === "name")?.message ||
                "Please provide a valid full name")}
          </Input>
          <Input
            onBlur={handleBlurEmail}
            onChange={handleChangeEmail}
            label="Email"
            type="email"
            id="email"
            defaultValue={formState.enterValues?.emailValue}
          >
            {(emailHasError ||
              formState.errors?.find((e) => e.field === "email")) &&
              (formState.errors?.find((e) => e.field === "email")?.message ||
                "Please provide a valid email address")}
          </Input>
          <Input
            onBlur={handleBlurAddress}
            onChange={handleChangeAddress}
            label="Address"
            type="text"
            id="street"
            defaultValue={formState.enterValues?.addressValue}
          >
            {(addressHasError ||
              formState.errors?.find((e) => e.field === "street")) &&
              (formState.errors?.find((e) => e.field === "street")?.message ||
                "Please provide your address")}
          </Input>
          <div className="control-row">
            <Input
              onBlur={handleBlurPostalCode}
              onChange={handleChangePostalCode}
              label="Postal Code"
              type="text"
              id="postal-code"
              defaultValue={formState.enterValues?.postalCodeValue}
            >
              {(postalCodeHasError ||
                formState.errors?.find((e) => e.field === "postal-code")) &&
                (formState.errors?.find((e) => e.field === "postal-code")
                  ?.message ||
                  "Please provide your postal code")}
            </Input>
            <Input
              onBlur={handleBlurCity}
              onChange={handleChangeCity}
              label="City"
              type="text"
              id="city"
              defaultValue={formState.enterValues?.cityValue}
            >
              {(cityHasError ||
                formState.errors?.find((e) => e.field === "city")) &&
                (formState.errors?.find((e) => e.field === "city")?.message ||
                  "Please provide your city")}
            </Input>
          </div>
        </div>

        <ModalActionsCheckout hideCheckout={handleClose} />
      </form>
    </Modal>
  );
}
