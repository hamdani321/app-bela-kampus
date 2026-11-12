import { TahunAjaranResponse } from "@/src/models/tahun_ajaran.models";

export async function getTahunAjaran(): Promise<TahunAjaranResponse> {
  const response = await fetch(`http://localhost:3001/api/tahun-ajaran`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responseBody: TahunAjaranResponse = await response.json();
  return responseBody;
}
