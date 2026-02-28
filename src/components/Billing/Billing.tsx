import TrendingProducts from "./TrendingProducts";
import InvoiceList from "./InvoiceList";
import SideMenu from "../SideMenu/SideMenu";
import Header from "../Header";
import { useState } from "react";

export default function Billing() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState<string>('Billing');

  function onMenuItemTap(title: string) {
    setSelectedMenu(title)
    setMenuOpen(!menuOpen)
  }

  function onMenuIconTap() {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="billing-layout">
      {/* Side Menu */}
      <aside className={`billing-sidemenu  ${menuOpen ? "w-52" : "w-0"}`}>
        <SideMenu onMenuItemTap={onMenuItemTap} selectedItem={selectedMenu} />
      </aside>

      {/* Main Content */}
      <main className="billing-main">
        <section id="header">
          <Header onMenuTap={onMenuIconTap} title="Billing" />
        </section>
        <div className="billing-content">

          <TrendingProducts />

          <InvoiceList />
        </div>
      </main>
    </div>
  );
}