import { NextRequest, NextResponse } from "next/server";
import connectToDB from "@/database/connection";
import User from "@/database/models/users";

export async function POST(request) {
	const { firstName, lastName } = await request.json();
	await User.create({ firstName, lastName });
	return NextResponse.json({ message: "User created" }, { status: 201 });
}

export async function GET() {
	const users = await User.find({});
	return NextResponse.json({ message: "User", users });
}

connectToDB();
