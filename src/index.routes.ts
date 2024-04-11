import { Router } from "express";
import typesRoutes from "@student/routes/types.routes";
import studentRoutes from "@student/routes/student.routes";

const mainRoutes = Router();

mainRoutes.use("/types", typesRoutes);
mainRoutes.use("/student", studentRoutes);

export default mainRoutes;
