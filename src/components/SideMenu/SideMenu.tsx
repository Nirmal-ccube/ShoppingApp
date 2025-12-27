import SideMenuItem from "./SideMenuItem";
import { SideMenuItemModel } from "./SideMenuItemModel";

type SideMenuProp = {
    selectedItem: string,
    onMenuItemTap: (title:string) => void
}

const menuItems: SideMenuItemModel[] = [
    new SideMenuItemModel('Dashboard', '/'),
    new SideMenuItemModel('Users', '/users'),
    new SideMenuItemModel('Billing', '/billing')
]

export default function SideMenu({selectedItem, onMenuItemTap } : SideMenuProp) {
    return (
        //Side Menu Root
        <div className="sidemenu-root">
            {/* Top Menu Section */}
            <div className="sidemenu-header">
                <img src='shopping_app_icon.svg' className="sidemenu-logo"/>
                <h2 className="sidemenu-title">
                    Shopping App
                </h2>
            </div>   

            {/* Side Menu Items */}   
            <div className="sidemenu-items">
                {   menuItems.map((item: SideMenuItemModel, index: number) => {
                        const selected = item.title === selectedItem
                        return (
                            <SideMenuItem 
                                key={item.title} sideMenuItemModel={item} 
                                onTap={ () => onMenuItemTap(item.title)} 
                                selected={selected}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}