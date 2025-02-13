import Home from "./components/home/home";
import { Footer } from "./components/footer/footer";
import Vehicles from './components/getVehicles/getVehicles';

export default function Main() {

  return (
    <div>
      <div className="bg-white ">
        <Home></Home>
        <div className="
        mx-4 my-4
        md:mx-20 md:my-20
        ">
          <Vehicles></Vehicles> 
        </div>
      </div>
    </div>
  );
}
