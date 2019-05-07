import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Main from "./component/Main";
import SimpleAppBar from './component/SimpleAppBar';
import ButtonAppBar from './component/ButtonAppBar';
import SimpleBadge from './component/SimpleBadge';

class App extends Component {
    render() {
        return (
            <div>
                <ButtonAppBar/>
                <p><Main/></p>
                <SimpleBadge/>
            </div>
        );
    }
}

export default App;