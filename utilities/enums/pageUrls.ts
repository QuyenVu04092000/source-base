const PageUrls = {
  HOME: {
    BASE: "/",
  },
  PRODUCT: {
    BASE: "/product",
    CREATE_PRODUCT: "/product/create-product",
  },
  REPORT: {
    BASE: "/report",
    INVENTORY_QUANTITY: "/report/inventory-quantity",
    WAREHOUSE_REPORT: {
      BASE: "/report/warehouse-report",
      WAREHOUSE_TRANSACTION_REPORT: "/report/warehouse-report/warehouse-transaction-report",
      WAREHOUSE_INVENTORY_REPORT: "/report/warehouse-report/warehouse-inventory-report",
    },
    RAW_DATA: "/report/raw-data",
    SALE_REPORT: {
      BASE: "/report/sale-report",
      ORDER_STATUS_REPORT: "/report/sale-report/order-status-report",
    },
  },
  WAREHOUSE: {
    BASE: "/warehouse",
    LIST_WAREHOUSE: "/warehouse/list-warehouse",
    LIST_WAREHOUSE_TRANSACTION: "/warehouse/warehouse-transaction",
  },
};

export default PageUrls;
