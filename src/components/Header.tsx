type HeaderProp = {
    onMenuTap: () => void
}

export default function Header({onMenuTap}: HeaderProp) {
    return (
        <div className="flex items-center justify-between px-4 shadow-md  border-b-2">
            {/* Left: Menu button */}
            <div className="px-3 py-1">
                <img src='shopping_app_icon.svg' className="w-7 h-7 hover:scale-110 transform transition-transform duration-200" onClick={onMenuTap}/>
            </div>

            {/* Right: Navigation links */}
            <nav className="space-x-6 text-blue-600 font-semibold">
                <a href="#" className="hover:underline">Home</a>
                <a href="#" className="hover:underline">Profile</a>
                <a href="#" className="hover:underline">Settings</a>
            </nav>

        </div>
    )
}