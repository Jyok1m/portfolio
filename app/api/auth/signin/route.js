import { NextResponse } from "next/server";
import connectToDB from "@/database/connection";
import User from "@/database/models/users";
import fieldValidator from "@/database/validators/fieldValidator";
import { decryptValue } from "@/database/validators/encryption";

export async function POST(request) {
	try {
		const { email, password } = await request.json();

		// Validate fields:
		const { result, error } = fieldValidator({ email, password });
		if (!result) {
			return NextResponse.json({ message: error }, { status: 400 });
		}

		// Check if user exists:
		const user = await User.findOne({ email });
		if (!user) {
			return NextResponse.json({ message: "Utilisateur introuvable." }, { status: 404 });
		}

		// Check if password is correct:
		const decryptedPassword = decryptValue(password, user.password);
		if (!decryptedPassword) {
			return NextResponse.json({ message: "Mot de passe incorrect." }, { status: 400 });
		}

		// Create user:
		return NextResponse.json({ message: "Connexion réussie." }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: "Erreur lors de la connexion de l'utilisateur." }, { status: 500 });
	}
}

connectToDB();
