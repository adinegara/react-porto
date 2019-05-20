import React, {Component} from 'react';
import './css/main.css'
import { ProgressBar } from 'react-bootstrap'


class Profile extends Component {
    render() {
        return (
            <div>
<section class="wrapper style1 align-center">
            <div class="inner">
              <h2>Profil saya</h2>
              <p>Hai! Sedikit perkenalan dan deskripsi mengenai latar belakang saya dan ketertarikan saya dalam beberapa hal. Banyak hal terjadi dalam perjalanan waktu saya dan itu semua membentuk pribadi saya sekarang. Dan sampai sekarang, masih terus belajar.</p>
              <div class="items style1 big onscroll-fade-in">
                <section>
                  <span class="icon style2 major fa-address-card"></span>
                  <h3>Bio</h3>
                  <p>Tempat, tanggal lahir  : Semarang, 29 mei 1998<br/>
                  Alamat           : Jl. Magelang km 8,5 Sendangadi, Mlati, Sleman</p>
                  
                </section>
                <section>
                  <span class="icon style2 major fa-book"></span>
                  <h3>Pendidikan</h3>
                  <p>2017  : D3 Ilmu Komputer dan Sistem Informasi<br/>
                  2016  : SMK N 1 Magelang - Teknik Komputer dan Jaringan</p>
                </section>
                <section>
                  <span class="icon style2 major fa-bar-chart"></span>
                  <h3>Keahlian</h3>
                
                  <p>HTML
                    <ProgressBar striped variant="success" now={80} /></p>
                  <p>CSS
                    <ProgressBar striped variant="success" now={70} /></p>
                  <p>Illustrator
                    <ProgressBar striped variant="success" now={85} /></p>
                  <p>Photoshop
                    <ProgressBar striped variant="success" now={50} /></p>
                  <p>Premiere
                    <ProgressBar striped variant="success" now={50} /></p>
                </section>
                <section>
                  <span class="icon style2 major fa-heart"></span>
                  <h3>Interest</h3>
                  <p >
                    <a class="icon style1 fa-check"></a> Graphic Design<br/>
                    <a class="icon style1 fa-check"></a> Photography<br/>
                    <a class="icon style1 fa-check"></a> Videography<br/>
                    <a class="icon style1 fa-check"></a> UI/UX Design<br/>
                    <a class="icon style1 fa-check"></a> Web Design</p>
                </section>
                
              </div>
            </div>
          </section>
            </div>
        );
    }
}

export default Profile;
