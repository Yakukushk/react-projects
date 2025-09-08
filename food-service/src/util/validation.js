export const isEmail = (email = '') => {
    return email.includes('@');
}

export const isNotEmpty = (value = '') => {
    return value.trim() !== '';
}

export const minLength = (values = [], minLength) => {
    return values.length >= minLength;
}

