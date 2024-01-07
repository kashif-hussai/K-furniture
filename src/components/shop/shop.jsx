import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import visa from './images/visa.png'
import discover from './images/discover.png'
import master from './images/master.png'
import paypal from './images/paypal.png'
import amarican from './images/amarican.png'
import stars from './images/stars.png'
import change from './images/changeicon.PNG'



import zoomicon from './images/zoomicon.PNG'
import footerlogo from './images/footerlogo.png'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, increaseQuantity } from '../../function/conuter/conuter'


const Shop = (props) => {

    const { items } = useSelector(state => state.cart)



    const dispatch = useDispatch();
    console.log(items);


  

    const increaseIQuantityHandler = (date) => {
        dispatch(increaseQuantity(date));
    };

    const decreaseIQuantityHandler = (date) => {
        dispatch(decreaseQuantity(date));
    };


    // const data = [

    //     // First Prodact
    //     {
    //         prodectimage: prodectone,
    //         prodectname: "Blue Dress For Woman",
    //         newprice: "$45.00",
    //         oldprice: "$55.25",
    //         nambar: "(21)",
    //         aboutprodect: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc..",

    //     },


    // ]


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
                        <Link to="/login" className='text-dark hovar-fn '>Contact </Link>
                    </div>
                </div>

            </div>



            <div className='my-5 container'>


                <div class="product_header d-flex justify-content-between align-items-center ">
                    <div class="product_header_left">
                        <div class="custom_select">
                            <select class="form-select form-select-sm border">
                                <option value="order">Default sorting</option>
                                <option value="popularity">Sort by popularity</option>
                                <option value="date">Sort by newness</option>
                                <option value="price">Sort by price: low to high</option>
                                <option value="price-desc">Sort by price: high to low</option>
                            </select>
                        </div>
                    </div>
                    <div class="product_header_right d-flex gap-2">

                        <div className=' d-flex justify-content-center gap-1'>
                            <a href=""><img src={change} alt="" className='img-fluid' width={80} /></a>


                        </div>

                        <div class="custom_select">
                            <select class="form-select form-select-sm first_null not_chosen border">
                                <option value="">Showing</option>
                                <option value="9">9</option>
                                <option value="12">12</option>
                                <option value="18">18</option>
                            </select>
                        </div>
                    </div>
                </div>



            </div>




            <div className='my-5'>



                <div className='my-5'>

                    {items?.map((product) => {
                        return (
                            <>

                                <div className='container mb-3 d-flex justify-content-center '>

                                    <div class="row g-0 border rounded-0 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative shadow bg-body-tertiary">
                                        <div class="col-auto d-lg-block">
                                            <img src={product?.firstcardimage} alt="prodectone" width={260} />

                                        </div>
                                        <div class="col p-4 d-flex flex-column position-static">
                                            <a class="d-inline-block mb-2 text-dark fw-bold">{product?.prodactname}</a>
                                            <div className="">
                                                <span className="price">{product?.newprice}</span>&nbsp;
                                                <span className='discound-price'>{product?.lastprice}</span>

                                                <span className="float-end">
                                                    <img src={stars} alt="" className='img-fluad' width={80} /> &nbsp;{product?.numbar}
                                                </span>

                                            </div>

                                            <p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc..</p>

                                            <div className="d-flex">
                                                <button
                                                    className=" px-3 m-2 py-2  btn btn-outline-danger  rounded-2 fw-bold"
                                                    onClick={() => decreaseIQuantityHandler(product)}
                                                >
                                                    -
                                                </button>
                                                <span className="mt-3 ">{product?.Quantity}</span>
                                                <button
                                                    className=" px-3 m-2 py-2  btn btn-outline-danger  rounded-2 fw-bold"
                                                    onClick={() => increaseIQuantityHandler(product)}
                                                >
                                                    +
                                                </button>
                                            </div>

                                          

                                            <div className='mt-3'>
                                                <button type="button" class="btn btn-outline-light bg-danger px-5 py-2 me-3">Add To Card</button>


                                            </div>


                                        </div>
                                    </div>

                                </div>

                            </>

                        )
                    })}




                </div>





                {/* {data.map((item) => {
                    return (

                        <div className='container mb-3 d-flex justify-content-center '>

                            <div class="row g-0 border rounded-0 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative shadow bg-body-tertiary">
                                <div class="col-auto d-lg-block">
                                    <img src={item.prodectimage} alt="prodectone" width={260} />

                                </div>
                                <div class="col p-4 d-flex flex-column position-static">
                                    <a class="d-inline-block mb-2 text-dark fw-bold">{item.prodectname}</a>
                                    <div className="">
                                        <span className="price">{item.newprice}</span>&nbsp;
                                        <span className='discound-price'>{item.oldprice}</span>

                                        <span className="float-end">
                                            <img src={stars} alt="" className='img-fluad' width={80} /> &nbsp;{item.nambar}
                                        </span>

                                    </div>

                                    <p class="mb-3">
                                        {item.aboutprodect}</p>
                                    <span>
                                        <input type="radio" className="form-check-input bg-black p-2 " name="color" />
                                        <input type="radio" className="form-check-input bg-danger p-2 ms-2" name="color" />
                                        <input type="radio" className="form-check-input bg-secondary p-2 ms-2" name="color" />
                                    </span>
                                    <div className='mt-3'>
                                        <button type="button" class="btn btn-outline-light bg-danger px-5 py-2 me-3">Add To Card</button>

                                        <img src={compareicon} alt="" className='img-fluad me-3' width={20} />
                                        <img src={zoomicon} alt="" className='img-fluad me-3' width={20} />
                                        <img src={hearticon} alt="" className='img-fluad ' width={19} />

                                    </div>


                                </div>
                            </div>

                        </div>



                    )
                })} */}



 

 


            </div>


            <div className='container d-flex justify-content-center gap-1'>
                <button type="button" class="btn text-bg-danger rounded-0">1</button>
                <button type="button" class="btn btn-outline-danger rounded-0">2</button>
                <button type="button" class="btn btn-outline-danger rounded-0">3</button>
                <button type="button" class="btn btn-outline-danger rounded-0">→</button>

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

export default Shop;