import React from 'react';
import classes from './News.module.css';

type PropsType = {
}

const News: React.FC<PropsType> = () => {
    return (
        <div className={classes.news}>This is News</div>
    );
}

export default News;