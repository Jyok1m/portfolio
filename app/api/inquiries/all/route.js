import { NextRequest, NextResponse } from "next/server";
import connectToDB from "@database/connection";
import Inquiry from "@database/models/inquiries";

export async function GET() {
	const inquiries = await Inquiry.find({});
	return NextResponse.json({ message: "Inquiries", inquiries });
}

connectToDB();
