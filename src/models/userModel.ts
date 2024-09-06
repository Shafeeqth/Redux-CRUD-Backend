import mongoose, { Document, Schema } from "mongoose";
import { IUser } from "./interfaces/userInterface";

const userSchema: Schema<IUser> = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['ADMIN', 'USER'],
      default: 'USER'
    },
    number: {
        type: String,
        
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

export default mongoose.model<IUser>('User', userSchema)