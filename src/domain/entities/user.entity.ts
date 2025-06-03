export class User {
  constructor(
    private readonly _id: number,
    private _name: string,
    private _email: string,
  ) {}
  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }
  get email(): string {
    return this._email;
  }
  set email(email: string) {
    this._email = email;
  }

  get id(): number {
    return this._id;
  }
}
