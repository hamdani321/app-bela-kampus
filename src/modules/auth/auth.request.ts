export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginErrorResponse {
  statusCode: number;
  message: string;
  error?: string;
  errors?: Record<string, string[]>;
}

export interface LoginResponse {
  data: {
    id: number;
    email: string;
    name: string;
  };
  access_token: string;
  token_type: string;
}
