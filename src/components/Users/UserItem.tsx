import { UserTableModel } from "../../data/UserTableModel";

type UserItemProp = {
    userData: UserTableModel;
}

export default function UserItem({userData}: UserItemProp) {

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
                Edit
            </td>
            
        </tr>
    ) 
}