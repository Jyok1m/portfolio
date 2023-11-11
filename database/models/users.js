import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
	{
		firstname: {
			type: String,
			trim: true,
			required: true,
		},
		lastname: {
			type: String,
			trim: true,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			lowercase: true,
			trim: true,
			required: true,
		},
		password: {
			type: String,
			trim: true,
			required: true,
		},
		token: {
			type: String,
			trim: true,
			required: false,
		},
		games: [{ type: Schema.Types.ObjectId, ref: "games" }],
	},
	{ timestamps: true }
);

const User = mongoose.models.users || new model("users", userSchema);

export default User;
