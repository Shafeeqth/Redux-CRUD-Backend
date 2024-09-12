import jwt, { Jwt } from "jsonwebtoken";
const {
  JWT_ACCESS_TOKEN_SECRET,
  JWT_ACCESS_TOKEN_EXPIRY,
  JWT_REFRESH_TOKEN_SECRET,
  JWT_REFRESH_TOKEN_EXPIRY,
} = process.env;

export const generateAccessToken = function (payload: ) {
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
  
export const generateRefreshToken = function () {
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