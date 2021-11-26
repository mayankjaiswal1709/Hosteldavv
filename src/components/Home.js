import React from 'react'
import { Link } from 'react-router-dom'
// import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import ListGroup from 'react-bootstrap/ListGroup'



export default function Home() {




    return (

        <div>


            <div>

                <h1 className="mainhead">DAVV HOSTELERS</h1>

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/jcbh.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>JCB Boys Hostel</h3>
                            <p>Jagdish Chandra Basu Hostel ,DAVV</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/rnth.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>RNT BOYS Hostel</h3>
                            <p>RNT (RabindraNath Tagore) Hostel,  DAVV</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/jnbh.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>JN Boys Hostel</h3>
                            <p>Jawaharlal Nehru Boys Hostel ,DAVV</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/girls.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Girls Hostel</h3>
                            <p>soon we upload about girls hostel</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>

                <div class="secContainer">

                    <div class="jcbh">
                        <Link id="" to="/" >
                            <img src="images/jcbh.jpg" alt="JCBH Boys Hostel" />
                            <h2 className="h2heading">JCB Boys Hostel </h2>
                        </Link>
                    </div>

                    <div class="rnth">
                        <Link id="" to="/Rnth" >
                            <img src="images/rnth.jpg" alt=" RNTH BOYS Hostel" />
                            <h2 className="h2heading"> RNT Boys Hostel </h2>
                        </Link>
                    </div>

                    <div class="jnbh">
                        <Link id="" to="/" >
                            <img src="images/jnbh.jpg" alt="JNBH BOYS Hostel" />
                            <h2 className="h2heading"> JN Boys Hostel</h2>
                        </Link>
                    </div>

                    <div class="girls">
                        <Link id="" to="/">
                            <img src="images/girls.jpg" alt="Girls Hostel" />
                            <h2 className="h2heading"> Girls Hostel </h2>

                        </Link>
                    </div>

                </div>

                <div>
                    {/* ----------------------------------------------------------------- */}
                    <h2 className="h2hd"> Hostels Details</h2>




                    <ListGroup as="ul"  >



                        <ListGroup.Item as="li" variant="dark">

                            <a className="ulist" target="_blank" href="https://www.dauniv.ac.in/public/frontassets/hostels/Hostel-Details21.pdf">Chief Warden,Phone No, Email Id, Fees Structure</a>

                        </ListGroup.Item>

                        <ListGroup.Item as="li" variant="dark">

                            <a className="ulist" target="_blank" href="https://www.dauniv.ac.in/public/frontassets/hostels/Admission-Form1.pdf">Hostel Accomodation Form</a>

                        </ListGroup.Item>


                        <ListGroup.Item as="li" variant="dark">

                            <a className="ulist" target="_blank" href="https://www.dauniv.ac.in/public/frontassets/hostels/ApplicationForMess21.pdf"> Applications Invited For Mess</a>

                        </ListGroup.Item>

                        <ListGroup.Item as="li" variant="dark">

                            <a className="ulist" target="_blank" href="https://www.dauniv.ac.in/public/frontassets/hostels/fees%2019-20.pdf">Fee Structure Of D.A.V.V. Hostels for the Session 2019-20</a>

                        </ListGroup.Item>

                        <ListGroup.Item as="li" variant="dark">

                            <a className="ulist" target="_blank" href="https://www.dauniv.ac.in/public/frontassets/hostels/Hostel%20Entry.pdf">Notice For New Students</a>

                        </ListGroup.Item>

                        <ListGroup.Item as="li" variant="dark">

                            <a className="ulist" target="_blank" href="https://www.dauniv.ac.in/public/frontassets/hostels/SummerApplication.pdf"> Application Proforma to Stay in Hostel During Summer Vacation</a>

                        </ListGroup.Item>



                    </ListGroup>

                </div>

                <div className="blink">
                    Soon you will get more facility on this site...
                </div>

            </div>



            <footer class="text-gray-400 bg-gray-900 body-font">
                <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <Link class="flex title-font font-medium items-center md:justify-start justify-center text-white" to="/">

                        <img src="images/logo.jpg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">

                        </img>


                        <span class="ml-3 text-xl">Davv Hostelers</span>
                    </Link>

                    <p class="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">Chief Warden Office-0731-2760543 —
                        <a href="mailto:cwo.davv@gmail.com" class="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">cwo.davv@gmail.com</a>
                    </p>
                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a class="text-gray-400" heref="/">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-400" heref="https://instagram.com/davvhostlers?utm_medium=copy_link">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-400" heref="https://instagram.com/davvhostlers?utm_medium=copy_link">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-400" heref="/">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </footer>


        </div >



    )

}
