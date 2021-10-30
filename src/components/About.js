import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function About() {

    const [myStyle] = useState(
        {
            color: 'white',
            backgroundColor: 'black'
        }
    )





    return (
        <div>
            <h1 className="mainhead">DAVV HOSTELERS</h1>


            <div className="container" style={myStyle}>
                <h2 className="my3">About Us</h2>
                <div className="accordion" id="accordionExample" style={myStyle}>
                    <div className="accordion-item" >
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <i> Hey!!!!!!!  &nbsp; Tap to read more about me</i>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <dl>
                                    <dt>
                                        <strong>Hey,</strong>
                                    </dt>
                                    <dd>
                                        <i>Davv Hostelers Is Only Instagram Page</i>
                                        <br />
                                        <i>This website can only help you so that it is not an official website </i> <br /> <br />
                                        ये वेबसाइट सिर्फ और सिर्फ आपकी मदद हो सके इसलिए है ये कोई ऑफिसियल वेबसाइट नहीं है |
                                        <br /> <br />
                                        <i>And hope this site is helpfull for you , in this  site you can esily know about all hostel details</i> <br />

                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div>
                        {/* ----------------------------------------------------------------- */}
                        <h2>Hostels Details</h2>




                        <ListGroup as="ul"  >



                            <ListGroup.Item as="li" variant="dark">

                                <a className="ulist" href="https://www.dauniv.ac.in/public/frontassets/hostels/Hostel-Details21.pdf">Chief Warden,Phone No, Email Id, Fees Structure</a>

                            </ListGroup.Item>

                            <ListGroup.Item as="li" variant="dark">

                                <a className="ulist" href="{'https://www.dauniv.ac.in/public/frontassets/hostels/Admission-Form1.pdf'}">Hostel Accomodation Form</a>

                            </ListGroup.Item>


                            <ListGroup.Item as="li" variant="dark">

                                <a className="ulist" href="{https://www.dauniv.ac.in/public/frontassets/hostels/ApplicationForMess21.pdf}"> Applications Invited For Mess</a>

                            </ListGroup.Item>

                            <ListGroup.Item as="li" variant="dark">

                                <a className="ulist" href="{https://www.dauniv.ac.in/public/frontassets/hostels/fees%2019-20.pdf}">Fee Structure Of D.A.V.V. Hostels for the Session 2019-20</a>

                            </ListGroup.Item>

                            <ListGroup.Item as="li" variant="dark">

                                <a className="ulist" href="{https://www.dauniv.ac.in/public/frontassets/hostels/Hostel%20Entry.pdf}">Notice For New Students</a>

                            </ListGroup.Item>

                            <ListGroup.Item as="li" variant="dark">

                                <a className="ulist" href="{https://www.dauniv.ac.in/public/frontassets/hostels/SummerApplication.pdf}"> Application Proforma to Stay in Hostel During Summer Vacation</a>

                            </ListGroup.Item>



                        </ListGroup>

                    </div>
                    {/* ----------------------------------------------------------- */}

                    <div>
                        <h2 style={{ color: "red" }} style={{ color: "red" }}>
                            Important Note:-
                        </h2>
                        <p>
                            <i style={{ fontSize: "110%" }}>    If you have any doubt then you can  recheak by visit the official website</i>
                            <br />

                            <button type="button" class="btn btn-success" href="https://www.dauniv.ac.in/hostels"> <a style={{ color: "white", textDecoration: 'none' }} href="https://www.dauniv.ac.in/hostels">Tap to visit</a> </button>
                        </p>
                    </div> <br />

                    <div className="blink">
                        Soon more details will be uploaded....
                    </div>
                    <footer class="text-gray-400 bg-gray-900 body-font">
                        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                            <Link class="flex title-font font-medium items-center md:justify-start justify-center text-white" to="/">

                                <img src="images/logo.jpg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">

                                </img>


                                <span class="ml-3 text-xl">Davv Hostelers</span>
                            </Link>
                            <p class="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">Chief Warden Office-0731-2760543 —
                                <a heref="mailto:cwo.davv@gmail.com" class="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">cwo.davv@gmail.com</a>
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
                </div>




            </div>

        </div >
    )
}
