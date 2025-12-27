import { UserRepository } from "../../data/UserRepository";
import { useState } from "react";
import ItemList from "../Table/ItemList";
import TableItemHeader from "../Table/TableItemHeader";
import Pagination from "../Table/Pagination";
import { UserTableModel } from "../../data/UserTableModel";
import UserItem from "./UserItem";

export default function UserList() {
    const userDataList: UserTableModel[] = UserRepository.getUserTableData();
    
        // Pagination state
        const [currentPage, setCurrentPage] = useState(1);
        const itemsPerPage = 10; // Show 10 items per page
    
        // Calculate pagination
        const totalPages = Math.ceil(userDataList.length / itemsPerPage);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentUserPurchases = userDataList.slice(startIndex, endIndex);
    
        function goToPage (page: number) {
            if (page >= 1 && page <= totalPages) {
                setCurrentPage(page);
            }
        };

        return (
            <ItemList 
                title="Manage Users"
                headers={
                    <TableItemHeader columnNames={['Name', 'Email', 'Items Purchased', '']}/>
                }
                children={
                    currentUserPurchases.map((userData) => (
                        <UserItem key={userData.userId}  userData={userData}/>
                    ))
                }
                pagination={
                    <Pagination totalPages={totalPages} currentPage={currentPage} goToPage={goToPage} /> 
                }
            >
            </ItemList>
        )
}