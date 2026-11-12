import { RegistrasiPortalRequest } from "@/src/models/registrasi.models";
import {
  DetailPortalResponse,
  PortalFormRegistrasiDataResponse,
  PortalRegistrasiResponse,
  PortalResponse,
} from "../../../models/portal.models";

export async function getPortal(): Promise<PortalResponse> {
  const response = await fetch(`http://localhost:3001/api/portal`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json,",
    },
  });
  const responseBody = await response.json();
  return responseBody as PortalResponse;
}

export async function getDetailPortal(
  id: number
): Promise<DetailPortalResponse> {
  const response = await fetch(`http://localhost:3001/api/portal/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responseBody: DetailPortalResponse = await response.json();
  return responseBody;
}

export async function getActivePortal(): Promise<PortalRegistrasiResponse> {
  const response = await fetch("http://localhost:3001/api/portal/active", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const responseBody: PortalRegistrasiResponse = await response.json();
  if (!response.ok) {
    throw responseBody;
  }

  return responseBody;
}

export async function getDataFormRegistrasiPortal(
  portal_id: number
): Promise<PortalFormRegistrasiDataResponse> {
  const response = await fetch(
    `http://localhost:3001/api/portal/data-form/${portal_id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        Accept: "application/json",
      },
    }
  );
  const responseBody: PortalFormRegistrasiDataResponse = await response.json();
  return responseBody;
}

export async function registrasiPortal(
  payloadRegistrasi: RegistrasiPortalRequest
) {
  const response = await fetch(`http://localhost:3001/api/portal/register`, {
    method: "POST",
    headers: {
      "Content-Type": `application/json`,
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      Accept: "application/json",
    },
    body: JSON.stringify(payloadRegistrasi),
  });
  const responseBody = await response.json();
  if (!response.ok) {
    throw responseBody;
  }
  return responseBody;
}
