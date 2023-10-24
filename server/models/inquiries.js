import mongoose, { Schema } from "mongoose";

const inquirySchema = new Schema(
	{
		firstname: String,
		lastname: String,
		email: String,
		company: String,
		phone: String,
		message: String,
		budget: String,
	},
	{ timestamps: true }
);

const Inquiry = mongoose.models.inquiries || mongoose.model("inquiries", inquirySchema);

export default Inquiry;
