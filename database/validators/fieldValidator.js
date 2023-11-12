import { nameRegex, emailRegex, passwordRegex, phoneRegexFR, phoneRegexUS, phoneRegexUK } from "@/utils/regex";

export default function fieldValidator(body) {
	for (const key in body) {
		const value = body[key];
		let fieldIsValid = true;

		// Check for empty fields
		if ([undefined, null, ""].includes(value)) {
			return { result: false, error: "Au moins un des chanmps est manquant ou vide." };
		}

		// Validate per body type
		switch (key) {
			case "firstname":
			case "lastname":
			case "company":
				fieldIsValid = nameRegex.test(value);
				break;
			case "message":
				fieldIsValid = value.length > 0;
				break;
			case "email":
				fieldIsValid = emailRegex.test(value);
				break;
			case "password":
				fieldIsValid = passwordRegex.test(value);
				break;
			case "phone":
				fieldIsValid = phoneRegexFR.test(value) || phoneRegexUS.test(value) || phoneRegexUK.test(value);
				break;
			default:
				console.error("Au moins un des champs est non vérifié.");
				return { result: false, error: "Au moins un des champs est non vérifié." };
		}

		// Response return
		if (!fieldIsValid) {
			console.log("value", value);
			return { result: false, error: "Au moins un des champs est invalide. Merci de réessayer." };
		}
	}

	return { result: true };
}
