import React from "react";
import { Link } from "react-router-dom";
const Login = () =>{
    return (
        <>
            <section>
                <div className="container shadow my-5">
                    <div className="row">
                            <div className="col-md-5 d-flex flex-column align-items-center form">
                                    <h1 className="display-4 fw-bolder text-white">Welcome Back</h1>
                                    <p className="lead text-center">Enter your credentials to login</p>
                                    <h5 className="mb-4">OR</h5>
                                    <Link to="/register" className="btn btn-outline-light rounded-pill pb-2 w-50">Register</Link>

                            </div>
                            <div className="col-md-6">
                                <h1 className="display-6 fw-bolder mb-5">Login</h1>
                                <form>
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
                                    <div className="form-check mb-3">
                                            <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="example"
                                            />
                                            <label className="form-check-label">Remember Me</label>
                                    </div>
                                    <div className="form-group mb-3">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </form>

                            </div>
                    </div>
                </div>

            </section>
        </>

    )
}
export default Login