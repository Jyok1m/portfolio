import { NextRequest, NextResponse } from "next/server";
import connectToDB from "@/server/connection";
import Inquiry from "@/server/models/inquiries";

export async function POST(request) {
	const { firstname, lastname, email, company, phone, message, budget } = await request.json();
	await Inquiry.create({ firstname, lastname, email, company, phone, message, budget });
	return NextResponse.json({ message: "Inquiry created" }, { status: 201 });
}

connectToDB();
