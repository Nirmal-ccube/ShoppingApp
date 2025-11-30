import { NavLink } from "react-router-dom"
import { SideMenuItemModel } from "../SideMenu/SideMenuItemModel"


const quickLinks: SideMenuItemModel[] = [
    new SideMenuItemModel('Users', '/users'),
    new SideMenuItemModel('Billing', '/billing')
]


export default function QuickLinks() {
    return (
        <div className="flex flex-col space-y-4">
            <h2 className="font-bold uppercase">Quick Links</h2>
            <div>
                {
                quickLinks.map( (linkItem, index) =>
                    (
                        <NavLink to={linkItem.to} end={linkItem.to === "/"}> 
                            <h2 className="underline">{linkItem.title}</h2>
                        </NavLink>
                    )
                )
            }
            </div>
        </div>
    )
}