import type { IBaseRequest } from "@/types/request";

export interface IListProductTableRequest
  extends Pick<IBaseRequest, "search" | "productCategoryIds" | "productIndustryIds" | "statuses" | "page" | "limit"> {}

export interface IExportExcelProductRequest
  extends Pick<IBaseRequest, "search" | "productCategoryIds" | "productIndustryIds" | "statuses" | "userId"> {}

export interface IApplicableZones {
  regionIds: string[];
}
export interface IProductPrice {
  id: string;
  price: number;
  applicableZones: IApplicableZones;
  customerTypeIds: string[];
  channelIds: string[];
  startDate: string;
  endDate: string;
  isSale: boolean;
  ordinalNumber: number;
  status: string;
}

export interface IUnitProductRequest {
  unitId?: string;
  inventoryUnitType: string;
  conversionUnit: number | null;
  isSale: boolean;
  isDeleted?: boolean;
  isBasic?: boolean;
}

export interface IProductOtherInfo {
  infoName: string;
  infoValue: string;
}
export interface ICreateProductRequest {
  name: string;
  code: string;
  status: "ACTIVE" | "INACTIVE";
  productCategoryId: string | null;
  productIndustryId: string | null;
  description: string | null;
  businessId: string;
  thumbnailId?: string | null;
  productImages: Array<{ fileId: string; isThumbnail: boolean }>;
  productChannelIds?: string[];
  productUnits: IUnitProductRequest[];
  productPrices?: IProductPrice[];
  productPropertyValueIds: string[];
  productOtherInfos: IProductOtherInfo[];
}

export interface IUpdateGeneralInformationProductRequest {
  name: string | null;
  code: string | null;
  description?: string | null;
  productCategoryId: string | null;
  productIndustryId: string | null;
}
