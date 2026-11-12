import { MahasiswaResponse } from "../../../models/mahasiswa.models";

export async function getAllMahasiswa(): Promise<MahasiswaResponse> {
  const response = await fetch(`http://localhost:3001/api/mahasiswa`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const responseBody: MahasiswaResponse = await response.json();
  return responseBody;
}
