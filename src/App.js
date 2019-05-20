import React, {Component} from 'react';
import './App.css';
import './bootstrap.min.css';
import {Link} from 'react-router-dom';
import Main from "./component/Main";


class App extends Component {
    state = {
        current: 'home',
      }
    
      handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
    }

    render() {
        return (
            <div className="App">
            <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <div class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-menu"> 
          <span class="bar1"></span>
          <span class="bar2"></span>
          <span class="bar3"></span>
        </div>
        <a class="navbar-brand top"><Link to="/home">
          <img src="images/adinegara-logo.png" alt=""/></Link>
        </a>

      </div>

      <div class="collapse navbar-collapse" id="main-menu">
         <ul class="nav navbar-nav navbar-right">
        <li><Link to="/home" style={{ textDecoration: 'none' }}>Beranda</Link></li>
        <li><Link to="/profile" style={{ textDecoration: 'none' }}>Profil</Link></li>
        <li><Link to="/portofolio" style={{ textDecoration: 'none' }}>Portofolio</Link></li>
        <li><Link to="/kontak" style={{ textDecoration: 'none' }}>Kontak</Link></li>
        </ul>
      </div>
    </div>
  </nav>
  
             
        <p><Main/></p>
            </div>
        );
    }
}

export default App;
