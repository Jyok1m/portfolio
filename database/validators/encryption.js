import { hashSync, compareSync } from "bcrypt";

export function encryptValue(value) {
	return hashSync(value, 10);
}

export function decryptValue(value, hash) {
	return compareSync(value, hash);
}
