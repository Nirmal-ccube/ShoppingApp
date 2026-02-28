type HeaderProp = {
    onMenuTap: () => void
}

export default function Header({ onMenuTap }: HeaderProp) {
    return (
        <div className="header-root">
            {/* Left: Menu button */}
            <div className="header-menu">
                <img
                    src='shopping_app_icon.svg'
                    className="header-menu-icon"
                    onClick={onMenuTap}
                />
            </div>

            {/* Right: Navigation links */}
            <nav className="header-nav flex gap-4">
                <a href="/support" className="header-nav-link">Support</a>
                <a href="/profile" className="header-nav-link">Profile</a>
                {/* <a href="#" className="header-nav-link">Settings</a> */}
            </nav>

        </div>
    )
}