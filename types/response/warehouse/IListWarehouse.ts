import { type IWard } from "@/types/component/common/IWard";

export interface IListWarehouseTableData {
  id: string;
  code: string;
  name: string;
  phone: string;
  address: string;
  status: string;
  warehouseAddresses: Array<{
    address: string;
    isDefault: boolean;
  }>;
  ward: IWard;
}

export interface IWarehouseAddress {
  id: string;
  address: string;
  isDefault: boolean;
  status: string;
  longitude: string;
  latitude: string;
}

export interface IDetailWarehouse {
  id: string;
  code: string;
  name: string;
  phone: string;
  note: string;
  status: string;
  warehouseAddresses: IWarehouseAddress[];
  representative: string;
}

export interface IProductUnitsData {
  unitId: string;
  inventoryUnitType: string;
  conversionUnit: number;
  isSale: boolean;
  unitName: string;
  isBasic: boolean;
}

export interface IProductData {
  id: string;
  code: string;
  name: string;
  productUnits: IProductUnitsData[];
}

export interface IInventoryResponse {
  id: string;
  quantity: number;
  minimumQuantity: number;
  product: IProductData;
  expectImport: number;
  availableQuantity: number;
}

export interface IDetailInventoryResponse {
  id: string;
  warehouseId: string;
  warehouseName: string;
  transactionCode: string;
  transactionType: string;
  transactionCreatedAt: string;
  status: string;
  invoiceNumber: string;
  explain: string;
  transactionSubType: string;
  warehouseReceiveName?: string;
  warehouseSendingName?: string;
}

export interface IProductLogResponse {
  quantity: number;
  transactionDate: string;
}

export interface IProvinceResponse {
  id: string;
  name: string;
  type: string;
}

export interface IDistrictResponse {
  id: string;
  name: string;
  type: string;
  cityId: string;
}

export interface IWardResponse {
  id: string;
  name: string;
  type: string;
  districtId: string;
}

export interface IProductResponse {
  id: string;
  code: string;
  name: string;
  inventory: number;
  availableQuantity: number;
  basicUnitName: string;
  thumbnailUrl: string;
  wholeSaleUnitName: string;
  retailUnitName: string;
  wholeSaleConversion: number;
  retailConversion: number;
  quantity?: number;
  thumbnail: string;
  productName: string;
  productCode: string;
  isPromotion: boolean | null;
}

export interface IProductInventoryResponse {
  productId: string;
  productCode: string;
  productName: string;
  thumbnail: string;
  basicUnitName: string;
  wholeSaleUnitName: string;
  wholeSaleConversion: number;
  retailUnitName: string;
  retailConversion: number;
  quantityAfter: number;
  quantityBefore: number;
  note: string;
  warehouseTransactionId: string;
}

export interface IReceiptResponse {
  id: string;
  code: string;
  name: string;
  inventory: number;
  availableQuantity: number;
  basicUnitName: string;
  thumbnailUrl: string;
  wholeSaleUnitName: string;
  retailUnitName: string;
  wholeSaleConversion: number;
  retailConversion: number;
  quantity?: number;
  thumbnail?: string;
  productName?: string;
  productCode?: string;
}

export interface IReceiptProps extends IProductResponse {
  key: string;
  quantityEven: number;
  quantityOdd: number;
  quantityBasic: number;
  note: string;
  isPromotion: boolean | null;
  total: number;
}

export interface IProductRequest {
  productId: string;
  quantity: number;
  note: string;
  isPromotion?: boolean | null;
}

export interface IProductInventoryRequest {
  productId: string;
  quantityAfter: number;
  quantityBefore: number;
  note: string;
}

export interface IImportTransactionRequest {
  warehouseId: string;
  warehouseSendingId?: string;
  warehouseReceiveId?: string;
  transactionSubType: string;
  transactionCreatedAt: string;
  explain: string;
  status: string;
  invoiceNumber?: string;
  products: IProductRequest[];
}

export interface IInventoryTransactionRequest {
  warehouseId: string;
  transactionSubType: string;
  transactionCreatedAt: string;
  explain: string;
  status: string;
  products: IProductInventoryRequest[];
}

export interface IFile {
  id: string;
  title: string;
  pathOffline: string;
  urlOnline: string;
  type: string;
  size: number;
}

export interface IFileResponse {
  id: string;
  file: IFile;
}
