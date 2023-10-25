import { NextRequest, NextResponse } from "next/server";
import connectToDB from "@/server/connection";
import Inquiry from "@/server/models/inquiries";

export async function POST(request) {
	const { firstname, lastname, email, company, phone, message } = await request.json();

	try {
		await Inquiry.create({ firstname, lastname, email, company, phone, message });
		return NextResponse.json({ message: "Message envoyé !" }, { status: 201 });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ message: "Erreur lors de l'envoi du message..." }, { status: 500 });
	}
}

connectToDB();
