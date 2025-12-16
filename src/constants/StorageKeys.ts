export const STORAGE_KEYS = {
    DATA_SETUP_DONE: 'dataSetupDone',
    INVOICES: 'invoices',
    PRODUCTS: 'products',
    USERS: 'users'
} as const;

export type StorageKey = typeof STORAGE_KEYS[keyof typeof STORAGE_KEYS];
