import React, {Component} from 'react';
import axios from 'axios';
// import Deskripsi from './Deskripsi';


class Portofolio extends Component {
  state = {
    persons: []
  }
  componentDidMount() {
    axios.get(`https://my-json-server.typicode.com/adinegara/porto-api/data`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

    render() {
        return (
            <div>
	            <section class="wrapper style1 align-center">
					<div class="inner">
					<h2>Portofolio</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum.</p>
					</div>

						<div class="gallery style1 big lightbox onscroll-fade-in">
						{ this.state.persons.map(person =>

							<article>
								<a class="image">
									<img src={person.cover} alt="" />
								</a>

								<div class="caption">
	        							<h3>{person.title}</h3>
	        							<p>{person.desc}</p>
									<ul class="actions fixed">
										<li><a  href={person.link}><span class="button small">Details</span></a></li>
									</ul>
								</div>
							</article>)}
							
						</div>

				</section>


            </div>
        );
    }
}

export default Portofolio;
