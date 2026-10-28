import { Kelas } from "./kelas.model";

export class Mahasiswa {
  private _id: number = 0;
  private _nama: string = "";
  private _email: string = "";
  private _nim: string = "";
  private _kode_prodi: string = "";
  private _kelas_id: string = "";
  private _jenis_kelamin: "LAKI_LAKI" | "PEREMPUAN" = "LAKI_LAKI";
  private _createdAt?: string;
  private _updatedAt?: string;
  private _kelas?: Kelas;

  constructor(data?: {
    id?: number;
    nama?: string;
    email?: string;
    nim?: string;
    kode_prodi?: string;
    kelas_id?: string;
    jenis_kelamin?: "LAKI_LAKI" | "PEREMPUAN";
    createdAt?: string;
    updatedAt?: string;
  }) {
    if (data) {
      this.id = data.id ?? 0;
      this.nama = data.nama ?? "";
      this.email = data.email ?? "";
      this.nim = data.nim ?? "";
      this.kode_prodi = data.kode_prodi ?? "";
      this.kelas_id = data.kelas_id ?? "";
      this.jenis_kelamin = data.jenis_kelamin ?? "LAKI_LAKI";
      this.createdAt = data.createdAt;
      this.updatedAt = data.updatedAt;
      this._kelas = data.kelas;
    }
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nama(): string {
    return this._nama;
  }

  set nama(value: string) {
    this._nama = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get nim(): string {
    return this._nim;
  }

  set nim(value: string) {
    this._nim = value;
  }

  get kode_prodi(): string {
    return this._kode_prodi;
  }

  set kode_prodi(value: string) {
    this._kode_prodi = value;
  }

  get kelas_id(): string {
    return this._kelas_id;
  }

  set kelas_id(value: string) {
    this._kelas_id = value;
  }

  get jenis_kelamin(): "LAKI_LAKI" | "PEREMPUAN" {
    return this._jenis_kelamin;
  }

  set jenis_kelamin(value: "LAKI_LAKI" | "PEREMPUAN") {
    this._jenis_kelamin = value;
  }

  get createdAt(): string | undefined {
    return this._createdAt;
  }

  set createdAt(value: string | undefined) {
    this._createdAt = value;
  }

  get updatedAt(): string | undefined {
    return this._updatedAt;
  }

  set updatedAt(value: string | undefined) {
    this._updatedAt = value;
  }

  set kelas(value: Kelas) {
    this._kelas = value;
  }

  get kelas(): Kelas | undefined {
    return this._kelas;
  }
}

export class MahasiswaRequest {}

export class MahasiswaResponse {
  message?: string;
  data?: Mahasiswa[];
}
