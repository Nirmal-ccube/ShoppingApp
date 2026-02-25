import { UserTableModel } from "../../data/UserTableModel";

type UserItemProp = {
    userData: UserTableModel;
    onEdit: () => void;
}

export default function UserItem({userData, onEdit}: UserItemProp) {

    const defaultCSS = "px-6 py-4 whitespace-nowrap text-sm";

    return (
        <tr key={userData.userId} className="useritem-row">

            <td className="useritem-name">
                {userData.name}
            </td>
            <td className="useritem-email">
                {userData.email}
            </td>
            <td className="useritem-invoices">
                Purchased {userData.invoices.length} item
            </td>
            <td className="useritem-action">
                 <button 
                    onClick={() => onEdit()}
                    className={`${defaultCSS} font-semibold text-emerald-600 hover:text-emerald-700 cursor-pointer transition-colors`}
                >
                    Edit
                </button>
            </td>
            
        </tr>
    ) 
}