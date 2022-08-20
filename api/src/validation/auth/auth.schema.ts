import Joi from "joi";

export const registerSchema = Joi.object({
    id: Joi.number().greater(0),
    name: Joi.string().min(8).max(32).required(),
    email: Joi.string().email().min(8).max(32).required(),
    password: Joi.string().min(8).max(191).required(),
});

export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});