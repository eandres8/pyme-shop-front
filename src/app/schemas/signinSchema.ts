import Joi from 'joi';

export const signInSchema = Joi.object({
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
});
