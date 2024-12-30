import bcrypt from "bcrypt";
import mongoose, { Document, Model, Schema } from "mongoose";

export interface AdminDocument extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

// Schema for the 'User' document
const adminSchema = new Schema<AdminDocument>(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            index: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

adminSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(12);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next (error as Error);
    }
});

const Admin: Model<AdminDocument> = mongoose.model<AdminDocument>("Admin", adminSchema);

export default Admin;