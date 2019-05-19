import React, {Component} from 'react';

class Profile extends Component {
    render() {
        return (
            <div>
<section class="wrapper style1 align-center">
            <div class="inner">
              <h2>My Profile</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum.</p>
              <div class="items style1 big onscroll-fade-in">
                <section>
                  <span class="icon style2 major fa-address-card"></span>
                  <h3>Bio</h3>
                  <p>Place and Date of Birth  : Semarang, 29 May 1998<br/>
                  Address           : Jl. Magelang km 8,5 Sendangadi, Mlati, Sleman</p>
                  
                </section>
                <section>
                  <span class="icon style2 major fa-book"></span>
                  <h3>Education</h3>
                  <p>2018  : D3 Ilmu Komputer dan Sistem Informasi<br/>
                  2017  : SMK N 1 Magelang - Teknik Komputer dan Jaringan</p>
                </section>
                <section>
                  <span class="icon style2 major fa-bar-chart"></span>
                  <h3>Skills</h3>
                  <p>Illustrator
                    <div class="progress" style={{height: 10}}>
                      <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: 400}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div></p>
                  <p>Photoshop
                    <div class="progress" style={{height: 10}}>
                      <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: 300}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div></p>
                  <p>Premiere
                    <div class="progress" style={{height: 10}}>
                      <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: 340}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                  </div></p>
                  <p>After Effects
                    <div class="progress" style={{height: 10}}>
                      <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: 200}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                  </div></p>
                </section>
                <section>
                  <span class="icon style2 major fa-heart"></span>
                  <h3>Interest</h3>
                  <p class="align-left">
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
