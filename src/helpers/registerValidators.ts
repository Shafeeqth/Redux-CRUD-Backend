import { ValidationErrorItem } from "@hapi/joi";
import Joi, { allow,ValidationError, ObjectSchema } from "joi";

const registerSchema: ObjectSchema = Joi.object({
  name: Joi.string().min(3).max(30).required()
  .messages({
    'string.empty': "Name is required Field",
    'string.min': "Name must be at least 3 charecters",
    'string.max': "Name must be less than 30 charecters"
  }),
  email: Joi.string().email({tlds: {allow: false}}).required()
        .messages({
            'string.email': "Please enter a valid email address",
            'string.empty': "Email field is required"

        }),
    password: Joi.string()
    .min(8)
    .required()
    .pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$'))
    .messages({
        'string.min': "Password must be atleast 8 charector long",
        'string.pattern.base': "Password must contain at least one letter and one number"

    }),
    confirmPassword: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({
        'any.only': 'Password do not match',
        'string.empty': "Confirm password is required"
    }),
    phone: Joi.string()
    .required()
    .pattern(/^[6-9]\d{9}$/)
    .messages({
        'string.empty': 'Phone number is required',
        'string.pattern.base': "Phone number must valid"
    })
});

interface RegisterData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
}

export const validateRegisterData = (data: RegisterData ) : string[] | null | undefined =>   {
    const {error } = registerSchema.validate(data, {abortEarly: false} );
    if(error as any) {
        return error && error.details.map((err:ValidationErrorItem) => err.message)
    }
    return null;


}


