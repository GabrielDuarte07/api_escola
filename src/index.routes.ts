import { Router } from "express";
import typesRoutes from "@student/routes/types.routes";

const mainRoutes = Router();

mainRoutes.use("/types", typesRoutes);

export default mainRoutes;
