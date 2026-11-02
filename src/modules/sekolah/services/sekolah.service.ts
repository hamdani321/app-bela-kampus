import { SekolahResponse } from "../../models/sekolah.model";

export async function getSekolah(): Promise<SekolahResponse> {
  const response = await fetch(`http://localhost:3001/api/sekolah`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const responseBody: SekolahResponse = await response.json();
  console.log(responseBody);

  return responseBody;
}
