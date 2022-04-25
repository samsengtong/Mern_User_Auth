import React from "react";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
const Home=()=>{

return(
    <>
        <section className="home">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-5">
                        <h1 className="display-4 fw-bolder mb-4 text-center text-white">Hightly Customizable</h1>
                        <p className="lead text-white text-center mb-5 fs-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                        <div className="buttons d-flex justify-content-center">
                            <button className="btn btn-outline-light me-4 rounded-pill px-4 py-2">
                                Get Quote

                            </button>
                            <button className="btn btn-outline-light rounded-pill px-4 py-2">
                                Our Services
                            </button>

                        </div>
                    </div>
                </div>
                
            </div>
        </section>
        <About></About>
                <Services></Services>
                <Contact></Contact>
                <Footer></Footer>
    </>

)
}
export default Home