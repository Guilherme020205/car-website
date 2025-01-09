import Home from "./components/home/home";

export default function Main() {

  return (
    <div className="flex flex-col justify-center items-center mx-16">
      <h1>Olá mundo</h1>
      <div className="bg-white">
        <Home></Home>
      </div>
    </div>
  );
}
