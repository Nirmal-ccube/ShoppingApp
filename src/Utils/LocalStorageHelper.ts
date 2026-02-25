import { STORAGE_KEYS } from "../constants/StorageKeys";
import { InvoiceModel } from "../data/InvoiceModel";
import { ProductModel } from "../data/ProductModel";
import { SponsorsModel } from "../data/SponsorsModel";
import { UserModel } from "../data/UserModel";

//Set true if want to reset all data
export const setupInitialData = (forceReset: boolean = false) => {

  if (forceReset) {
    //Clear all data before add default data
    clearAppData()
  }

  const isDataSetupDone = localStorage.getItem(STORAGE_KEYS.DATA_SETUP_DONE) === 'true';
  if (isDataSetupDone) { return; }

  const dummyProducts = ProductModel.getDummyProducts();
  localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(dummyProducts));

  const dummyUsers = UserModel.getDummyUsers();
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(dummyUsers));

  const dummyInvoices = InvoiceModel.getDummyInvoices();
  localStorage.setItem(STORAGE_KEYS.INVOICES, JSON.stringify(dummyInvoices));

  const dummySponsors = SponsorsModel.getDummySponsors();
  localStorage.setItem(STORAGE_KEYS.SPONSORS, JSON.stringify(dummySponsors));

  localStorage.setItem(STORAGE_KEYS.DATA_SETUP_DONE, 'true')
};

const clearAppData = () => {
  [STORAGE_KEYS.PRODUCTS, STORAGE_KEYS.USERS, STORAGE_KEYS.INVOICES, STORAGE_KEYS.DATA_SETUP_DONE]
    .forEach(key => localStorage.removeItem(key));
  console.log('🗑️ App data cleared');
};

export const getFromStorage = <T>(key: string): T | null => {
  const stored = localStorage.getItem(key);
  if (!stored) return null;

  try {
    const parsed = JSON.parse(stored);

    if (Array.isArray(parsed)) {
      return parsed as T;
    }

    return null;
  } catch {
    console.warn(`Invalid data for key: ${key}`);
    return null;
  }
};
