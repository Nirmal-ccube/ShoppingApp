
type ItemListProps = {
    title: string;
    headers: React.ReactNode;
    children: React.ReactNode;
    pagination?: React.ReactNode;
}

export default function ItemList({ title, headers, children, pagination }: ItemListProps) {
    const thStyle = "px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
    
    return (
        <div className="p-6 w-full mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                </div>
                
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            {headers}
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {children}
                        </tbody>
                    </table>
                </div>

                { pagination }
            </div>
        </div>
    );
}