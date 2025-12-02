
type ItemHeaderProp = {
    columnNames: string[]
}

export default function ItemHeader({columnNames}: ItemHeaderProp) {

    const thStyle = "px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"

    return (
        <tr className="bg-gray-50 border-b border-gray-200">
            {   columnNames.map( (column, index) => {
                    return <th key={index} className={thStyle}>{column}</th>
                })
            }
        </tr>
    )
}