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
            <div className={`sidemenuitem-root ${ selected ? "sidemenuitem-selected" : "sidemenuitem-normal"}`} 
            onClick={onTap}
            >
                <h2 className='sidemenuitem-text'>{sideMenuItemModel.title}</h2>
            </div>
        </NavLink>
        
    )
}