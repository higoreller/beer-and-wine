import Joi from "joi";

const fieldsValidations = {
  username: Joi.string().min(5).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
  confirm_password: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .messages({ "any.only": "confirm password does not match with password" }),
};

function getFieldErrors(objError) {
  const errors = {};

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[err.path.join(".")] = err.message;
    });
  }

  return errors;
}

export function signUpValidate(values) {
  const schema = Joi.object(fieldsValidations);

  return getFieldErrors(schema.validate(values, { abortEarly: false }));
}

export function signInValidate(values) {
  const { email, password } = fieldsValidations;
  const schema = Joi.object({ email, password });

  return getFieldErrors(schema.validate(values, { abortEarly: false }));
}
