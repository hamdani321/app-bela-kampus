import { LoginRequest, LoginResponse } from "./auth.request";

export async function login(
  loginRequest: LoginRequest
): Promise<LoginResponse> {
  const response = await fetch(`http://localhost:3001/api/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(loginRequest),
  });
  const responseBody: LoginResponse = await response.json();
  if (!response.ok) {
    throw responseBody;
  }
  localStorage.setItem("access_token", responseBody.access_token);
  return responseBody;
}
