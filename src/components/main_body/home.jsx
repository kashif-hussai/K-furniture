




import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';


import React from 'react'

import banerone from './images/banner2.png'
import banertwo from './images/baner1.png'

import one from './images/one.png'
import two from './images/two.png'
import three from './images/three.png'




import oneicon from './images/oneicon.png'
import twoicon from './images/twocon.png'
import threeicon from './images/threeicon.png'
import fouricon from './images/fouricon.png'


import stars from './images/stars.png'
import sone from './images/Sone.jpg'
import stwo from './images/Stwo.jpg'
import sthree from './images/sthree.jpg'
import sfour from './images/sfour.jpg'
import sfive from './images/sfive.jpg'
import ssix from './images/ssix.jpg'
import ssiven from './images/sfaven.jpg'
import seight from './images/seight.jpg'




import fb from './images/fb.png'
import twr from './images/twr.png'
import visa from './images/visa.png'
import discover from './images/discover.png'
import master from './images/master.png'
import paypal from './images/paypal.png'
import amarican from './images/amarican.png'

import right from './images/arrowright.svg'
import left from './images/arrowleft.svg'

import fone from './images/fone.jpg'
import ftwo from './images/ftwo.jpg'
import fthree from './images/fthree.jpg'
import ffour from './images/ffour.jpg'
import ffive from './images/ffive.jpg'
import fsix from './images/fsix.jpg'


import collogone from './images/cllogone.png'
import cllogotwo from './images/cllogotwo.png'
import cllogothree from './images/cllogothree.png'
import cllogofour from './images/cllogofour.png'
import cllogofive from './images/cllogofive.png'
import cllogosix from './images/cllogosix.png'
import youtube from './images/youtube.png'
import insta from './images/insta.png'
import google from './images/google.png'

import instalogo from './images/instawhitelogo.png'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, } from '../../function/conuter/conuter';
import { Outlet, Link } from 'react-router-dom';



const Body = () => {

    const dispatch = useDispatch();

    const addcartHandler = (item) => {

        dispatch(addItem(item))
    }


    const data = [

        // First Prodact
        {
            id: 1,
            firstcardimage: sone,
            prodactname: "Enim Expedita Sed",
            newprice: "$45.00",
            lastprice: "$55.25",
            numbar: "(21)",
        },


        // Seacand Prodact
        {
            id: 2,
            firstcardimage: stwo,
            prodactname: "Adipisci Officia Libero",
            newprice: "$55.00",
            lastprice: "$95.00",
            numbar: "(15)",
        },



        // Thard Prodact
        {
            id: 3,
            firstcardimage: sthree,
            prodactname: "Internet Tend To Repect",
            newprice: "$65.00",
            lastprice: "$99.00",
            numbar: "(25)",
        },


        // fourth Prodact
        {
            id: 4,
            firstcardimage: sfour,
            prodactname: "Many Destop Publishing",
            newprice: "$69.00",
            lastprice: "$89.00",
            numbar: "(22)",
        },


        // Fifth Prodact
        {
            id: 5,
            firstcardimage: sfive,
            prodactname: "Enim Expedita Sed",
            newprice: "$45.00",
            lastprice: "$55.25",
            numbar: "(21)",
        },

        // sixth Prodact
        {
            id: 6,
            firstcardimage: ssix,
            prodactname: "Enim Expedita Sed",
            newprice: "$55.00",
            lastprice: "$95.00",
            numbar: "(15)",
        },


        // sevanth Prodact
        {
            id: 7,
            firstcardimage: ssiven,
            prodactname: "Enim Expedita Sed",
            newprice: "$65.00",
            lastprice: "$99.00",
            numbar: "(25)",
        },


        // eighth Prodact
        {
            id: 8,
            firstcardimage: seight,
            prodactname: "Enim Expedita Sed",
            newprice: "$69.00",
            lastprice: "$89.00",
            numbar: "(22)",
        },


    ]





    return (
        <div>

            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                className="mySwiper"
            >
                <SwiperSlide>

                    <div className='c-bg-color-one py-5'>
                        <div className='container '>
                            <div className='row  align-items-center'>
                                <div className='col-6 mt-5'>
                                    <h6 className='text-dark c-text-one-non'>NEW TRENDING</h6>
                                    <h1 className='text-dark c-text-one-h1'>Sofa Collection</h1>
                                    <p className='c-text-one-p'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                                        blandit massa enim. Nullam id varius nunc id varius nunc.
                                    </p>
                                    <button type="button" className="btn btn-outline-secondary rounded-5">SHOP NOW</button>
                                </div>

                                <div className='col-6'>
                                    <img src={two} alt="" className='img-fluid' width={785} />
                                </div>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className='c-bg-color py-5'>
                        <div className='container '>
                            <div className='row align-items-center'>
                                <div className='col-6 mt-5'>
                                    <h6 className='text-dark c-text-two'>Get up to 50% off Today Only!</h6>
                                    <h1 className='text-dark c-text-twow'>Wooden Chair Collection</h1>
                                    <button type="button" class="btn btn-outline-danger rounded-5">SHOP NOW</button>


                                </div>

                                <div className='col-6'>
                                    <img src={one} alt="" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>


                </SwiperSlide>
                <SwiperSlide>

                    <div className='c-bg-color py-5'>
                        <div className='container '>
                            <div className='row align-items-center'>
                                <div className='col-6 mt-5'>
                                    <h6 className='text-dark'>Taking your Viewing Experience to Next Level</h6>
                                    <h1 className='text-dark'>Living Room Collection</h1>
                                    <button type="button" class="btn btn-outline-danger rounded-5">SHOP NOW</button>
                                </div>

                                <div className='col-6'>
                                    <img src={three} alt="" className='img-fluid' width={785} />
                                </div>
                            </div>
                        </div>
                    </div>


                </SwiperSlide>
            </Swiper>


            <div class="container text-center mt-5  ">
                <div class="row align-items-center border">
                    <div class="col-md-3 p-3 border d-flex">

                        <img src={oneicon} alt="" className='img-fluid' width={77} />
                        <div>
                            <span className='fw-bold'> Free Delivery</span>
                            <p> Worldwide</p>
                        </div>

                    </div>
                    <div class="col-md-3  p-3 border d-flex" >

                        <img src={twoicon} alt="" className='img-fluid' width={60} />
                        <div >
                            <span className='fw-bold'>  Money Returns</span>
                            <p>30 Days money return</p>
                        </div>

                    </div>
                    <div class="col-md-3 p-3 border d-flex">
                        <img src={threeicon} alt="" className='img-fluid' width={60} />
                        <div>
                            <span className='fw-bold'> 27/4 Online Support</span>
                            <p>Customer Support</p>
                        </div>
                    </div>
                    <div class="col-md-3 p-3 border d-flex">

                        <img src={fouricon} alt="" className='img-fluid' width={60} />
                        <div>
                            <span className='fw-bold'>Payment Security</span>
                            <p>Safe Payment</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="text-center">
                            <h2>Exclusive Products</h2>
                        </div>
                        <div className="small_divider clearfix"></div>
                    </div>
                </div>

                <div className="row mt-4">


                    {data.map((item) => {
                        return (

                            <div className="col-lg-3">
                                <div className='border rounded-3 p-0 mb-4 ' onClick={() => { addcartHandler(item) }}>
                                    <Link to="/shop">
                                        <div className='text-center'>
                                            <img className="img-fluid " src={item.firstcardimage} alt="furniture_img1" />
                                        </div>
                                    </Link>
                                    <div className="mt-3">
                                        <h5 className="text-center"><a className='text-dark hovar-fn'>{item.prodactname}</a></h5>
                                        <div className="text-center">
                                            <span className="price">{item.newprice}</span>&nbsp;
                                            <span className='discound-price'>{item.lastprice}</span>
                                        </div>
                                        <div className="rating_wrap">
                                            <div className="rating">
                                                <div className="product_rate" ></div>
                                            </div>
                                            <div className='text-center mb-3'>
                                                <span className="text-center"><img src={stars} alt="" className='img-fluad' width={90} /> &nbsp;{item.numbar}
                                                </span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>

            </div>




            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-5'>
                        <div className='first-baner-card  p-3 mt-2'>
                            <h4>Super Sale</h4>
                            <h1>New Collection </h1>
                            <a href="#" className='shop-now-btn hovar-fn'>Shop Now</a><br />
                            <img src={banerone} alt="" className='img-fluid baner-img float-end' />
                        </div>

                    </div>


                    <div className='col-md-7 '>
                        <div className='seacnd-baner-card  p-3 mt-2'>
                            <div className='d-flex'>
                                <div className='mt-5'>
                                    <h1>New Season</h1>
                                    <h3>Sale 40% Off</h3>
                                    <a href="#" className='shop-now-btn hovar-fn'>Shop Now</a>
                                </div>

                                <div className='mt-1'>
                                    <img src={banertwo} alt="" className='img-fluid baner-img-secand' />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>


            <div className='container mt-5 '>

                <div className='my-5 row text-center '>


                    <div className=' col-4 '>
                        <img src={left} alt="" className='img-fluid float-start' />
                    </div>

                    <div className=' col-4 '>
                        <h2>Trending Items</h2>
                    </div>

                    <div className=' col-4  ' >
                        <img src={right} alt="" className='img-fluid float-end' />
                    </div>
                </div>

                <Swiper
                    spaceBetween={30}
                    slidesPerView={'4'}

                >
                    {data.map((item) => {

                        return (
                            <SwiperSlide>



                                <div className='border rounded-3 p-0 mb-4'>
                                    <a href="#">
                                        <div className='text-center'>
                                            <img className="img-fluid " src={item.firstcardimage} alt="furniture_img1" />
                                        </div>
                                    </a>
                                    <div className="mt-3">
                                        <h5 className="text-center"><a href="#" className='text-dark hovar-fn'>{item.prodactname}</a></h5>
                                        <div className="text-center">
                                            <span className="price">{item.newprice}</span>&nbsp;
                                            <span className='discound-price'>{item.lastprice}</span>
                                        </div>
                                        <div className="rating_wrap">
                                            <div className="rating">
                                                <div className="product_rate" ></div>
                                            </div>
                                            <div className='text-center mb-3'>
                                                <span className="text-center"><img src={stars} alt="" className='img-fluad' width={90} /> &nbsp;{item.numbar}
                                                </span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

            </div>


            <div className='my-5'>
                <Swiper
                    slidesPerView={5}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                >

                    <SwiperSlide><img src={fone} alt="" className='img-fluid' width={300} /></SwiperSlide>
                    <SwiperSlide><img src={ftwo} alt="" className='img-fluid' width={300} /></SwiperSlide>
                    <SwiperSlide><img src={fthree} alt="" className='img-fluid' width={300} /></SwiperSlide>
                    <SwiperSlide><img src={ffour} alt="" className='img-fluid' width={300} /></SwiperSlide>
                    <SwiperSlide><img src={ffive} alt="" className='img-fluid' width={300} /></SwiperSlide>
                    <SwiperSlide><img src={fsix} alt="" className='img-fluid' width={300} /></SwiperSlide>

                </Swiper>
            </div>




            <div className='container my-5'>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={'5'}

                    modules={[Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                >
                    <SwiperSlide>
                        <img src={collogone} alt="" className='img-fluid' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={cllogotwo} alt="" className='img-fluid' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={cllogothree} alt="" className='img-fluid' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={cllogofour} alt="" className='img-fluid' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={cllogofive} alt="" className='img-fluid' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={cllogosix} alt="" className='img-fluid' />
                    </SwiperSlide>
                </Swiper>

            </div>




            <div className='bg-dark'>
                <div class="container">
                    <footer class="py-3">
                        <div class="row text-light py-5">
                            <div class="col-6 col-md-3 mb-3">
                                <h5>Contact Info</h5>
                                <ul class="nav flex-column text-light mt-4" >
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light"> 123 Street, Old Trafford, NewYork, USA</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light hovar-fn"> info@sitename.com</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light"> + 457 789 789 65</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">
                                        <img src={fb} alt="facebook" width={45} className='img-fluid ' />
                                        <img src={twr} alt="facebook" width={51} className='img-fluid' />
                                        <img src={google} alt="facebook" width={30} className='img-fluid me-2' />
                                        <img src={youtube} alt="facebook" width={30} className='img-fluid me-2' />
                                        <img src={insta} alt="facebook" width={37} className='img-fluid' />
                                    </a></li>

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
                                <h5>My Account</h5>
                                <ul class="nav flex-column mt-4">
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light hovar-fn">My Account</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light hovar-fn">Discount</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light hovar-fn">Returns</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light hovar-fn">Orders History</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light hovar-fn">Order Tracking</a></li>
                                </ul>
                            </div>

                            <div class="col-md-3 offset-md-1 mb-3">
                                <form>
                                    <h5>Subscribe Our Newsletter</h5>
                                    <div className='mt-4'></div>
                                    <p>If you want to get an email from us every time we <br />have a new special offer, then sign up here!</p>
                                    <div class="d-flex flex-column flex-sm-row w-100 gap-2">

                                        <div className=''>

                                            <input id="newsletter1" type="text" class="form-control rounded-5" required placeholder="Email address  " />

                                        </div>

                                    </div>
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



            <Outlet />
        </div>

    )

}

export default Body;