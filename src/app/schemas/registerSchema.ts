import Joi from 'joi';

export const registerSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': 'El correo no es válido',
      'string.empty': 'El corre es obligatorio',
      'any.required': 'El corre es obligatorio',
    }),
  password: Joi.string()
    .min(8)
    .required()
    .messages({
      'string.min': 'La contraseña debe tener al menos 8 caracteres',
      'string.empty': 'La contraseña es obligatoria',
      'any.required': 'La contraseña es obligatoria',
    }),
  first_name: Joi.string()
    .min(3)
    .required()
    .messages({
      'string.min': 'El nombre debe tener al menos 3 caracteres',
      'string.empty': 'El nombre es obligatorio',
      'any.required': 'El nombre es obligatorio',
    }),
  last_name: Joi.string()
    .min(3)
    .required()
    .messages({
      'string.min': 'El apellido debe tener al menos 3 caracteres',
      'string.empty': 'El apellido es obligatorio',
      'any.required': 'El apellido es obligatorio',
    }),
});
