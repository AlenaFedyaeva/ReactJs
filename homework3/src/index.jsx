// console.log('It works!');
// import { script } from './script';

// script();
// console.log('А это index.js');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'
// import LayoutMy from './components/Layout.jsx';

const element = < h1 className="element" > Кажется,
 мы подключили React < /h1>;

ReactDOM.render(
        <App />,
        document.getElementById('root'),
);