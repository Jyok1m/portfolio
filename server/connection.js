import mongoose from "mongoose";

const connectToDB = async () => {
	// Check mongoose instance availability
	if (mongoose.connections[0].readyState) {
		return;
	}

	try {
		await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI, {
			connectTimeoutMS: 2000,
		});
	} catch (error) {
		console.error("Error connecting to DB:", error);
	}
};

export default connectToDB;
