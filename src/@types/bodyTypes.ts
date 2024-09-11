export interface IRegisterBody {
    name: string;
    password: string;
    phone: string;
    role: "ADMIN" | "USER";
    confirmPassword: string;
    email: string;
  };