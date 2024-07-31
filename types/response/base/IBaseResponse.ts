interface IPaginationResponse {
  page: number;
  limit: number;
  totalRecords: number;
}

interface IImageResponse {
  id: string;
  createdAt: string;
  status: string;
  type: string;
  size: number;
  pathOffline: string;
  urlOnline: string | null;
  title: string;
}

interface IPostImageResponse {
  id: string;
  createdAt: string;
  status: string;
  title: string;
  pathOffline: string;
  urlOnline: null;
  type: string;
  size: number;
}

interface IMetaResponse {
  page?: number;
  limit?: number;
  totalRecords?: number;
}

interface IBaseResponse<T = any> {
  message?: string;
  data: T;
  meta?: IMetaResponse;
}

interface IReturnData<T = any> {
  data?: IBaseResponse<T>;
  error: boolean;
  message?: string;
}

export type { IBaseResponse, IReturnData, IPaginationResponse, IMetaResponse, IImageResponse, IPostImageResponse };
