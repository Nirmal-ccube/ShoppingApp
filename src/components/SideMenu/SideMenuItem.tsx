
type SideMenuProp = {
    title: string, 
    selected: boolean,
    onTap: () => void
}

export default function SideMenuItem({title, selected, onTap}: SideMenuProp) {
    return (
        <div className={`flex w-full cursor-pointer rounded ${ selected ? "bg-blue-600 text-white" : "text-blue-800 hover:bg-blue-100 hover:text-blue-900"}`} 
            onClick={onTap}
            >
            <h2 className='w-full px-4 py-2'>{title}</h2>
        </div>
    )
}