const emailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
const phoneRegex = new RegExp(/^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/);
const stringRegex = new RegExp(/^[a-zA-ZÀ-ÿ\s\-]+$/);

module.exports = { emailRegex, phoneRegex, stringRegex };
