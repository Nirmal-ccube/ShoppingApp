import { useState } from "react";
import Dashboard from "./Dashboard";
import SideMenu from "./SideMenu/SideMenu";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState<string>('Dashboard');

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
      <main className={`flex-1 bg-white h-full transition-all duration-300 w-100 mx-auto x-4`}>
        <Dashboard onMenuTap={() => onMenuIconTap()}/>
      </main>
    </div>
  );
}
