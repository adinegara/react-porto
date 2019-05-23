
import React, {Component} from 'react';
import './css/main.css'


class Kontak extends Component {
    render() {
        return (
            <div>
                <section class="wrapper style1 align-center">
						<div class="inner medium">
							<h2>Hubungi saya</h2>
							<form method="post" action="#">
								<div class="fields">
									<div class="field half">
										<label for="name">Nama</label>
										<input type="text" name="name" id="name" value="" />
									</div>
									<div class="field half">
										<label for="email">Email</label>
										<input type="email" name="email" id="email" value="" />
									</div>
									<div class="field">
										<label for="message">Tulis pesan Anda disini</label>
										<textarea name="message" id="message" rows="6"></textarea>
									</div>
								</div>
								<ul class="actions special">
									<li><input type="submit" name="submit" id="submit" value="Kirim" /></li>
								</ul>
							</form>

						</div>
					</section>
						<footer class=" style1 align-center">
						<div class="inner">
							<p>Alternatif kontak dan akun media sosial saya</p>
							  <ul class="icons ">
								<li  id="main"class="whatsapp"><a rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=6285743253545&amp;text=Assalamu 'alaikum..." class="icon style2 whatsapp fa-whatsapp"><span class="label">Whatsapp</span></a> 
								<div id="tooltip">
					            <h6>Whatsapp: 085743253545</h6>
					        	</div>
								</li>
								<li id="main"><a target="_blank" rel="noopener noreferrer" href="https://instagram.com/netizenz" class="icon style2 ig fa-instagram"><span class="label">Instagram</span></a>
								<div id="tooltip">
					            <h6>Instagram: @netizenz</h6>
					        	</div></li>
								<li id="main"><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/_adinegara_" class="icon style2 twitter fa-twitter"><span class="label">Twitter</span></a>
								<div id="tooltip">
					            <h6>Twitter: @_adinegara_</h6>
					        	</div></li>
								<li id="main"><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/rosyid.theripper" class="icon style2 fb fa-facebook"><span class="label">Facebook</span></a>
								<div id="tooltip">
					            <h6>Facebook: Rosyid Netizenz</h6>
					        	</div></li>
								<li id="main"><a target="_blank" rel="noopener noreferrer" href="mailto:rosyid.theripper@gmail.com" class="icon style2 email fa-envelope"><span class="label">Email</span></a>
								<div id="tooltip">
					            <h6>rosyid. theripper @gmail.com</h6>
					        	</div></li>
							</ul>
						</div>
					</footer>					
            </div>
            
        )
    }
}

export default Kontak;
