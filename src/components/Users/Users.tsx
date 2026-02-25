import UserList from "./UserList";
import SideMenu from "../SideMenu/SideMenu";
import { useState, useRef, useEffect } from "react";
import EditUserModal, { EditUserModalHandle } from "../Modal/EditUser/EditUserModal";
import { UserTableModel } from "../../data/UserTableModel";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState<string>('Users');


  const editUserModalRef = useRef<EditUserModalHandle>(null);
  const [selectedUserTableModel, setSelectedUserTableModal] = useState<UserTableModel | null>(null);

  useEffect(() => {
      if (selectedUserTableModel && editUserModalRef.current) {
          editUserModalRef.current.open();
      }
  }, [selectedUserTableModel]);


  function showEditUserModal(userTableModal: UserTableModel) {
      console.log("showEditUserModal");
      setSelectedUserTableModal(userTableModal);
  }

  function onMenuItemTap(title:string) {
    if (title !== selectedMenu) {
      setSelectedMenu(title)
      setMenuOpen(!menuOpen)
    }
  }

  function onMenuIconTap() {
    setMenuOpen(!menuOpen)
  }

  function handleUpdateClick(): boolean {
      console.log("handleUpdateClick");
      return true
  }

  function handleCancelUpdateClick() {
      console.log("handleCancelUpdateClick");
      editUserModalRef.current?.close();
      setSelectedUserTableModal(null);
  }

  return (
    <div className="user-root">

      { selectedUserTableModel && (
          <EditUserModal
              ref={editUserModalRef}
              userTableModel={selectedUserTableModel}
              onUpdateTap={handleUpdateClick}
              onCancelTap={handleCancelUpdateClick}
          />
        )
      }

      <div className="users-layout">

        {/* Side Menu */}
        <aside className={`users-sidemenu  ${ menuOpen ? "w-64" : "w-0" }`}>
          <SideMenu onMenuItemTap={onMenuItemTap} selectedItem={selectedMenu}/>
        </aside>

        {/* Main Content */}
        <main className="users-main">
          <div className="users-content">

              <h2 className="users-title">Manage Users</h2>

              <UserList onEditTap={(userData) => showEditUserModal(userData)}/>
          </div>
        </main>
      </div>
    </div>
    
  );
}
