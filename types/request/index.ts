export interface IBaseRequest {
  search?: string;
  chanelIds?: string;
  productCategoryIds?: string;
  productIndustryIds?: string;
  statuses?: string;
  page?: number;
  limit?: number;
  userId?: string;
}
