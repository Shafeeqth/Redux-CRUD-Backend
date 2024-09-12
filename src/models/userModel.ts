import mongoose, { Document, Schema } from "mongoose";
import { IUser } from "./interfaces/userInterface";
import bcrypt from "bcrypt";


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
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
    number: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage:{
      type: String,
      required: false
    }
  },
  {
    timestamps: true,
  }
);

userSchema.pre<IUser>("save", async function (next) {
  let user = this as IUser;
  if (user.isModified && user.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
    
  }
  next();
});

userSchema.methods.isPasswordMatch = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};


export default mongoose.model<IUser>("User", userSchema);

