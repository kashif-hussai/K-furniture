import React from 'react'
import { useState } from "react";
import footerlogo from './images/footerlogo.png'
import { Link, Outlet } from 'react-router-dom';
import visa from './images/visa.png'
import discover from './images/discover.png'
import master from './images/master.png'
import paypal from './images/paypal.png'
import amarican from './images/amarican.png'

export const Signup = () => {


    const [firstname, setFirstname] = useState("");
    const [firstnamemsg, setFirstnamemsg] = useState("Enter your  Name");
    const [ShowfirstnameError, setFirstnameError] = useState(false);


    const [surename, setSurename] = useState("");
    const [surenamemsg, setSurenamemsg] = useState("Enter your Email");
    const [ShowsurenameError, setsurenameError] = useState(false);


    const [password, setpassword] = useState("");
    const [passwordmsg, setpasswordmsg] = useState("Enter your password");
    const [ShowpasswordError, setpasswordError] = useState(false);


    const [canformpassword, setcanformpassword] = useState("");
    const [canformpasswordmsg, setcanformpasswordmsg] = useState("Enter your password");
    const [ShowcanformpasswordError, setcanformpasswordError] = useState(false);




    const userFirstnameHandler = (e) => {
        setFirstname(e.target.value);
        if (firstname !== "") {
            // setFirstnameError(false)
            setFirstnamemsg("Look's Good")
        }

    }

    const userSurenameHandler = (e) => {
        setSurename(e.target.value);
        if (surename !== "") {
            // setsurenameError(false)
            setSurenamemsg("Look's Good")
        }
    }



    const userpasswordHandler = (e) => {
        setpassword(e.target.value);
        if (password !== "") {
            // setsurenameError(false)
            setpasswordmsg("Look's Good")
        }
    }

    const usercanformpasswordHandler = (e) => {
        setcanformpassword(e.target.value);
        if (canformpassword !== "") {
            // setsurenameError(false)
            setcanformpasswordmsg("Look's Good")
        }
    }




    const SubmitHandler = (e) => {
        e.preventDefault()
        if (firstname === "") {
            setFirstnameError(true)
        }

        if (surename === "") {
            setsurenameError(true)
        }

        if (surename === "") {
            setpasswordError(true)
        }

        if (surename === "") {
            setcanformpasswordError(true)
        }
    }


    return (
        <div>




            {/* first nav end */}


            {/* Seacand nav start */}



            <div className='bg-light'>
                <div className='container p-5 '>
                    <h2 className=''>Register</h2>
                    <div className='float-end d-flex gap-2'>
                        <Link to="/Furnitrueone" className='text-dark hovar-fn '>Home </Link>
                        <a className='text-dark hovar-fn '>Pages </a>
                        <a className='text-dark hovar-fn '>Register </a>
                    </div>
                </div>

            </div>






            <div class="container d-flex justify-content-center align-items-center min-vh-100 mt-5">
                <div class="col-md-6 p-5 shadow bg-body-tertiary">
                    <form onSubmit={SubmitHandler}>
                        <div className='my-4 '>
                            <h2>Create An Account</h2>
                        </div>

                        <div className='mb-3'>
                            <input value={firstname} onChange={userFirstnameHandler} type="text" placeholder="Enter Your Name" className="form-control" />
                            {ShowfirstnameError && (
                                <p className={`text-${firstnamemsg === "Look's Good" ? "success" : "danger"} fw-bold`}>{firstnamemsg}</p>
                            )}
                        </div>

                        <div className='mb-3'>
                            <input value={surename} onChange={userSurenameHandler} type="text" placeholder="Entar Your Email" className="form-control" />
                            {ShowsurenameError && (
                                <p className={`text-${surenamemsg === "Look's Good" ? "success" : "danger"} fw-bold`}>{surenamemsg}</p>
                            )}
                        </div>

                        <div className='mb-3'>
                            <input value={password} onChange={userpasswordHandler} type="text" placeholder="Password" className="form-control" />
                            {ShowpasswordError && (
                                <p className={`text-${passwordmsg === "Look's Good" ? "success" : "danger"} fw-bold`}>{passwordmsg}</p>
                            )}
                        </div>

                        <div className='mb-3'>
                            <input value={canformpassword} onChange={usercanformpasswordHandler} type="text" placeholder="Password" className="form-control" />
                            {ShowcanformpasswordError && (
                                <p className={`text-${canformpasswordmsg === "Look's Good" ? "success" : "danger"} fw-bold`}>{canformpasswordmsg}</p>
                            )}
                        </div>



                        canformpassword

                        <div class="mb-5 form-check d-flex justify-content-between align-items-center">
                            <div>
                                <input type="checkbox" class="form-check-input" id="rememberMe" />
                                <label class="form-check-label" for="rememberMe">I agree to terms & Policy.</label>
                            </div>

                        </div>

                        <div class="text-center">
                            <button className="btn btn-danger loginBatan">Log In</button>
                        </div>
                    </form>

                    <hr />
                    <div className="container ">
                        <div className="d-flex justify-content-center align-items-center">
                            <button type="button" class="btn btn-primary me-2">Facebook</button>
                            <button type="button" class="btn btn-danger ms-2">Google</button>
                        </div>
                    </div>
                    <div className='text-center mt-3'>
                        <p>Already have an account? <Link to="/login" className='hovar-fn text-dark fw-bold'>Log in</Link></p>
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

export default Signup;
