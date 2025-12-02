import { UserTableModel } from "../../data/UserTableModel";

type UserItemProp = {
    userData: UserTableModel;
}

export default function UserItem({userData}: UserItemProp) {

    const defaultCSS = "px-6 py-4 whitespace-nowrap text-sm";

    return (
        <tr key={userData.userId} className="hover:bg-gray-50 transition-colors">

            <td className={`${defaultCSS} font-medium text-gray-900`}>
                {userData.name}
            </td>
            <td className={`${defaultCSS}  text-gray-900`}>
                {userData.email}
            </td>
            <td className={`${defaultCSS}  text-gray-500`}>
                Purchased {userData.invoices.length} item
            </td>
            <td className={`${defaultCSS} font-semibold text-green-600`}>
                Edit
            </td>
            
        </tr>
    ) 
}