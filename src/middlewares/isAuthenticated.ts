import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify } from "jsonwebtoken";

export default function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(403).json({ error: "missing authorization" });
  }
  const [bearer, token] = authorization.split(" ");
  if (!bearer || bearer.trim().toUpperCase() !== "BEARER") {
    return res.status(401).json({ error: "token invalid" });
  }
  try {
    const { id, name } = verify(
      token,
      String(process.env.JWT_SECRET),
    ) as JwtPayload;
    req.student = { id, name };
    next();
  } catch (e) {
    console.log(e);
    return res.status(401).json({ error: "token expired or invalid" });
  }
}
