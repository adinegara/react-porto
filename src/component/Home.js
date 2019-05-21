
import React from 'react'
import {Link} from 'react-router-dom';
import './css/main.css'

class Home extends React.Component{
    render(){
        return(
            <div>
                <section class="banner onload-image-fade-in onload-content-fade-right style3 fullscreen orient-right content-align-left image-position-center">
            <div class="content">
              <h1>Rosyidin Adinegara</h1>
              <p class="major">merupakan nama panjang saya. Assalamu 'alaikum. Saya muslim, dan sedang mendalaminya. Sekarang merupakan mahasiswa jurusan komputer di UGM. Seorang <Link to="/portofolio">graphic designer</Link> juga. <Link to="/profile">Menyukai</Link> keindahan dan estetika :)</p>
              <ul class="actions stacked">
                <li><a href="https://api.whatsapp.com/send?phone=6285743253545&amp;text=Assalamu 'alaikum..." class="button big wide smooth-scroll-middle">Hubungi saya</a></li>
              </ul>
            </div>
            <div class="image">
              <img src="images/p.webp" alt="" />
            </div>
          </section>
            </div>
        )
    }
}

export default Home;