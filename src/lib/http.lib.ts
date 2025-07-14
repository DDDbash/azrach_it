import { AxiosError, type AxiosRequestConfig } from "axios";

import axiosInstance from "./axios.lib";

interface GetRequestParams {
  endpoint: string;
  config?: AxiosRequestConfig;
}

export const fetch = async <ResponseDataType>({
  endpoint,
  config,
}: GetRequestParams) => {
  try {
    const response = await axiosInstance.get<ResponseDataType>(
      endpoint,
      config,
    );
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error(err.response?.data?.detail || "Request failed", {
        cause: err.response?.status,
      });
    }
    throw err;
  }
};
