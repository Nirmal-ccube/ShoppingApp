import { getFromStorage } from "../Utils/LocalStorageHelper";
import { STORAGE_KEYS } from "../constants/StorageKeys";
import { SponsorsModel } from "./SponsorsModel";

export class SponsorsRepository {

    static getAllSponsors(): SponsorsModel[] {
        const sponsors = getFromStorage<SponsorsModel[]>(STORAGE_KEYS.SPONSORS);

        if (sponsors && sponsors.length > 0) {
            return sponsors;
        }
        return [];
    }

}
