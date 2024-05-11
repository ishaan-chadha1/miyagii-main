import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Graph() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const initialFeatures = [
    { name: 'Data Privacy', paper: [true, true, false, false, false], traditional: [true, true, true, false, false], miyagi: [true, true, true, true, true] },
    { name: 'Redundancy', paper: [true, true, false, false, false], traditional: [true, true, true, false, false], miyagi: [true, true, true, true, true] },
    { name: 'Tamper-Proof', paper: [true, true, false, false, false], traditional: [true, true, true, false, false], miyagi: [true, true, true, true, true] },
    { name: 'Easy to Share', paper: [true, false, false, false, false], traditional: [true, true, false, false, false], miyagi: [true, true, true, true, true] },
    { name: 'Secure Storage', paper: [true, false, false, false, false], traditional: [true, true, true, false, false], miyagi: [true, true, true, true, true] },
  ];

  const [features, setFeatures] = useState(initialFeatures);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8" ref={ref}>
      <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
        A document verified by {"<"}<span className="text-[#5379FE]">MIYAGI</span>{">"} is the best kind of document
      </h2>
      <div className="pt-10 mt-8 flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Paper Document</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Traditional Digital Document</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{"<"}<span className="text-[#5379fe]">MIYAGI</span>{">"} Digital Document</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {features.map((feature, idx) => (
                    <tr key={idx}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{feature.name}</td>
                      {['paper', 'traditional', 'miyagi'].map((docType, index) => (
                        <td key={index} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex space-x-1">
                            {feature[docType].map((active, squareIdx) => (
                              <SquareIcon
                                key={squareIdx}
                                active={active}
                                animated={inView}
                                miyagi={docType === 'miyagi'}
                                index={squareIdx}
                              />
                            ))}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SquareIcon({ active, animated, miyagi, index }) {
  return (
    <svg
      className={`transition-all duration-1000 ease-in-out ${active ? "text-[#5379fe]" : "text-gray-300"} ${miyagi ? 'hover:scale-110 cursor-not-allowed' : ''}`}
      style={{
        opacity: animated ? 1 : 0,
        transitionDelay: `${index * 150}ms` // Increased delay between each square's animation
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  );
}

