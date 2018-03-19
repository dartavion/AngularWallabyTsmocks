// Accessors with underscore prefix
export class Character {
  private _firstName: string;
  private _lastName: string;

  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(value: string) {
    this._firstName = value;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public set lastName(value: string) {
    this._lastName = value;
  }
}
// Accessors without underscore prefix
export class OtherCharacter {
  private firstName: string;
  private lastName: string;

  public get getFirstName(): string {
    return this.firstName;
  }

  public set setFirstName(value: string) {
    this.firstName = value;
  }

  public get getLastName(): string {
    return this.lastName;
  }

  public set setLastName(value: string) {
    this.lastName = value;
  }
}
