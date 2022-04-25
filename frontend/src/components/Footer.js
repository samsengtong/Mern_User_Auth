import React from "react";
import Link from "react-router-dom"  
const Footer = () =>{
    return(
    <>
       
        <footer className="footer text-white bg-primary">
        <div className="container">
            
            <div className="row">
                <div className="col-md-3">
                    <h2>SEIHA PROJECT</h2>
                </div>
                <div className="col-md-3">
                    <h3>Section</h3>
                    

                </div>
                <div className="col-md-3">
                <h3>Section</h3>
                <span>Home</span>
                <span>Contact</span>
                </div>
                <div className="col-md-3">
                    <h4>Search</h4>
                </div>
            </div>

        </div>    

        </footer>
    
    </>
    )

    
}
export default Footer