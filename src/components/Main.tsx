import Cover from "./Cover"
import AboutUs from "./sections/AboutUs"
import Benefits from "./sections/Benefits"
import Clients from "./sections/Clients"
import Services from "./sections/Services"
import Sustainability from "./sections/Sustainability"

const Main = () => {
  return (
    <div>
      <Cover />
      <Benefits />
      <Services />
      <Sustainability />
      <AboutUs />
      <Clients />
    </div>
  )
}

export default Main
