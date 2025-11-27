import { NavLink } from "react-router-dom"
import { SideMenuItemModel } from "./SideMenuItemModel"

type SideMenuProp = {
    sideMenuItemModel: SideMenuItemModel, 
    selected: boolean,
    onTap: () => void
}

export default function SideMenuItem({sideMenuItemModel, selected, onTap}: SideMenuProp) {
    return (
        <NavLink to={sideMenuItemModel.to} end={sideMenuItemModel.to === "/"}>
            <div className={`flex w-full cursor-pointer rounded ${ selected ? "bg-blue-600 text-white" : "text-blue-800 hover:bg-blue-100 hover:text-blue-900"}`} 
            onClick={onTap}
            >
            <h2 className='w-full px-4 py-2'>{sideMenuItemModel.title}</h2>
        </div>
        </NavLink>
        
    )
}