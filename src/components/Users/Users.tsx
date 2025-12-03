import UserList from "./UserList";
import SideMenu from "../SideMenu/SideMenu";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState<string>('Users');

  function onMenuItemTap(title:string) {
    setSelectedMenu(title)
    setMenuOpen(!menuOpen)
  }

  function onMenuIconTap() {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="flex h-screen w-screen">
      {/* Side Menu */}
      <aside className={`h-full transition-[width] duration-300 overflow-hidden  ${ menuOpen ? "w-64" : "w-0" }`}>
        <SideMenu onMenuItemTap={onMenuItemTap} selectedItem={selectedMenu}/>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 bg-white h-full transition-all duration-300  max-w-7xl mx-auto x-4`}>
        <div className="flex flex-col items-center space-y-1 mt-4 ">

            <h2 className="text-3xl font-bold text-gray-900">Manage Users</h2>

            <UserList />
        </div>
      </main>
    </div>
  );
}
