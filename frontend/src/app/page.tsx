import Home from "./components/home/home";
import Contacts from './components/contacts/constacts';
import { Footer } from "./components/footer/footer";
import { CardVehicle } from './components/cardVehicle/cardVehicle';

export default function Main() {

  return (
    <div>
      <div className="bg-white ">
        <Home></Home>
        <div className="mx-20 my-20">

          <CardVehicle></CardVehicle> 

        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
