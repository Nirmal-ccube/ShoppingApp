import UserList from "./UserList";
import SideMenu from "../SideMenu/SideMenu";
import Header from "../Header";
import { useState, useRef, useEffect } from "react";
import EditUserModal, { EditUserModalHandle } from "../Modal/EditUser/EditUserModal";
import { UserTableModel } from "../../data/UserTableModel";
import { UserRepository } from "../../data/UserRepository";

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

  function onMenuItemTap(title: string) {
    setSelectedMenu(title)
    setMenuOpen(!menuOpen)
  }

  function onMenuIconTap() {
    setMenuOpen(!menuOpen)
  }

  function handleUpdateClick(name: string, id: string): boolean {
    console.log("handleUpdateClick name : " + name + " id : " + id);
    if (name.trim() && id.trim()) {
      return UserRepository.updateUserName(name, id);
    } else {
      return false
    }
  }

  function handleCancelUpdateClick() {
    console.log("handleCancelUpdateClick");
    editUserModalRef.current?.close();
    setSelectedUserTableModal(null);
  }

  return (
    <div className="user-root">

      {selectedUserTableModel && (
        <EditUserModal
          ref={editUserModalRef}
          userTableModel={selectedUserTableModel}
          onUpdateTap={(name, id) => handleUpdateClick(name, id)}
          onCancelTap={handleCancelUpdateClick}
        />
      )
      }

      <div className="users-layout">

        {/* Side Menu */}
        <aside className={`users-sidemenu  ${menuOpen ? "w-52" : "w-0"}`}>
          <SideMenu onMenuItemTap={onMenuItemTap} selectedItem={selectedMenu} />
        </aside>

        {/* Main Content */}
        <main className="users-main">
          <section id="header">
            <Header onMenuTap={onMenuIconTap} title="Manage Users" />
          </section>
          <div className="users-content">

            <UserList onEditTap={(userData) => showEditUserModal(userData)} />
          </div>
        </main>
      </div>
    </div>

  );
}
