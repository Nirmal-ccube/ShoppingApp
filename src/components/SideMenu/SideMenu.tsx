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
        <div className="flex flex-col bg-white h-full rounded rounded-l-none p-4 space-y-4 shadow-md">
            {/* Top Menu Section */}
            <div className="flex space-x-4 items-center mb-4">
                <img src='shopping_app_icon.svg' className="w-7 h-7"/>
                <h2 className="text-blue-800 font-bold text-lg whitespace-nowrap truncate">
                    Shopping App
                </h2>
            </div>   

            {/* Side Menu Items */}   
            <div className="flex flex-col w-full grow space-y-2 overflow-y-auto">
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