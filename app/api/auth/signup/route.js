import { NextResponse } from "next/server";
import connectToDB from "@/database/connection";
import User from "@/database/models/users";
import fieldValidator from "@/database/validators/fieldValidator";
import normalise from "@/database/validators/normaliseString";
import { encryptValue } from "@/database/validators/encryption";

export async function POST(request) {
	const body = await request.json();
	const { firstname, lastname, email, password } = body;

	try {
		// Validate fields:
		const { result, error } = fieldValidator({ ...body });
		if (!result) {
			return NextResponse.json({ message: error }, { status: 400 });
		}

		// Check if user exists:
		const userExists = await User.findOne({ email });
		if (userExists) {
			return NextResponse.json({ message: "Un utilisateur avec cette adresse email existe déjà." }, { status: 400 });
		}

		// Create user:
		await User.create({ firstname: normalise(firstname), lastname: normalise(lastname), email, password: encryptValue(password) });
		return NextResponse.json({ message: "Utilisateur créé avec succès." }, { status: 201 });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: "Erreur lors de la création de l'utilisateur." }, { status: 500 });
	}
}

connectToDB();
