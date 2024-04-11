import { Router } from "express";
import TypeStudentController from "@student/controllers/TypeStudentController";
import { celebrate, Joi, Segments } from "celebrate";

const typesRoutes = Router();

typesRoutes.get("/", TypeStudentController.index);
typesRoutes.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      type: Joi.string().required(),
    },
  }),
  TypeStudentController.create,
);
typesRoutes.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  TypeStudentController.delete,
);

export default typesRoutes;
