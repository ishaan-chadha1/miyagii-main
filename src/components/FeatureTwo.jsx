import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { featurecardtwo } from "..";

function FeatureCardTwo({ heading, content, index }) {
  return (
    <div
      key={index}
      className="w-[280px] md:w-[300px] h-[420px] p-6 bg-black text-white border border-blue-500 rounded-lg shadow-lg relative overflow-hidden group"
    >
      {/* Hover Background Animation */}
      <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10 flex flex-col h-full justify-between">
        {/* Heading */}
        <h3 className="text-xl font-bold text-white group-hover:text-black text-center mb-4">
          {heading}
        </h3>

        {/* Content */}
        <p className="text-sm text-white group-hover:text-black text-center leading-6">
          {content}
        </p>

        {/* Hover Effect */}
        <div className="absolute inset-0 border border-transparent group-hover:border-blue-500 group-hover:shadow-xl rounded-lg transition-all duration-500"></div>
      </div>
    </div>
  );
}

function FeatureTwo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {}, []);

  return (
    <section
      className="trigger1 w-full relative mx-auto flex flex-col items-center justify-center py-12"
      ref={ref}
    >
      {inView && (
        <div className="pb-12 w-full max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
          {featurecardtwo.map((feature, index) => (
            <FeatureCardTwo key={index} index={index} {...feature} />
          ))}
        </div>
      )}
    </section>
  );
}

export default FeatureTwo;
