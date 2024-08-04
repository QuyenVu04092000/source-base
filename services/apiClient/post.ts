import type { IBaseResponse, IReturnData } from '@/types/response/base/IBaseResponse';
import { StatusApisCode } from '@/utilities/enums/statusApis';
import type { AxiosProgressEvent } from 'axios';
import axios from 'axios';
// import userStore from "stores/user";
// import IBaseResponse, { IReturnData } from "types/response/base/IBaseResponse";

const apiPostClient = async <T>(
  url: string,
  data: any,
  token?: string,
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void
): Promise<IReturnData<T>> => {
  const returnData: IReturnData<T> = { error: false, data: {} as IBaseResponse<T> };
  try {
    const result = await axios
      .create({
        headers: {
          // Authorization: token ? "Bearer " + token : "Bearer " + userStore.getState().access_token,
        },
      })
      .post<IBaseResponse<T>>(url, data, {
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
          if (onUploadProgress) {
            onUploadProgress(progressEvent);
          }
        },
      });
    if (!StatusApisCode.ERROR.includes(result.status)) {
      returnData.data = result.data;
    } else {
      console.log(result.status);
      returnData.error = true;
      returnData.message = result.data.message;
    }
  } catch (error: any) {
    console.log(error);
    returnData.error = true;
    returnData.message = error.response.data.message;
  }
  return returnData;
};

export default apiPostClient;
