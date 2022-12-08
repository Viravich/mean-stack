export class APILogger {
  constructor() {}

  public info(message: string, data): void {
    console.log(
      `${message}   ${undefined != data ? JSON.stringify(data) : ""}`
    );
  }

  public error(message: string): void {
    console.log(message);
  }
}
