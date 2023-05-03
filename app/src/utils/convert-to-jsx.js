import React from 'react';

const toJSX = (Tag) => (typeof Tag === 'undefined' ? undefined :
                       (typeof Tag === 'object' ? Tag : <Tag/>));

export default toJSX;
