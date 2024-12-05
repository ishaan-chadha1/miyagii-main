import { styles } from "../styles";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { featurecardtwo } from "..";

function FeatureCardTwo({ Image, heading, content, index, Image1 }) {
  return (
    <div
      key={index}
      className="w-[300px] h-[400px] p-6 bg-blue-500 bg-opacity-80 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
    >
      <div className="flex flex-col items-center">
        <div className="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center mb-4">
          <img
            className="w-[60px] h-[60px]"
            src={Image}
            alt="Icon"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-center">{heading}</h3>
        <p className="text-sm text-center">{content}</p>
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
        <div className="pb-12 w-full max-w-7xl mx-auto flex flex-wrap justify-center gap-6">
          {featurecardtwo.map((feature, index) => (
            <FeatureCardTwo key={index} index={index} {...feature} />
          ))}
        </div>
      )}
    </section>
  );
}

export default FeatureTwo;
