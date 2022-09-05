import React from "react";

const Pagination = ({numPages, currentPage, onPageChange}) => {

    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;

    return (
        <nav>
            <ul className="pagination justify-content-center">
                <li className={`page-item ${prevPage < 0 && 'disabled'}`}>
                    <button className="page-link" onClick={() => onPageChange(prevPage+1)} tabIndex="-1">Previous</button>
                </li>
                {[...Array(numPages).keys()].map(idx =>
                    <li key={idx} className={`page-item ${currentPage === idx && 'active'}`}>
                        <button className="page-link" onClick={() => onPageChange(idx+1)}>{idx+1}</button>
                    </li>
                )}
                <li className={`page-item ${nextPage > numPages-1 && 'disabled'}`}>
                    <button className="page-link" onClick={() => onPageChange(nextPage+1)}>Next</button>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;