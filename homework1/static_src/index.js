// 1) Try import from other js files
// import { script } from './script';
// console.log('It works!');
// script();
// console.log('А это index.js');

// 2) Try react
// import React from 'react';
// import ReactDOM from 'react-dom';

// const element = React.createElement(
//     'h1', { className: "element" },
//     'Кажется, мы подключили React',
// );

// ReactDOM.render(
//     element,
//     document.getElementById('root'),
// );

//3) Try JSX

import React from 'react';
import ReactDOM from 'react-dom';

const element = < h1 className = "element" > Кажется,
    aaaa мы подключили React < /h1>;

ReactDOM.render(
    element,
    document.getElementById('root'),
);