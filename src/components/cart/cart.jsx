import React from 'react'


import visa from './images/visa.png'
import discover from './images/discover.png'
import master from './images/master.png'
import paypal from './images/paypal.png'
import amarican from './images/amarican.png'

import prodactone from './images/productone.jpg'
import prodacttwo from './images/producttwo.jpg'
import prodactthree from './images/productthree.jpg'

import footerlogo from './images/footerlogo.png'

function Cart() {
    return (
        <div>







            <div className='bg-light'>
                <div className='container p-5 '>
                    <h2 className=''>Login</h2>
                    <div className='float-end d-flex gap-2'>
                        <a className='text-dark hovar-fn '>Home </a>
                        <a className='text-dark hovar-fn '>Pages </a>
                        <a className='text-dark hovar-fn '>Login </a>
                    </div>
                </div>

            </div>





            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table className="table table-responsive">
                            <thead>
                                <tr>
                                    <th className="product-thumbnail">&nbsp;</th>
                                    <th className="product-name">Product</th>
                                    <th className="product-price">Price</th>
                                    <th className="product-quantity">Quantity</th>
                                    <th className="product-subtotal">Total</th>
                                    <th className="product-remove">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <a href="#">
                                            <img src={prodactone} alt="product2" className="img-fluid" width={100} />
                                        </a>
                                    </td>
                                    <td>
                                        <a href="#">Blue Dress For Woman</a>
                                    </td>
                                    <td>$45.00</td>
                                    <td>
                                        <div className="quantity"></div>
                                    </td>
                                    <td>$90.00</td>
                                    <td>
                                        <a href="#">
                                            <button type="button" className="btn-close m-2" aria-label="Close"></button>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#">
                                            <img src={prodacttwo} alt="product2" className="img-fluid" width={100} />
                                        </a>
                                    </td>
                                    <td>
                                        <a href="#">Lether Gray Tuxedo</a>
                                    </td>
                                    <td>$55.00</td>
                                    <td>
                                        <div className="quantity"></div>
                                    </td>
                                    <td>$55.00</td>
                                    <td>
                                        <a href="#">
                                            <button type="button" className="btn-close m-2" aria-label="Close"></button>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#">
                                            <img src={prodactthree} alt="product2" className="img-fluid" width={100} />
                                        </a>
                                    </td>
                                    <td>
                                        <a href="#">woman full sliv dress</a>
                                    </td>
                                    <td>$68.00</td>
                                    <td>
                                        <div className="quantity"></div>
                                    </td>
                                    <td>$204.00</td>
                                    <td>
                                        <button type="button" className="btn-close m-2" aria-label="Close"></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            




            <div class="product_color_switch">
                <span class="active" data-color="#87554B" className='bg-danger'></span>
                <span data-color="#333333" className='bg-danger'></span>
                <span data-color="#DA323F" className='bg-danger'></span>
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

export default Cart