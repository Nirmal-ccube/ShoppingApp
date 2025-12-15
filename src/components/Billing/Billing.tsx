import TrendingProducts from "./TrendingProducts";
import InvoiceList from "./InvoiceList";
import SideMenu from "../SideMenu/SideMenu";
import { useState } from "react";

export default function Billing() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState<string>('Billing');

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
      <main className={`flex-1 bg-white h-full transition-all duration-300  w-100 mx-auto px-4`}>
        <div className="flex flex-col items-center space-y-1 mt-4 w-full">

            <h2 className="text-3xl font-bold text-gray-900">Billing</h2>

            <TrendingProducts />

            <InvoiceList />
        </div>
      </main>
    </div>
  );
}