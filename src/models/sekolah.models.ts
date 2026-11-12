export class Sekolah {
  id: number = 0;
  npsn: string = "";
  nama: string = "";
  email: string = "";
  alamat: string = "";
  telepon: string = "";
  latitude: string = "";
  longitude: string = "";
  createdAt: string = "";
  updatedAt: string = "";
}

export class SekolahResponse {
  public message: string = "";
  public data?: Sekolah[] | null;
}

export interface SekolahRequest {
  npsn: string;
  nama: string;
  email: string;
  alamat: string;
  telepon: string;
  latitude: string;
  longitude: string;
}

export interface SekolahErrorResponse {
  message: string;
  statusCode: number;
  errors?: {
    npsn?: string[];
    nama?: string[];
    email?: string[];
    telepon?: string[];
    alamat?: string[];
    latitude?: string[];
    longitude?: string[];
  };
}
