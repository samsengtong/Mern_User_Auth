import React from "react";
const About=()=>{
    return(
        <div>
            <section className="mt-5">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                            <div className="col-md-6">
                                <img src="/assets/about1.jpg" alt="About" className="w-75 mt-5"/>

                            </div>
                            <div className="col-md-6">
                                <h3 className="fs-5">About us</h3>
                                <h1 className="display-6">who <b>we</b> Are</h1>
                                <hr></hr>
                                <p className="lead">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <button className="btn btn-primary rounded-pill px-4 py-2">
                                    Get Start

                                </button>
                                <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-3">
                                    Contact Us

                                </button>
                            </div>  

                    </div>
                </div>
                
            </section>
        </div>
    )
}
export default About