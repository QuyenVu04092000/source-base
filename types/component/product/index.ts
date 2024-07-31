export interface IInventoryClassificationData {
  id: string | number;
  title: string;
  value: string;
}

export interface IInventoryClassificationSelected {
  item: string;
  inventoryClassificationValue: string;
}
