import React, { useState } from 'react';
import styles from './Paginator.module.css';
import cn from 'classnames';

type PropsType = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    totalItemsCount: number
    pageSize: number
    portionSize?: number
}

export const Paginator: React.FC<PropsType> = ({ currentPage, onPageChanged, totalItemsCount, pageSize, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    //console.log(`totalItemsCount = ${totalItemsCount}, pageSize = ${pageSize}, pagesCount = ${pagesCount}`)
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState<number>(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return (<div className={styles.paginator} >
        {
            portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }}> PREV </button>
        }
        {
            pages.filter(p => p >= leftPortionPageNumber && p
                <= rightPortionPageNumber)
                .map(p => <span key={p}
                    className={cn({
                        [styles.selectedItems]: currentPage === p,
                        [styles.pageNumber]: currentPage !== p
                    })}
                    onClick={(e) => {
                        onPageChanged(p)
                    }}>{p}</span>)
        }
        {
            portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>
        }
    </div>)
}