import React from 'react';
import s from './Paginator.module.css';

let Paginator = ({ pages, onPageChanged, currentPage }) => {

    return (
        <div>
            {pages.map(p => {
                return <span className=
                    {currentPage === p ? s.selectedPage : s.nonSelectedPage}
                    onClick={() => { onPageChanged(p) }} >
                    {p}
                </span>
            }
            )}
        </div>
    )
}

export default Paginator; 