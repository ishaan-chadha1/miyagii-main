import React from "react";
import StoragePlans from "./StoragePlans";
import AnimatedBackground from "../components/AnimatedBackground"; // Import AnimatedBackground

function StorageSubscription() {
  return (
    <AnimatedBackground>
      <section className="w-full relative pt-[100px] pb-[100px] min-h-[100vh] mx-auto overflow-auto">
        {/* Storage Plans Section */}
        <div className="flex flex-col items-center pt-20 ">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase leading-tight">
           <span>BLOCKCHAIN Based </span> <span> </span> 
          <span className="text-blue-500"> Storage Plans</span>
        </h2>
          <StoragePlans />
        </div>
      </section>
    </AnimatedBackground>
  );
}

export default StorageSubscription;
