import React from 'react';
import Router from './Router.jsx';
import '../styles/Layout.css'

import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
export default class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // text: 'Some text from App!',
            // timeout: null,
            // messages: [],
        };
    }

    render() {
        return (
            <div className='cont'>
                <div className='leftcol'>
                    <nav>
                        <div><Link to='/' key='home'>Home page </Link> </div>
                        <div><Link to='/chat/1' key='kc1'> Chat 1 </Link></div>
                        <div><Link to='/chat/2' key='kc2'> Chat 2 </Link></div>
                        <div><Link to='/chat/3' key='kc3'> Chat 3 </Link></div>
                        <div><Link to='/chat/4' key='kc4'> Chat 4 </Link></div>
                        <div><Link to='/chat/5' key='kc5'> Chat 5 </Link></div>
                    </nav>

                </div>
                <div className='rightcol'>
                    <Router />
                </div>
            </div>
        );
    }
}
