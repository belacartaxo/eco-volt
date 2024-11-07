import logo from "../assets/img/logo-white.png"
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-green-950 flex flex-col items-center p-10 pb-2 text-white text-base">
        <img src={logo} alt="Logo Eco Volt" className="w-32" />
        <p className="mb-5 mt-2">Empowering Tomorrow with Clean Energy Today.</p>
        <div className="flex gap-5">
          <a href="#"><AiFillInstagram className="icon text-white text-3xl"/></a>
          <a href="#"><BsTwitterX className="icon text-white text-3xl"/></a>
          <a href="#"><FaFacebook className="icon text-white text-3xl"/></a>
          <a href="#"><FaLinkedin className="icon text-white text-3xl"/></a>
          <a href="#"><MdEmail className="icon text-white text-3xl"/></a>
        </div>
        <p className="text-xs pt-8">Copyright © 2024 EcoVolt. All rights reserved</p>
    </div>
  )
}

export default Footer
