type PaginationProps = {
    totalPages: number,
    currentPage: number,
    goToPage: (page: number) => void,
}

export default function Pagination({totalPages, currentPage, goToPage}: PaginationProps) {

    function prevPage() {
        goToPage(currentPage - 1)
    }

    function nextPage() {
        goToPage(currentPage + 1)
    }

    return (
        <div>
            {totalPages > 1 && (
                    <div className="pagination-wrapper">
                        <div className="pagination-container">
                            <div className="pagination-info">
                                Page {currentPage} of {totalPages}
                            </div>
                            
                            <div className="pagination-nav">
                                <button
                                    onClick={() => prevPage()}
                                    disabled={currentPage === 1}
                                    className="pagination-btn-inactive"
                                >
                                    Previous
                                </button>
                                
                                {/* Page numbers */}
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => goToPage(page)}
                                        className={`${
                                            currentPage === page
                                                ? "pagination-btn-active"
                                                : "pagination-btn-inactive"
                                        }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                                
                                <button
                                    onClick={() => nextPage()}
                                    disabled={currentPage === totalPages}
                                    className="pagination-btn-inactive"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}