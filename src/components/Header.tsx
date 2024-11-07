const Header = () => {
  return (
    <header className="p-pExt flex justify-between font-semibold ">
      <div className="logo">
        Logo
        <img src="" alt="" />
      </div>
      <nav className="flex gap-8 items-center">
        <ul className="flex gap-7">
          <li><a href="">Benefits</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Sustainability</a></li>
          <li><a href="">About us</a></li>
          <li><a href="">Clients and Partners</a></li>
        </ul>
        <button className="custom-button">Request a Quote</button>
      </nav>
    </header>
  )
}

export default Header
