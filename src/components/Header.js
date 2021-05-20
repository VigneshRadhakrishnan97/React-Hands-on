import React from "react";
import GoogleAuth from "./GoogleAuth"
import { Link } from "react-router-dom"


const Header = () => {
  return (
    <div>
      <div className="ui pointing menu">
       
        <Link to="/" className="item" >Streamy</Link>
        
        <div className="right menu">
        
        <Link to="/" className="item " >AllStream</Link>
        <GoogleAuth className="item " />
        </div>
      </div>
    </div>
  );
};

export default Header;
