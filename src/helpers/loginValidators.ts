import Joi, { ObjectSchema } from "joi";

const userSchema: ObjectSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
});

export { userSchema };
