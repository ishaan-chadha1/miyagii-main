import React from "react";
import StoragePlans from "./StoragePlans";
import AnimatedBackground from "../components/AnimatedBackground"; // Import AnimatedBackground

function StorageSubscription() {
  return (
    <AnimatedBackground>
      <section className="w-full relative pt-[100px] pb-[100px] min-h-[100vh] mx-auto overflow-auto">
        {/* Storage Plans Section */}
        <div className="flex flex-col items-center pt-20 ">
          <h1 className="text-white text-3xl md:text-5xl font-bold hover:text-blue-500 transition-colors">
            Storage Plans
          </h1>
          <StoragePlans />
        </div>
      </section>
    </AnimatedBackground>
  );
}

export default StorageSubscription;
