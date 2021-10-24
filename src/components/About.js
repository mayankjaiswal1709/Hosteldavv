import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function About() {

    const [myStyle, setMyStyle] = useState(
        {
            color: 'white',
            backgroundColor: 'black'
        }
    )





    return (
        <div>



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
                                        <br />
                                        और आशा है कि यह साइट आपके लिए उपयोगी है, इस साइट में आप आसानी से सभी छात्रावास विवरणों के बारे में जान सकते हैं|
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div>
                        {/* ----------------------------------------------------------------- */}
                        <h2>Hostels Details</h2>

                        <ul className="list">
                            <li className="ul_li"><a className="ulist" style={{ color: "white", textDecoration: 'none' }} href="https://www.dauniv.ac.in/public/frontassets/hostels/Hostel-Details21.pdf">Chief Warden,Phone No, Email Id, Fees Structure</a> </li>
                            <li className="ul_li"><a className="ulist" style={{ color: "white", textDecoration: 'none' }} href="https://www.dauniv.ac.in/public/frontassets/hostels/Admission-Form1.pdf">Hostel Accomodation Form</a> </li>
                            <li className="ul_li"><a className="ulist" style={{ color: "white", textDecoration: 'none' }} href="https://www.dauniv.ac.in/public/frontassets/hostels/ApplicationForMess21.pdf"> Applications Invited For Mess</a></li>
                            <li className="ul_li"><a className="ulist" style={{ color: "white", textDecoration: 'none' }} href="https://www.dauniv.ac.in/public/frontassets/hostels/fees%2019-20.pdf">Fee Structure Of D.A.V.V. Hostels for the Session 2019-20</a> </li>
                            <li className="ul_li"><a className="ulist" style={{ color: "white", textDecoration: 'none' }} href="https://www.dauniv.ac.in/public/frontassets/hostels/Hostel%20Entry.pdf">Notice For New Students</a> </li>
                            <li className="ul_li"><a className="ulist" style={{ color: "white", textDecoration: 'none' }} href="https://www.dauniv.ac.in/public/frontassets/hostels/SummerApplication.pdf"> Application Proforma to Stay in Hostel During Summer Vacation</a></li>
                        </ul>
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
                    <footer className="footer">

                        <div className="contactus">
                            <p>

                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16" style={{ color: "white", textDecoration: 'none' }}>
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                </svg>

                                <a style={{ color: "white", textDecoration: 'none' }} href="https://instagram.com/davvhostlers?utm_medium=copy_link"> &nbsp;Follow Us</a>

                                <p style={{ color: "white", textDecoration: 'none' }}>Chief Warden Office-0731-2760543
                                    <br />&nbsp;&nbsp;
                                    E-mail Id: <Link style={{ color: "yellow", textDecoration: 'none' }} to="mailto:cwo.davv@gmail.com">cwo.davv@gmail.com</Link>
                                </p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                <Button variant="outline-warning"> <Link className="btnhover" style={{ color: "white", textDecoration: 'none' }} to="/About">YES,HELP ME OUT</Link> </Button>{' '}


                            </p>

                        </div>

                    </footer>
                </div>




            </div>

        </div >
    )
}
