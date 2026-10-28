export class Kelas {
  private _id: number = 0;
  private _nama: string = "";
  private _prodi_id: string = "";
  private _dosen_id: string = "";
  private _createdAt: string = "";
  private _updatedAt: string = "";

  constructor(data: any) {
    this._id = data.id;
    this._nama = data.nama;
    this._prodi_id = data.prodi_id;
    this._dosen_id = data.dosen_id;
    this._createdAt = data.createdAt;
    this._updatedAt = data.updatedAt;
  }

  set id(value: number) {
    this._id = value;
  }
  get id(): number {
    return this._id;
  }

  set nama(value: string) {
    this._nama = value;
  }

  get nama(): string {
    return this._nama;
  }

  set prodi_id(value: string) {
    this._prodi_id = value;
  }

  get prodi_id(): string {
    return this._prodi_id;
  }

  set dosen_id(value: string) {
    this._dosen_id = value;
  }

  get dosen_id(): string {
    return this._dosen_id;
  }

  set createdAt(value: string) {
    this._createdAt = value;
  }

  get createdAt(): string {
    return this._createdAt;
  }

  set updatedAt(value: string) {
    this._updatedAt = value;
  }

  get updatedAt(): string {
    return this._updatedAt;
  }
}
