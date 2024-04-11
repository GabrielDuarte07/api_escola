import { Router } from "express";
import StudentController from "@student/controllers/StudentController";
import { celebrate, Joi, Segments } from "celebrate";

const studentRoutes = Router();

studentRoutes.get("/", StudentController.index);
studentRoutes.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      type_id: Joi.string().uuid().required(),
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      confirmPassword: Joi.string().required().valid(Joi.ref("password")),
      birth_date: Joi.date().required(),
      CEP: Joi.string().required(),
      cellphone: Joi.string().required(),
      number: Joi.number().required(),
      CPF: Joi.string().required(),
    },
  }),
  StudentController.create,
);

export default studentRoutes;
