type HeaderProp = {
    onMenuTap: () => void,
    title?: string
}

export default function Header({ onMenuTap, title }: HeaderProp) {
    return (
        <div className="header-root">
            {/* Left: Menu button */}
            <div className="header-menu">
                <span
                    className="material-icons-outlined header-menu-btn"
                    onClick={onMenuTap}
                >
                    menu
                </span>
            </div>

            {/* Center: Optional Title */}
            {title && (
                <div className="header-title">
                    {title}
                </div>
            )}

            {/* Right: Navigation links */}
            <nav className="header-nav">
                <a href="/support" className="header-nav-link">Support</a>
                <a href="/profile" className="header-nav-link">Profile</a>
                {/* <a href="#" className="header-nav-link">Settings</a> */}
            </nav>

        </div>
    )
}