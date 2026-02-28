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
                    className="material-icons-outlined text-3xl text-black cursor-pointer hover:bg-gray-100 p-1 rounded-full transition-colors"
                    onClick={onMenuTap}
                >
                    menu
                </span>
            </div>

            {/* Center: Optional Title */}
            {title && (
                <div className="flex-1 text-center font-bold text-xl text-blue-900">
                    {title}
                </div>
            )}

            {/* Right: Navigation links */}
            <nav className="header-nav flex gap-4">
                <a href="/support" className="header-nav-link">Support</a>
                <a href="/profile" className="header-nav-link">Profile</a>
                {/* <a href="#" className="header-nav-link">Settings</a> */}
            </nav>

        </div>
    )
}