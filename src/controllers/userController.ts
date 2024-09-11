import { Request, Response } from "express";
import User from "../models/userModel";
import { IRegisterBody } from "../@types/bodyTypes";
import {validateRegisterData} from "../helpers/registerValidators";
/**
 *
 * @param req
 * @param res
 * @returns
 */
export async function verifyUser(req: Request, res: Response) {
  console.log(req.body);
  const { email, password } = req.body as { email: string; password: string };
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
  const { name, email, password, confirmPassword, phone, role } = req.body as IRegisterBody;
  console.log(req.body);

  const error = validateRegisterData(req.body);
  console.log(error);
  
  if(error) {
    return res.status(400).json({
      success: false,
      error: true,
      data: error,
      message: "Invalid data",
    });
  }

  User.create()

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
