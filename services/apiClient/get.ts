import type { IBaseResponse, IReturnData } from '@/types/response/base/IBaseResponse';
import { StatusApisCode } from '@/utilities/enums/statusApis';
import axios from 'axios';
// import userStore from "stores/user";
// import IBaseResponse, { IReturnData } from "types/response/base/IBaseResponse";

const apiGetClient = async <T>(
  url: string,
  params?: any,
  token?: string
): Promise<IReturnData<T>> => {
  const returnData: IReturnData<T> = { error: false, data: {} as IBaseResponse<T> };

  try {
    const result = await axios
      .create({
        headers: {
          // Authorization: token ? "Bearer " + token : "Bearer " + userStore.getState().access_token,
        },
      })
      .get<IBaseResponse<T>>(url, { params });
    if (!StatusApisCode.ERROR.includes(result.status)) {
      returnData.data = result.data;
    } else {
      returnData.error = true;
    }
  } catch (error) {
    returnData.error = true;
  }

  return returnData;
};

export default apiGetClient;
