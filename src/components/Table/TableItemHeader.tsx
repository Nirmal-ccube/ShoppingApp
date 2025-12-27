
type TableItemHeaderProp = {
    columnNames: string[]
}

export default function TableItemHeader({columnNames}: TableItemHeaderProp) {

    const thStyle = "tableheader-cell"

    return (
        <tr className="tableheader-row">
            {   columnNames.map( (column, index) => {
                    return <th key={index} className={thStyle}>{column}</th>
                })
            }
        </tr>
    )
}