import { NextRequest, NextResponse } from "next/server";
import connectToDB from "@/server/connection";
import Inquiry from "@/server/models/inquiries";

export async function GET() {
	const inquiries = await Inquiry.find({});
	return NextResponse.json({ message: "Inquiries", inquiries });
}

connectToDB();
