import {
  SekolahRequest,
  SekolahResponse,
} from "../../../models/sekolah.models";

export async function getSekolah(): Promise<SekolahResponse> {
  const response = await fetch(`http://localhost:3001/api/sekolah`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const responseBody: SekolahResponse = await response.json();
  return responseBody;
}

export async function createSekolah(sekolahPayload: SekolahRequest) {
  const response = await fetch(`http://localhost:3001/api/sekolah`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sekolahPayload),
  });
  const responseBody = await response.json();
  if (!response.ok) {
    throw responseBody;
  }
  return responseBody;
}
