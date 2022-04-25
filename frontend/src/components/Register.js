import React from "react";
import { Link } from "react-router-dom";
const Register = ()=>{
return(
    <>
        <section>
                <div className="container shadow my-5">
                    <div className="row">
                            <div className="col-md-5 d-flex flex-column align-items-center form order-1 ms-3">
                                    <h1 className="display-4 fw-bolder">Welcome Back</h1>
                                    <p className="lead text-center">Enter your credentials to login</p>
                                    <h5 className="mb-4">OR</h5>
                                    <Link to="/login" className="btn btn-outline-light rounded-pill pb-2 w-50">login</Link>

                            </div>
                            <div className="col-md-6">
                                <h1 className="display-6 fw-bolder mb-5">Register</h1>
                                <form>
                                        <div className="form-group mb-3">
                                                <label>User Name</label>
                                                <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Put Email" 


                                                />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label>Put Email</label>
                                                <input
                                                className="form-control"
                                                type="email"
                                                placeholder="Put Email" 


                                                />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label>Password</label>
                                                <input className="form-control"
                                                type="password"
                                                placeholder="Put Password"
                                                
                                                >
                                                
                                                </input>

                                            </div>
                                            <div className="form-group mb-3">
                                                <button className="btn btn-primary">Register</button>
                                            </div>
                                </form>

                            </div>
                    </div>
                </div>

            </section>
    </>
)
}
export default Register 