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

// import React from 'react';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const element = < h1 className = "element" > Кажется,
    aaaa мы подключили React < /h1>;

ReactDOM.render(
    element,
    document.getElementById('root'),
);

function MyButton(props) {
    const [count, setCount] = useState(0);
    const [arr, setTheArray] = useState(["msg", ]);
    // Similar to componentDidMount and componentDidUpdate:
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     document.title = `You clicked 3 ${count} times`;
    //     // setTheArray([...arr, " new "]);
    //     console.log(arr);
    // });

    return ( <
        div >
        <
        p > You clicked { count }
        times < /p> <
        button onClick = {
            () => setTheArray([...arr, " new "])
        } >
        Click me <
        /button>  <
        p > { arr } < /p> < /
        div >
    );
}

function App() {
    return ( <
        div >
        <
        MyButton name = "Ок" / >

        <
        /div>
    );
}



ReactDOM.render( <
    App / > ,
    document.getElementById('root')
);