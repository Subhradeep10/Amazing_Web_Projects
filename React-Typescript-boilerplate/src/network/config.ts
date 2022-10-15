import Environment from "./baseUrl";
import axios from "axios";

const getHeaders: any = async (token: string) => {
  if (token) {
    return {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  } else {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: Environment.BasicToken,
    };
  }
};

const getProfilePictureUploadHeaders = (token: string) => {
  if (token) {
    return {
      Authorization: "Bearer " + token,
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
    };
  } else {
    return {
      Authorization: Environment.BasicToken,
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  }
};

var profilePictureOptions: any = {
  method: null,
  data: null,
  headers: null,
};

var authOptions: any = {
  method: null,
  data: null,
  headers: getHeaders(),
  // timeout: 500
};

export const doPost = async (url: string, data: any, token: string) => {
  authOptions.method = "POST";
  authOptions.data = data;
  authOptions.headers = await getHeaders(token);
  return axios(Environment.API_BASE_URL + url, authOptions);
};
export const doPatch = async (url: string, data: any, token: string) => {
  authOptions.method = "Patch";
  authOptions.data = data;
  authOptions.headers = await getHeaders(token);
  return axios(Environment.API_BASE_URL + url, authOptions);
};

export const doPut = async (url: string, data: any, token: string) => {
  authOptions.method = "PUT";
  authOptions.data = data;
  authOptions.headers = await getHeaders(token);
  return axios(Environment.API_BASE_URL + url, authOptions);
};

export const doGet = async (url: string, token: string, data: any) => {
  authOptions.headers = await getHeaders(token);
  authOptions.method = "GET";
  authOptions.data = null;
  return axios(Environment.API_BASE_URL + url, authOptions);
};

export const doDelete = async (url: string, data: any, token: string) => {
  authOptions.method = "DELETE";
  authOptions.data = data;
  authOptions.headers = await getHeaders(token);
  return axios(Environment.API_BASE_URL + url, authOptions);
};

export const doPostProfilePictureUpload = (url: string, data: any, token: string) => {
  profilePictureOptions.method = "POST";
  profilePictureOptions.data = data;
  profilePictureOptions.headers = getProfilePictureUploadHeaders(token);
  return axios(Environment.API_BASE_URL + url, profilePictureOptions);
};
