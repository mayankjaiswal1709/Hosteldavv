import React, { useState } from 'react'
import { Link } from 'react-router-dom'




export default function Home() {




    return (

        <div>
            <h1 style={{ color: "white", textDecoration: 'none' }}>DAVV HOSTELERS</h1>

            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="images/jcbh.jpg" alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="images/rnth.jpg" alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="..." alt="Third slide" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

            <div class="secContainer">

                <div class="jcbh">
                    <Link id="" to="/Home" >
                        <img src="images/jcbh.jpg" alt="JCBH Boys Hostel" />
                        <h2 className="h2heading">JCBH Boys Hostel </h2>
                    </Link>
                </div>

                <div class="rnth">
                    <Link id="" to="/Home" >
                        <img src="images/rnth.jpg" alt=" RNTH BOYS Hostel" />
                        <h2 className="h2heading"> RNTH BOYS Hostel </h2>
                    </Link>
                </div>

                <div class="jnbh">
                    <Link id="" to="/Home" >
                        <img src="images/jnbh.jpg" alt="JNBH BOYS Hostel" />
                        <h2 className="h2heading"> JNBH Hostel</h2>
                    </Link>
                </div>

                <div class="girls">
                    <Link id="" to="/Home">
                        <img src="images/girls.jpg" alt="Girls Hostel" />
                        <h2 className="h2heading"> Girls Hostel </h2>

                    </Link>
                </div>

            </div>

        </div >



    )

}
