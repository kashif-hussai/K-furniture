import React from 'react'
import mobileicon from './images/mobileicon.png'
import compareicon from './images/compareicon.PNG'
import hearticon from './images/hearticon.PNG'
import manicon from './images/manicon.png'

import logo from './images/logo.png'
import shop from './images/shop.png'
import saerch from './images/saerch.png'


import thambone from './images/cart_thamb1.jpg'
import thambtwo from './images/cart_thamb2.jpg'


import dropdown from './images/dropdown.png'


import { Link, Outlet } from 'react-router-dom';


import visa from './images/visa.png'
import discover from './images/discover.png'
import master from './images/master.png'
import paypal from './images/paypal.png'
import amarican from './images/amarican.png'


import addrass from './images/addrass.PNG'
import email from './images/Email.PNG'
import phone from './images/phone.PNG'






import footerlogo from './images/footerlogo.png'


const Contactus = () => {



    return (
        <div>



            {/* first nav end */}


            {/* Seacand nav start */}



            <div className='bg-light'>
                <div className='container p-5 '>
                    <h2 className=''>Shop List</h2>
                    <div className='float-end d-flex gap-2'>
                        <Link to="/Furnitrueone" className='text-dark hovar-fn '>Home </Link>
                        <a className='text-dark hovar-fn '>Pages </a>
                        <Link to="/login" className='text-dark hovar-fn '>Login </Link>
                    </div>
                </div>

            </div>



            <div className='container '>



                <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    <div class="col">
                        <div class="card card-cover   rounded-4 shadow-lg align-items-center p-3 py-4">
                            <img src={addrass} alt="addrass" className='img-fluid' width={100} />
                            <div class="d-flex flex-column h-100 text-center text-shadow-1">
                                <h5 className='fw-bold'>Address</h5>
                                <p>123 Street, Old Trafford, London, UK</p>

                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card card-cover   rounded-4 shadow-lg align-items-center p-3 py-4">
                            <img src={email} alt="addrass" className='img-fluid' width={105} />
                            <div class="d-flex flex-column h-100 text-center text-shadow-1">
                                <h5 className='fw-bold'>Email Address</h5>
                                <p className='hovar-fn'>info@yourmail.com</p>

                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card card-cover   rounded-4 shadow-lg align-items-center p-3 py-4">
                            <img src={phone} alt="addrass" className='img-fluid' width={90} />
                            <div class="d-flex flex-column h-100 text-center text-shadow-1">
                                <h5 className='fw-bold'>Phone</h5>
                                <p>+ 457 789 789 65</p>

                            </div>
                        </div>
                    </div>
                </div>


            </div>


            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="">
                            <h2 className="fw-bold">Get In Touch</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                                Phasellus blandit massa enim. Nullam id varius nunc id varius <br /> nunc.</p>
                        </div>
                        <div className='feild-form'>
                            <form method='POST' action='https://formspree.io/f/meqbvzzk' name='enq'>
                                <div className="row">
                                    <div className='form-group col-md-6 mb-3'>
                                        <input type="text" required placeholder='Enter Name *' name='user-name' className='form-control' />
                                    </div>
                                    <div className='form-group col-md-6 mb-3'>
                                        <input type="number" required placeholder='Enter Phone No. *'
                                            className='form-control' />
                                    </div>

                                    <div className='form-group col-md-12 mb-3'>
                                        <input type="email" required placeholder='Enter Email *'
                                            className='form-control' />
                                    </div>

                                    <div className='form-group col-md-12 mb-3'>
                                        <textarea name="message" id="description" rows={4} required placeholder='Message *'
                                            className='form-control'></textarea>
                                    </div>

                                </div>
                                <button type="submit" className='btn btn-danger rounded-1 p-2'>Send Message</button>
                            </form>
                        </div>

                    </div>
                    <div className='col-md-6'>
                        
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7068.657422380723!2d68.71154303992822!3d27.64529995890704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935d209f2138ecf%3A0x89538219361562f3!2sPiryaloi%2C%20Khairpur%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1697190863914!5m2!1sen!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>




















            <div className='bg-danger'>
                <div class="container mt-5 p-5">
                    <div className='row '>
                        <div className='col-md-7'>
                            <h2 className='text-light '>Subscribe Our Newsletter</h2>
                        </div>
                        <div className='col-md-5'>
                            <div class="input-group input-group-sm mt-2">
                                <input type="text" class="form-control rounded-0" placeholder="Enter Email Address" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button class="btn btn-outline-dark bg-dark text-light rounded-0" type="button" id="button-addon2">Button</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>




            <div className='bg-dark'>


                <div class="container">
                    <footer class="py-5">
                        <div class="row text-light">
                            <div class="col-6 col-md-3 mb-3">
                                <img src={footerlogo} alt="" className='img-fluid' width={150} />
                                <ul class="nav flex-column text-light mt-4" >
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">
                                        If you are going to use of Lorem Ipsum need to be sure there isn't hidden of text
                                    </a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light"> logos</a></li>


                                </ul>
                            </div>

                            <div class="col-6 col-md-2 mb-3 text-light">
                                <h5>Useful Links</h5>
                                <ul class="nav flex-column text-light mt-4">
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light hovar-fn">About Us</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light hovar-fn">FAQ</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light hovar-fn">Location</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light hovar-fn">Affiliates</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light hovar-fn">Contact</a></li>
                                </ul>
                            </div>

                            <div class="col-6 col-md-2 mb-3">
                                <h5>Category</h5>
                                <ul class="nav flex-column mt-4">
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light hovar-fn">Man</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light hovar-fn">Woman</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light hovar-fn">Kids</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light hovar-fn">Best Saller</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light hovar-fn">New Arrivals</a></li>
                                </ul>
                            </div>
                            <div class="col-6 col-md-2 mb-3">
                                <h5>My Account</h5>
                                <ul class="nav flex-column mt-4">
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light hovar-fn">My Account</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light hovar-fn">Discount</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light hovar-fn">Returns</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light hovar-fn">Orders History</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light hovar-fn">Order Tracking</a></li>
                                </ul>
                            </div>




                            <div class="col-6 col-md-2 mb-3">
                                <form>
                                    <h5>Contact Info</h5>
                                    <ul class="nav flex-column text-light mt-4" >
                                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light"> 123 Street, Old Trafford, NewYork, USA</a></li>
                                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light hovar-fn"> info@sitename.com</a></li>
                                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light"> + 457 789 789 65</a></li>
                                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">

                                        </a></li>

                                    </ul>
                                </form>
                            </div>


                        </div>

                        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top ">
                            <p className='text-light'>© 2023 Company, Inc. All rights reserved.</p>
                            <ul class="list-unstyled d-flex">
                                <li class="ms-3"><a class="link-body-emphasis" href="#"><img src={visa} alt="visa" /></a></li>
                                <li class="ms-3"><a class="link-body-emphasis" href="#"><img src={discover} alt="discover" /></a></li>
                                <li class="ms-3"><a class="link-body-emphasis" href="#"><img src={master} alt="master" /></a></li>
                                <li class="ms-3"><a class="link-body-emphasis" href="#"><img src={paypal} alt="master" /></a></li>
                                <li class="ms-3"><a class="link-body-emphasis" href="#"><img src={amarican} alt="master" /></a></li>

                            </ul>
                        </div>
                    </footer>
                </div>




            </div>







        </div>
    )
}

export default Contactus;