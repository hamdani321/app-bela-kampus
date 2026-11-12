import { Kelas } from "./kelas.models";

export class Mahasiswa {
  id: number = 0;
  nama: string = "";
  email: string = "";
  nim: string = "";
  kode_prodi: number = 0;
  kelas_id: number = 0;
  jenis_kelamin: "LAKI_LAKI" | "PEREMPUAN" = "LAKI_LAKI";
  createdAt?: string;
  updatedAt?: string;

  //relasi
  kelas?: Kelas;
}

export class MahasiswaRequest {}

export class MahasiswaResponse {
  message?: string;
  data?: Mahasiswa[];
}
