import React from 'react'
import "./about.css";

export function About() {




    return (
        
        <div className="container my-3">
       <h1 id="foxer"> <marquee width="60%" direction="left" height="100px">MY PLAYERS</marquee></h1>


            
        <div class="container">
        <div class="row">
            <div class="col-lg-4 d-flex justify-content-center">
                <div class="card">
                    <div class="card-body text-center">
                        <div class="card-img pt-2 pb-3"> <img src="https://blog.confirmbets.com/wp-content/uploads/2019/07/Messi.jpg" alt=""/> </div>
                        <div class="name h5" id="messi">Leo Messi</div>
                        <div class="testimonial" id="leo"> Lionel Messi is an Argentinian footballer widely regarded as one of the greatest players of the modern generation.</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 d-flex justify-content-center">
                <div class="card">
                    <div class="card-body text-center">
                        <div class="card-img pt-2 pb-3"> <img src="https://d.newsweek.com/en/full/1542247/cristiano-ronaldo.jpg" alt=""/> </div>
                        <div class="name h5" id="messi">Cristiano Ronaldo</div>
                        <div class="testimonial" id="leo"> Cristiano Ronaldo dos Santos Aveiro was born on February 5, 1985, in Madeira, Portugal to Maria Dolores dos Santos Aveiro and José Diniz Aveiro.</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 d-flex justify-content-center">
                <div class="card">
                    <div class="card-body text-center">
                        <div class="card-img pt-2 pb-3"> <img src="https://i.pinimg.com/originals/36/0d/c6/360dc6ed9a784c2259ca669b05df855e.png" /> </div>
                        <div class="name h5" id="messi">Neymar JR</div>
                        <div class="testimonial" id="leo"> Neymar has a son, Davi Lucca, born on 13 August 2011, with former girlfriend Carolina Dantas. He has a very close sibling relationship with his sister Rafaella Beckran. </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

    )
}
