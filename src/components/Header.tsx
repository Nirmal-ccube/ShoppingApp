type HeaderProp = {
    onMenuTap: () => void
}

export default function Header({onMenuTap}: HeaderProp) {
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
            <nav className="header-nav">
                <a href="#" className="header-nav-link">Home</a>
                <a href="#" className="header-nav-link">Profile</a>
                <a href="#" className="header-nav-link">Settings</a>
            </nav>

        </div>
    )
}