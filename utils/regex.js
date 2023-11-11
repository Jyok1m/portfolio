export const emailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
export const passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
export const phoneRegexFR = new RegExp(/^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/);
export const phoneRegexUS = new RegExp(/^\+1[-. ]?(\([0-9]{3}\)|[0-9]{3})[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/);
export const phoneRegexUK = new RegExp(/^\+44[-. ]?([0-9]{2,5})[-. ]?[0-9]{3,4}[-. ]?[0-9]{3,4}$/);
export const nameRegex = new RegExp(/^[a-zA-ZÀ-ÿ\s\-]+$/);
