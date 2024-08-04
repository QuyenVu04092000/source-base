import type { IBaseResponse, IReturnData } from '@/types/response/base/IBaseResponse';
import { StatusApisCode } from '@/utilities/enums/statusApis';
import axios from 'axios';

const apiPutClient = async <T>(
  url: string,
  data?: any,
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
      .put<IBaseResponse<T>>(url, data);
    if (!StatusApisCode.ERROR.includes(result.status)) {
      returnData.data = result.data;
    } else {
      console.log(result.status);
      returnData.error = true;
      returnData.message = result.data.message;
    }
  } catch (error: any) {
    console.error(error);
    returnData.error = true;
    returnData.message = error.response.data.message;
  }
  return returnData;
};

export default apiPutClient;
