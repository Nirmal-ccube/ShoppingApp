import { useState } from "react";
import Dashboard from "./Dashboard";
import SideMenu from "./SideMenu/SideMenu";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState<string>('Dashboard');

  function onMenuItemTap(title: string) {
    setSelectedMenu(title)
    setMenuOpen(!menuOpen)
  }

  function onMenuIconTap() {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="home-root">
      {/* Side Menu */}
      <aside className={`home-sidemenu  ${menuOpen ? "md:w-52 sm:w-48 w-34" : "w-0"}`}>
        <SideMenu onMenuItemTap={onMenuItemTap} selectedItem={selectedMenu} />
      </aside>

      {/* Main Content */}
      <main className="home-main">
        <Dashboard onMenuTap={() => onMenuIconTap()} />
      </main>
    </div>
  );
}
