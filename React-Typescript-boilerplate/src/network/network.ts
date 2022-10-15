import { formDataAgent, privateAgent } from "./axiosAgent";
import { REPORT } from "@constants/EndPoints";
export const loginApi = (data: any) => {
  const LOGIN = "login/access-token";
  return formDataAgent(data, LOGIN);
};

//Create Network Calls here

export const reportApi = (socialType: string = "local_news") => {
  return privateAgent.get(`${REPORT}?news_type=${socialType}`);
};

export const reportPDFApi = (responseType: any) => {
  return privateAgent.get(`${REPORT}pdf`, { responseType: responseType });
};

export const postAPI = (url: string, data: any) => {
  return privateAgent.post(url, data);
};
