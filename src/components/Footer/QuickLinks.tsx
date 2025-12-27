import { NavLink } from "react-router-dom"
import { SideMenuItemModel } from "../SideMenu/SideMenuItemModel"


const quickLinks: SideMenuItemModel[] = [
    new SideMenuItemModel('Users', '/users'),
    new SideMenuItemModel('Billing', '/billing')
]


export default function QuickLinks() {
    return (
        <div className="quicklinks-root">
            <h2 className="quicklinks-title">Quick Links</h2>
            <div>
                {
                quickLinks.map( (linkItem, index) =>
                    (
                        <NavLink key={index} to={linkItem.to} end={linkItem.to === "/"}> 
                            <h2 className="quicklinks-text">{linkItem.title}</h2>
                        </NavLink>
                    )
                )
            }
            </div>
        </div>
    )
}