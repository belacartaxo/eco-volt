import Button from "./sections/Button"
import logo from "../assets/img/logo.png"

const Header = () => {
  return (
    <header className="p-pExt flex justify-between font-semibold">
      <div className="logo">
        <img src={logo} alt="" className="h-10" />
      </div>
      <nav className="flex gap-8 items-center">
        <ul className="flex gap-7">
          <li><a href="">Benefits</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Sustainability</a></li>
          <li><a href="">About us</a></li>
          <li><a href="">Clients and Partners</a></li>
        </ul>
        <Button />
      </nav>
    </header>
  )
}

export default Header
