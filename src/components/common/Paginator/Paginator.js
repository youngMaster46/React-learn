import React from 'react';
import styles from './Paginator.module.css';

export const Paginator = ({currentPage, onPageChanged, totalUsersCount, pageSize}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return pages.map(p => <span className={currentPage == p ? styles.selectedItems : 'noclass'}
            onClick={(e) => {
                onPageChanged(p)
            }}>{p}</span>)
}