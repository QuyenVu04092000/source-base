/** @format */

import apiGetClient from "@/services/apiClient/get";
import apiPutClient from "@/services/apiClient/put";
import type { IBaseResponse } from "@/types/response/base/IBaseResponse";
import {
  type IDetailWarehouse,
  type IListWarehouseTableData,
} from "@/types/response/warehouse/IListWarehouse";
import Endpoints from "@/utilities/enums/endpoints";

export const getListWarehouseTableData = async (
  filter: any
): Promise<IBaseResponse<IListWarehouseTableData[]>> => {
  let response = {} as IBaseResponse<IListWarehouseTableData[]>;

  await apiGetClient<IListWarehouseTableData[]>(
    Endpoints.WAREHOUSE.GET_LIST_WAREHOUSE,
    {
      warehouseIds: filter.warehouseIds ? filter.warehouseIds : null,
      regionIds: filter.regionIds ? filter.regionIds : null,
      channels: filter.channelIds ? filter.channelIds : null,
      startTime: filter.startTime ? filter.startTime : null,
      endTime: filter.endTime ? filter.endTime : null,
      page: filter.page ? filter.page : 1,
      limit: filter.limit ? filter.limit : 10,
      search: filter.search ? filter.search : null,
      statuses: filter.status ? filter.status : null,
    }
  ).then((res) => {
    if (!res.error && res.data) {
      response = res.data;
    }
  });

  return response;
};

export const getDetailWarehouse = async (
  id: string | string[] | undefined
): Promise<IBaseResponse<IDetailWarehouse>> => {
  let response = {} as IBaseResponse<IDetailWarehouse>;

  await apiGetClient<IDetailWarehouse>(
    Endpoints.WAREHOUSE.GET_LIST_WAREHOUSE + "/" + String(id),
    {}
  ).then((res) => {
    if (!res.error && res.data) {
      response = res.data;
    }
  });

  return response;
};

export const updateNoteWarehouse = async (
  id: string,
  note: string
): Promise<IBaseResponse<any>> => {
  let response = {} as IBaseResponse<any>;

  await apiPutClient<IDetailWarehouse>(
    Endpoints.WAREHOUSE.GET_LIST_WAREHOUSE + "/" + String(id),
    {
      note,
    }
  ).then((res) => {
    if (!res.error && res.data) {
      response = res.data;
    }
  });

  return response;
};

export const disableWarehouse = async (
  ids: any[],
  status: string
): Promise<IBaseResponse<IDetailWarehouse>> => {
  let response = {} as IBaseResponse<IDetailWarehouse>;

  await apiPutClient<IDetailWarehouse>(Endpoints.WAREHOUSE.UPDATE_STATUS, {
    warehouseIds: ids,
    status,
  }).then((res) => {
    if (!res.error && res.data) {
      response = res.data;
    }
  });

  return response;
};

export const handleExportListWarehouse = async (
  filter: any
): Promise<IBaseResponse<any>> => {
  let response = {} as IBaseResponse<any>;

  await apiGetClient<any>(Endpoints.WAREHOUSE.LIST_WAREHOUSE_EXPORT, {
    warehouseIds: filter.warehouseIds ? filter.warehouseIds : null,
    regionIds: filter.regionIds ? filter.regionIds : null,
    channels: filter.channelIds ? filter.channelIds : null,
    startTime: filter.startTime ? filter.startTime : null,
    endTime: filter.endTime ? filter.endTime : null,
    search: filter.search ? filter.search : null,
    statuses: filter.status ? filter.status : null,
    userId: process.env.NEXT_PUBLIC_ADMIN_ID,
  }).then((res) => {
    if (!res.error && res.data) {
      response = res.data;
    }
  });

  return response;
};

export const handleExportListInventory = async (
  filter: any
): Promise<IBaseResponse<any>> => {
  let response = {} as IBaseResponse<any>;

  await apiGetClient<any>(Endpoints.WAREHOUSE.LIST_INVENTORY_EXPORT, {
    warehouseId: filter.id ? filter.id : null,
    warehouseIds: filter.warehouseIds ? filter.warehouseIds : null,
    regionIds: filter.regionIds ? filter.regionIds : null,
    channels: filter.channelIds ? filter.channelIds : null,
    startTime: filter.startTime ? filter.startTime : null,
    endTime: filter.endTime ? filter.endTime : null,
    search: filter.search ? filter.search : null,
    statuses: filter.status ? filter.status : null,
    userId: process.env.NEXT_PUBLIC_ADMIN_ID,
  }).then((res) => {
    if (!res.error && res.data) {
      response = res.data;
    }
  });

  return response;
};
