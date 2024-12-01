import Contact from "../components/Contact";
import Header from "../components/Header";
import StorageSubscription from "../components/StorageSubscription";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function StorageTwo() {
  useEffect(()=>{
    window.scrollTo(0, 0);
},[]);
  return (
    <>
      <Header />
      <div className="mt-[10rem] md:mt-[0rem]">
        <StorageSubscription />

      </div>
    </>
  );
}

export default StorageTwo;
