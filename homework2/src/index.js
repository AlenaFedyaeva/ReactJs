// console.log('It works!');
// import { script } from './script';

// script();
// console.log('А это index.js');

import React from 'react';
import ReactDOM from 'react-dom';

const element = < h1 className = "element" > Кажется,
    мы подключили React < /h1>;

ReactDOM.render(
    element,
    document.getElementById('root'),
);