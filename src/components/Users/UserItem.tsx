import { UserTableModel } from "../../data/UserTableModel";

type UserItemProp = {
    userData: UserTableModel;
    onEdit: () => void;
}

export default function UserItem({ userData, onEdit }: UserItemProp) {

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
                    className="useritem-action-btn"
                >
                    Edit
                </button>
            </td>

        </tr>
    )
}