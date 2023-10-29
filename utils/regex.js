const emailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
const phoneRegexFR = new RegExp(/^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/);
const phoneRegexUS = new RegExp(/^\+1[-. ]?(\([0-9]{3}\)|[0-9]{3})[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/);
const phoneRegexUK = new RegExp(/^\+44[-. ]?([0-9]{2,5})[-. ]?[0-9]{3,4}[-. ]?[0-9]{3,4}$/);
const stringRegex = new RegExp(/^[a-zA-ZÀ-ÿ\s\-]+$/);

module.exports = { emailRegex, phoneRegexFR, phoneRegexUS, phoneRegexUK, stringRegex };
