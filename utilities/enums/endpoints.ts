/** @format */

// External link (endpoints api)
export const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL_API;

export const BASE_URL_API_V1 = BASE_URL_API + '/api/v1';

const Endpoints = {
  WAREHOUSE: {
    FILTER_WAREHOUSE: BASE_URL_API_V1 + '/warehouses/warehouses',
    GET_LIST_WAREHOUSE: BASE_URL_API_V1 + '/warehouses',
    LIST_WAREHOUSE_EXPORT: BASE_URL_API_V1 + '/exports/warehouses',
    UPDATE_STATUS: BASE_URL_API_V1 + '/warehouses/warehouse-statuses',
    LIST_INVENTORIES: BASE_URL_API_V1 + '/inventories',
    LIST_TRANSACTIONS_IMPORT: BASE_URL_API_V1 + '/warehouses/imports',
    LIST_TRANSACTIONS_AUDITS: BASE_URL_API_V1 + '/warehouses/audits',
    LIST_WAREHOUSE_ADJUSTMENTS: BASE_URL_API_V1 + '/warehouses/adjustments',
    LIST_WAREHOUSE_TRANSFER: BASE_URL_API_V1 + '/warehouses/transfers',
    SUB_ADDRESSES: BASE_URL_API_V1 + '/warehouses/addresses',
    WAREHOUSE_VOLATILITY: BASE_URL_API_V1 + '/warehouses/volatility',
    WAREHOUSE_TRANSACTION: BASE_URL_API_V1 + '/warehouse-transactions/summary',
    PRODUCT_LOG: BASE_URL_API_V1 + '/inventories/logs',
    UPDATE_MINIMUM_QUANTITY: BASE_URL_API_V1 + '/inventories/minimum-quantity',
    GET_CITY: BASE_URL_API_V1 + '/administrative-division/cities',
    GET_DISTRICT: BASE_URL_API_V1 + '/administrative-division/districts',
    GET_WARD: BASE_URL_API_V1 + '/administrative-division/wards',
    CREATE_WAREHOUSE_ADDRESS: BASE_URL_API_V1 + '/warehouse-addresses',
    LIST_INVENTORY_EXPORT: BASE_URL_API_V1 + '/exports/inventories',
    LIST_WAREHOUSE_TRANSACTION_EXPORT: BASE_URL_API_V1 + '/exports/warehouse-transactions',
    CREATE_TRANSACTION_IMPORT: BASE_URL_API_V1 + '/warehouse-transactions/imports',
    GET_DETAIL_TRANSACTION_ADJUSTMENT:
      BASE_URL_API_V1 + '/warehouse-transactions/products/adjustments',
    GET_DETAIL_TRANSACTION_INVENTORY: BASE_URL_API_V1 + '/warehouse-transactions/products/audits',
    CREATE_TRANSACTION_TRANSFER: BASE_URL_API_V1 + '/warehouse-transactions/transfers',
    CREATE_TRANSACTION_ADJUSTMENT: BASE_URL_API_V1 + '/warehouse-transactions/adjustments',
    CREATE_TRANSACTION_INVENTORY: BASE_URL_API_V1 + '/warehouse-transactions/audits',
    GET_PRODUCT_INVENTORY: BASE_URL_API_V1 + '/products/with-inventory',
    GET_DETAIL_IMPORT_TRANSACTION: BASE_URL_API_V1 + '/warehouse-transactions/products/imports',
    GET_DETAIL_TRANSFER_TRANSACTION: BASE_URL_API_V1 + '/warehouse-transactions/products/transfers',
    UPDATE_STATUS_TRANSACTION: BASE_URL_API_V1 + '/warehouse-transactions/status',
    UPDATE_STATUSES_TRANSACTION: BASE_URL_API_V1 + '/warehouse-transactions/statuses',
    DELETE_TRANSACTION: BASE_URL_API_V1 + '/warehouse-transactions',
    GET_DETAIL_TRANSFER_WAREHOUSE_TRANSACTION:
      BASE_URL_API_V1 + '/warehouse-transactions/transfer/summary',
    UPLOAD_FILE: BASE_URL_API_V1 + '/upload-warehouse-transactions',
    GET_FILES: BASE_URL_API_V1 + '/warehouse-transactions/files',
  },
};

export default Endpoints;
