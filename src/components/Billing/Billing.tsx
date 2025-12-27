import TrendingProducts from "./TrendingProducts";
import InvoiceList from "./InvoiceList";
import SideMenu from "../SideMenu/SideMenu";
import { useState } from "react";

export default function Billing() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState<string>('Billing');

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
    <div className="billing-layout">
      {/* Side Menu */}
      <aside className={`billing-sidemenu  ${ menuOpen ? "w-64" : "w-0" }`}>
        <SideMenu onMenuItemTap={onMenuItemTap} selectedItem={selectedMenu}/>
      </aside>

      {/* Main Content */}
      <main className="billing-main">
        <div className="flex flex-col items-center space-y-1 mt-4 w-full">

            <h2 className="billing-title">Billing</h2>

            <TrendingProducts />

            <InvoiceList />
        </div>
      </main>
    </div>
  );
}