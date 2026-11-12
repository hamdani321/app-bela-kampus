import { Mahasiswa } from "./mahasiswa.models";
import { Registrasi, RegistrasiAnggota } from "./registrasi.models";
import { Sekolah } from "./sekolah.models";
import { TahunAjaran } from "./tahun_ajaran.models";

export class Portal {
  id: number = 0;
  tahun_ajaran_id: number = 0;
  waktu_selesai: string = "";
  waktu_mulai: string = "";
  status: "AKTIF" | "NONAKTIF" = "NONAKTIF";
  createdAt?: string;
  updatedAt?: string;

  //relasi
  tahun_ajaran?: TahunAjaran;
  registrasi?: Registrasi[];
}

export interface PortalResponse {
  message: string;
  data: Portal[] | null;
}
export interface DetailPortalResponse {
  message: string;
  data: Portal | null;
}

export interface PortalRegistrasiResponse {
  message: string;
  data: {
    portal: Portal | null;
    registrasi: Registrasi | null;
    registrasi_anggota: RegistrasiAnggota | null;
  };
}
export interface PortalFormRegistrasiDataResponse {
  message: string;
  data: {
    portal: Portal;
    sekolah: Sekolah[];
    mahasiswa: Mahasiswa[];
  };
}
