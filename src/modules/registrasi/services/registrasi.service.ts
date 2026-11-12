import { RegistrasiResponse } from "@/src/models/registrasi.models";

export async function getRegistrasi(): Promise<RegistrasiResponse> {
  const response = await fetch(`http://localhost:3001/api/registrasi`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responseBody = await response.json();
  console.log(responseBody);

  return responseBody as RegistrasiResponse;
}
