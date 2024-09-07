export interface IUser extends Document {
    name: string;
    email: string;
    role: 'ADMIN' | 'USER';
    password: string;
    createdAt?: Date,
    updatedAt?: Date,
    number: String,
    isModified?: (path: string) => boolean,
    isPasswordMatch: (password: string) => boolean,
  }
  