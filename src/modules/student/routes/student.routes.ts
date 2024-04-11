import { Router } from "express";
import StudentController from "@student/controllers/StudentController";
import { celebrate, Joi, Segments } from "celebrate";

const studentRoutes = Router();

studentRoutes.get("/", StudentController.index);
studentRoutes.post(
  "/",
  celebrate(
    {
      [Segments.BODY]: {
        type_id: Joi.string().uuid().required(),
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        confirmPassword: Joi.string().required().valid(Joi.ref("password")),
        birth_date: Joi.date().required(),
        CEP: Joi.string().min(5).max(8).required(),
        cellphone: Joi.string().required(),
        number: Joi.number().required(),
        CPF: Joi.string().length(11).required(),
      },
    },
    { abortEarly: false },
  ),
  StudentController.create,
);

studentRoutes.patch(
  "/:id",
  celebrate(
    {
      [Segments.PARAMS]: {
        id: Joi.string().uuid().required(),
      },
      [Segments.BODY]: {
        currentPassword: Joi.string().required(),
        type_id: Joi.string().uuid(),
        name: Joi.string(),
        email: Joi.string().email(),
        password: Joi.string(),
        birth_date: Joi.date(),
        CEP: Joi.string().min(5).max(8),
        cellphone: Joi.string(),
        number: Joi.number(),
        CPF: Joi.string().length(11),
      },
    },
    { abortEarly: false },
  ),
  StudentController.update,
);

export default studentRoutes;
