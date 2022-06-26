import React from "react";



const Pagination = ({cardPerPage, totalCards, paginate }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCards/ cardPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <nav className="pagination">
            {pageNumbers.map((number) => {
                return (
                    <li key={number} className="page-item">
                        <a href="#" onClick = {() => { paginate(number) }} className="page-link">
                            {number}
                        </a>
                    </li>
                )
            })}
        </nav>
    )
}

export default Pagination