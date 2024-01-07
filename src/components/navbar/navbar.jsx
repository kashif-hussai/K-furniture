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
import { Link, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeItem } from '../../function/conuter/conuter'


function Navbar() {
    const { items } = useSelector((state) => state.cart);

    const dispatch = useDispatch();
    console.log(items);

    const removItemHandler = (date) => {
        dispatch(removeItem(date));
    };

    const increaseIQuantityHandler = (date) => {
        dispatch(increaseQuantity(date));
    };

    const decreaseIQuantityHandler = (date) => {
        dispatch(decreaseQuantity(date));
    };


    return (
        <div>


            {/* first nav start*/}

            <header class="d-flex flex-wrap justify-content-center align-items-center py-3 float-center border-bottom">

                <div class="nav col-md-4 justify-content-start list-unstyled d-flex gap-2 ">
                    <div class="ddOutOfVision" id="msdrpdd21_msddHolder">
                        <select name="countries" class="custome_select" id="msdrpdd21" tabindex="-1" className="me-2">
                            <option value="USD" data-title="USD">English</option>
                            <option value="EUR" data-title="EUR">France</option>
                            <option value="GBR" data-title="GBR">Amarica</option>
                        </select>
                        <select name="countries" class="custome_select" id="msdrpdd21" tabindex="-1" className="me-2">
                            <option value="USD" data-title="USD">USD</option>
                            <option value="EUR" data-title="EUR">EUR</option>
                            <option value="GBR" data-title="GBR">GBR</option>
                        </select>
                    </div>
                    <div className=""><img src={mobileicon} alt="" className='img-fluid mb-1 ' width={13} />&nbsp; 123-456-7890</div>
                </div>



                <div class="nav col-md-4 justify-content-end list-unstyled d-flex gap-3">
                    <a href="#" className="fn  hovar-fn"><img src={compareicon} alt="" className='img-fluid mb-1' width={17} /> &nbsp;Compare</a>
                    <a href="#" className="fn hovar-fn"><img src={hearticon} alt="" className='img-fluid mb-1' width={17} />  Wishlist</a>
                    <Link to="/Login" className="fn hovar-fn"><img src={manicon} alt="" className='img-fluid mb-1' width={17} />  Login</Link>
                </div>
            </header>

            {/* first nav end */}


            {/* Seacand nav start */}

            <div className='container navbaar'>
                <nav class="navbar navbar-expand-lg rounded  " aria-label="Thirteenth navbar example">

                    <Link class="navbar-brand col-lg-3 me-0" to="/"><img src={logo} alt="logo" /></Link>
                    <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="navbar-collapse d-lg-flex collapse" id="navbarsExample11" >

                        <ul class="navbar-nav col-lg-9 justify-content-lg-center">
                            <li class="dropdown">
                                <Link to="/" className='text-danger hovar-fn'>HOME <img src={dropdown} alt="" className='img-fluid' width={15} /></Link>
                                <div class="dropdown-content">
                                    <a href="#" className='text-dark hovar-fn'>Fashion 1</a>
                                    <a href="#" className='text-dark hovar-fn'>Fashion 2</a>
                                    <a href="#" className='text-dark hovar-fn'>Furnitrue 1</a>
                                    <a href="#" className='text-dark hovar-fn'>Furnitrue 2</a>
                                    <a href="#" className='text-dark hovar-fn'>Electronics 1</a>
                                    <a href="#" className='text-dark hovar-fn'>Electronics 2</a>
                                </div>
                            </li>

                            <li class="dropdown">
                                <a href="#" className='text-dark hovar-fn '>PAGES <img src={dropdown} alt="" className='img-fluid' width={15} /></a>
                                <div class="dropdown-content">
                                    <Link to="/aboutus" className='text-dark hovar-fn'>About Us</Link>
                                    <a href="#" className='text-dark hovar-fn'>Contact Us</a>
                                    <a href="#" className='text-dark hovar-fn'>Faq</a>
                                    <a href="#" className='text-dark hovar-fn'>404 Error Pages</a>
                                    <a href="#" className='text-dark hovar-fn'>Login</a>
                                    <a href="#" className='text-dark hovar-fn'>Register</a>
                                    <a href="#" className='text-dark hovar-fn'>Teams and Conditions</a>
                                </div>
                            </li>

                            <li class="dropdown">
                                <a href="#" className='text-dark hovar-fn'>PRODUCTS <img src={dropdown} alt="" className='img-fluid' width={15} /></a>

                            </li>



                            <li class="dropdown">
                                <a href="#" className='text-dark hovar-fn'>BLOGS <img src={dropdown} alt="" className='img-fluid' width={15} /></a>

                            </li>

                            <li class="dropdown">
                                <Link to="/shop" className='text-dark hovar-fn'>SHOP <img src={dropdown} alt="" className='img-fluid' width={15} /></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contactus" class="nav-link active hovar-fn" aria-current="page" href="#">CONTACT US</Link>
                            </li>




                        </ul>
                        <div class="d-lg-flex col-lg-3 justify-content-end float-end">
                            <a href="#"><img src={saerch} alt="" width={16} /></a>

                            <div class="dropdown">
                                <a href="#"><img src={shop} alt="" width={20} /><span class="position-absolute   translate-middle badge rounded-pill bg-danger ">{items.length} <span class="visually-hidden">unread messages</span></span></a>

                                <div class="dropdown-content dropdown-content-left">
                                    {items?.map((product) => {
                                        return (
                                            <>
                                                <div className="text-black">




                                                    <div className="d-flex text-black border-bottom">
                                                     
                                                        <img
                                                            src={product?.firstcardimage}
                                                            style={{ height: 100 }}
                                                            className="img-fluid"
                                                            alt="pic"
                                                        />
                                                        <h6 className="m-2 ">{product?.prodactname} <br /><br /> {product?.newprice}</h6>
                                                        
                                                            <button type="button" className="btn-close  mt-1 justify-content-end" aria-label="Close" onClick={() => removItemHandler(product)}></button>
                                                  
                                                    </div>


                                                </div>
                                            </>
                                        );
                                    })}

                                </div>

                            </div>

                        </div>
                    </div>

                </nav>
            </div>

            {/* Seacand nav end */}

            <Outlet />
        </div>
    )
}

export default Navbar