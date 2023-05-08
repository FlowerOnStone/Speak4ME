import React from 'react';

const toJSX = (Tag) => {
    return (
        typeof Tag === 'undefined' ? undefined :
        (typeof Tag === 'object' ? Tag : <Tag/>)
    );
};

export default toJSX;

