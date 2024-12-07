import FeatureTwo from "./FeatureTwo";

function StorageBanner() {
  return (
    <div
      className="relative w-full h-auto flex flex-col items-center text-center py-20 bg-black text-white overflow-hidden"
      style={{
        position: "relative",
        backgroundColor: "#000",
        color: "#fff",
        textAlign: "center",
        padding: "5rem 0",
        overflow: "hidden",
      }}
    >
      {/* Oval with Radial Gradient */}
      <div
        style={{
          position: "absolute",
          width: "1000px",
          height: "1000px",
          background:
            "radial-gradient(circle, rgba(93, 56, 185, 0.7), transparent 60%)",
          borderRadius: "50%",
          animation: "moveOval1 10s ease-in-out infinite",
          zIndex: 0,
        }}
      ></div>

      {/* Content Section */}
      <h1 className="text-5xl md:text-6xl font-bold mb-6 z-10 leading-tight">
        IPFS-The Gateway To <br />
        Decentralisation
      </h1>
      <p className="text-lg md:text-xl max-w-4xl mb-6 z-10 leading-relaxed">
        We at Miyagi offer storage powered by IPFS technology which stores your
        documents in a decentralised fashion. This provides an additional layer
        of security as compared to centralised data storage solutions thus
        maintaining the integrity of your assets.
      </p>
      <p className="text-lg md:text-xl max-w-4xl mb-6 z-10 leading-relaxed">
        Why should you opt for decentralised storage over centralised storage?
      </p>
      <p className="text-lg md:text-xl max-w-4xl mb-6 z-10 leading-relaxed">
        Centralised storages store all your data in one place. This means that
        it has a single point of failure meaning an error anywhere in the system
        would cause the entirety of it to collapse, thus posing a danger to the
        security of your assets.
      </p>
      <p className="text-lg md:text-xl max-w-4xl mb-6 z-10 leading-relaxed">
        Decentralised storage stores your data using InterPlanetaryFileSystem
        technology where your data is broken down into 256 bits and scattered
        all across the world. You may be wondering how is that helpful. In order
        to access your data a hacker would need to have access to all 256 keys
        which is impossible. Only you have access to the keys of your data, thus
        safeguarding you.
      </p>
      <div className="w-full flex justify-center mt-8">
        <button className="relative flex items-center px-6 py-3 text-base font-semibold text-white bg-transparent border-2 border-white rounded-full group hover:bg-white hover:text-black transition-all duration-300 focus:outline-none">
          <span className="relative flex items-center">VIEW PRICING</span>
          <div className="ml-4 w-8 h-8 flex items-center justify-center bg-white text-black rounded-full group-hover:bg-black group-hover:text-white transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>
      </div>

      {/* FeatureTwo Section */}
      <FeatureTwo />

      {/* Keyframe Animations */}
      <style jsx>{`
        @keyframes moveOval1 {
          0% {
            transform: translate(-50%, -50%);
          }
          50% {
            transform: translate(50vw, 50vh) scale(0.8);
          }
          100% {
            transform: translate(-50%, -50%);
          }
        }
      `}</style>
    </div>
  );
}

export default StorageBanner;
