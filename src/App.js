import { useEffect } from "react";
import Banner from "./component/Banner";
import Foodlist from "./component/Foodlist";
import Footer from "./component/Footer";

import Navbar from "./component/Navbar";

function App() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY + "px";
    });
  }, []);
  return (
    <div className="App ">
      <div className="cursor"></div>

      <Navbar />
      <Banner />
      <Foodlist/>
      <Footer/>
     
    </div>
  );
}

export default App;
