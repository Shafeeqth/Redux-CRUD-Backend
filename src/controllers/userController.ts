import { Request, Response } from "express";
import User from "../models/userModel";

/**
 *
 * @param req
 * @param res
 * @returns
 */
export async function userVerify(req: Request, res: Response) {
  const { email, password } = req.body as { email: string; password: string };
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (
    email.trim().length < 3 ||
    !emailRegex.test(email) ||
    password.trim().length < 5
  ) {
    return res.status(400).json({
      success: false,
      error: true,
      message: "Invalid Email or Password",
    });
  }
  let user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      success: false,
      error: true,
      message: "Email does not exist",
    }); 
  }
  const isMatch = await user.isPasswordMatch(password);

  if (!isMatch) {
    return res.status(400).json({
      success: false,
      error: true,
      message: "Incorrect password try again",
    });
  }
  if (!isMatch) {
    return res.status(400).json({
      success: false,
      error: true,
      message: "Incorrect password try again",
    });
  }
  


}
export function userRegister(req: Request, res: Response) {
  const { userName, password, confirmPassword, phone, role } = req.body as {
    userName: string;
    password: string;
    phone: string;
    role: "ADMIN" | "USER";
    confirmPassword: string;
  };
}
export function editDetails(req: Request, res: Response) {
  const { userName, password } = req.body as {
    userName: string;
    password: string;
  };
}
export function deleteAccount(req: Request, res: Response) {
  const { userName, password } = req.body as {
    userName: string;
    password: string;
  };
}
