import React, { useState } from 'react';
import s from './Paginator.module.css';
import cn from 'classnames'

let Paginator = ({ onPageChanged, pageSize, currentPage, totalItemsCount, portionSize = 20 }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rigthPortionNumber = (portionNumber * portionSize)

    return (
        <div className={s.paginator}>
            {portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>prev</button>}

            {pages
                .filter(p => p >= leftPortionNumber && p <= rigthPortionNumber)
                .map((p) => {
                    return <span className={cn({
                        [s.selectedPage]: currentPage === p
                    }, s.pageNumber)}
                        key={p}
                        onClick={(e) => {
                            onPageChanged(p);
                        }} >
                        {p}</span>
                })}
            {portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}
                >next</button>
            }
        </div >
    )
}

export default Paginator; 