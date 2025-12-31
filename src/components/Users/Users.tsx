import UserList from "./UserList";
import SideMenu from "../SideMenu/SideMenu";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState<string>('Users');

  function onMenuItemTap(title:string) {
    if (title !== selectedMenu) {
      setSelectedMenu(title)
      setMenuOpen(!menuOpen)
    }
  }

  function onMenuIconTap() {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="users-layout">
      {/* Side Menu */}
      <aside className={`users-sidemenu  ${ menuOpen ? "w-64" : "w-0" }`}>
        <SideMenu onMenuItemTap={onMenuItemTap} selectedItem={selectedMenu}/>
      </aside>

      {/* Main Content */}
      <main className="users-main">
        <div className="users-content">

            <h2 className="users-title">Manage Users</h2>

            <UserList />
        </div>
      </main>
    </div>
  );
}
