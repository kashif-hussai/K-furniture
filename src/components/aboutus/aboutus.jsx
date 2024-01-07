import React from 'react'

import { Link, Outlet } from 'react-router-dom';


import visa from './images/visa.png'
import discover from './images/discover.png'
import master from './images/master.png'
import paypal from './images/paypal.png'
import amarican from './images/amarican.png'


import aboutimg from './images/about_img.jpg'
import abone from './images/abone.png'
import abtwo from './images/abtwo.png'
import abthree from './images/abthree.png'

import teamfour from './images/teamfour.jpg'
import teamtwo from './images/teamtwo.jpg'
import teamthree from './images/teamthree.jpg'
import teamone from './images/teamone.jpg'
import footerlogo from './images/footerlogo.png'


import userimg from './images/userimg.jpg'

export const Aboutus = () => {



    return (
        <div>



            {/* first nav end */}


            {/* Seacand nav start */}



            <div className='bg-light'>
                <div className='container p-5 '>
                    <h2 className=''>About Us</h2>
                    <div className='float-end d-flex gap-2'>
                        <Link to="/Furnitrueone" className='text-dark hovar-fn '>Home </Link>
                        <a className='text-dark hovar-fn '>Pages </a>
                        <a className='text-dark hovar-fn '>Aboutus </a>
                    </div>
                </div>

            </div>








            <div className='container mt-5'>

                <div className=' row'>

                    <div className='col-md-6'>

                        <img src={aboutimg} alt="aboutimg" className='img-fluid' />
                    </div>

                    <div className='col-md-6 mt-3'>

                        <h2>
                            Who We Are</h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur quibusdam enim expedita sed nesciunt incidunt accusamus adipisci officia libero laboriosam!</p>


                        <p className=''>Proin gravida nibh vel velit auctor aliquet. nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vultate cursus a sit amet mauris. Duis sed odio sit amet nibh vultate cursus a sit amet mauris.</p>

                    </div>

                </div>
            </div>





            <div className='bg-light my-5 py-5'>

                <div className='container '>



                    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                        <div class="col">
                            <div class="card card-cover   rounded-0 shadow-lg align-items-center p-3 py-4">
                                <img src={abone} alt="addrass" className='img-fluid' width={80} />
                                <div class="d-flex flex-column h-100 text-center text-shadow-1 mt-2">
                                    <h5 className='fw-bold'>Creative Design</h5>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>

                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card card-cover   rounded-0 shadow-lg align-items-center p-3 py-4">
                                <img src={abtwo} alt="addrass" className='img-fluid' width={80} />
                                <div class="d-flex flex-column h-100 text-center text-shadow-1  mt-2">
                                    <h5 className='fw-bold'>Flexible Layouts</h5>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>

                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card card-cover   rounded-0 shadow-lg align-items-center p-3 py-4">
                                <img src={abthree} alt="addrass" className='img-fluid' width={80} />
                                <div class="d-flex flex-column h-100 text-center text-shadow-1  mt-2">
                                    <h5 className='fw-bold'>Email Marketing</h5>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>



            <div className='container text-center'>
                <h1>Our Team Members</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore.</p>
            </div>



            <div className='container mt-4'>
                <div className='row  '>
                    <div className='col-md-3 text-center'>
                        <img src={teamfour} alt="" className='img-fluid' />
                        <div className='mt-1'>
                            <h4 className='fw-bold'>John Muniz</h4>
                            <p>Project Engineer</p>
                        </div>

                    </div>
                    <div className='col-md-3 text-center'>
                        <img src={teamtwo} alt="" className='img-fluid' />
                        <div className='mt-1'>
                            <h4 className='fw-bold'>Alea Brooks</h4>
                            <p>Graphics Designer</p>
                        </div>
                    </div>
                    <div className='col-md-3 text-center'>
                        <img src={teamthree} alt="" className='img-fluid' />
                        <div className='mt-1'>
                            <h4 className='fw-bold'>Anders Glick</h4>
                            <p>Software Developer</p>
                        </div>
                    </div>
                    <div className='col-md-3 text-center'>
                        <img src={teamone} alt="" className='img-fluid' />
                        <div className='mt-1'>
                            <h4 className='fw-bold fluat-start'>Richard Tice</h4>
                            <p>Web Developer</p>
                        </div>
                    </div>
                </div>

            </div>




            <div className='about-client-color p-5'>
                <div className='text-center'>
                    <h2>Our Client Say!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>



                <div className='container mb-3 d-flex justify-content-center '>

                    <div class="row  ">
                        <div class="col-4 ">
                            <img src={userimg} alt="" className='img-fluid' width={140} />
                        </div>


                        <div class="col-8 ">

                            <span>Alden Smith</span>
                            <p className='mb-3 text-danger'>Designar</p>

                        </div>
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

export default Aboutus;
