import UserList from "./UserList";

export default function Users() {
    

    return (
        <div className="flex flex-col items-center space-y-1 mt-4 ">

            <h2 className="text-3xl font-bold text-gray-900">Manage Users</h2>

            <UserList />
        </div>
    )
}