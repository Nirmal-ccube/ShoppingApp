import { useState } from "react";
import { UserRepository } from "../../data/UserRepository";
import { UserTableModel } from "../../data/UserTableModel";
import ItemList from "../Table/ItemList";
import TableItemHeader from "../Table/TableItemHeader";
import Pagination from "../Table/Pagination";
import UserItem from "./UserItem";

type UserListProps = {
    onEditTap: (userTableModel: UserTableModel) => void
}

export default function UserList({ onEditTap }: UserListProps) {
    const userDataList: UserTableModel[] = UserRepository.getUserTableData();

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7; // Show 7 items per page

    // Calculate pagination
    const totalPages = Math.ceil(userDataList.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentUserPurchases = userDataList.slice(startIndex, endIndex);

    function goToPage(page: number) {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <ItemList
            title="Manage Users"
            headers={
                <TableItemHeader columnNames={['Name', 'Email', 'Items Purchased', '']} />
            }
            children={
                currentUserPurchases.length === 0 ? (
                    <tr>
                        <td colSpan={4} className="p-4">
                            <div className="empty-message">No users found</div>
                        </td>
                    </tr>
                ) : (
                    currentUserPurchases.map((userData) => (
                        <UserItem key={userData.userId} userData={userData} onEdit={() => onEditTap(userData)} />
                    ))
                )
            }
            pagination={
                <Pagination totalPages={totalPages} currentPage={currentPage} goToPage={goToPage} />
            }
        >
        </ItemList>
    )
}