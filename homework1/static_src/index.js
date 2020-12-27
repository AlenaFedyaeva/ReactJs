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

function MyButton(props) {
    return <button i > Button { props.name } < /button>;
}

function App() {
    return ( <
        div >
        <
        MyButton name = "Ок"
        onclick = { onButtonClick }
        / >

        <
        /div>
    );
}

function onButtonClick() {
    function handleClick(e) {
        e.preventDefault();
        console.log('По button кликнули.');
    }

    return ( <
        a href = "#"
        onClick = { handleClick } >
        Нажми на меня <
        /a>
    );
}

ReactDOM.render( <
    App / > ,
    document.getElementById('root')
);

// function AddMsg(props) {
//     return ( < div >
//         <
//         h1 > New message < /h1  >  <
//         h2 > Сейчас { new Date().toLocaleTimeString() }. < /h2>   < /
//         div >
//     );
// }

// function tick() {
//     ReactDOM.render( <
//         AddMsg / > ,
//         document.getElementById('root')
//     );
// }

// setInterval(tick, 1000);