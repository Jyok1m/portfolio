import { NextRequest, NextResponse } from "next/server";
import connectToDB from "@/server/connection";
import Inquiry from "@/server/models/inquiries";
import nodemailer from "nodemailer";

export async function POST(request) {
	const { firstname, lastname, email, company, phone, message } = await request.json();

	try {
		await Inquiry.create({ firstname, lastname, email, company, phone, message });

		const content = {
			from: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
			to: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
			subject: `Prise de contact - ${firstname} ${lastname}`,
			html: `
			<html lang="fr">
			<head>
					<meta charset="UTF-8">
					<meta http-equiv="X-UA-Compatible" content="IE=edge">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<style>
							body {
									font-family: Arial, sans-serif;
									margin: 40px;
									background-color: #f9f9f9;
									color: #333;
							}
							h1 {
									font-size: 24px;
									margin-bottom: 20px;
									color: #2c3e50;
									border-bottom: 2px solid black;
							}
							h2 {
									font-size: 20px;
									margin-top: 30px;
									margin-bottom: 10px;
									color: #34495e;
							}
							ul {
									list-style-type: none;
									padding-left: 0;
							}
							li {
									padding: 8px 0;
							}
							p {
									background-color: #fff;
									padding: 20px;
									border: 1px solid #ddd;
									border-radius: 5px;
							}
					</style>
			</head>
			<body>
					<h1>Demande de prise de contact - ${firstname} ${lastname}</h1>
					<h2>Informations</h2>
					<ul>
							<li><strong>Nom:</strong> ${lastname}</li>
							<li><strong>Prénom:</strong> ${firstname}</li>
							<li><strong>Email:</strong> ${email}</li>
							<li><strong>Entreprise:</strong> ${company !== "" ? company : "N/A"}</li>
							<li><strong>Téléphone:</strong> ${phone !== "" ? phone : "N/A"}</li>
					</ul>
					<h2>Message</h2>
					<p>${message}</p>
			</body>
			</html>
			`,
		};

		let transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
				pass: process.env.NEXT_PUBLIC_NODEMAILER_PASSWORD,
			},
		});

		await transporter.sendMail(content);

		return NextResponse.json({ message: "Message envoyé !" }, { status: 201 });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ message: "Erreur lors de l'envoi du message..." }, { status: 500 });
	}
}

connectToDB();
