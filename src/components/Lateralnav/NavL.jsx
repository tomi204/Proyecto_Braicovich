import React from "react";
import "./NavL.css";
import { SiTiktok } from "react-icons/si";

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
          <SiTiktok />
        </a>
      </li>
    </ul>
  );
}
export default NavL;
