import React from "react";
import "./NavL.css";
import { SiTiktok, SiWhatsapp } from "react-icons/si";
import { IoIosMail } from "react-icons/io";

import { FaFacebook, FaInstagram, } from "react-icons/fa";
function NavL() {
  return (
    <ul className="navl">
      <li className="li-n">
        <a href="https://www.instagram.com/ricardobraicovich.arquitecto/">
          <FaInstagram></FaInstagram>
        </a>
        <a href="https://www.facebook.com/RicardoBraicovich.Arquitectura">
          <FaFacebook></FaFacebook>
        </a>
        <a href="https://www.tiktok.com/@ricardobraicovich">
          <SiTiktok />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5492214656523">
          <SiWhatsapp />
        </a>
        {/* <a href="mailto:info@ricardobraicovich.com">
          <IoIosMail />
        </a> */}
      </li>
    </ul>
  );
}
export default NavL;
