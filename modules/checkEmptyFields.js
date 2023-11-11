export const checkEmptyFields = (requestObj) => {
	let fieldsArePresent = true;
	for (const key in requestObj) {
		if (!requestObj[key] || requestObj[key] === "") {
			fieldsArePresent = false;
			break;
		}
	}
	return fieldsArePresent;
};
