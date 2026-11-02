export class Sekolah {
  id: number = 0;
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
