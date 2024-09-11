export interface IUser extends Document {
    name: string;
    email: string;
    role: 'ADMIN' | 'USER';
    password: string;
    createdAt?: Date,
    updatedAt?: Date,
    number: string;
    image: string;
    isModified?: (path: string) => boolean,
    isPasswordMatch: (password: string) => Promise<boolean>,
  }
  