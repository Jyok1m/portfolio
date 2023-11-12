import { NextResponse } from "next/server";
import connectToDB from "@/database/connection";
import Inquiry from "@/database/models/inquiries";
import fieldValidator from "@/database/validators/fieldValidator";
import nodemailer from "nodemailer";
import signupTemplate from "@/templates/emails/signupTemplate";

export async function POST(request) {
	const body = await request.json();
	// Body: firstname, lastname, email, company, phone, message

	try {
		// Validate fields:
		const { result, error } = fieldValidator({ ...body });
		if (!result) {
			return NextResponse.json({ message: error }, { status: 400 });
		}

		await Inquiry.create({ ...body });

		let transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
				pass: process.env.NEXT_PUBLIC_NODEMAILER_PASSWORD,
			},
		});

		const template = signupTemplate({ ...body });
		await transporter.sendMail(template);

		return NextResponse.json({ message: "Message envoyé !" }, { status: 201 });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ message: "Erreur lors de l'envoi du message..." }, { status: 500 });
	}
}

connectToDB();
