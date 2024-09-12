export interface IUser extends Document {
    name: string;
    email: string;
    role: 'ADMIN' | 'USER';
    password: string;
    createdAt?: Date,
    updatedAt?: Date,
    number: string;
    profileImage: string;
    isModified?: (path: string) => boolean,
    isPasswordMatch: (password: string) => Promise<boolean>,
  }
  