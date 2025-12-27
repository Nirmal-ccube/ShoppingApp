
type ItemListProps = {
    title: string;
    headers: React.ReactNode;
    children: React.ReactNode;
    pagination?: React.ReactNode;
}

export default function ItemList({ title, headers, children, pagination }: ItemListProps) {
    const thStyle = "px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
    
    return (
        <div className="itemlist-root">
            <div className="itemlist-card">
                <div className="itemlist-header">
                    <h2 className="itemlist-title">{title}</h2>
                </div>
                
                <div className="itemlist-table-wrapper">
                    <table className="itemlist-table">
                        <thead>
                            {headers}
                        </thead>
                        <tbody className="itemlist-tbody">
                            {children}
                        </tbody>
                    </table>
                </div>

                { pagination }
            </div>
        </div>
    );
}