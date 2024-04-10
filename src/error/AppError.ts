export default class AppError {
  constructor(
    public code: Readonly<number>,
    public msg: Readonly<string>,
  ) {}
}
