// user.model.js
import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import { USER_ROLE, USER_STATUS } from "./user.constant.js";
;

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        profilePhoto: String,
        phone: String,
        role: {
            type: String,
            enum: Object.keys(USER_ROLE),
            required: true,
        },
        status: {
            type: String,
            enum: Object.keys(USER_STATUS),
            default: USER_STATUS.PENDING,
        },
        refreshTokens: [{ type: String, select: false }],
    },
    { timestamps: true }
);

/* Hash password before saving */
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User = model("User", userSchema);

export default User;
