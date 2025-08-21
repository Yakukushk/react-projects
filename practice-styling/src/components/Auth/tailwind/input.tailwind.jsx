export const validateLabel = (invalid) => {
    return invalid ? `text-red-500` : `text-stone-200`;
}
export const validateInput = (invalid) => {
    return invalid ? `border-red-500` : `border-stone-700`;
}