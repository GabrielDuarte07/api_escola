declare namespace Express {
  export interface Request {
    student: {
      id: string;
      name: string;
    };
    fileValidationError: string;
  }
}
