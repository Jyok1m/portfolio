import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
	{
		firstname: String,
		lastname: String,
	},
	{ timestamps: true }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
