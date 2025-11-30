import { UserPurchaseModel } from "./UserPurchaseModel";

export class PurchaseRepository {

    static getDummyPurchases(): UserPurchaseModel[] {
        return [
            new UserPurchaseModel('1', '1', '1', 1761985622000),  // Nov 01, 2025
            new UserPurchaseModel('2', '1', '5', 1762060275000),  // Nov 02, 2025
            new UserPurchaseModel('3', '2', '3', 1762175912000),  // Nov 03, 2025
            new UserPurchaseModel('4', '2', '8', 1762273659000),  // Nov 04, 2025
            new UserPurchaseModel('5', '3', '2', 1762352880000),  // Nov 05, 2025
            new UserPurchaseModel('6', '3', '7', 1762418391000),  // Nov 06, 2025
            new UserPurchaseModel('7', '4', '4', 1762525578000),  // Nov 07, 2025
            new UserPurchaseModel('8', '5', '9', 1762598627000),  // Nov 08, 2025
            new UserPurchaseModel('9', '6', '6', 1762689168000),  // Nov 09, 2025
            new UserPurchaseModel('10', '7', '1', 1762768013000), // Nov 10, 2025
            new UserPurchaseModel('11', '8', '10', 1762835600000),// Nov 11, 2025
            new UserPurchaseModel('12', '9', '3', 1762958762000), // Nov 12, 2025
            new UserPurchaseModel('13', '10', '5', 1763034087000),// Nov 13, 2025
            new UserPurchaseModel('14', '11', '2', 1763137999000),// Nov 14, 2025
            new UserPurchaseModel('15', '12', '7', 1763220499000),// Nov 15, 2025
            new UserPurchaseModel('16', '13', '4', 1763306652000),// Nov 16, 2025
            new UserPurchaseModel('17', '14', '9', 1763367199000),// Nov 17, 2025
            new UserPurchaseModel('18', '15', '6', 1763453591000),// Nov 18, 2025
            new UserPurchaseModel('19', '16', '8', 1763526595000),// Nov 19, 2025
            new UserPurchaseModel('20', '17', '1', 1763660309000),// Nov 20, 2025
            new UserPurchaseModel('21', '18', '10', 1763732845000),// Nov 21, 2025
            new UserPurchaseModel('22', '19', '3', 1763787281000),// Nov 22, 2025
            new UserPurchaseModel('23', '20', '5', 1763911653000),// Nov 23, 2025
            new UserPurchaseModel('24', '1', '7', 1763965018000), // Nov 24, 2025
            new UserPurchaseModel('25', '2', '2', 1764070791000), // Nov 25, 2025
            new UserPurchaseModel('26', '3', '9', 1764130618000), // Nov 26, 2025
            new UserPurchaseModel('27', '4', '6', 1764267027000), // Nov 27, 2025
            new UserPurchaseModel('28', '5', '4', 1764347776000), // Nov 28, 2025
            new UserPurchaseModel('29', '6', '10', 1764433029000),// Nov 29, 2025
            new UserPurchaseModel('30', '7', '8', 1764514256000)  // Nov 30, 2025
        ];
}

}


