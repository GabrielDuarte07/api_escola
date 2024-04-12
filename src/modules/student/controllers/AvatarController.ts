import UpdateAvatar from "@student/services/UpdateAvatar";
import { Request, Response } from "express";

export default class AvatarController {
  static async update(req: Request, res: Response): Promise<Response> {
    const { file } = req;
    const { id } = req.params;
    const { fileValidationError } = req;

    if (!file) return res.status(404).json({ error: "avatar file not found" });

    const objStudent = new UpdateAvatar();

    const updated = await objStudent.execute(
      fileValidationError,
      id,
      file.filename,
    );
    return res.status(201).json(updated);
  }
}
