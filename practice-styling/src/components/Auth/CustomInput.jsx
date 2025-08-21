import { AuthInput, AuthLabel } from './AuthStyledComponent.jsx';
import { validateLabel, validateInput } from './tailwind/input.tailwind.jsx';

export function CustomInput({label,type,placeholder,invalid, ...props}) {
    return (
        <>
            <AuthLabel $invalid={invalid} {...props}>{label}</AuthLabel>
            <AuthInput  $invalid={invalid} type={type} placeholder={placeholder} {...props} />
        </>
    )
}

export function CustomTailwindInput({label,type,placeholder,invalid, ...props}) {
    return (
        <>
            <label className={`mb-2 tracing-wide text-sm font-bold block ${validateLabel(invalid)} uppercase`}>{label}</label>
            <input className={`w-full px-3 py-2 leading-tight bg-stone-800 text-stone-100 border-2 ${validateInput(invalid)} rounded-md focus:outline-none focus:border-amber-400 ${validateInput(invalid)}`} type={type} placeholder={placeholder} {...props} />
        </>
    )
}
