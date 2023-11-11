export default function normalise(str) {
	const trimmedValue = str.trim();
	const capitalisedFirstLetter = trimmedValue[0].toUpperCase();
	const normalisedValue = capitalisedFirstLetter + trimmedValue.toLowerCase().slice(1);

	return normalisedValue;
}
