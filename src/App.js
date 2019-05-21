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
             <div class="nav navbar navbar-default navbar-fixed-top">
              <div class="container">
              <a class="navbar-brand top"><Link to="/home">
                <img src="images/adinegara-logo.png" alt=""/></Link>
              </a>
              <label class="strip" for="toggle">&#9776;</label>
              <input type="checkbox" id="toggle"/>
              <div class="menu nav navbar-nav navbar-right">
                  <Link to="/home" >Beranda</Link>
                  <Link to="/profile">Profil</Link>
                  <Link to="/portofolio">Portofolio</Link>
                 <Link to="/kontak">Kontak</Link>
              </div>
              </div>
          </div>  
        <p><Main/></p>
            </div>
        );
    }
}

export default App;
