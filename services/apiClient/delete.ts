import type { IBaseResponse, IReturnData } from '@/types/response/base/IBaseResponse';
import { StatusApisCode } from '@/utilities/enums/statusApis';
import axios from 'axios';

const apiDeleteClient = async <T>(
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
      .delete<IBaseResponse<T>>(url, { data });
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

export default apiDeleteClient;
