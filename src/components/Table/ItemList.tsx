
type ItemListProps = {
    title: string;
    headers: React.ReactNode;
    children: React.ReactNode;
    pagination?: React.ReactNode;
}

export default function ItemList({ title, headers, children, pagination }: ItemListProps) {
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

                {pagination}
            </div>
        </div>
    );
}