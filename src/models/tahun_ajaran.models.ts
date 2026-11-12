export class TahunAjaran {
  id: number = 0;
  nama: string = "";
  tahun: number = 0;
  jenis: "Ganjil" | "Genap" = "Genap";
  createdAt?: string;
  updatedAt?: string;
}

export interface TahunAjaranResponse {
  message: string;
  data: TahunAjaran[];
}
