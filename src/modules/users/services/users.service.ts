import { UserResponse } from "@/src/models/user.models";

export async function getUsers(): Promise<UserResponse> {
  const response = await fetch(`http://localhost:3001/api/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responseBody: UserResponse = await response.json();
  return responseBody;
}
