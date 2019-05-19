import React, {Component} from 'react';


class Kontak extends Component {
    render() {
        return (
            <div>
                
                <section class="wrapper style1 align-center">
						<div class="inner medium">
							<h2>Get in touch</h2>
							<form method="post" action="#">
								<div class="fields">
									<div class="field half">
										<label for="name">Name</label>
										<input type="text" name="name" id="name" value="" />
									</div>
									<div class="field half">
										<label for="email">Email</label>
										<input type="email" name="email" id="email" value="" />
									</div>
									<div class="field">
										<label for="message">Message</label>
										<textarea name="message" id="message" rows="6"></textarea>
									</div>
								</div>
								<ul class="actions special">
									<li><input type="submit" name="submit" id="submit" value="Send Message" /></li>
								</ul>
							</form>

						</div>
					</section>

					<footer class=" style1 align-center">
						<div class="inner">
							<ul class="icons">
								<li><a href="https://api.whatsapp.com/send?phone=6285743253545&amp;text=Assalamu 'alaikum..." class="icon style2 fab fa-whatsapp"><span class="label">Whatsapp</span></a></li>
								<li><a href="https://instagram.com/netizenz" class="icon style2  fa-instagram"><span class="label">Instagram</span></a></li>
								<li><a href="#" class="icon style2  fa-twitter"><span class="label">Twitter</span></a></li>
								<li><a href="#" class="icon style2  fa-facebook"><span class="label">Facebook</span></a></li>
								<li><a href="mailto:rosyid.theripper@gmail.com" class="icon style2  fa-envelope"><span class="label">Email</span></a></li>
							</ul>
							<p>&copy;Adinegara. See my source code on my <a href="https://github.com/adinegara">Github</a>.</p>
						</div>
					</footer>
            </div>
            
        );
    }
}

export default Kontak;
