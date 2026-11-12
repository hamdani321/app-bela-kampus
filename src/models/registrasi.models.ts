import { Mahasiswa } from "./mahasiswa.models";
import { Portal } from "./portal.models";
import { Sekolah } from "./sekolah.models";

export class Registrasi {
  id: number = 0;
  portal_id: number = 0;
  sekolah_id: number = 0;
  nim_mahasiswa: number = 0;
  tipe: "INDIVIDU" | "KELOMPOK" = "INDIVIDU";
  status: "Pending" | "Approve" = "Pending";
  createdAt?: string;
  updatedAt?: string;

  //relasi
  registrasi_anggota?: RegistrasiAnggota[];
  mahasiswa?: Mahasiswa;
  portal?: Portal;
  sekolah?: Sekolah;
  // tahun_ajaran?: TahunAjaran;
}

export class RegistrasiAnggota {
  id: number = 0;
  registrasi_id: number = 0;
  portal_id: number = 0;
  nim_mahasiswa: number = 0;
  createdAt?: string;
  updatedAt?: string;
}

export interface RegistrasiResponse {
  message: string;
  data: Registrasi[];
}

export interface RegistrasiPortalRequest {
  portal_id: number;
  sekolah_id: number;
  tipe: string;
  // registrasi_anggota: Mahasiswa[] | null;
  registrasi_anggota: { nim: string }[];
}
