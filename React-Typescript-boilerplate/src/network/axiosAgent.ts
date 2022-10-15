import Environment from "@network/baseUrl";
import axios from "axios";

declare global {
  interface Window {
    localStorage: any;
  }
}

const headers = {
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PATCH, DELETE",
  Authorization: Environment.BasicToken,
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};

function resetHeaders(agent: any) {
  agent.defaults.headers = headers;
}

//Setting user token on app load could be done elsewhere, maybe on shell mount or routes isLogin check
let authDetails;

if (localStorage.getItem(Environment.LOCAL_STORAGE_KEY)) {
  authDetails = JSON.parse(
    window.localStorage.getItem(Environment.LOCAL_STORAGE_KEY)
  );
}

const publicAgent = axios.create({
  baseURL: Environment.API_BASE_URL,
  headers: headers,
});

const formDataAgent = (data: any, type: string) =>
  axios({
    method: "POST",
    url: Environment.API_BASE_URL + `${type}`,
    data: data,
    headers: { "Content-Type": "multipart/form-data" },
  });

const privateAgent: any = axios.create({
  baseURL: Environment.API_BASE_URL,
  headers: {
    ...headers,

    Authorization: authDetails
      ? `Bearer ${JSON.parse(
        window.localStorage.getItem(Environment.LOCAL_STORAGE_KEY)
      )}`
      : "",
  },
});

export const uploadFormData = (formData: any, type: string) =>
  privateAgent.post(`/upload?type=${type}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

const UNAUTHORIZED = 401;
const FORBIDDEN = 403;

privateAgent.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    const { status } = error.response;
    if (status === UNAUTHORIZED || status === FORBIDDEN) {
      localStorage.removeItem("auth");
      localStorage.removeItem("selected");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

const CancelToken = axios.CancelToken;

export {
  headers,
  resetHeaders,
  publicAgent,
  privateAgent,
  CancelToken,
  formDataAgent,
};
