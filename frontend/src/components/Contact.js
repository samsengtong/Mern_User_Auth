import React from "react";
const Contact = ()=>{
    return(
    <>
        <section id="contact">
            <div className="container my-5 py-5">
                <div className="row mb-5">
                    <div className="col-md-12">
                        <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                        <h1 className="display-6 text-center mb-4">Have some<b>question?</b></h1>
                        <hr className="w-25 mx-auto"></hr>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src="assets/contact.jpg" className="w-75"/>

                    </div>
                    <div className="col-md-6">
                        <form >
                           <div className="form-group">
                           <label className="form-label">Your Name</label>
                           <input className="form-control"
                           type="text"
                           name="name"
                           placeholder="name"
                           />
                           </div>
                           <div className="form-group mb-3">
                           <label className="form-label">Your Email Address</label>
                           <input
                           className="form-control"
                           type="email"
                           name="email"
                           placeholder="email"
                           />
                           
                           </div>
                           <div className="form-group mb-3">
                               <label className="form-label">Your Text Here</label>
                                <textarea  placeholder="your comment here" col="20" className="form-control" rows={5}>

                                </textarea>
                           </div>
                            <div className="form-group mb-3">
                                <button className="btn btn-outline-primary">Submit<i className="fa fa-paper-plane"></i></button>
                            </div>
                        </form>
                    </div>
                    
                </div>

            </div>
        </section>
    </>
    )

}
export default Contact