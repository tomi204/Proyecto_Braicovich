import React from "react";
import "./NavL.css";
import { FaFacebook, FaInstagram, FaTiktok, } from "react-icons/fa";
function NavL() {
  return (
    <ul className="navl">
      <li className="li-n">
        <a href="">
          <FaInstagram></FaInstagram>
        </a>
        <a href="">
          <FaFacebook></FaFacebook>
        </a>
        <a href="">
          <FaTiktok />
        </a>
      </li>
    </ul>
  );
}
export default NavL;
