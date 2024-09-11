import mongoose, { Document, Schema } from "mongoose";
import { IUser } from "./interfaces/userInterface";
import bcrypt from "bcrypt";
import jwt, { Jwt } from "jsonwebtoken";
const {
  JWT_ACCESS_TOKEN_SECRET,
  JWT_ACCESS_TOKEN_EXPIRY,
  JWT_REFRESH_TOKEN_SECRET,
  JWT_REFRESH_TOKEN_EXPIRY,
} = process.env;

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
    image:{
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

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      name: this.name,
    },
    JWT_ACCESS_TOKEN_SECRET as string,
    {
      expiresIn: JWT_ACCESS_TOKEN_EXPIRY,
    }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    JWT_REFRESH_TOKEN_SECRET as string,
    {
      expiresIn: JWT_REFRESH_TOKEN_EXPIRY,
    }
  );
};
export default mongoose.model<IUser>("User", userSchema);

