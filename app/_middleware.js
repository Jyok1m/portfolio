import { NextMiddleware } from "next/server";
import connectToDB from "@/database/connection";

export async function middleware(req) {
	// Check if a connection is already established
	if (!global.mongooseConnection) {
		global.mongooseConnection = await connectToDB();
	}

	// Continue to the next middleware or route
	return NextMiddleware.next();
}
